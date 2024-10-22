// "use client"
// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// import { ChevronRight } from "lucide-react";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from "draft-js";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { useAppDispatch } from "@/core/redux/clientStore";
// import postApi from "@/modules/posts/postApi";
// import { PostFormInputs, postSchema } from "@/modules/posts/postType";

// const Editor = dynamic(
//   () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
//   { ssr: false }
// );

// export default function CreatePost() {
//   const dispatch = useAppDispatch();
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const router = useRouter();

//   const validateForm = (values: PostFormInputs) => {
//     try {
//       postSchema.parse(values);
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         return error.formErrors.fieldErrors;
//       }
//     }
//   };

//   const onSubmit = async (values: PostFormInputs) => {
//     console.log(values);

//     try {
//       const result = await dispatch(
//         postApi.endpoints.createPost.initiate(values)
//       );

//       if ("data" in result) {
//         console.log("Create Post successful!", result.data);
//         router.push("/post/postDetail");
//       } else if ("error" in result) {
//         console.error("Create Post failed:", result.error);
//       }
//     } catch (error) {
//       console.error("An error occurred during Create Post:", error);
//     }
//   };

//   return (
//     <div className="w-3/4 border-r pr-4 -mt-4 p-4 border-gray-500">
//       <div className="flex items-center mt-4">
//         <div className="py-2 bg-[#1E1F23] rounded-3xl w-44 flex justify-evenly border border-gray-500">
//           <img
//             src="/images/fluttericon.png"
//             alt="flutter"
//             className="w-10 h-10"
//           />
//           <h3 className="flex font-martian-mono text-white text-xs font-medium mt-3">
//             flutter
//           </h3>
//         </div>
//         <ChevronRight className="ml-4" />
//         <p className="text-white font-martian-mono text-base ml-4">
//           Create Post
//         </p>
//       </div>

//       <Formik
//         initialValues={{
//           title: "",
//           tags: "asas",
//           author: 1,
//           content: "asas",
//           package: 1,
//         }}
//         validate={validateForm}
//         onSubmit={onSubmit}
//       >
//         {({ values, setFieldValue }) => (
//           <Form>
//             <div className="mt-8">
//               <h3 className="font-martian-mono text-white text-sm">Title</h3>
//               <Field
//                 name="title"
//                 type="text"
//                 className="py-2 bg-[#1E1F23] rounded-lg w-full flex justify-start border border-gray-500 mt-4"
//                 placeholder="Enter post title"
//               />
//               <ErrorMessage
//                 name="title"
//                 component="p"
//                 className="text-red-500 text-xs"
//               />
//             </div>

//             <div className="mt-8">
//               <h3 className="font-martian-mono text-white text-sm">Tags</h3>
//               <Field
//                 name="tags"
//                 type="text"
//                 placeholder="Enter tags separated by commas"
//                 className="py-2 bg-[#1E1F23] rounded-lg w-full flex justify-start border border-gray-500 mt-4"
//               />
//               <ErrorMessage
//                 name="tags"
//                 component="p"
//                 className="text-red-500 text-xs"
//               />
//             </div>

//             <div className="mt-8">
//               <h3 className="font-martian-mono text-white text-sm">
//               content
//               </h3>
//               <div className="bg-[#1E1F23] rounded-lg border border-gray-500 mt-4 h-96 overflow-hidden">
//                 <Editor
//                   editorState={editorState}
//                   onEditorStateChange={setEditorState}
//                   toolbarClassName="flex sticky top-0 z-50 !bg-[#1E1F23] !text-white"
//                   wrapperClassName="wrapper-class h-full"
//                   editorClassName="editor-class h-full overflow-y-auto p-4 text-white rounded-lg"
//                   editorStyle={{ maxHeight: "100%", overflowY: "auto" }}
//                 />
//               </div>
//               <ErrorMessage
//                 name="contents"
//                 component="p"
//                 className="text-red-500 text-xs"
//               />
//             </div>

//             <div className="flex space-x-6 justify-end">
//               <div className="py-2 text-sm font-medium text-white bg-[#191A1F] rounded-lg w-36 mt-4 flex justify-around border-gray-500 border font-martian-mono">
//                 <h3 className="font-martian-mono text-xs flex justify-center">
//                   Save draft
//                 </h3>
//               </div>

//               <button
//                 type="submit"
//                 className="text-xs h-10 w-16 bg-[#F65930] rounded-lg mt-4 font-martian-mono"
//               >
//                 Post
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

"use client";
import { useAppDispatch } from "@/core/redux/clientStore";
import postApi from "@/modules/posts/postApi";
import { PostFormInputs, postSchema } from "@/modules/posts/postType";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import * as z from "zod";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function CreatePost() {
  const dispatch = useAppDispatch();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();

  // Validate the form using Zod schema
  const validateForm = (values: PostFormInputs) => {
    try {
      postSchema.parse(values);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const onSubmit = async (values: PostFormInputs) => {
    console.log(values);

    try {
      const result = await dispatch(
        postApi.endpoints.createPost.initiate(values)
      );

      if ("data" in result) {
        console.log("Create Post successful!", result.data);
        router.push("/post/postDetail");
      } else if ("error" in result) {
        console.error("Create Post failed:", result.error);
      }
    } catch (error) {
      console.error("An error occurred during Create Post:", error);
    }
  };

  return (
    <div className="w-3/4 border-r pr-4  p-4 border-gray-500">
      <div className="flex items-center mt-4">
        <div className="py-2 bg-[#1E1F23] rounded-3xl w-44 flex justify-evenly border border-gray-500">
          <img
            src="/images/fluttericon.png"
            alt="flutter"
            className="w-10 h-10"
          />
          <h3 className="flex font-martian-mono text-white text-xs font-medium mt-3">
            flutter
          </h3>
        </div>
        <ChevronRight className="ml-4" />
        <p className="text-white font-martian-mono text-base ml-4">
          Create Post
        </p>
      </div>

      <Formik
        initialValues={{
          title: "",
          tags: "",
          author: 1,
          content: "",
          package: 1,
        }}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="mt-8">
              <h3 className="font-martian-mono text-white text-sm">Title</h3>
              <Field
                name="title"
                type="text"
                className="py-2 bg-[#1E1F23] rounded-lg w-full flex justify-start border border-gray-500 mt-4"
                placeholder="Enter post title"
              />
              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="mt-8">
              <h3 className="font-martian-mono text-white text-sm">Tags</h3>
              <Field
                name="tags"
                type="text"
                placeholder="Enter tags separated by commas"
                className="py-2 bg-[#1E1F23] rounded-lg w-full flex justify-start border border-gray-500 mt-4"
              />
              <ErrorMessage
                name="tags"
                component="p"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="mt-8">
              <h3 className="font-martian-mono text-white text-sm">Content</h3>
              <div className="bg-[#1E1F23] rounded-lg border border-gray-500 mt-4 h-96 overflow-hidden">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={(newState) => {
                    setEditorState(newState);
                    // Convert Draft.js content to HTML and set it in Formik's content field
                    const contentHTML = draftToHtml(
                      convertToRaw(newState.getCurrentContent())
                    );
                    setFieldValue("content", contentHTML);
                  }}
                  toolbarClassName="flex sticky top-0 z-50 !bg-[#1E1F23] !text-white"
                  wrapperClassName="wrapper-class h-full"
                  editorClassName="editor-class h-full overflow-y-auto p-4 text-white rounded-lg"
                  editorStyle={{ maxHeight: "100%", overflowY: "auto" }}
                />
              </div>
              <ErrorMessage
                name="content"
                component="p"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex space-x-6 justify-end">
              <div className="py-2 text-sm font-medium text-white bg-[#191A1F] rounded-lg w-36 mt-4 flex justify-around border-gray-500 border font-martian-mono">
                <h3 className="font-martian-mono text-xs flex justify-center">
                  Save draft
                </h3>
              </div>

              <button
                type="submit"
                className="text-xs h-10 w-16 bg-[#F65930] rounded-lg mt-4 font-martian-mono"
              >
                Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

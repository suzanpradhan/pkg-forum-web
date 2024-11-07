import { useAppDispatch } from "@/core/redux/clientStore";
import postApi from "@/modules/posts/postApi";
import { PostFormInputs, postSchema } from "@/modules/posts/postType";
import { ContentState, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { convertFromHTML } from "html-to-draftjs";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import * as z from "zod";

// Dynamically import the editor to avoid SSR issues
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

interface PostPageProps {
  params: {
    postId?: string[]; // Catch-all segment, making postId optional
  };
}

export default function PostPage({ params }: PostPageProps) {
  const dispatch = useAppDispatch();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [initialValues, setInitialValues] = useState<PostFormInputs>({
    title: "",
    author: 1,
    content: "",
    package: 1,
  });
  const router = useRouter();

  const { postId } = params;

  // Fetch the post data if postId exists for editing
  useEffect(() => {
    if (postId) {
      const fetchPostData = async () => {
        try {
          const result = await dispatch(
            postApi.endpoints.getPostById.initiate(postId[0])
          );
          if ("data" in result && result.data) {
            const post = result.data;
            setInitialValues({
              title: post.title,
              author: post.author,
              content: post.content,
              package: post.package,
            });

            // Convert HTML content back to ContentState using html-to-draftjs
            const contentBlock = convertFromHTML(post.content); // Returns an array of content blocks
            const contentState = ContentState.createFromBlockArray(
              contentBlock.contentBlocks
            ); // Create ContentState from the blocks

            // Now set the editor state with the contentState
            const newEditorState = EditorState.createWithContent(contentState);
            setEditorState(newEditorState); // Set the editor state
          }
        } catch (error) {
          console.error("Error fetching post data:", error);
        }
      };
      fetchPostData();
    }
  }, [postId, dispatch]);

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

  // Handle form submission (create or update)
  const onSubmit = async (values: PostFormInputs) => {
    try {
      let result;
      if (postId) {
        // Update post if postId exists
        result = await dispatch(
          postApi.endpoints.updatePost.initiate({ id: postId[0], data: values })
        );
      } else {
        // Create a new post
        result = await dispatch(postApi.endpoints.createPost.initiate(values));

        // Type guard for checking data existence
        if ("data" in result && result.data) {
          console.log("Create Post successful!", result.data);
          router.push(`/posts/${result.data.id}`);
        } else if ("error" in result && result.error) {
          console.error("Create Post failed:", result.error);
        } else {
          console.error("Unexpected result format:", result);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="border-r border-gray-700 h-screen -mt-10 -mr-4"></div>
      <div className="flex items-center -mt-[765px] -ml-6">
        <div className="py-2 bg-[#1E1F23] rounded-3xl w-36 flex justify-evenly border border-gray-500">
          <img
            src="/assets/fluttericon.png"
            alt="flutter"
            className="w-8 h-8"
          />
          <h3 className="flex font-martian-mono text-white text-xs font-medium mt-2">
            Flutter
          </h3>
        </div>
        <ChevronRight className="ml-4" />
        <p className="text-white font-martian-mono text-base ml-4">
          {postId ? "Edit Post" : "Create Post"}
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ values, setFieldValue }) => (
          <Form className="">
            <div className="mt-4 -ml-6">
              <h3 className="font-martian-mono text-white text-sm">Title</h3>
              <Field
                name="title"
                type="text"
                className="py-2 bg-[#1E1F23] rounded-lg w-full flex border border-gray-500 mt-4"
                placeholder="Enter post title"
              />
              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-xs "
              />
            </div>

            <div className="mt-4 -ml-6">
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

            <div className="mt-4 -ml-6">
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
                <h3 className="font-martian-mono text-xs flex justify-center items-center">
                  Save as Draft
                </h3>
              </div>

              <button
                type="submit"
                className="py-2 text-sm font-medium text-white bg-[#0193FF] rounded-lg w-36 mt-4 flex justify-center items-center"
              >
                {postId ? "Update Post" : "Create Post"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

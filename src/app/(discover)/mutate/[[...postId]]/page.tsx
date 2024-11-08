"use client";
import { useGetApiResponse } from "@/core/api/getApiResponse";
import { useAppDispatch, useAppSelector } from "@/core/redux/clientStore";
import { RootState } from "@/core/redux/store"; // Adjust the path based on your project structure
import postApi from "@/modules/posts/postApi";
import { PostFormInputs, postSchema } from "@/modules/posts/postType";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as z from "zod";

interface PostPageProps {
  params: {
    postId?: string[];
  };
}

export default function PostPage({ params }: PostPageProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const postId = params.postId?.[0]; // Access the first element only if postId is defined

  const isEditing = Boolean(postId); // Determine editing mode if postId exists

  // Fetch post data from the store based on postId
  const postData = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getPostById(${postId})`]?.data as
        | PostFormInputs
        | undefined
  );

  // Initial state setup for the form
  // const [initialValues, setInitialValues] = useState<PostFormInputs>({
  //   title: "",
  //   author: 1,
  //   content: "this is my first project",
  //   package: 1,
  // });

  // Single useEffect to fetch and set initialValues
  useEffect(() => {
    if (postId) {
      dispatch(postApi.endpoints.getPostById.initiate(postId)); // Fetch post data if editing
    }

    // if (postData) {
    //   setInitialValues(postData); // Set initial form values for editing
    // }
  }, [dispatch, postId, postData]);

  const toMutatePostData = useGetApiResponse<PostFormInputs>(
    `getPostById-${params.postId ? params.postId : undefined}`
  );

  // Zod-based validation
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
    try {
      let result;
      if (isEditing) {
        // Update post if in editing mode
        result = await dispatch(
          postApi.endpoints.updatePost.initiate({
            id: postId!,
            data: values,
          })
        );
      } else {
        // Create a new post if not in editing mode
        result = await dispatch(postApi.endpoints.createPost.initiate(values));
      }

      // Redirect after successful submission
      if (result?.data) {
        const packageId = result.data.id; // Use post ID for navigation
        router.push(`/${packageId}`); // Redirect to post detail page after submission
      } else if (result?.error) {
        console.error("Submission failed:", result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto -ml-1">
      <div className="border-r border-gray-700 h-screen -mt-10 -mr-4"></div>
      <div className="flex items-center -mt-[765px] ">
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
          {isEditing ? "Edit Post" : "Create Post"}
        </p>
      </div>

      <Formik
        initialValues={toMutatePostData}
        validate={validateForm}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {() => (
          <Form>
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
                className="text-red-500 text-xs"
              />
            </div>

            {/* Content Section */}
            {/* Add other fields here as needed */}

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
                {isEditing ? "Update Post" : "Create Post"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

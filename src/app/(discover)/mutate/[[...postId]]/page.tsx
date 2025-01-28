"use client";
import { useGetApiResponse } from "@/core/api/getApiResponse";
import { useAppDispatch, useAppSelector } from "@/core/redux/clientStore";
import { RootState } from "@/core/redux/store";
import postApi from "@/modules/posts/postApi";
import { PostFormInputs, postSchema, PostType } from "@/modules/posts/postType";
import { Form, Formik } from "formik";
import { ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as z from "zod";

interface PostPageProps {
  params: {
    postId?: string[];
  };
}
export default function PostPage({ params }: PostPageProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const postId = params.postId?.[0];
  const session = useSession();

  const postData = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getPostById(${postId})`]?.data as
        | PostFormInputs
        | undefined
  );

  useEffect(() => {
    if (postId) {
      dispatch(postApi.endpoints.getPostById.initiate(postId));
    }
  }, [dispatch, postId, postData]);

  const toMutatePostData = useGetApiResponse<PostType>(
    `getPostById-${params.postId ? params.postId : undefined}`
  );

  const validateForm = (values: PostFormInputs) => {
    try {
      postSchema.parse(values);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.errors);
        return error.formErrors.fieldErrors;
      }
    }
  };

  const onSubmit = async (values: PostFormInputs) => {
    try {
      let data;
      if (postId) {
        data = await dispatch(
          postApi.endpoints.updatePost.initiate({
            id: parseInt(postId),
            ...values,
          })
        );
        if (data?.error) {
          throw new Error("Failed to update post.");
        }
        toast.success("Post updated successfully!");
      } else {
        data = await dispatch(postApi.endpoints.createPost.initiate(values));
        if (data?.error) {
          throw new Error("Failed to create post.");
        }
        toast.success("Post created successfully!");
      }

      if (data?.data) {
        const packageId = data.data.id;
        router.push(`/posts/${packageId}`);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto md:-ml-1">
      <div className="border-r border-gray-700 h-screen md:-mt-10 -mr-4"></div>
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
          {postId ? "Edit Post" : "Create Post"}
        </p>
      </div>

      <Formik
        initialValues={{
          author: session.data?.user?.id ? parseInt(session.data?.user?.id) : 1,
          content: toMutatePostData?.content ?? "",
          package: toMutatePostData?.package ?? 1,
          title: toMutatePostData?.title ?? "",
          tags: toMutatePostData?.tags ?? "",
        }}
        validate={validateForm}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <div className="mt-4 -ml-6">
              <h3 className="font-martian-mono text-white text-sm">Title</h3>
              <input
                type="text"
                className="py-2 bg-[#1E1F23] rounded-lg w-full flex border border-gray-500 mt-4"
                placeholder="Enter post title"
                {...formik.getFieldProps("title")}
              />
            </div>
            <div className="mt-4 -ml-6">
              <h3 className="font-martian-mono text-white text-sm">Tags</h3>
              <input
                type="text"
                className="py-2 bg-[#1E1F23] rounded-lg w-full flex border border-gray-500 mt-4"
                placeholder="Enter post tags"
                {...formik.getFieldProps("tags")}
              />
            </div>
            <div className="mt-4 -ml-6">
              <h3 className="font-martian-mono text-white text-sm">Content</h3>
              <input
                type="text"
                className="py-2 bg-[#1E1F23] rounded-lg w-full flex border border-gray-500 mt-4"
                placeholder="Enter post content"
                {...formik.getFieldProps("content")}
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
      <ToastContainer />
    </div>
  );
}

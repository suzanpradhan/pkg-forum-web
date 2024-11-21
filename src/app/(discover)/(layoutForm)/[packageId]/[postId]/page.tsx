"use client";
import PackageCard from "@/app/(commonComponents)/PackageCard";
import { default as PostActions } from "@/app/(commonComponents)/PostActions";
import { default as PostProfile } from "@/app/(commonComponents)/PostProfile";
import { useAppDispatch, useAppSelector } from "@/core/redux/clientStore";
import { RootState } from "@/core/redux/store";
import postApi from "@/modules/posts/postApi";
import { PostFormInputs } from "@/modules/posts/postType";
import parse from "html-react-parser";
import { Navigation } from "lucide-react";
import { useEffect } from "react";
import CommentComp from "../../CommentComp";
export default function PostDetail({
  params,
}: {
  params: { postId: string; packageId: number };
}) {
  const dispatch = useAppDispatch();

  const postData = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getPostById-${params.postId}`]
        ?.data as PostFormInputs
  );

  useEffect(() => {
    params.postId &&
      dispatch(postApi.endpoints.getPostById.initiate(params.postId));
  }, [dispatch, params.postId]);

  return (
    <div className=" flex flex-1">
      <div className=" max-w-[72%]  border-gray-700">
        {postData ? (
          <div className="bg-[#15161A] mb-6 max-w-full -mx-6 flex items-start -mt-10 py-4">
            <div className=" ">
              <button className="bg-green text-white ml-80"> Update</button>

              <h2 className="text-white text-lg font-semibold  font-martian-mono">
                {postData.title}
              </h2>
              <p className="text-[#D2D2D2] text-base  font-satoshi mt-2">
                {parse(postData.content)}
              </p>

              <img
                src="/assets/post1.png"
                alt="Post Image"
                className="w-full h-48 rounded-md object-cover mb-4 mt-4"
              />
              <PostProfile />
              <PostActions />

              <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-xl  w-full mt-4 flex  justify-between border border-gray-500">
                <div className="flex items-center">
                  <img
                    src="/assets/avatar.avif"
                    alt="avatar"
                    className="h-9 ml-4"
                  />
                  <p className="ml-2 text-[#5F6064]">add your comment</p>
                </div>
                <Navigation className=" mt-2 mr-4" />
              </div>
              <CommentComp />

              <div className="relative border-l border-transparent">
                <div className="absolute  left-0 h-[68%] border-l border-gray-700 ml-3 mt-6"></div>
                <CommentComp />

                <div className="ml-10">
                  <div>
                    <hr className="border-gray-700 absolute top-0 left-0 w-7 mt-[205px]  ml-[11px]" />
                    <CommentComp />
                  </div>

                  <div>
                    <hr className="border-gray-700 absolute top-0 left-0 w-7 mt-[398px]  ml-[11px]" />
                    <CommentComp />
                  </div>
                </div>
              </div>

              <CommentComp />
            </div>
            <div className="border-r border-gray-700 -mt-4  -mr-6 ml-4 h-[230vh] "></div>
          </div>
        ) : (
          <p> Loading post details</p>
        )}
      </div>
      <div className="ml-10">
        <PackageCard packageId={params.packageId?.toString()} />
      </div>
    </div>
  );
}

"use client";
import ButtonGroup from "@/app/(commonComponents)/ButtonGroup";
import PostPageAside from "@/app/(commonComponents)/PostPageAside";
import DetailBox from "@/app/(commonComponents)/detailBox";
import { useAppDispatch, useAppSelector } from "@/core/redux/clientStore";
import { RootState } from "@/core/redux/store";
import { PaginatedResponseType } from "@/core/types/responseTypes";
import postApi from "@/modules/posts/postApi";
import { PostType } from "@/modules/posts/postType";
import parse from "html-react-parser";
import { Ellipsis, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function PostList({
  params,
}: {
  params: { packageId: number };
}) {
  const dispatch = useAppDispatch();
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    dispatch(postApi.endpoints.getAllPosts.initiate(pageIndex));
  }, [dispatch, pageIndex]);

  const queryState = useAppSelector(
    (state: RootState) => state.baseApi.queries[`getAllPosts`]
  );

  const postsData = queryState?.data as PaginatedResponseType<PostType>;
  const error = queryState?.error;
  const status = queryState?.status;

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching posts: {error.message}</div>;
  }

  return (
    <div>
      <div className="relative h-36  overflow-hidden -ml-10 -mt-10">
        <Image
          src="/images/postimg.png"
          alt="Post Image"
          className="object-cover"
          layout="fill"
          sizes="100vw"
        />
      </div>

      {postsData?.results.length === 0 ? (
        <div>No posts available</div>
      ) : (
        postsData?.results.map((post, index) => (
          <Link key={index} href={`posts/${post.id}`}>
            <div className="flex-1 flex">
              <div className=" w-full space-y-4 mr-10 border-r border-gray-700">
                <div className="container mx-auto -ml-12">
                  <div className=" mt-6">
                    <div className="flex">
                      <h2 className="text-white text-lg font-martian-mono mb-2">
                        {post.title}
                      </h2>
                      <div className=" flex ml-[800px]">
                        <Ellipsis />
                      </div>
                    </div>
                    <p className="text-[#D2D2D2] text-base mb-4 font-satoshi">
                      {parse(post.content)}
                    </p>
                    <div className="py-2 text-[10px] font-martian-mono text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center">
                      Flutter
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        src="/images/post1.png"
                        alt="Post Image"
                        className="w-full h-auto rounded-md mb-4 mt-4"
                      />
                    </div>

                    <div className="flex items-center justify-between text-gray-500 text-sm ">
                      <DetailBox />
                    </div>
                    <ButtonGroup />
                    <hr className="border-gray-700 mt-4 -ml-6 -mr-20" />
                  </div>

                  {/* Post 2 */}
                  <div className="flex mt-4">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-white text-sm font-semibold mb-2 font-martian-mono">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece
                        </h2>
                        <div className="py-2 text-[10px] text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
                          Flutter
                        </div>
                        <h3 className="font-satoshi mt-3">
                          https://www.pinterest.com/pin/840907180378
                        </h3>
                        <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                          <DetailBox />
                        </div>
                        <ButtonGroup />
                      </div>
                      <Image
                        src="/images/python.png"
                        alt="Python"
                        width={160}
                        height={112}
                        className="mt-9"
                      />
                    </div>
                    <div>
                      <Ellipsis />
                    </div>
                  </div>

                  <hr className="border-gray-700 mt-4 -ml-6 -mr-20" />

                  {/* Post 3 */}
                  <div className="mt-4">
                    <h2 className="text-white text-sm font-semibold mb-2 font-martian-mono">
                      Contrary to popular belief, Lorem Ipsum?
                    </h2>
                    <div className="w-full h-72 rounded-md overflow-hidden mb-4 mt-4 relative">
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=LizEf79gBcM"
                        width="100%"
                        height="100%"
                        controls
                        config={{
                          youtube: {
                            playerVars: {
                              showinfo: 1,
                              rel: 0,
                              modestbranding: 1,
                            },
                          },
                        }}
                        className="absolute top-0 left-0"
                      />
                    </div>
                    <DetailBox />
                    <ButtonGroup />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 sticky top-0 mt-4 bg-[#15161A]">
                <div className="flex space-x-6 mb-4">
                  <Link href="/createPost">
                    <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-lg w-44 flex justify-around items-center border border-gray-700">
                      <Plus />
                      <h3 className="font-martian-mono">Create Post</h3>
                    </div>
                  </Link>
                  <button className="text-sm h-10 w-16 bg-[#F65930] rounded-lg">
                    Join
                  </button>
                </div>
                <PostPageAside packageId={params.packageId.toString()} />
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import Link from "next/link";
import { Ellipsis } from "lucide-react";
import ButtonGroup from "@/app/(commonComponents)/ButtonGroup";
import PostPageAside from "@/app/(commonComponents)/PostPageAside";
import DetailBox from "@/app/(commonComponents)/detailBox";

export default function PostList() {
  return (
    <div>
      <div className="relative h-32 w-full overflow-hidden mt-4">
        <Image
          src="/images/postimg.png"
          alt="Post Image"
          className="object-cover"
          layout="fill"
          sizes="100vw"
        />
      </div>
      {/* Main Content */}
      <div className="flex container mx-auto">
        <div>
          {/* Post 1 */}
          <div className="flex">
            <div className="mt-6">
              <Link href="/detail">
                <h2 className="text-white text-lg font-semibold mb-2 font-martian-mono">
                  Contrary to popular belief, Lorem Ipsum?
                </h2>
              </Link>
              <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words...
              </p>
              <div className="py-2 text-[10px] font-martian-mono text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center">
                Flutter
              </div>
              <Image
                src="/images/post1.png"
                alt="Post Image"
                width={600}
                height={300}
                className="w-full h-48 rounded-md object-cover mb-4 mt-4"
              />
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <DetailBox />
              </div>
              <ButtonGroup />
              <hr className="border-gray-600 mt-4 -ml-10 -mr-12" />
            </div>
            <div className="mt-6">
              <Ellipsis />
            </div>
          </div>

          {/* Post 2 */}
          <div className="flex mt-4">
            <div className="flex justify-between">
              <div>
                <h2 className="text-white text-sm font-semibold mb-2 font-martian-mono">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece
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

          <hr className="border-gray-600 mt-4 -ml-10 -mr-6" />

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
          <hr className="border-gray-600 mt-4 -ml-10 -mr-6" />
        </div>
      </div>
    </div>
  );
}

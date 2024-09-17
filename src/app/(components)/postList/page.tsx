"use client";
import Image from "next/image";
import ReactPlayer from "react-player";
import ButtonGroup from "../ButtonGroup";
import { Dot, Ellipsis, Github, Globe, Plus, Users } from "lucide-react";

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

      <div className="flex container mx-auto">
        <div className="w-5/6 space-y-8 mr-8 border-r border-gray-500 pr-6">
          {/* Post 1 */}
          <div className="mt-6">
            <h2 className="text-white text-lg font-semibold mb-2 font-martian-mono">
              Contrary to popular belief, Lorem Ipsum?
            </h2>
            <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...
            </p>
            <div className="py-2 text-xs font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
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
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/pub.png"
                  alt="User Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-white font-martian-mono">@suzanpradhan</span>
                <Dot className="text-white" />
                <span className="text-white font-martian-mono">2 hours ago</span>
              </div>
            </div>
            <ButtonGroup />
            <hr className="border-gray-600 mt-4" />
          </div>

          {/* Post 2 */}
          <div className="mt-8 flex justify-between">
            <div>
              <h2 className="text-white text-sm font-semibold mb-2 font-martian-mono">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
              </h2>
              <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
                Flutter
              </div>
              <h3 className="font-satoshi mt-3">
                https://www.pinterest.com/pin/840907180378
              </h3>
              <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/pub.png"
                    alt="User Avatar"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-white font-martian-mono">@suzanpradhan</span>
                  <Dot className="text-white" />
                  <span className="text-white font-martian-mono">2 hours ago</span>
                </div>
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

          <hr className="border-gray-600 mt-4" />

          {/* Post 3 */}
          <div>
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
            <div className="flex">
              <span className="text-white font-martian-mono">@suzanpradhan</span>
              <Dot className="text-white" />
              <span className="text-white font-martian-mono">2 hours ago</span>
            </div>
            <ButtonGroup />
          </div>
        </div>

        <div className="lg:w-1/4 sticky top-0 mt-4 bg-[#15161A]">
          <div className="flex space-x-6 mb-4">
            <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-lg w-44 flex justify-around items-center border border-gray-500">
              <Plus />
              <h3 className="font-martian-mono">Create Post</h3>
            </div>
            <button className="text-sm h-10 w-16 bg-[#F65930] rounded-lg">
              Join
            </button>
          </div>
          <div className="shadow-lg p-4 w-[310px] bg-[#15161A] border border-gray-500">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/pub.png"
                  alt="Publisher"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="bg-white text-black text-xs px-2 py-1 rounded mr-4">pub.dev</span>
              </div>
              <Image
                src="/images/flutterIcon.png"
                alt="Flutter"
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-xl font-bold font-martian-mono">flutter.dev</h3>
              <p className="text-sm mb-4">
                Flutter transforms the entire app development process. Build, compose, and deploy apps across web, mobile, desktop, and embedded devices from a single codebase.
              </p>
              <div className="flex space-x-4">
                <Github className="text-xl" />
                <Globe className="text-xl" />
                <Users className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import BottonGroup from "@/app/(commonComponents)/ButtonGroup";
import React from "react";
import Comment from "../(components)/Comment";
import Profile from "../(components)/Profile";
import Function from "../(components)/Function";
import DetailBox from "@/app/(commonComponents)/detailBox";
export default function page() {
  return (
    <div className="">
      <div className="-ml-12">
        <h2 className="text-white text-lg font-martian-mono mb-2 ">
          Contrary to popular belief, Lorem Ipsum?
        </h2>
        <p className=" text-base text-[#D2D2D2] font-satoshi -mt-1">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words...
        </p>
        <div className="py-2 px-4 text-[10px] font-martian-mono text-white bg-[#2D2E34] rounded-full w-24 text-center mt-2">
          Flutter
        </div>
        <div className="flex items-center space-x-2 -mt-1 ">
          <DetailBox />
        </div>
        <div className="-mt-1">
        <BottonGroup />
        </div>
        <hr className="border-gray-500 -ml-[25px] -mr-[74px] mt-6" />
      </div>

      <div className=" mt-4 -ml-12">
        <Comment />
        <hr className="border-gray-500 -ml-[25px] -mr-[74px] mt-6" />
      </div>
    </div>
  );
}

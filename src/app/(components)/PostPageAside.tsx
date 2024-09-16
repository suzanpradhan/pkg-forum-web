import React from 'react'
import {
    Users,
    ThumbsUp,
    Share,
    Dot,
    Globe,
    Github, 
    ArrowBigUpDash,
    ArrowBigDown,
    MessageSquareText,
    BookmarkMinus,
    Forward,
    Plus,
    Ellipsis,
    Navigation,
  } from "lucide-react";

export default function PostPageAside() {
  return (
    <div className="lg:w-1/4 sticky top-0 bg-[#15161A]   ">
    <div className=" shadow-lg  p-4 w-[310px] mt-4 -ml-5 border border-gray-500 font-martian-mono ">
      <div className="text-white">
        <div className="flex mt-4 ml-40">
          <img
            src="/images/pub.png"
            alt="Flutter"
            className="px-[2px] text-xl"
          />
          <span className="bg-white text-black text-xs px-2 py-1 rounded mr-4">
            pub.dev
          </span>
        </div>
        <img
          src="images/flutterIcon.png"
          alt="flutter"
          className=" -mt-4"
        />
        <h3 className="text-xl font-bold font-martian-mono mt-4">
          Flutter
        </h3>
        <p className="text-gray-400 text-xs mt-2 font-satoshi">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered.
        </p>
        <div className="flex justify-start items-center space-x-3 mt-4">
          <Github className="h-5 w-5 text-white cursor-pointer" />
          <Globe className="h-5 w-5 text-white cursor-pointer" />
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center text-gray-400 space-x-1">
            <Users className="h-4 w-4 text-red-500" />
            <span className="text-xs font-martian-mono ">
              882 Members
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

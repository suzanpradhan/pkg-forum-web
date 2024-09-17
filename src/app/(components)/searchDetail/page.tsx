"use client";
import { useState } from "react";
import SearchPageAside from "../SearchPageAside";
import LanguageType from "../LanguageType";
import Card from "../Card";

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
} from "lucide-react";
import DetailBox from "../detailBox";
import BottonGroup from "../ButtonGroup";
interface Props {
  imgSrc: string;
  title: string;
  description: string;
  url: string;
}
export default function SearchDetail() {
  const [selectedItem, setSelectedItem] = useState("Packages");
  return (
    <div className="flex flex-1 gap-12 ">
      <div className=" border-r   border-gray-500 -mt-4 mr-10 pr-10 ">
        <div className="mt-8 w-11/12">
          <div className="flex mt-4">
            <p
              className={`text-sm font-martian-mono cursor-pointer ${
                selectedItem === "Packages"
                  ? "text-white border-b-2 border-red-500"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedItem("Packages")}
            >
              Packages
            </p>
            <p
              className={`text-sm font-martian-mono cursor-pointer ml-8 ${
                selectedItem === "Posts"
                  ? "text-white border-b-2 border-red-500"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedItem("Posts")}
            >
              Posts
            </p>
            <p
              className={`text-sm font-martian-mono cursor-pointer ml-8 ${
                selectedItem === "People"
                  ? "text-white border-b-2 border-red-500"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedItem("People")}
            >
              People
            </p>
          </div>

          <hr className="border-gray-500  -ml-5 -mr-20" />
        </div>

        <div className="flex justify-between">
          <div className=" flex items-start mt-6  ">
            <div className=" right-item w-full">
              <h2 className="text-white text-lg font-semibold mb-2 font-martian-mono">
                Contrary to popular belief, Lorem Ipsum?
              </h2>
              <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words...
              </p>
              <div className="py-2 text-xs font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
                Flutter
              </div>
              <img
                src="/images/post1.png"
                alt="Post Image"
                className="w-full h-48 rounded-md object-cover mb-4 mt-4"
              />
       
              <DetailBox/>
              <BottonGroup/>

             

              <hr className="border-gray-600  mt-4 -ml-10 -mr-[71px]" />

              <div className=" mt-8 flex justify-between  ">
                <div>
                  <h2 className="text-white text-sm font-semibold mb-2 font-martian-mono">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece
                  </h2>
                  <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
                    Flutter
                  </div>
                  <h3 className="font-satoshi mt-3">
                    https://www.pinterest.com/pin/840907180378pinterest.com/pin/840907180378
                  </h3>
                  <DetailBox/>
                  <BottonGroup/>
                </div>

                <img
                  src="images/python.png "
                  alt="python"
                  className="h-28 w-40 mt-9"
                />
              </div>

              <hr className="border-gray-600 mt-4 -ml-10 -mr-[71px]" />
            </div>
          </div>
          <Ellipsis className=" mr-4 mt-6" />
        </div>
      </div>
      <div className="mt-4 space-y-4 shrink">
        <SearchPageAside />
        <LanguageType />
      </div>
    </div>
  );
}

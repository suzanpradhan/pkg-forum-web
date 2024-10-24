import {
  default as BottonGroup,
  default as ButtonGroup,
} from "@/app/(commonComponents)/ButtonGroup";
import DetailBox from "@/app/(commonComponents)/detailBox";
import { Ellipsis } from "lucide-react";
import Image from "next/image";

export default function ProfilePost() {
  return (
    <div className="w-11/12  -ml-12">
      <h2 className="text-white text-lg font-martian-mono mb-2">
        Contrary to popular belief, Lorem Ipsum?
      </h2>
      <p className="mt-2  -base text-[#D2D2D2] font-satoshiz">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words...
      </p>
      <div className="py-2 px-4 text-[10px] font-martian-mono text-white bg-[#2D2E34] rounded-full w-24 text-center mt-4">
        Flutter
      </div>
      <DetailBox />
      <BottonGroup />
      <hr className="border-gray-500 -ml-[33px] -mr-[174px] mt-4" />
      <div className="flex mt-4">
        <div className=" flex justify-between">
          <div>
            <div>
              <h2 className="text-white text-sm font-semibold mb-2 font-martian-mono">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece
              </h2>
            </div>

            <div className="py-2 px-4 text-[10px] font-martian-mono text-white bg-[#2D2E34] rounded-full w-24 text-center mt-4">
              Flutter
            </div>
            <h3 className="font-satoshi mt-3">
              https://www.pinterest.com/pin/840907180378
            </h3>
            <div className="flex items-center justify-between  text-gray-500 text-sm">
              <DetailBox />
            </div>
            <ButtonGroup />
          </div>
        </div>
        <div className="relative w-[300px] h-[112px]">
          <Image
            src="/images/python.png"
            alt="Python"
            layout="fill"
            objectFit="contain"
          />
          <div className=" ml-72 -mt-2 ">
            <Ellipsis />
          </div>
        </div>
      </div>
      <hr className="border-gray-500 -ml-[33px] -mr-[174px] mt-8" />
    </div>
  );
}

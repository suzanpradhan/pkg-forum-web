import Comment from "../Comment";
import Profile from "../Profile";
import Function from "../Function";
import {
  ArrowBigDown,
  ArrowBigUpDash,
  BookmarkMinus,
  Dot,
  Ellipsis,
  Forward,
  MessageSquareText,
} from "lucide-react";
import BottonGroup from "../ButtonGroup";

export default function ProfilePost() {
  return (
    <div className="flex gap-8 p-4">
      <div className="w-1/4 -ml-5 border-r border-gray-500 pr-6 -mt-8 ">
        <div className="mt-8">
          .
          <Profile />
        </div>
      </div>

      <div className="flex-1 h-screen">
        <Function />
        <div className="mt-4 w-11/12">
          <h2 className="text-white text-lg font-semibold mb-2">
            Contrary to popular belief, Lorem Ipsum?
          </h2>
          <p className="mt-2 text-base text-[#D2D2D2]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words...
          </p>

          <div className="py-2 px-4 text-sm font-medium text-white bg-[#2D2E34] rounded-full w-24 text-center mt-4">
            Flutter
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <img
              src="/images/pub.png"
              alt="User Avatar"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-white">@suzanpradhan</span>
            <Dot className="text-white" />
            <span className="text-white">2 hours ago</span>
          </div>

          <BottonGroup />
          <hr className="border-gray-500 -ml-8 -mr-24 mt-8" />
        </div>

        <div className="flex justify-between w-11/12">
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

              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <img
                    src="/images/pub.png"
                    alt="User Avatar"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-white font-martian-mono">
                    @suzanpradhan
                  </span>
                  <Dot className="text-white" />
                  <span className="text-white font-martian-mono">
                    2 hours ago
                  </span>
                </div>
              </div>
              <BottonGroup />
            </div>

            <img
              src="images/python.png "
              alt="python"
              className="h-28 w-40 mt-9 ml-4"
            />
          </div>
          <Ellipsis className=" mr-4 mt-6" />
        </div>
      </div>
      <div className="border-r border-gray-500 h-screen mr-10 -mt-8"></div>
    </div>
  );
}

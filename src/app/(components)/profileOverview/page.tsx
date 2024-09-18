import Comment from "../Comment";
import Profile from "../Profile";
import Function from "../Function";
import { Dot } from "lucide-react";
import BottonGroup from "../ButtonGroup";
import DetailBox from "../detailBox";

export default function ProfileOverview() {
  return (
    <div className="flex gap-8 p-4">
      <div className="w-1/4 -ml-5 border-r border-gray-500 pr-6 -mt-8 ">
        <div className="mt-8">
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

          <div className="flex items-center space-x-2 ">
            <DetailBox />
          </div>

          <BottonGroup />
          <hr className="border-gray-500 -ml-8 -mr-24 mt-8" />
        </div>

        <div className="mt-8">
          <Comment />
        </div>
      </div>
      <div className="border-r border-gray-500 h-screen mr-10 -mt-8"></div>
    </div>
  );
}

import {
  Users,
  ThumbsUp,
  Share,
  Dot,
  Globe,
  Github,
  ArrowBigDown,
  MessageSquareText,
  BookmarkMinus,
  Forward,
  Plus,
  Ellipsis,
  Navigation,
  ArrowBigUpDash,
} from "lucide-react";
export default function BottonGroup() {
  return (
    <div className=" flex text-start space-x-4 ">
      <div className=" text-sm font-medium text-white  rounded-3xl w-44  mt-4 flex bg-[#1E1F23] border border-gray-500 justify-evenly items-center ">
        <ArrowBigUpDash className="text-[#F65930] " />
        <p className="text-white text-xm  font-martian-mono">Upvote</p>

        <h3 className=" font-martian-mono relative">
          5k
          <div className="border-r  border-gray-700 absolute h-10 -mt-7 ml-7"></div>
        </h3>
        <ArrowBigDown className="ml-3" />
      </div>
      <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-24  mt-4 flex  justify-center border border-gray-500">
        <MessageSquareText />
        <h3 className=" ml-2">2.5k</h3>
      </div>
      <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-14 mt-4 flex  justify-center border border-gray-500">
        <BookmarkMinus />
      </div>
      <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-28 mt-4 flex   border border-gray-500 justify-around items-center">
        <Forward />
        <h3 className="ml-2 font-martian-mono">share</h3>
      </div>
    </div>
  );
}

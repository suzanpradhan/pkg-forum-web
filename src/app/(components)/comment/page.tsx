import Comment from "../Comment";
import Profile from "../Profile";
import Function from "../Function";
import { Dot } from "lucide-react";
import BottonGroup from "../ButtonGroup";

export default function ProfileComment() {
  return (
    <div className="flex gap-8 p-4">
      <div className="w-1/4 -ml-5 border-r border-gray-500 pr-6 -mt-8 ">
        <div className="mt-8">
          <Profile />
        </div>
      </div>

      <div className="flex-1 h-screen">
        <Function />
       
        <div className="mt-8">
          <Comment />
        </div>

        <div className="mt-8">
          <Comment />
        </div>
      </div>
      <div className="border-r border-gray-500 h-screen mr-10 -mt-8"></div>
    </div>
  );
}

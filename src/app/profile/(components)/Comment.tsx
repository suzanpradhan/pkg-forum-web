import {
  Dot,
} from "lucide-react";
import BottonGroup from "../../(commonComponents)/ButtonGroup";
export default function Comment() {
  return (
    <div className="w-11/12">
      <div className="flex items-center space-x-2">
        <img
          src="/images/avatar.avif  "
          alt="User Avatar"
          className="w-6 h-6 rounded-sm"
        />
        <span className="text-white font-martian-mono">@suzanpradhan</span>
      </div>

      <div className="ml-8">
        <p className="text-base font-satoshi text-white mt-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words.
        </p>
        <div className="flex mt-4">
          <p className=" font-martian-mono text-xs">
            @suzanpradhan replied to @chandlerbing
          </p>
          <div className="flex">
            <Dot />
            <p className="text-white text-xs font-martian-mono">2 hours ago</p>
          </div>
        </div>
        <BottonGroup />
      </div>
    
    </div>
  );
}

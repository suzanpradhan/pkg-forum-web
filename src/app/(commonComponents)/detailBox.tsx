import { Dot } from "lucide-react";

export default function DetailBox() {
  return (
    <>
      <div className="  text-gray-500 text-sm ">
        <div className="flex items-center space-x-2 mt-4">
          <img
            src="/images/avatar.avif"
            alt="User Avatar"
            className="w-6 h-6 rounded-md"
          />
          <span className="text-white font-martian-mono text-xs">
            @suzanpradhan
          </span>
          <Dot className="text-white" />
          <span className="text-white font-martian-mono text-xs">
            2 hours ago
          </span>
        </div>
      </div>
    </>
  );
}

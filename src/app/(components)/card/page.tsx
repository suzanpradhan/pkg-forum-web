import { Users, Globe, Dot,Github } from "lucide-react";

const Card = () => {
  return (
    <div className="bg-gray-800  rounded-lg shadow-lg max-w-sm w-full">
      <img src="/images/FlutterBackground.png" alt="Flutter" className="h-12 " />

      <div className="flex items-center justify-between">
        <img
          src="/images/flutterIcon.png"
          alt="Flutter"
          className="h-12 ml-4 -mt-10"
        />
        <div className=" flex mt-4">
          <img
            src="/images/pub.png"
            alt="Flutter"
            className="px-[2px] text-xl"
          />
          <span
            className="bg-white
         text-black text-xs px-2 py-1  rounded mr-4 "
          >
            pub.dev
          </span>
        </div>
      </div>
      <div className="text-start ml-4">
        <div className="flex items-center">
          <h3 className="mt-4 text-lg font-semibold text-white">flutter </h3>
          <p className="mt-4 text-sm text-gray-500 ml-4">V3.16</p>
        </div>

        <p className="mt-2 text-gray-400 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <div className="flex justify-start items-center space-x-3 mt-4">
          
          <Github className="h-5 w-5 text-white cursor-pointer" />
          <Globe className="h-5 w-5 text-white cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 p-4">
        <div className="flex items-center text-gray-400 space-x-1">
          <Users className="h-4 w-4 text-red-500" />
          <span className="text-xs">852 Members</span>
        </div>
        <div className="flex items-center text-gray-400 space-x-1">
        <Dot className="h-6 w-6 text-green-500" />

          <span className="text-xs">265 Online</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

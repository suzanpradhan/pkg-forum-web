"use client";
import { Bell, Search, SquarePen } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="bg-[#15161A]">
      <div className="flex p-2  items-center ml-4 mr-4">
        <div className="text-custom-them  text-xs sm:text-xl font-bold flex-1 font-martian-mono whitespace-nowrap">
          PKG-FORUM
        </div>
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search packages, people..."
            className="w-full py-2 pl-10 pr-4 bg-[#070709] rounded-lg text-white text-sm placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 font-martian-mono"
          />
          <span className="absolute left-3 top-2 text-gray-500">
            <Search className="w-5 h-5 text-custom-them" />
          </span>
        </div>

        <div className="flex items-center flex-1 sm:space-x-4 space-x-1 justify-end">
          <Bell className="md:text-3xl text-lg" />
          <button className="flex items-center  px-2 sm:px-4  py-1 sm:py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg  h-6 sm:h-9">
            <SquarePen className="sm:mr-2 sm:h-4 h-2 mr-1 font-martian-mono sm:text-sm text-[8px]" />
            Write
          </button>
          <div className="flex items-center sm:space-x-3 space-x-1 bg-[#1E1F23] rounded-md pr-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className=" w-4 sm:w-10 sm:h-9 h-4 rounded-md object-cover"
            />
            <span className="text-white  text-[8px] sm:text-xs font-martian-mono">
              @suzanpradhan
            </span>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 w-full " />
    </nav>
  );
}


"use client";
import Image from "next/image";
import { Search, Bell, SquarePen } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="bg-[#15161A]">
      <div className="flex p-4 items-center">
        <div className="text-custom-them text-xl font-bold flex-1 font-martian-mono">PKG-FORUM</div>
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search packages, people..."
            className="w-full py-2 px-4 bg-[#070709] rounded-lg text-white placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 font-martian-mono"
          />
          <span className="absolute left-3 top-2 text-gray-500">
            <Search className="w-5 h-5 text-custom-them" />
          </span>
        </div>
        <div className="flex items-center flex-1 space-x-4 justify-end">
          <Bell className="text-3xl" />
          <button className="flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
            <SquarePen className="mr-2 h-5 font-martian-mono"  />
            Write
          </button>
          <div className="flex items-center space-x-3 bg-[#1E1F23] rounded-md pr-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-10 h-10 rounded-md object-cover"
            />  
            <span className="text-white text-xs font-martian-mono">@suzanpradhan</span>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
    </nav>
  );
}

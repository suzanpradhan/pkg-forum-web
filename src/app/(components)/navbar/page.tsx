
import { Search, Bell, SquarePen } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="flex items-center p-4 bg-[#15161A]">
      <div className="text-[#F65930] flex-1 text-xl font-bold font-martian-mono">
        PKG-FORUM
      </div>

      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search packages, people..."
          className="w-full py-2 px-4 bg-[#1E1F23] rounded-lg text-white placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 font-martian-mono text-custom-sm"
        />
        <span className="absolute left-3 top-2 text-gray-500">
          <Search className="w-5 h-5 text-orange-500" />
        </span>
      </div>

      <div className="flex items-center flex-1 space-x-4 justify-end">
        <Bell className="text-3xl" />

        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-martian-mono text-custom-sm">
            <SquarePen className="mr-2 h-5" />
            Write
          </button>
        </div>

        <div className="flex items-center space-x-3 bg-[#1E1F23] rounded-md pr-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-10 h-10 rounded-md object-cover"
          />
          <span className="text-white text-xs">@suzanpradhan</span>
        </div>
      </div>
    </nav>
  );
}

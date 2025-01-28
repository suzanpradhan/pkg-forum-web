"use client";

import { Airplay, Flame, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <div className="md:hidden flex justify-between p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white"
        >
          {isSidebarOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } bg-[#15161A] w-48 min-h-screen flex flex-col p-4 border-r border-gray-700 md:block`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            href="/discover"
            className="flex items-center space-x-3 text-custom-them hover:text-orange-400"
          >
            <Airplay className="w-5 h-5" />
            <span className="text-xs font-martian-mono">Discover</span>
          </Link>
          <Link
            href="/popular"
            className="flex items-center space-x-3 text-gray-300 hover:text-orange-400"
          >
            <Flame className="w-5 h-5" />
            <span className="text-xs font-martian-mono">Popular</span>
          </Link>
          <div>
            <button
              onClick={() => setIsTopicsOpen(!isTopicsOpen)}
              className="flex items-center justify-between text-gray-300 hover:text-orange-400 w-full"
            >
              <div className="flex items-center space-x-3">
                <Lightbulb className="w-5 h-5" />
                <span className="text-xs font-martian-mono">Topics</span>
              </div>
              {isTopicsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isTopicsOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    href="/topics/flutter"
                    className="text-gray-400 text-xs font-martian-mono"
                  >
                    Flutter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/python"
                    className="text-gray-400 text-xs font-martian-mono"
                  >
                    Python
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/javascript"
                    className="text-gray-400 text-xs font-martian-mono"
                  >
                    JavaScript
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/rust"
                    className="text-gray-400 text-xs font-martian-mono"
                  >
                    Rust
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/typescript"
                    className="text-gray-400 text-xs font-martian-mono"
                  >
                    TypeScript
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/php"
                    className="text-gray-400 text-xs font-martian-mono"
                  >
                    PHP
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

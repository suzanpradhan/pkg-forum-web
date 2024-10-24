import React from "react";
import Profile from "./(components)/Profile";
import Function from "./(components)/Function";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8 p-4 ">
      <div className="w-1/4 -ml-5 border-r border-gray-500 pr-6 -mt-14 ">
        <div className="mt-8">
          <Profile />
        </div>
      </div>
      <div className="flex-1 h-screen"> 
        <Function />
        <div className="p-10 py-4">{children}</div>
      </div>
      <div className="border-r border-gray-500 h-screen mr-10 -mt-14"></div>
    </div>
  );
}

import React from "react";
import Function from "./(components)/Function";
import SearchPageAside from "@/app/(commonComponents)/SearchPageAside";
import LanguageType from "@/app/(commonComponents)/LanguageType";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex gap-4">
        <div className="relative border-r border-transparent">
         <div className="absolute right-0 -mr-7 -mt-4   border-r border-gray-700 h-full"></div>

          <Function />
          <hr className="border-gray-500  " />
          <div>{children}</div>
        </div>
        <div className="mt-4 space-y-4 shrink ml-10">
          <SearchPageAside />
          <LanguageType />
        </div>
      </div>
    </div>
  );
}

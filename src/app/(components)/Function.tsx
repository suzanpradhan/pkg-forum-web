"use client";
import { useState } from "react";

export default function SearchDetail() {
  const [selectedItem, setSelectedItem] = useState("Overview");

  const tabs = ["Overview", "Posts", "Comments", "Saved"];

  return (
    <div className="flex flex-1 gap-12">
      <div className=" w-11/12">
        <div className="flex ">
          {tabs.map((tab, index) => (
            <p
              key={index}
              className={`text-sm font-martian-mono cursor-pointer ${
                selectedItem === tab
                  ? "text-white border-b-2 border-red-500"
                  : "text-gray-500"
              } ${index > 0 ? "ml-8" : ""}`}
              onClick={() => setSelectedItem(tab)}
            >
              {tab}
            </p>
          ))}
        </div>

        <hr className="border-gray-500 -ml-8  -mr-24" />
      </div>
    </div>
  );
}

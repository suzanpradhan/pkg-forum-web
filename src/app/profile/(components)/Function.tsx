"use client";
import Link from "next/link";
import { useState } from "react";

export default function Function() {
  const [selectedItem, setSelectedItem] = useState("Overview");

  const tabs = [
    { tabname: "Overview", link: "/profile " },
    { tabname: "Post", link: "/profile/post" },
    { tabname: "Comments", link: "/profile/comment" },
    { tabname: "Saved", link: "" },
  ];

  return (
    <div className="flex flex-1 gap-12">
      <div className=" w-11/12">
        <div className="flex ">
          {tabs.map((tab, index) => (
            <Link key={index} href={tab.link}>
              <p
                className={`text-sm font-martian-mono cursor-pointer ${
                  selectedItem === tab.tabname
                    ? "text-white border-b-2 border-red-500"
                    : "text-gray-500"
                } ${index > 0 ? "ml-8" : ""}`}
                onClick={() => setSelectedItem(tab.tabname)}
              >
                {tab.tabname}
              </p>
            </Link>
          ))}
        </div>
        <hr className="border-gray-500 -ml-8  -mr-24" />
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
export default function Function() {
  const [selectedItem, setSelectedItem] = useState("Packages");

  const tabs = [
    { tabname: "Packages", link: "/searchDetails" },
    { tabname: "Posts", link: "/searchDetails/searchDetail" },
    { tabname: "People", link: "" },
  ];
  return (
    <div className="flex mt-4">
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
  );
}

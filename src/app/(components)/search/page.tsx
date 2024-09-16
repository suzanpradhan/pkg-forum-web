"use client";
import { useState } from "react";
import SearchPageAside from "../SearchPageAside";
import LanguageType from "../LanguageType";
import Card from "../Card";

export default function Search() {
  const [selectedItem, setSelectedItem] = useState("Packages");

  return (
    <div>
      <div className="flex mt-4">
        <p
          className={`text-sm font-martian-mono cursor-pointer ${
            selectedItem === "Packages"
              ? "text-white border-b-2 border-red-500"
              : "text-gray-500"
          }`}
          onClick={() => setSelectedItem("Packages")}
        >
          Packages
        </p>
        <p
          className={`text-sm font-martian-mono cursor-pointer ml-8 ${
            selectedItem === "Posts"
              ? "text-white border-b-2 border-red-500"
              : "text-gray-500"
          }`}
          onClick={() => setSelectedItem("Posts")}
        >
          Posts
        </p>
        <p
          className={`text-sm font-martian-mono cursor-pointer ml-8 ${
            selectedItem === "People"
              ? "text-white border-b-2 border-red-500"
              : "text-gray-500"
          }`}
          onClick={() => setSelectedItem("People")}
        >
          People
        </p>
      </div>

      <hr className="border-gray-500 " />
      <div className="flex gap-4">
        <Card />
        <div className="mt-4 space-y-4 shrink">
          <SearchPageAside />
          <LanguageType />
        </div>
      </div>
    </div>
  );
}

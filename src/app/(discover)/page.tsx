"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import SearchPageAside from "../(commonComponents)/SearchPageAside";
import LanguageType from "../(commonComponents)/LanguageType";
import Card from "../(commonComponents)/Card";
export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-[#15161A] flex flex-1">
      <div className=" gap-6 p-4 -mt-14 -ml-10 ">
        <Card />
      </div>

      <div className=" flex gap-x-4 ">
        <div className="border-r border-gray-700 -mt-10 h-screen"></div>
        <div className=" -mt-6  ">
          <SearchPageAside />
          <div className="mt-4">
            <LanguageType />
          </div>
        </div>
      </div>
    </div>
  );
}

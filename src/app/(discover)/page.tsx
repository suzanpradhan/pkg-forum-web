"use client";
import { useSession } from "next-auth/react";
import HomePeopleComponent from "../(commonComponents)/HomePeopleComponent";
import LanguageType from "../(commonComponents)/LanguageType";
import PackageCard from "../(commonComponents)/PackageCard";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-[#15161A] flex flex-1 md:shrink-0">
      <div className="gap-6 p-4 -mt-14 -ml-10 ">
        <PackageCard />
      </div>

      <div className="flex gap-x-4">
        <div className="border-r border-gray-700 -mt-10 h-screen"></div>
        <div className="sm:-mt-6 mt-0">
          <div className="sm:block hidden ">
            <HomePeopleComponent />
          </div>
          <div className="sm:block hidden mt-4">
            <LanguageType />
          </div>
        </div>
      </div>
    </div>
  );
}

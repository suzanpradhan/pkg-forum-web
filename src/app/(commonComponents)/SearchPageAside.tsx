import React from "react";
import Image from "next/image";
export default function SearchPageAside() {
  const profiles = [
    {
      name: "Sumnima Poudel",
      username: "@sumipoudel",
      avatar: "/images/avatar.avif",
    },
    {
      name: "John Doe",
      username: "@johndoe",
      avatar: "/images/avatar.avif",
    },
    {
      name: "Jane Smith",
      username: "@janesmith",
      avatar: "/images/avatar.avif",
    },
    {
      name: "Alice Johnson",
      username: "@alicejohnson",
      avatar: "/images/avatar.avif",
    },
    {
      name: "Bob Brown",
      username: "@bobbrown",
      avatar: "/images/avatar.avif",
    },
  ];

  return (
    <>
      <div className="border border-[#2D323B]  rounded-lg p-4  w-80  ">
        <div>
          <h3 className="text-white text-base font-martian-mono">People</h3>
        </div>

        <div className="">
          {profiles.map((profile, index) => (
            <div key={index} className="flex  ">
              <div className="mt-2">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={30}
                  height={15}
                  className="rounded-full"
                />
              </div>
              <div className="mt-2 ml-4">
                <p className="text-white text-sm font-martian-mono">
                  {profile.name}
                </p>
                <p className="text-gray-500 text-xs font-martian-mono mt-1">
                  {profile.username}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="text-custom-them text-xs font-martian-mono hover:underline">
            Show More
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
}

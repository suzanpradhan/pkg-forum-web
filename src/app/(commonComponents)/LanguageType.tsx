import { Dot } from "lucide-react";
import Image from "next/image";
export default function LanguageType() {
  const groups = [
    {
      name: "Python",
      members: "120k",
      online: 378,
      avatar: "/images/flutterIcon.png ",
    },
    {
      name: "JavaScript",
      members: "98k",
      online: 300,
      avatar: "/images/avatar.avif",
    },
    {
      name: "ReactJS",
      members: "85k",
      online: 250,
      avatar: "/images/avatar.avif",
    },
    {
      name: "NodeJS",
      members: "70k",
      online: 200,
      avatar: "/images/avatar.avif",
    },
    {
      name: "TypeScript",
      members: "60k",
      online: 180,
      avatar: "/images/avatar.avif",
    },
  ];

  return (
    <div className="border border-[#2D323B]  rounded-lg p-4  w-80  ">
      <div>
        <h3 className="text-white text-base font-martian-mono">Group</h3>
      </div>

      {groups.map((group, index) => (
        <div key={index} className="flex">
          <div className="mt-3">
            <Image
              src={group.avatar}
              className="h-8 w-12 rounded-full"
              height={48}
              width={32}
              alt={group.name}
            />
          </div>
          <div className="mt-2 ml-4">
            <p className="text-white text-sm font-martian-mono">{group.name}</p>
            <div className="flex items-center">
              <p className="text-gray-500 text-xs font-martian-mono mt-1">
                {group.members}
              </p>
              <p className="text-gray-500 text-xs font-martian-mono mt-1 ml-2">
                Members
              </p>
              <Dot className="h-6 w-6 text-green-500 mx-2" />
              <span className="text-xs text-gray-500 mt-1">{group.online}</span>
              <span className="text-xs text-gray-500 mt-1 ml-2">Online</span>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-4 ">
        <button className="text-custom-them text-xs font-martian-mono hover:underline">
          Show More
        </button>
      </div>
    </div>
  );
}

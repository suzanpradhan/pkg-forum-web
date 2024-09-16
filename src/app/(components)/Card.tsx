"use client";

import Image from "next/image";
import { Users, Globe, Dot, Github } from "lucide-react";

const Search = () => {
  const cardsData = [
    {
      title: "flutter",
      version: "V3.16",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      members: 852,
      online: 265,
      mainImage: "/images/FlutterBackground.png",
      iconImage: "/images/flutterIcon.png",
      badgeImage: "/images/pub.png",
    },
    {
      title: "flutter",
      version: "V3.16",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      members: 852,
      online: 265,
      mainImage: "/images/FlutterBackground.png",
      iconImage: "/images/flutterIcon.png",
      badgeImage: "/images/pub.png",
    },
    {
      title: "flutter",
      version: "V3.16",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      members: 852,
      online: 265,
      mainImage: "/images/FlutterBackground.png",
      iconImage: "/images/flutterIcon.png",
      badgeImage: "/images/pub.png",
    },
  ];

  return (
    <div className="flex flex-1 gap-4 mt-4 h-80 w-[70%]">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg shadow-lg w-full md:w-1/3 flex-grow"
        >
          <div className="relative h-14 w-full">
            <Image
              src={card.mainImage}
              alt={card.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          <div className="flex items-center justify-between px-4 mt-4">
            <div className="relative h-12 w-12">
              <Image
                src={card.iconImage}
                alt={card.title}
                layout="fill"
                objectFit="contain"
                className="rounded-full -mt-10"
              />
            </div>
            <div className="flex -mt-6">
              <div className="relative h-6 w-8">
                <Image
                  src={card.badgeImage}
                  alt="Badge"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="bg-white text-black text-xs px-2 py-1 rounded ">
                pub.dev
              </span>
            </div>
          </div>

          <div className="text-start px-4 -mt-10">
            <div className="flex items-center">
              <h3 className="mt-4 text-base font-semibold text-white font-martian-mono">
                {card.title}
              </h3>
              <p className="mt-4 text-sm text-gray-500 ml-4">{card.version}</p>
            </div>

            <p className="mt-2 text-gray-400 text-base font-satoshi">
              {card.description}
            </p>
            <div className="flex justify-start items-center space-x-3 mt-4">
              <Github className="h-5 w-5 text-white cursor-pointer" />
              <Globe className="h-5 w-5 text-white cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 p-4">
            <div className="flex items-center text-gray-400 space-x-1">
              <Users className="h-4 w-4 text-red-500" />
              <span className="text-xs">{card.members} Members</span>
            </div>
            <div className="flex items-center text-gray-400 space-x-1">
              <Dot className="h-6 w-6 text-green-500" />
              <span className="text-xs">{card.online} Online</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;

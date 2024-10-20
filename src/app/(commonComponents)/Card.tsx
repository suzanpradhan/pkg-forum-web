"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useAppDispatch, useAppSelector } from "@/core/redux/clientStore";
import { RootState } from "@/core/redux/store";
import { PaginatedResponseType } from "@/core/types/responseTypes";
import packagesApi from "@/modules/packages/packagesApi";
import { PackageType } from "@/modules/packages/packagesType";
import { Dot, Github, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card = () => {
  const dispatch = useAppDispatch();
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    dispatch(packagesApi.endpoints.getPackages.initiate(pageIndex));
  }, [dispatch, pageIndex]);

  const queryState = useAppSelector(
    (state: RootState) => state.baseApi.queries[`getPackages`]
  );

  console.log("queryState", queryState);

  const packagesData = queryState?.data as PaginatedResponseType<PackageType>;
  const error = queryState?.error;
  const status = queryState?.status;

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching packages: {error.message}</div>;
  }
  console.log("results", packagesData?.results);
  return (
    <BackgroundBeamsWithCollision>
      <div className=" grid grid-cols-3 gap-6 mt-4 relative w-full">
        {packagesData?.results.length === 0 ? (
          <div>No packages available.</div>
        ) : (
          packagesData?.results.map((card, index) => (
            <Link
              href={`/${card.id}`}
              key={card.id}
              className="bg-gray-800 rounded-lg shadow-lg  flex-1"
            >
              <div className="flex items-center justify-between">
                <div className="relative h-12 w-full">
                  {card.cover_image && (
                    <Image
                      src={`${card.cover_image}`}
                      alt="cover image"
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  )}

                  {card.image && (
                    <div className="absolute top-12 left-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src={`${card.image}`}
                        alt="overlay image"
                        width={40}
                        height={40}
                        className="object-contain w-10 h-10"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex mt-4 ml-40">
                <img
                  src="/images/pub.png"
                  alt="Flutter"
                  className="px-[2px] text-xl"
                />
                <span className="bg-white text-black text-xs px-2 py-1 rounded mr-4">
                  pub.dev
                </span>
              </div>

              <div className="text-start px-4">
                <div className="flex">
                  <h3 className="mt-4 text-base font-martian-mono text-white">
                    {card.title}
                  </h3>
                  {/* version */}
                  <div className=" flex mt-[22px] ml-5 font-satoshi text-gray-500 text-xs">
                    <p>V</p>
                    <p>{card.version}</p>
                  </div>
                </div>
                <p className="mt-2 text-white  text-sm font-satoshi line-clamp-2">
                  {card.description}
                </p>
                <div className="flex justify-start items-center space-x-3 mt-4">
                  {card.socials.map((social) => {
                    return (
                      <Link
                        key={social.social}
                        href={social.link as string}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.social === "github" && (
                          <Github className="h-5 w-5 text-white cursor-pointer" />
                        )}
                        {social.social === "website" && (
                          <Globe className="h-5 w-5 text-white cursor-pointer" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between items-center  p-4">
                <div className="flex items-center text-gray-400 space-x-1">
                  <Users className="h-4 w-4 text-red-500" />
                  <span className="text-xs font-martian-mono text-white">
                    {" "}
                    882 Members
                  </span>
                </div>
                <div className="flex items-center text-gray-400 space-x-1">
                  <Dot className="h-6 w-6 text-green-500" />
                  <span className="text-xs font-martian-mono text-white">
                    {" "}
                    285 Online
                  </span>
                </div>
              </div>

              <BackgroundBeams />
              {card.id}
            </Link>
          ))
        )}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Card;

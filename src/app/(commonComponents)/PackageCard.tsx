"use client";
import { useAppDispatch, useAppSelector } from "@/core/redux/clientStore";
import { RootState } from "@/core/redux/store";
import { PaginatedResponseType } from "@/core/types/responseTypes";
import packagesApi from "@/modules/packages/packagesApi";
import {
  PackageType,
  PackageTypeValidation,
} from "@/modules/packages/packagesType";
import { Dot, Github, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PackageCardProps {
  packageId?: string; // Optional prop for individual package
}

const PackageCard = ({ packageId }: PackageCardProps) => {
  const dispatch = useAppDispatch();
  const [pageIndex, setPageIndex] = useState(1);

  // Fetch all packages or a specific package based on packageId
  useEffect(() => {
    if (packageId) {
      dispatch(packagesApi.endpoints.getPackageById.initiate(packageId));
    } else {
      dispatch(packagesApi.endpoints.getPackages.initiate(pageIndex));
    }
  }, [dispatch, packageId, pageIndex]);

  const queryState = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[
        packageId ? `getPackageById-${packageId}` : `getPackages`
      ]
  );

  const packagesData = queryState?.data as
    | PaginatedResponseType<PackageType>
    | PackageTypeValidation;
  const error = queryState?.error;
  const status = queryState?.status;

  // Handle loading state
  if (status === "pending") {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error fetching packages: {error.message}</div>;
  }

  // Ensure packagesData is defined before accessing results
  const results = packagesData
    ? "results" in packagesData
      ? packagesData.results
      : [packagesData]
    : [];

  // Handle no packages available
  if (results.length === 0) {
    return <div>No packages available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 relative w-full laptop:grid-cols-3">
      {results.map((card) => (
        <Link
          href={`/${card.id}`} // Link to individual   detail page
          key={card.id}
          className="bg-gray-800 rounded-lg shadow-lg flex-1"
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
              src="/assets/pub.png"
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
              <div className="flex mt-[22px] ml-5 font-satoshi text-gray-500 text-xs">
                <p>V</p>
                <p>{card.version}</p>
              </div>
            </div>
            <p className="mt-2 text-white text-sm font-satoshi line-clamp-2">
              {card.description}
            </p>
            <div className="flex justify-start items-center space-x-3 mt-4">
              {card.socials.map((social) => (
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
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center p-4">
            <div className="flex items-center text-gray-400 space-x-1">
              <Users className="h-4 w-4 text-red-500" />
              <span className="text-xs font-martian-mono text-white">
                882 Members
              </span>
            </div>
            <div className="flex items-center text-gray-400 space-x-1">
              <Dot className="h-6 w-6 text-green-500" />
              <span className="text-xs font-martian-mono text-white">
                285 Online
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PackageCard;

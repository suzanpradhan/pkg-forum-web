"use client";
import { useAppDispatch, useAppSelector } from "@/core/redux/clientStore";
import { RootState } from "@/core/redux/store";
import packagesApi from "@/modules/packages/packagesApi";
import { PackageTypeValidation } from "@/modules/packages/packagesType";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const PostPageAside = ({ packageId }: { packageId: string }) => {
  const dispatch = useAppDispatch();

  const packageData = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getPackageById-${packageId}`]
        ?.data as PackageTypeValidation
  );

  console.log("packageId", packageId);

  useEffect(() => {
    packageId &&
      dispatch(packagesApi.endpoints.getPackageById.initiate(packageId));
  }, [dispatch, packageId]);

  console.log("packageData", packageData);

  return (
    <div className="lg:w-1/4 sticky top-0 bg-[#15161A]">
      <div className="shadow-lg p-4 w-[318px] -mt-2 -ml-5 border border-gray-500 font-martian-mono">
        <div className="text-white">
          {packageData ? (
            <>
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

              <img
                src="/images/flutterIcon.png"
                alt="flutter"
                className="-mt-4"
              />
              <h3 className="text-xl font-bold font-martian-mono mt-4">
                {packageData.title}
              </h3>

              <p className="mt-4 text-sm text-gray-500">
                {packageData.version}
              </p>
              <p className="text-gray-400 text-xs mt-2 font-satoshi">
                {packageData.description}
              </p>
              <div className="flex justify-start items-center space-x-3 mt-4">
                {packageData.socials?.map((social, index) => {
                  return (
                    <Link
                      key={index}
                      href={social.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* {social.social === "github" ? (
                        <Github className="h-5 w-5 text-white cursor-pointer" />
                      ) : null} */}
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
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center text-gray-400 space-x-1">
                  {/* <Users className="h-4 w-4 text-red-500" /> */}
                  <span className="text-xs font-martian-mono">
                    {/* {packageData.members} Members */}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <p>Loading package details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPageAside;

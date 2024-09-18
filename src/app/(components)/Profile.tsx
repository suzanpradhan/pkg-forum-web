import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <h1 className="text-white text-xl font-martian-mono">My Profile</h1>
      <div className="relative h-28 w-28 rounded-2xl overflow-hidden mt-4">
        <Image
          src={"/images/avatar.avif"}
          alt="avatar"
          className=" h-full w-full"
          fill
          objectFit="cover"
        />
      </div>
      <h1 className="text-white font-martian-mono text-base mt-2">
        @chandlerbing
      </h1>

      <p className="text-white text-sm font-satoshi ">
        Lorem Ipsum available, but the majority have suffered alteration
        majority{" "}
      </p>
      <hr className="border  border-gray-500 mt-4 w-[316px] -ml-9" />

      <div className="flex ">
        <div className="flex items-baseline ">
          <p className="text-white text-sm font-martian-mono mt-4">4</p>
          <p className="text-gray-500 text-xs ml-4">Post</p>
        </div>
        <div className="flex items-baseline  ml-8 ">
          <p className="text-white text-sm font-martian-mono mt-4">28</p>
          <p className="text-gray-500 text-xs ml-4">Comment</p>
        </div>
      </div>
      <hr className="border  border-gray-500 mt-4 w-[316px] -ml-9" />
    </div>
  );
}

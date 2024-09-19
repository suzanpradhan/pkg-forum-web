"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import PostPageAside from "@/app/(commonComponents)/PostPageAside";
import { Plus } from "lucide-react";

type PostListLayoutProps = {
  children: ReactNode;
};
const PostListLayout = ({ children }: PostListLayoutProps) => {
  const pathname = usePathname();
  const isPostListPage = pathname === "/post/postList";
  return (
    <div className="flex-1 flex">
      <div className="w-5/6 space-y-8 mr-8 pr-6 pt-4 border-r border-gray-500 -mt-4">
        {children}
      </div>

      <div className="lg:w-1/4 sticky top-0 mt-4 bg-[#15161A]">
        {isPostListPage && (
          <div className="flex space-x-6 mb-4">
            <Link href="/createPost">
              <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-lg w-44 flex justify-around items-center border border-gray-500">
                <Plus />
                <h3 className="font-martian-mono">Create Post</h3>
              </div>
            </Link>
            <button className="text-sm h-10 w-16 bg-[#F65930] rounded-lg">
              Join
            </button>
          </div>
        )}
        <PostPageAside />
      </div>
    </div>
  );
};
export default PostListLayout;

"use client";
import { ReactNode } from "react";

type PostListLayoutProps = {
  children: ReactNode;
  params: { packageId: number };
};
const PostListLayout = ({ children, params }: PostListLayoutProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
export default PostListLayout;

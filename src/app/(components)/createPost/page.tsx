"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronRight, X } from "lucide-react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

import Link from "next/link";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function CreatePost() {  
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="w-3/4 border-r pr-4 -mt-4 p-4 border-gray-500">
      <div className="flex items-center mt-4">
        <div className="py-2 bg-[#1E1F23] rounded-3xl w-44 flex justify-evenly border border-gray-500">
          <img
            src="/images/fluttericon.png"
            alt="flutter"
            className="w-10 h-10"
          />
          <h3 className="flex font-martian-mono text-white text-xs font-medium mt-3">
            flutter
          </h3>
        </div>
        <ChevronRight className="ml-4" />
        <p className="text-white font-martian-mono text-base ml-4">
          Create Post
        </p>
      </div>
      <div className="mt-8">
        <h3 className="font-martian-mono text-white text-sm">Title</h3>
        <div className="py-4 bg-[#1E1F23] rounded-lg w-full flex justify-start border border-gray-500 mt-4">
          <p className="text-white text-sm font-martian-mono ml-4">
            Is Flutter the best language for frontend?
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-martian-mono text-white text-sm">Tags</h3>
        <div className="py-4 bg-[#1E1F23] rounded-lg w-full flex justify-start border border-gray-500 mt-4 h-14">
          <div className="bg-[#2D2E34] flex items-center justify-center h-8 w-28 rounded-lg ml-4 -mt-1">
            <p className="font-martian-mono text-white text-xs">flutter</p>
            <X className="ml-4 bg-[#15161ACC] rounded-full" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-martian-mono text-white text-sm">Description</h3>

        <div className="bg-[#1E1F23] rounded-lg border border-gray-500 mt-4 h-96 overflow-hidden">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbarClassName="flex sticky top-0 z-50 !bg-[#1E1F23] !text-white"
            wrapperClassName="wrapper-class h-full"
            editorClassName="editor-class h-full overflow-y-auto p-4 text-white rounded-lg"
            editorStyle={{ maxHeight: "100%", overflowY: "auto" }}
          />
        </div>
        <div className="flex space-x-6 justify-end">
          <div className="py-2 text-sm font-medium text-white bg-[#191A1F] rounded-lg w-36 mt-4 flex justify-around border-gray-500 border font-martian-mono">
            <h3 className="font-martian-mono text-xs flex justify-center">
              Save draft
            </h3>
          </div>

          <Link href={"/postList"}>
            <button className="text-xs h-10 w-16 bg-[#F65930] rounded-lg mt-4 font-martian-mono">
              Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

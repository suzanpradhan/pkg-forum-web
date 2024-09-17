import {
  Users,
  ThumbsUp,
  Share,
  Dot,
  Globe,
  Github,
  ArrowBigUpDash,
  ArrowBigDown,
  MessageSquareText,
  BookmarkMinus,
  Forward,
  Plus,
  Ellipsis,
  Navigation,
} from "lucide-react";
import DetailBox from "../detailBox";
import BottonGroup from "../ButtonGroup";
import PostPageAside from "../PostPageAside";
interface Props {
  imgSrc: string;
  title: string;
  description: string;
  url: string;
}
const PostDetail = () => {
  return (
    <div className="bg-[#15161A]  mb-6 max-w-full   py-4 -mx-5 flex items-start    border-r -mt-4 border-gray-700 ">
      <div className=" right-item w-full">
        <h2 className="text-white text-lg font-semibold mb-2 font-martian-mono">
          Contrary to popular belief, Lorem Ipsum?
        </h2>
        <p className="text-[#D2D2D2] text-base mb-4 font-satoshi">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words...
        </p>

        <img
          src="/images/post1.png"
          alt="Post Image"
          className="w-full h-48 rounded-md object-cover mb-4 mt-4"
        />
        <DetailBox />
        <BottonGroup />

        <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-xl  w-full mt-4 flex  justify-between border border-gray-500">
          <div className="flex items-center">
            <img src="/images/avatar.avif" alt="avatar" className="h-9 ml-4" />
            <p className="ml-2 text-gray-500">add your comment</p>
          </div>
          <Navigation className=" mt-2 mr-4" />
        </div>

        <div className="mt-8">
          <DetailBox />
          <p className="text-[#D2D2D2] text-base mb-4 font-satoshi mt- ml-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
          </p>
          <BottonGroup />
        </div>

        <div className="border-r border-gray-700 "></div>
        <div className="">
          <div className="mt-8">
            <DetailBox />
            <p className="text-[#D2D2D2] text-base mb-4 font-satoshi mt-4 ml-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </p>
            <div className="-mt-4">
              <BottonGroup />
            </div>
          </div>

          <div className="ml-10 ">
            <div className="mt-8">
              <DetailBox />
              <p className="text-[#D2D2D2] text-base mb-4 font-satoshi mt-4 ml-8">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div className="-mt-4">
                <BottonGroup />
              </div>
            </div>

            <div className="mt-8">
              <DetailBox />
              <p className="text-[#D2D2D2] text-base mb-4 font-satoshi mt-4 ml-8">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div className="-mt-4">
                <BottonGroup />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <DetailBox />
          <p className="text-[#D2D2D2] text-base mb-4 font-satoshi mt-4 ml-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
          </p>
          <div className="-mt-4">
            <BottonGroup />
          </div>
        </div>
      </div>
      <Ellipsis className=" mr-4 " />
    </div>
  );
};

const PostPage = () => {
  return (
    <div className=" bg-[#15161A] min-h-screen py-0 px-0 flex">
      <div className="container mx-auto flex flex-1">
        <div className="flex-1 lg:pr-6">
          <div className="space-y-6">
            <PostDetail />
          </div>
        </div>

        <PostPageAside />
      </div>
    </div>
  );
};

export default PostPage;

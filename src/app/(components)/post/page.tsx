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
} from "lucide-react";
interface Props {
  imgSrc: string;
  title: string;
  description: string;
  url: string;
}

const PostCard = () => {
  return (
    <div className="bg-[#15161A]  mb-6 max-w-full   py-4 -mx-5 flex items-start    border-r -mt-4 border-gray-500 ">
      <div className=" right-item w-full">
        <h2 className="text-white text-lg font-semibold mb-2 font-martian-mono">
          Contrary to popular belief, Lorem Ipsum?
        </h2>
        <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words...
        </p>
        <div className="py-2 text-xs font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
          Flutter
        </div>
        <img
          src="/images/post1.png"
          alt="Post Image"
          className="w-full h-48 rounded-md object-cover mb-4 mt-4"
        />
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <img
              src="/images/pub.png"
              alt="User Avatar"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-white font-martian-mono">@suzanpradhan</span>
            <Dot className="text-white" />
            <span className="text-white font-martian-mono">2 hours ago</span>
          </div>
        </div>

        <div className=" flex text-start space-x-4 ">
          <div className=" text-sm font-medium text-white  rounded-3xl w-44  mt-4 flex bg-[#1E1F23] border border-gray-500 justify-between items-center ">
            <ArrowBigUpDash className="text-[#F65930] " />
            <p className="text-white text-xm  font-martian-mono">Upvote</p>

            <h3 className="border-r-[1px] -ml-2 pr-2 border-gray-500 font-martian-mono">
              {" "}
              5k
            </h3>

            <ArrowBigDown className="ml-3" />
          </div>
          <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-24  mt-4 flex  justify-center border border-gray-500">
            <MessageSquareText />
            <h3 className=" ml-2">2.5k</h3>
          </div>
          <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-14 mt-4 flex  justify-center border border-gray-500">
            <BookmarkMinus />
          </div>
          <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-28 mt-4 flex   border border-gray-500 justify-around items-center">
            <Forward />
            <h3 className="ml-2 font-martian-mono">share</h3>
          </div>
        </div>

        {/* border */}

        <hr className="border-gray-600  mt-4 -ml-5 -mr-10" />

        <div className=" mt-8 flex justify-between  ">
          <div>
            <h2 className="text-white text-sm font-semibold mb-2 font-martian-mono">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece
            </h2>
            <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
              Flutter
            </div>
            <h3 className="font-satoshi mt-3">
              https://www.pinterest.com/pin/840907180378pinterest.com/pin/840907180378
            </h3>

            <div className="flex items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/pub.png"
                  alt="User Avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-white font-martian-mono">
                  @suzanpradhan
                </span>
                <Dot className="text-white" />
                <span className="text-white font-martian-mono">
                  2 hours ago
                </span>
              </div>
            </div>
            <div className=" flex text-start space-x-4 ">
              <div className=" text-sm font-medium text-white  rounded-3xl w-44  mt-4 flex bg-[#1E1F23] border border-gray-500 justify-between items-center ">
                <ArrowBigUpDash className="text-[#F65930] " />
                <p className="text-white text-xm  font-martian-mono">Upvote</p>

                <h3 className="border-r-[1px] -ml-2 pr-2 border-gray-500 font-martian-mono">
                  {" "}
                  5k
                </h3>

                <ArrowBigDown className="ml-3" />
              </div>
              <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-24  mt-4 flex  justify-center border border-gray-500">
                <MessageSquareText />
                <h3 className=" ml-2">2.5k</h3>
              </div>
              <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-14 mt-4 flex  justify-center border border-gray-500">
                <BookmarkMinus />
              </div>
              <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-28 mt-4 flex   border border-gray-500 justify-around items-center">
                <Forward />
                <h3 className="ml-2 font-martian-mono">share</h3>
              </div>
            </div>
          </div>

          <img
            src="images/python.png "
            alt="python"
            className="h-28 w-40 mt-9"
          />
        </div>
        <hr className="border-gray-600  mt-4 -ml-5 -mr-10" />

        <div className=" mt-8 ">
          <h2 className="text-white text-sm    font-semibold mb-2 font-martian-mono">
            Contrary to popular belief, Lorem Ipsum?
          </h2>
          <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words...
          </p>
          <div className="flex space-x-4 mt-4">
            <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
              Flutter
            </div>
            <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
              Python
            </div>
            <div className="py-2 text-sm font-medium text-white bg-[#2D2E34] rounded-3xl w-20 flex justify-center font-martian-mono">
              React
            </div>
          </div>

          <div className="flex items-center justify-between text-gray-500 text-sm">
            <div className="flex items-center space-x-2 mt-4">
              <img
                src="/images/pub.png"
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-white font-martian-mono">
                @suzanpradhan
              </span>
              <Dot className="text-white" />
              <span className="text-white font-martian-mono">2 hours ago</span>
            </div>
          </div>
          <div className=" flex text-start space-x-4 ">
            <div className=" text-sm font-medium text-white  rounded-3xl w-44  mt-4 flex bg-[#1E1F23] border border-gray-500 justify-between items-center ">
              <ArrowBigUpDash className="text-[#F65930] " />
              <p className="text-white text-xm  font-martian-mono">Upvote</p>

              <h3 className="border-r-[1px] -ml-2 pr-2 border-gray-500 font-martian-mono">
                {" "}
                5k
              </h3>

              <ArrowBigDown className="ml-3" />
            </div>
            <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-24  mt-4 flex  justify-center border border-gray-500">
              <MessageSquareText />
              <h3 className=" ml-2">2.5k</h3>
            </div>
            <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-14 mt-4 flex  justify-center border border-gray-500">
              <BookmarkMinus />
            </div>
            <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-3xl w-28 mt-4 flex   border border-gray-500 justify-around items-center">
              <Forward />
              <h3 className="ml-2 font-martian-mono">share</h3>
            </div>
          </div>
        </div>
        <hr className="border-gray-600  mt-4 -ml-5 -mr-10" />
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
            <PostCard />
          </div>
        </div>

        <div className="lg:w-1/4 sticky top-0 bg-[#15161A]   ">
          <div className="flex space-x-6 -ml-5 ">
            <div className="py-2  text-sm font-medium text-white bg-[#2D2E34] rounded-lg w-44 mt-4 flex  justify-around border-gray-500 border ">
              <Plus />
              <h3 className="font-martian-mono">Create Post</h3>
            </div>
            <button className="text-sm  h-10 w-16 bg-[#F65930] rounded-lg mt-4">
              Join
            </button>
          </div>
          <div className=" shadow-lg  p-4 w-[310px] mt-4 -ml-5 border border-gray-500 font-martian-mono ">
            <div className="text-white">
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
                src="images/flutterIcon.png"
                alt="flutter"
                className=" -mt-4"
              />
              <h3 className="text-xl font-bold font-martian-mono mt-4">
                Flutter
              </h3>
              <p className="text-gray-400 text-xs mt-2 font-satoshi">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
              <div className="flex justify-start items-center space-x-3 mt-4">
                <Github className="h-5 w-5 text-white cursor-pointer" />
                <Globe className="h-5 w-5 text-white cursor-pointer" />
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center text-gray-400 space-x-1">
                  <Users className="h-4 w-4 text-red-500" />
                  <span className="text-xs font-martian-mono ">
                    882 Members
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

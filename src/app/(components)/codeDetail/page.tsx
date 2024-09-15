import React from "react";
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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import PostPage from "../post/page";
import PostPageAside from "../PostPageAside";

export default function CodeDetail() {
  const flutterCode = `class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}`;

  return (
    <div className="flex justify-between">
    
      <div> 
        <h2 className="text-white text-lg font-semibold mb-2 font-martian-mono w-2/3">
          Contrary to popular belief, Lorem Ipsum?
        </h2>
        <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <div className="mt-8 bg-[#191A1F]  rounded-lg shadow-lg relative">
          <SyntaxHighlighter  language="dart" style={solarizedlight} >
            {flutterCode}
          </SyntaxHighlighter >
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <img
                src="/images/avatar.avif  "
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
              {/* <h3 className="ml-2 font-martian-mono">share</h3>    */}
            </div>
          </div>
          <div className="py-2  text-sm font-medium text-white bg-[#1E1F23] rounded-xl  w-full mt-4 flex  justify-between border border-gray-500">
            <div className="flex items-center">
              <img
                src="/images/avatar.avif"
                alt="avatar"
                className="h-9 ml-4"
              />
              <p className="ml-2 text-gray-500">add your comment</p>
            </div>
            <Navigation className=" mt-2 mr-4" />
          </div>

          <div className="flex items-center justify-between text-gray-500 text-sm">
            <div className="flex items-center space-x-2 mt-4">
              <img
                src="/images/avatar.avif"
                alt="User Avatar"
                className="w-6 h-6 rounded-lg"
              />
              <span className="text-white font-martian-mono">
                @suzanpradhan
              </span>
              <Dot className="text-white" />
              <span className="text-white font-martian-mono">2 hours ago</span>
            </div>
          </div>
          <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi mt-4 ml-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
          </p>

          {/* <hr className="border-gray-600  mt-4 -ml-5 -mr-10" /> */}

          <div className=" mt-4 ml-8">
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
          {/* one div */}

          <div className="  text-gray-500 text-sm ">
            <div className="flex items-center space-x-2 mt-4">
              <img
                src="/images/avatar.avif"
                alt="User Avatar"
                className="w-6 h-6 rounded-md"
              />
              <span className="text-white font-martian-mono">
                @suzanpradhan
              </span>
              <Dot className="text-white" />
              <span className="text-white font-martian-mono">2 hours ago</span>
            </div>

            <div className=" mt-4 ml-8">
              <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi mt-4 ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div className=" flex text-start space-x-4 ">
                <div className=" text-sm font-medium text-white  rounded-3xl w-44  mt-4 flex bg-[#1E1F23] border border-gray-500 justify-between items-center ">
                  <ArrowBigUpDash className="text-[#F65930] " />
                  <p className="text-white text-xm  font-martian-mono">
                    Upvote
                  </p>

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
          </div>
        </div>
      </div>
        
    </div>
  );
}


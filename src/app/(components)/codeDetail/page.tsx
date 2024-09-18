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
import DetailBox from "../detailBox";
import ButtonGroup from "../ButtonGroup";

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
    <div className="flex justify-between flex-1">
      <div className="w-[94%]   ">
        <div className="mt-4">
          <div className="w-[90%]">
            <h2 className="text-white text-lg font-semibold mb-2 font-martian-mono ">
              Contrary to popular belief, Lorem Ipsum?
            </h2>
            <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          <div className="mt-4 bg-[#191A1F]   rounded-lg shadow-lg w-[94%] ">
            <SyntaxHighlighter
              language="dart"
              style={solarizedlight}
              customStyle={{ backgroundColor: "#191A1F" }}
            >
              {flutterCode}
            </SyntaxHighlighter>
          </div>
          <DetailBox />
          <div className="">
            <ButtonGroup />
          </div>

          <div className="w-[94%]">
            <div className="py-2   w-[94%] text-sm font-medium text-white bg-[#1E1F23] rounded-xl  mt-4 flex  justify-between border border-gray-500">
              <div className="flex items-center">
                <p className="ml-2 text-gray-500">add your comment</p>
              </div>
              <Share className="  mr-4" />
            </div>

            <DetailBox />
            <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi mt-2 ml-8 w-[94%] ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </p>
            <div className="-mt-4 ml-6 ">
              <ButtonGroup />
            </div>

            <div className="mt-8">
              <DetailBox />
              <p className="text-[#D2D2D2] text-sm mb-4 font-satoshi mt-2 ml-8 w-[94%]  ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>
              <div className=" -mt-4 ml-6 ">
                <ButtonGroup />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-r border-gray-500 w-0 mr-[50px] -mt-4"></div>
      <div className="-mr-4">
        <PostPageAside />
      </div>
    </div>
  );
}

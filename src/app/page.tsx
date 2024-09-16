// "use client";

// import { useSession, signOut } from "next-auth/react";
// import Link from "next/link";
// import NavBar from "@/app/(components)/navbar"
// import Sidebar from "@/app/(components)/sidebar";
// import Card from "@/app/(components)/card/page";

// export default function Home() {
//   const { data: session } = useSession();

//   return (
//     <div className="bg-[#15161A] min-h-screen text-gray-300">
//       <NavBar />

//       <main>
//         <div className="flex items-start">
//           <Sidebar />
//           <div className="border-r ml-1 border-red-600 h-full "></div>
//           <div className="flex-1 p-10 py-4">
//             {/* {session ? (
//               <div className="text-center"> */}
//             {/* <p className="mb-4">Welcome, {session.user?.name}!</p>
//                 <p className="mb-4">Your email: {session.user?.email}</p> */}
//             {/* <button
//                   onClick={() => signOut({ callbackUrl: "/" })}
//                   className="text-white bg-red-600 px-4 py-2 rounded"
//                 >
//                   Log Out
//                 </button> */}

//             {/* </div>
//             ) : (
//               <div className="text-center">
//                 <p className="mb-4">You are not logged in.</p>
//                 <Link href="/login" className="text-blue-500">
//                   Login
//                 </Link>
//               </div>
//             )} */}
//             <div className="py-6 ">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// app/page.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

import SearchPageAside from "./(components)/SearchPageAside";
import LanguageType from "./(components)/LanguageType";
import Card from "./(components)/Card"

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="bg-[#15161A]">
      <div className="py-6">
        <div className="flex w-full gap-6">
          <div className="flex-1 flex gap-6">
        <Card/>
          </div>
          <div className="">
             <SearchPageAside/>
          <LanguageType />
          </div>
         
        </div>
      </div>
    </div>
  );
}

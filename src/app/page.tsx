import NavBar from "@/app/(components)/navbar/page";

import Link from "next/link";

export const matadata={
  title:'PKG-FORUM'
}

export default function Home() {
  return (
    <div className="bg-[#15161A] min-h-screen text-gray-300">
      {/* Include the NavBar component */}
      <NavBar />
    

      <main className="p-8">
        <div className="h-full flex items-center justify-center">
          {/* <h1>Welcome Home page!</h1>
          <Link href="/login" className="ml-40">Login</Link>
          <Link href="/register" className="ml-40">Register</Link> */}
          
        </div>  
      </main>
    </div>
  );
}

import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }

  // Allow static files and assets
  if (pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  // Redirect authenticated users from `/login` to `/`
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect unauthenticated users from `/` or `/login`
  if (!token && pathname === "/") {
    return NextResponse.redirect(
      new URL(
        `/login?callback=${encodeURIComponent(req.url)}`,
        req.nextUrl.origin
      )
    );
  }

  // Allow authenticated users to access `/profile` or other pages
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};

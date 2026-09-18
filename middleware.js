import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|manifest.json|sw.js|workbox-.*\\.js).*)"
  ]
};

export function middleware(req) {
  return NextResponse.next();
}
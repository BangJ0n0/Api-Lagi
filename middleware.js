import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!_next/static|_next/image|favicon.ico|manifest.json|sw.js|workbox-.*\\.js).*)"
  ]
};

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Biarkan file static dan Next.js lewat
  if (
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/manifest.json" ||
    pathname === "/sw.js" ||
    pathname.startsWith("/workbox-")
  ) {
    return NextResponse.next();
  }

  // API langsung lewat
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Untuk sementara jangan lakukan:
  // - tracking axios
  // - rate limit
  // - redirect berdasarkan DOMAIN_URL
  // - getToken()

  return NextResponse.next();
}
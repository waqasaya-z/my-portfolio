import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If user visits root "/"
  if (pathname === "/") {
    const lang =
      request.headers.get("accept-language")?.split(",")[0] || "en-US";
    const redirectUrl = new URL(`/${lang}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }
}

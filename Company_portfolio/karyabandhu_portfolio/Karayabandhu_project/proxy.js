import { NextResponse } from "next/server";

// Target launch date: June 19, 2026 at 12:35 PM IST (GMT+5:30)
const LAUNCH_DATE = new Date("2026-06-19T12:35:00+05:30");
const BYPASS_COOKIE_NAME = "kb_launch_bypass";
const BYPASS_SECRET = "kb-preview-2026";

export function proxy(request) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Support query param bypass (sets cookie and redirects back to clear URL param)
  if (searchParams.get("bypass") === BYPASS_SECRET) {
    const url = new URL(request.url);
    url.searchParams.delete("bypass");
    
    // If they bypass from /coming-soon, send them to homepage
    const dest = pathname === "/coming-soon" ? new URL("/", request.url) : url;
    
    const response = NextResponse.redirect(dest);
    response.cookies.set(BYPASS_COOKIE_NAME, "true", {
      path: "/",
      maxAge: 86400, // 24 hours
      sameSite: "lax",
    });
    return response;
  }

  // 2. Allow passing through if cookie is present
  const hasBypassCookie = request.cookies.get(BYPASS_COOKIE_NAME)?.value === "true";
  if (hasBypassCookie) {
    return NextResponse.next();
  }

  // 3. Before launch redirect all requests except /coming-soon
  const now = new Date();
  if (now < LAUNCH_DATE) {
    if (pathname !== "/coming-soon") {
      return NextResponse.redirect(new URL("/coming-soon", request.url));
    }
  } else {
    // 4. After launch, redirect /coming-soon to homepage
    if (pathname === "/coming-soon") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icon.png, training_academy_preview.png (site assets)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|training_academy_preview.png).*)",
  ],
};

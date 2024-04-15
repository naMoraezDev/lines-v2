import { NextRequest, NextResponse, userAgent } from "next/server";

export const middleware = (request: NextRequest) => {
  const { device } = userAgent(request);
  const url = request.nextUrl.clone();
  const isMobile = device.type === "mobile";

  if (isMobile) {
    url.pathname = `/mobile${request.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }
};

export const config = { matcher: "/((?!.*\\.).*)" };

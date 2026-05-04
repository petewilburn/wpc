import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/prep", "/prep/:path*"],
};

const NOINDEX = "noindex, nofollow, noarchive";

function withHeaders(res: NextResponse): NextResponse {
  res.headers.set("X-Robots-Tag", NOINDEX);
  return res;
}

function unauthorized(): NextResponse {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="prep", charset="UTF-8"',
      "X-Robots-Tag": NOINDEX,
    },
  });
}

export function middleware(request: NextRequest) {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;

  // Dev convenience: if no credentials are configured AND we're not in
  // production, let the request through. In production, missing credentials
  // fail closed so a misconfigured deploy never exposes /prep publicly.
  if (!user || !pass) {
    if (process.env.NODE_ENV === "production") {
      return new NextResponse("Auth not configured", {
        status: 503,
        headers: { "X-Robots-Tag": NOINDEX },
      });
    }
    return withHeaders(NextResponse.next());
  }

  const auth = request.headers.get("authorization");
  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      try {
        const decoded = atob(encoded);
        const sep = decoded.indexOf(":");
        const reqUser = decoded.slice(0, sep);
        const reqPass = decoded.slice(sep + 1);
        if (reqUser === user && reqPass === pass) {
          return withHeaders(NextResponse.next());
        }
      } catch {
        // fall through to 401
      }
    }
  }

  return unauthorized();
}

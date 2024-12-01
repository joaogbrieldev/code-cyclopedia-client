import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/", "/dashboard"];
const publicRoutes = ["/signin", "/signup"];

export type tokenType = string | null | JwtPayload;
export type sessionType = {
  userId: string;
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token: tokenType = (await cookies()).get("authToken")?.value ?? null;

  if (!token) {
    if (isProtectedRoute && path !== "/signin") {
      return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }
    return NextResponse.next();
  }

  const decodedToken = jwt.decode(token);
  const session: sessionType | null =
    decodedToken && typeof decodedToken !== "string"
      ? (decodedToken as sessionType)
      : null;

  if (isProtectedRoute && !session?.userId) {
    if (path !== "/signin") {
      return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }
  }

  if (isPublicRoute && session?.userId) {
    if (path !== "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

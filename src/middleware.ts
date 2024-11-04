import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/']
const publicRoutes = ['/signin']

export type tokenType = string | null | JwtPayload
export type sessonType = {
  userId: string
}
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  const token: tokenType = (await cookies()).get('authToken')?.value ?? null;
  if (!token) return 'aa'
  const decodedToken = jwt.decode(token);
  const session: sessonType | null = 
    decodedToken && typeof decodedToken !== 'string' 
      ? (decodedToken as sessonType) 
      : null;
  

  if (isProtectedRoute && !session?.userId) {
    console.log(isProtectedRoute)
    console.log(session?.userId)
    return NextResponse.redirect(new URL('/signin', req.nextUrl))
  }

  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/')
  ) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
 
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log({ token });
  const { pathname } = req.nextUrl;

  const protectedRoutes: string[] = ['/home', '/'];

  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/home', '/login'],
};

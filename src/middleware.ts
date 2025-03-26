// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('refreshToken');
  console.log('ivantoken',token);
  const protectedPaths = ['/profile', '/blog', '/welcome']; // список защищённых маршрутов

  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/blog/:path*', '/blog/:path*', '/welcome/:path*'],
};

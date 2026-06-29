import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['ru', 'en'];
const defaultLocale = 'ru';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  // By default we redirect to the ru locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  
  // Example for Accept-Language:
  // const acceptLanguage = request.headers.get('Accept-Language');
  // if (acceptLanguage?.includes('en')) {
  //   request.nextUrl.pathname = `/en${pathname}`;
  // }

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, static files
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};

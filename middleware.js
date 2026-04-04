import { NextResponse } from 'next/server';
import { ROLES, canAccessRoute, getDashboardRoute } from './src/lib/roles';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip middleware for development - REMOVE THIS IN PRODUCTION
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  // Get tokens and role from cookies
  const accessToken = request.cookies.get('accessToken')?.value;
  const role = request.cookies.get('role')?.value;

  const isAuthenticated = !!accessToken;

  // Public routes - allow access (login is now on external port 3004)
  const publicRoutes = ['/', '/products', '/about', '/contact', '/auth/register'];
  const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(route));

  if (isPublicRoute && pathname.startsWith('/auth') && isAuthenticated) {
    // Redirect authenticated users away from auth pages
    const dashboardRoute = getDashboardRoute(role);
    return NextResponse.redirect(new URL(dashboardRoute, request.url));
  }

  // Protected routes
  const protectedPrefixes = ['/admin', '/customer', '/reseller'];
  const isProtectedRoute = protectedPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (isProtectedRoute) {
    // Check if user is authenticated
    if (!isAuthenticated) {
      const loginUrl = new URL(process.env.NEXT_PUBLIC_LOGIN_URL);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Check if user has permission for this route
    if (!canAccessRoute(role, pathname)) {
      return NextResponse.redirect(new URL('/403', request.url));
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
     * - _next/data (data files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};

import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { signOut } from "next-auth/react";
import { NextResponse } from "next/server";

const HOME_PAGE_URL = "/";

export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    console.log("request .... ", request.nextauth);
    const pathname = request.nextUrl.pathname;

    // If the user is logged in, `token` will be an object containing the user's details
    const token = request.nextauth.token;

    // Check if the user is logged in
    const isUserLoggedIn = !!token;
    // Guest routes (Routes that can be accessed by guest users who are not logged in)
    const guestRoutes = ["login"];

    // Shared routes (Routes that can be accessed by both guest and logged in users)
    const sharedRoutes = ["shared-route"];
    const privateRoute = ![...guestRoutes, ...sharedRoutes].some((route) =>
      pathname.endsWith(route)
    );
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login";
    if (!isUserLoggedIn && privateRoute) {
      return NextResponse.redirect(redirectUrl);
    }
   
    if (request.method === "POST" && pathname === "/api/auth/signout") { // Check for POST request and logout path
      // User initiated logout, handle server-side sign-out and redirect
      try {
        await signOut({ redirect: false }); // Sign out without client-side redirection
        const redirectUrl = new URL("/login", request.url); // Create redirect URL
        return NextResponse.redirect(redirectUrl); // Redirect to login page
      } catch (error) {
        console.error("Error signing out:", error);
        // Handle sign-out errors (optional)
      }
    }

    const isRequestedRouteIsGuestRoute = guestRoutes.some((route) =>
      pathname.endsWith(route)
    );
    redirectUrl.pathname = HOME_PAGE_URL;

    if (isUserLoggedIn && isRequestedRouteIsGuestRoute) {
      return NextResponse.redirect(redirectUrl);
    }
  },
  {
    callbacks: {
      authorized: () => {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg).*)",
  ],
};

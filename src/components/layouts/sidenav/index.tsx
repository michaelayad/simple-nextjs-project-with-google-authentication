"use client";
import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MoonIcon } from "@heroicons/react/24/solid";

export default function SideNav() {
  const router = useRouter();
  const handleUserLogout1 = async () => {
    try {
      // Sign out from the app
      await signOut({ redirect: false })

      // Redirect to login page
      router.push('/login')
    } catch (error) {
      console.error(error)

      // Show above error in a toast like following
      // toastService.error((err as Error).message)
    }
  }
  const handleUserLogout = async () => {
    try {
      // Sign out from the app
      await signOut();

      // Redirect to login page
      // router.push("login");
    } catch (error) {
      console.error(error);

      // Show above error in a toast like following
      // toastService.error((err as Error).message)
    }

    // try {
    //    signOut({
    //     callbackUrl: "/login", // Specify your desired redirect path
    //     redirect: false, // Disable automatic redirection
    //   });
  
    //   // (Optional) Handle successful sign out (e.g., clear user data)
    // } catch (error) {
    //   console.error("Error signing out:", error);
    //   // Handle sign-out errors
    // }
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
        <div
      className={` flex flex-col  items-center leading-none text-white`}
    >
      <MoonIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Maikoool</p>
    </div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button
            onClick={handleUserLogout}
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

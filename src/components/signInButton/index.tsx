"use client";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignInLogin() {
  const session = useSession();
  // console.log(session);
  const signInWithGithub = async () => {
    console.log("...............ddd");
    try {
      await signIn("google");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <main className="flex flex-col items-center py-8">
        
        <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image src="/google-logo.png" height={30} width={30} alt="google logo"/>
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
    </main>
  );
}

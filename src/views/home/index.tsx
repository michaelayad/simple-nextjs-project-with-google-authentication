'use client'
import SignInLogin from "@/components/signInButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession();

  return (
    <main className="flex min-h-screen flex-col gap-8 items-center">
      <h1 className="font-bold text-2xl text-blue-700">Home page</h1>
      <h1 className="font-bold text-xl text-white bg-blue-800">Welcome</h1>     
      <h1>{session.data?.user?.email}</h1>
      <h3>{session.data?.user?.name}</h3>
      <Image
        src={session.data?.user?.image as string}
        alt={session.data?.user?.name as string}
        width={150}
        height={150}
      />
    </main>
  );
}

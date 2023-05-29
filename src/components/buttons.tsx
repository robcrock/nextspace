"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <Link href="/dashboard">
        <Image
          src={session.user?.image ?? "mememan.webp"}
          alt="Profile Picture"
          width={32}
          height={32}
        />
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        console.log("signing in");
        signIn();
      }}
    >
      Sign In
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      onClick={() => {
        console.log("signing in");
        signOut();
      }}
    >
      Sing Out
    </button>
  );
}

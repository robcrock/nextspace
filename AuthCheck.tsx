"use client";

import { useSession } from "next-auth/react";

type TProps = {
  children: React.ReactNode;
};
const AuthCheck = ({ children }: TProps) => {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
};

export default AuthCheck;

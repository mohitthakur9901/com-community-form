"use client"

import { useSession } from "next-auth/react";
export default function Home() {

 const session = useSession();
 console.log(session)

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}

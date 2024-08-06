"use client"

import React from 'react'
import Button from './Button'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";

function Appbar() {

  const pathname = usePathname()

  const session = useSession();

  async function AskQuestion(){

  }

  return (
    <main className={`flex items-center justify-between p-5 bg-slate-300 ${pathname === "/api/auth/login" && "hidden"}`}>
      <Link href={'/'}>Logo</Link>
      <div className='flex items-center gap-5'>
        <Button>
          Ask Question
        </Button>
     
     {
      session.status === "authenticated" ? 
      (
        <Button>
        <Link href={'/api/auth/login'}>Login</Link>
      </Button>
      ) : (
        <Button onClick={() => {
          signOut()
        } }>
        Login
      </Button>
      )
     }
      </div>
    </main>
  )
}

export default Appbar
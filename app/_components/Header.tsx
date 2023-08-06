
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import SignoutButton from './SignoutButton'

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-zinc-700 flex flex-row items-center px-12 space-x-12">
        <Link href="/">Home</Link>
        <Link href="/protected/client">Protected Client</Link>
        <Link href="/protected/server">Protected Server</Link>

        <Link href="/signin">Sign In</Link>
       <SignoutButton />
    </div>
  )
}

export default Header
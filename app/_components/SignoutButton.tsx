'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

const SignoutButton = () => {
  return (
    <button onClick={() => signOut()} className="p-4 border-2 border-red-500">Sign out</button>
  )
}

export default SignoutButton
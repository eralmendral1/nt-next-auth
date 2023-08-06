'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const GoogleSigninButton: React.FC = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || ''

  return (
    <div>
        <button className="border-2 border-gray-400 p-3 rounded-md" onClick={() => signIn('google', { callbackUrl })}>
            Sign in by Google
        </button>
    </div>
  )
}

export default GoogleSigninButton
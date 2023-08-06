'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const ClientPage: React.FC = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin?callbackUrl=/protected/client')
        }
    })

  return (
    <div>
        <h1>This Page is Client Protected</h1>
        <p>You are logged in as {session?.user?.name}</p>
    </div>
  )
}

export default ClientPage
import { getServerSession } from 'next-auth'
import React, { Suspense } from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const ServerPage = async () => {
    const session = await getServerSession(authOptions)


    // removed, use middleware
    // if (!session) return redirect('/signin?callbackUrl=/protected/server')

    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <h1>This is a server protected page</h1>
            <p>You are logged in as : {session?.user?.name}</p>
        </Suspense>
    )
}

export default ServerPage
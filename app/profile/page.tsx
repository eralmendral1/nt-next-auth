import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import UserProfileForm from '../_components/UserProfileForm'

const Profile = async () => {

    // No longer auth checker below, cause we are now using middleware
    // const session = await getServerSession(authOptions)
    // if (!session) return redirect('/signin?callbackUrl=/profile')

    return (
        <div>
            <UserProfileForm/>
        </div>
    )
}

export default Profile
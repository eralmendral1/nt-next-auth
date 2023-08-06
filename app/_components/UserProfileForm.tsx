'use client'

import { useSession } from 'next-auth/react'
import React from 'react'
import { updateName } from '../_actions'

const UserProfileForm: React.FC = () => {

    const { data: session, update } = useSession() // update -> update the session in the browser

    // client side action that calls a server action
    const handleSubmit = async(formData: any) => {
        const { name, email } = Object.fromEntries(formData.entries())
        if(!name || !email) return

        // server action
        await updateName(name, email)

        // update next-auth session
        // await update({ name : "New User"})
        await update({
           name
        })
    }

    return (
        <div className="mt-12 w-2/3 rounded p-8 shadow-lg">
            <h1>Hello { session?.user?.name}</h1>
            <h2 className='mb-6 text-lg font-medium'>Update Info</h2>

        <form action={handleSubmit}>
            <input type="hidden" name="email" value={session?.user?.email || ''} />
            <input type="text" className='text-red-500' name="name" defaultValue={session?.user?.name || ''} />
            <button type="submit" className="rounded bg-slate-700 p-2 text-white">
                Update
            </button>
        </form>
        </div>
    )
}

export default UserProfileForm
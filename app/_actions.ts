'use server'

import { updateUser } from './_lib/mongo/users'

export async function updateName(name: string, email: string) {
    await updateUser(email, { name })
}
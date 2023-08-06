import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET() {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json('You are not logged in', { status: 400 })

    return NextResponse.json({ success: true }, { status: 200 })
}
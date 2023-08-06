import { NextRequest, NextResponse } from 'next/server'

export { default } from 'next-auth/middleware'

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect('/')
// }

export const config = {
    matcher: [
        "/profile",
        "/protected/client",
        "/protected/server",
    ]
}
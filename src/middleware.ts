import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  try {
    if (!req.cookies.has('token')) {throw new Error('token is not set')}
  } catch (e) {
    console.info(e)
    return NextResponse.redirect(new URL("/signin", req.url))
  }
}

export const config = {
  matcher: ['/((?!signin|api|_next/static|images|favicon.ico).*)',]
}
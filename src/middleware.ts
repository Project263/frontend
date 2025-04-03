import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  try {
    // TODO: проверить токен на валидность
    if (!req.cookies.has('token')) {return NextResponse.redirect(new URL("/signin", req.url))}
  } catch (e) {
    console.info(e)
    return NextResponse.redirect(new URL("/signin", req.url))
  }
}

export const config = {
  matcher: ['/((?!signin|api|_next/static|images|favicon.ico).*)',]
}
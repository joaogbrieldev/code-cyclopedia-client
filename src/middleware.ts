export default async function middleware() {}

// import jwt from 'jsonwebtoken'
// import { cookies } from 'next/headers'
// import { NextResponse } from 'next/server'

// // 1. Defina rotas protegidas e públicas
// const protectedRoutes = ['/dashboard']
// const publicRoutes = ['/auth/signup', '/signup', '/']

// export default async function middleware(req) {
//   // 2. Verifique se a rota atual é protegida ou pública
//   const path = req.nextUrl.pathname
//   const isProtectedRoute = protectedRoutes.includes(path)
//   const isPublicRoute = publicRoutes.includes(path)

//   // 3. Extraia o token do cookie
//   const cookie = (await cookies()).get('session')?.value

//   let session
//   if (cookie) {
//     try {
//       // 4. Verifique e decodifique o token JWT
//       session = jwt.verify(cookie, process.env.JWT_SECRET) // JWT_SECRET deve estar no .env
//     } catch (err) {
//       console.error('Token inválido:', err)
//     }
//   }

//   // 5. Redireciona para /login se o usuário não estiver autenticado em uma rota protegida
//   if (isProtectedRoute && !session?.userId) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl))
//   }

//   // 6. Redireciona para /dashboard se o usuário estiver autenticado e acessar uma rota pública
//   if (isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
//   }

//   return NextResponse.next()
// }

// // Configuração para evitar execução do middleware em rotas específicas
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }

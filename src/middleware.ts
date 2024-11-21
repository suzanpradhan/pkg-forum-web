import { NextResponse } from 'next/server';
import { z } from 'zod';
import { registerSchema } from './modules/register/registerType';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

export async function middleware(request: Request) {
  const body = await request.json();

  if (request.method === 'POST') {
    if (request.url.includes('/api/register')) {

      try {
        registerSchema.parse(body);
        return NextResponse.next();
      } catch (error) {
        if (error instanceof z.ZodError) {
          return NextResponse.json({ errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
      }
    }
    if (request.url.includes('/api/login')) {

      try {
        loginSchema.parse(body);
        return NextResponse.next();
      } catch (error) {
        if (error instanceof z.ZodError) {
          return NextResponse.json({ errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
      }
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/api/register', '/api/login'],
};

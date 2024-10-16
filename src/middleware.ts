import { NextResponse } from 'next/server';
import { z } from 'zod';
const registerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d+$/, "Phone number must be numeric").min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
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

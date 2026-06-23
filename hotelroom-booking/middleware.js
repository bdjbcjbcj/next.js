import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "0987654321"
);

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  console.log("Middleware Running");
console.log("TOKEN:", token);
console.log("PATH:", path);
  const isAuthPage = path === "/login" || path === "/register";

  // allow auth pages
if (isAuthPage && token) {
  return NextResponse.redirect(
    new URL("/dashboard", req.url)
  );
}

  // protect dashboard
  if (path.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
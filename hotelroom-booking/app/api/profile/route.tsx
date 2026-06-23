// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// const SECRET_KEY = "mysecretkey";

// export async function GET() {
//   try {
//     const cookieStore = cookies();
//     const token = cookieStore.get("token")?.value;

//     // ❌ no token
//     if (!token) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Unauthorized",
//         },
//         { status: 401 }
//       );
//     }

//     // 🔐 verify token
//     const decoded = jwt.verify(token, SECRET_KEY);

//     return NextResponse.json({
//       success: true,
//       user: decoded,
//     });

//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Invalid token",
//       },
//       { status: 401 }
//     );
//   }
// }
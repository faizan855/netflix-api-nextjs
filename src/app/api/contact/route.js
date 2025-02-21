// import dbConn from "@/utils/dbConn";
// import Contact from "@/models/contact";
// import {NextResponse} from "next/server";
//
// export async function POST(req, res) {
//     try {
//
//         const body = await req.json();
//         await dbConn();
//
//         await Contact.create(body);
//
//         return NextResponse.json({
//             message:"Message sent successfully!"
//         },
//             {
//             status: 200
//         })
//
//     }catch (e) {
//         return NextResponse.json(
//             { message: "Server error, please try again!" },
//             { status: 500 }
//         )
//     }
// }

import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("📩 Received Data:", body); // ✅ Debug: Check if data is received

        await dbConn();
        console.log("✅ Database Connected!"); // ✅ Debug: Check if DB connection works

        await Contact.create(body);
        console.log("✅ Data Saved to DB!"); // ✅ Debug: Check if data is saved

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );

    } catch (e) {
        console.error("❌ API Error:", e);  // ✅ Log full error for debugging

        return NextResponse.json(
            { message: `Server error: ${e.message}` },  // Show real error
            { status: 500 }
        );
    }
}

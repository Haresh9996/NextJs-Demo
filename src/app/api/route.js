import { NextResponse } from "next/server";
import { users } from "@/utils/db";

export function GET(request) {
    let data = users
    console.log(data)
    return NextResponse.json(data)
}

export async function POST(request, responce) {
    let payload = await request.json()
    console.log(payload)
    if (!payload.age || !payload.name) {
        return NextResponse.json({ result: "requird not found"}, {status: 404 })
    }
    return NextResponse.json({ result: payload}, {status:201})

}

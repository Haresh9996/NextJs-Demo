import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET() {
    let data = users    
    return NextResponse.json(data, { status: 200 })
    
}
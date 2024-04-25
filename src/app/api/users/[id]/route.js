import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(request, response) {
    let data = users
    console.log(response.params.id, data)
    let finaldata = data.filter(item => item.id == response.params.id)

    return NextResponse.json(finaldata.length !== 0 ? { result: finaldata, success: true } : { result: 'no data found', success: false }, { status: 200 })
}
import { NextResponse } from "next/server";
import { users } from "@/utils/db";

export function GET(request, { params }) {
    let data = users
    // console.log(params)
    let filtersData = data.filter(item => item.id == params.userid)
    return NextResponse.json(filtersData)

}
export async function PUT (request, {params}){
    let payload = await request.json()
    let id = params.userid
    payload.id = id
    return NextResponse.json({result: payload}, {status: 200})

}

export function DELETE(request, response) {

    let id = response.params.userid
    if (id) {
        return NextResponse.json({ result: "User Removed" }, { status: 200 })
    }else{
        return NextResponse.json({ result: "Can't Remove User" }, { status: 400 })
    }
}
import { NextResponse } from "next/server"

export function GET(request) {

    let users = [
        {
            name: 'haresh',
            age: 26,
            mo: 789456123
        },
        {
            name: 'mahesh',
            age: 26,
            mo: 789456123
        },
        {
            name: 'haresh',
            age: 26,
            mo: 789456123
        },
        {
            name: 'haresh',
            age: 26,
            mo: 789456123
        },
        {
            name: 'haresh',
            age: 26,
            mo: 789456123
        }
    ]

    return NextResponse.json(users)

}
export function POST() {

}
export function DELETE() {

}
export function PUT() {

}
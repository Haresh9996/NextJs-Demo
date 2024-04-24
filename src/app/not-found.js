"use client"

import Link from "next/link"

export default function Clients({ param }) {
    console.log(param)
    return (
        <>
        <div className="h-screen w-screen flex items-center justify-center flex-col">
            <h2>404</h2>

            <h4>This Page Not found</h4>
            <Link href="/home"> Go to Home page</Link>
        </div>
        </>
    )
}
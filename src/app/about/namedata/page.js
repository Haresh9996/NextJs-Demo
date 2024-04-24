"use client"
import Link from "next/link"
import { useState } from "react"

export default function names () {

    return(
        <>
        <ul>
           <li><Link href="namedata/haresh">haresh</Link></li>
           <li><Link href="namedata/rahul">rahul</Link></li>
           <li><Link href="namedata/nandan">nandan</Link></li>
           <li><Link href="namedata/dow_john">dow john</Link></li>
           <li><Link href="namedata/james">james</Link></li>
        </ul>
        </>
    )
}
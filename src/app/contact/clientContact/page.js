
"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

let ClientContact = () => {
    let route = useRouter()

    return (
        <>
            <h4>this is client contact page</h4>

            {/* <ul>
                <li><Link href="/contact/clientContact/Mack">Mack</Link></li>
                <li><Link href="/contact/clientContact/John">John</Link></li>
                <li><Link href="/contact/clientContact/Smith">Smith</Link></li>
                <li><Link href="/contact/clientContact/Devid">Devid</Link></li>
            </ul> */}

            <button onClick={() => route.push('/about')}>go to about</button>
        </>
    )
}

export default ClientContact
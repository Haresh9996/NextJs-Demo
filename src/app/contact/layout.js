import Link from "next/link"

export default function layout ({children}) {
    return(
        <>
            <div className="flex flex-col">
            <h1>this is common layout page</h1>
            <ul>
                <li className="flex gap-5">
                    <Link href="/contact/adminContact">Admin Contact</Link>
                    <Link href="/contact/clientContact">Client Contact</Link>
                </li>
            </ul>
                {children}
            </div>
        </>
    )
}
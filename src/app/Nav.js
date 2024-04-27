"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Nav = () => {
    let navigate = useRouter()

    let route = (path) => {
        navigate.push('/' + path)
    }
    return (
        <>
            <header className="text-gray-300 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/home" className="mr-5 hover:text-gray-500">Home</Link>
                        <Link href="/productlist" className="mr-5 hover:text-gray-500">Productlist</Link>
                        <Link href="/about" className="mr-5 hover:text-gray-500">About</Link>
                        <Link href="/contact" className="mr-5 hover:text-gray-500">Contact</Link>
                        <Link href="/adduser" className="mr-5 hover:text-gray-500">User Clients</Link>
                        <Link href="/api" className="mr-5 hover:text-gray-500">Api</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Nav
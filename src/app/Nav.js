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
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/home" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href="/productlist" className="mr-5 hover:text-gray-900">Productlist</Link>
                        <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
                        <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
                        <Link href="/api/users" className="mr-5 hover:text-gray-900">Api</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Nav
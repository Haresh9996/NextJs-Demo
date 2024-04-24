import Link from "next/link"
import { Roboto_Slab } from "next/font/google"

const roboto = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap'
})

const Home = () => {
    return (
        <>

            <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <div className={`${roboto.className} text-center text-3xl`}>this is Home page</div>
                <div className="flex gap-5 items-center justify-center mt-7 underline">
                    <Link href="/about" >go to about page</Link>
                    <Link href="/contact" >go to contact page</Link>
                    <Link href="/contact/adminContact" >go to admincontact page</Link>
                    <Link href="/contact/clientContact" >go to ClientContact page</Link>
                </div>
            </div>
        </>
    )
}

export default Home

export function generateMetadata({ params }){
    return{
        title: 'Home Page for next ui',
        discription: 'this is all about of Next Home page'
    }
}
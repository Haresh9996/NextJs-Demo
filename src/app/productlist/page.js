import Link from "next/link"
import { Button } from "@nextui-org/react"
async function fetchData() {
    let data = await fetch("https://dummyjson.com/products")

    if (!data.ok) {
        throw new Error("faild to fetch Data")
    }
    return data.json()
}

const page = async () => {
    let products = await fetchData()
    if (!Array.isArray(products)) {
        products = products.products
    }
    return (
        <>
            <h1 className="h1 text-4xl text-center">Product List</h1>
            <div className="grid grid-cols-4 gap-3 ">
                {
                    products.map(items => {
                        return (
                            <>
                                < section className="text-gray-600 body-font" >
                                    <div className="container px-5 py-14 mx-auto border-2">
                                        <div className="flex flex-wrap -m-4">

                                            <div className="p-4 w-full">
                                                <Link href={`/productlist/${items.id}`} className="block relative h-48 rounded overflow-hidden">
                                                    <img alt={items.title} className="object-cover object-center w-full h-full block" src={items.thumbnail} />
                                                </Link>
                                                <div className="mt-4">
                                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{items.category}</h3>
                                                    <h2 className="text-white title-font text-lg font-medium">{items.title}</h2>
                                                    <p className="mt-1">$ {items.price}</p>
                                                </div>
                                            </div>

                                            <Button className="border border-1 p-3 rounded ml-auto ">Buy Now</Button>

                                        </div>
                                    </div>
                                </section >
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default page

export async function generateStaticParams() {
    let products = await fetchData()
    if (!Array.isArray(products)) {
        products = products.products
    }
    products.map((user => {
        product: user.id.toString();
    }))

}

export function generateMetadata({ params }) {
    return {
        title: 'Product List Page for next ui',
        discription: 'this is all about of Next Product page'
    }
}
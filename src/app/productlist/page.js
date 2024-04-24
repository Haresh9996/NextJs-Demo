import Link from "next/link"
import products from "../components/products"

export default async () => {
    let finalProducts = await products()
    console.log(finalProducts)
    return (
        <>
            {
                finalProducts.map(items => {
                    return (
                        <div>
                            <Link href={`/productlist/${items.id}`}>{items.title}</Link>
                        </div>

                    )
                })
            }
        </>
    )
}
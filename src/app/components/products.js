export default async function products() {
    let productlist = await fetch("https://dummyjson.com/products")
    let products = await productlist.json()        
    return products.products
};

import products from "../../components/products";

export async function generateStaticParams() {
    let finalProducts = await products();
    console.log(finalProducts);
    
    return finalProducts.map((post) => ({
        product: post.id.toString(),
      }))
}

export function page({params}) {
    // let {id} = params;
    console.log(params)
    return finalProducts.map(item => ({
        
    }));
}

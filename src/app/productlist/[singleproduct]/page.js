
async function fetchData(id) {
    let data = await fetch(`https://dummyjson.com/products/${id}`)

    if (!data.ok) {
        throw new Error("faild to fetch Data")
    }
    // let final = await data.json();
    // return final
    return data.json()
}

export default async function page({ params }) {

    let product = await fetchData(params.singleproduct)
    console.log(product)
    return (
        <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="card-body">
                <h3> {product.title} </h3>
                <h4> {product.category} </h4>
                <p>  {product.description} </p>
                <h6> {product.price} </h6>
                <h6>Final Price:{product.discountPercentage} </h6>
                <div>
                    <span>{product.rating}</span>
                    In Stock: <span>{product.stock}</span>
                </div>
                <p> {product.brand}</p>

            </div>
        </div>
    )
};

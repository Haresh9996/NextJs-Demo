
async function fetchData() {
    let data = await fetch(`${apiUrl}/api`)
    data = await data.json()
    console.log(data)
    return data
}
export default async function user() {
    let finalData = await fetchData()
    return (
        <>
            {
                finalData.map(item => {
                    return (
                        <h3 className="w-2/5 flex justify-around mb-5" key={item.id}>
                            <span className="underline underline-offset-2"><Link href={`/users/${item.id}`}>{item.name}</Link></span>
                            <span> <Delete id={item.id} /> </span>
                            <span className="border px-2"> <Link href={`/users/${item.id}/update`}> Edit </Link> </span>
                        </h3>
                    )
                })
            }
        </>
    )
};
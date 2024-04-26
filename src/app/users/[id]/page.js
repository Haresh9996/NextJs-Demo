async function getData(id) {
    let data = await fetch(`http://localhost:3000/api/${id}`)
    console.log(data.data)
    let finalData = await data.json()
    return finalData
}

export default async function page({ params }) {
    // console.log(params)
    let user = await getData(params.id)
    console.log(user)
    return (
        <>
            <div>
                {
                    user && Array.isArray(user) && user.length > 0 && user.map((item) => {
                        return (
                            <>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.age}</p>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
};

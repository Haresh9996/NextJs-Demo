"use client"
import { useRouter } from "next/navigation"

let AdminContact = () => {
    let route = useRouter()

    return (
        <>
            <h4>this is admin Page</h4>
            <button onClick={() => route.push('/about')}>go to about page</button>

        </>
    )

}

export default AdminContact
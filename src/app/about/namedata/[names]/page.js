"use client"

export default function NamePage({ params }) {
    console.log(params)
    return (
        <>
            <h4 className="h-screen w-screen flex items-center justify-center">hello {params.names}</h4>
        </>
    )
}
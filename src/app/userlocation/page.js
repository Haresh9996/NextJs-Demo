"use client"
import Script from "next/script"
const Userlocation = () => {
    return (
        <>
            <Script src="/location.js"
            onLoad={()=> {"main file"}}
             />

            <div>Get Userlocation</div>
        </>
    )
}

export default Userlocation
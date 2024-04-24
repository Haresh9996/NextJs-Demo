"use client"
import { useRouter } from "next/navigation"
export default function Contact() {
    let navigate = useRouter()

    let route = (path) => {
        navigate.push(path)
    }

    return (
        <>
            <h4> this is Contact page</h4>
            <button onClick={() => route('/home')}>Go to Home</button>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button onClick={() => route('/contact/adminContact')}>go to adminContact page</button>
                <button onClick={() => route('/contact/clientContact')}>go to clientContact page</button>
            </div>
        </>
    )
}
"use client"
import { useRouter } from "next/navigation";

export default function About() {
    const navigate = useRouter();

    const route = (path) => {
        navigate.push(path);
    };

    return (
        <>
            <h4>This is the About Page</h4>
            <button onClick={() => route('/home')}>Go to Home</button>
            <br />
            <br />
            <div style={{ display: 'flex', gap: '20px' }}>
                <button onClick={() => route("/contact/adminContact")}>Go to Admin Page</button>
                <button onClick={() => route("/contact/clientContact")}>Go to Client Page</button>
            </div>
        </>
    );
}

"use client"
import { useEffect, useState } from "react";
export default function Update({ params }) {
    let userId = params.id
    // console.log(id)

    let [values, setValues] = useState({
        name: '',
        email: '',
        age: ''
    });

    const [user, setUser] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (user) {
            setValues({
                name: user.name,
                email: user.email,
                age: user.age,

            })
        }
    }, [user])

    const getData = async () => {

        let response = await fetch(`http://localhost:3000/api/${userId}`)

        let finalResponse = await response.json()

        console.log(finalResponse);

        setUser(finalResponse[0])
    };
    const handlesubmit = async () => {

        let response = await fetch(`http://localhost:3000/api/${userId}`, { method: "PUT", body: JSON.stringify(values) })

        let finalResponse = await response.json()

        console.log(finalResponse);

    };
    return (
        <>
            <div className="m-auto w-1/3 mt-20 flex flex-col gap-5">
                <div>
                    <input type="text" name="name" className="border w-3/4 rounded-md p-2" placeholder="enter your name" value={values.name} onChange={handleChange} />
                </div>
                <div>
                    <input type="email" name="email" className="border w-3/4 rounded-md p-2" placeholder="enter your email" value={values.email} onChange={handleChange} />
                </div>
                <div>
                    <input type="number" name="age" className="border w-3/4 rounded-md p-2" placeholder="enter your age" value={values.age} onChange={handleChange} />
                </div>
                <div>
                    <button className="py-1 px-3 border rounded-md hover:bg-slate-800" onClick={handlesubmit}>Submit</button>
                </div>

            </div>
        </>
    )
};

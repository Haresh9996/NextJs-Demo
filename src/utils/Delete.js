"use client"
import React from 'react'

const Delete = ({ id }) => {

    let deleteUser = async () => {
        let response = await fetch(`http://localhost:3000/api/${id}`, {
            method: 'Delete'
        })
        response = await response.json()
        console.log(response)
        if (response.result) {
            alert("user removed")
        } else {
            alert("something went wrong!!!")
        }
    }
    return (
        <button onClick={deleteUser} className='border px-2'>Delete</button>
    )
}

export default Delete
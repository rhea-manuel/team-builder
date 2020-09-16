import React, { useState } from 'react';

export default function Form(props) {

    const team = props.team
    const updateTeam = props.updateTeam
    // const formData = props.formData
    // const setFormData = props.setFormData

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'none'
    })

    const update = (event) => {


        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })

    }

    const nameUpdate = (event) => {

        if (/^[A-Za-z]+$/.test(event.target.value)) {
            update(event)
        }

    }

    const emailUpdate = (event) => {
        if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(event.target.value)) {
            update(event)
        }
    }

    const submit = (event) => {
        event.preventDefault()

        const newTeam = [...team]
        newTeam.push(formData)


        updateTeam(newTeam)
    }

    return (

        <form onSubmit={submit}>
            <label>
                Name
                <input value={formData.name} type="text" name="name" onChange={nameUpdate} />
            </label>
            <br />
            <label>
            Email
                    <input value={formData.email} type="text" name="email" onChange={update} />
            </label>
            <br />
            <label>
            Role
                <select name="role" onChange={update}>
                    
                    <option>none</option>
                    <option>backend engineer</option>
                    <option>frontend engineer</option>
                    <option>designer</option>
                </select>
            </label>
            <br />

            <button>Submit</button>

            {/* <p>name is {formData.name}, role is {formData.role}, </p> */}
        </form>

    )
}
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

    // console.log(team)
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     role: ''
    // })

    const update = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })

        
        // updateTeam()
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
                Name:
                <input type="text" name="name" onChange={update} />
            </label>

            <label>
                E-Mail:
                    <input type="text" name="email" onChange={update} />
            </label>

            <label>
                <select name="role" onChange={update}>

                    Role:
                    <option>none</option>
                    <option>backend engineer</option>
                    <option>frontend engineer</option>
                    <option>designer</option>
                </select>
            </label>

            <button>submit</button>

            {/* <p>name is {formData.name}, role is {formData.role}, </p> */}
        </form>

    )
}
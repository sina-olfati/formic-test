import React from 'react'
import "./Input.css"
import { useFormik } from 'formik'

const Input = () => {
const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        channel: "",
    },
    onSubmit: values => {
        console.log(values);
    },
    validate: values => {
        let errors = {}

        if(!values.name) {
            errors.name = "Required"
        }

        if(!values.email) {
            errors.email = "Required"
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = "Invalid Email Format"
        }

        if(!values.channel) {
            errors.channel = "Required"
        }
        

        return errors
    }
})


  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <label className="label" htmlFor = "name">Name</label>
        <input type="text" id = "name" name = "name" onChange={formik.handleChange} value={formik.values.name}/>
        
        <label htmlFor = "email">Email</label>
        <input type="email" id = "email" name = "email" onChange={formik.handleChange} value={formik.values.email}/>
        
        <label htmlFor = "channel">Channel</label>
        <input type="text" id = "channel" name = "channel" onChange={formik.handleChange} value={formik.values.channel}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Input

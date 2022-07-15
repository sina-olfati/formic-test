import React from 'react'
import "./Input.css"
import { useFormik, yupToFormErrors } from 'formik'
import * as Yup from "yup"

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
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      channel: Yup.string().required("Required"),
    })

})
console.log(formik.touched)

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='controler'>
        <label className="label" htmlFor = "name">Name</label>
        <input type="text" id = "name" name = "name" {...formik.getFieldProps("name")}/>
        {formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>

        <div className='controler'>
        <label htmlFor = "email">Email</label>
        <input type="email" id = "email" name = "email" {...formik.getFieldProps("email")}/>
        {formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>

        <div className='controler'>
        <label htmlFor = "channel">Channel</label>
        <input type="text" id = "channel" name = "channel" {...formik.getFieldProps("channel")}/>
        {formik.touched.channel ? <div className='error'>{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Input

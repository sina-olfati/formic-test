import React from 'react'
import "./Input.css"
import { yupToFormErrors, Formik, Form } from 'formik'
import * as Yup from "yup"

const initialValues = {
  name: "",
  email: "",
  channel: "",
}
const onSubmit = values => {
  console.log(values);
}
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
})

const Input = () => {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
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
      </Form>
    </Formik>
  )
}

export default Input

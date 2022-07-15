import React from 'react'
import "./Input.css"
import { Formik, Form, Field } from 'formik'
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
        <Field type="text" id = "name" name = "name"/>
        {formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>

        <div className='controler'>
        <label htmlFor = "email">Email</label>
        <Field type="email" id = "email" name = "email"/>
        {formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>

        <div className='controler'>
        <label htmlFor = "channel">Channel</label>
        <Field type="text" id = "channel" name = "channel"/>
        {formik.touched.channel ? <div className='error'>{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default Input

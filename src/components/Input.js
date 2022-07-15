import React from 'react'
import "./Input.css"
import { Formik, Form, Field, ErrorMessage } from 'formik'
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
        <ErrorMessage name='name' />
        </div>

        <div className='controler'>
        <label htmlFor = "email">Email</label>
        <Field type="email" id = "email" name = "email"/>
        <ErrorMessage name='email' />
        </div>

        <div className='controler'>
        <label htmlFor = "channel">Channel</label>
        <Field type="text" id = "channel" name = "channel"/>
        <ErrorMessage name='channel' />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default Input

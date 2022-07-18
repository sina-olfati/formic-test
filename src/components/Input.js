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
  address: Yup.string().required("Required"),
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

        <div className='controler'>
        <label htmlFor = "comments">Comments</label>
        <Field as="textarea" type="text" id = "comments" name = "comments"/>
        </div>

        <div className='controler'>
        <label htmlFor = "address">Address</label>
        <Field name="address">
          {props => {
            const {form, field, meta} = props
            return (
              <div>
                <input type="text" id="address" {...field}/>
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            )
          }}
        </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default Input

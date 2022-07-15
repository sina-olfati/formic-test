import React from "react";
import "./Input.css";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

const OldInput = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // validate: values => {
    //     let errors = {}

    //     if(!values.name) {
    //         errors.name = "Required"
    //     }

    //     if(!values.email) {
    //         errors.email = "Required"
    //     } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
    //         errors.email = "Invalid Email Format"
    //     }

    //     if(!values.channel) {
    //         errors.channel = "Required"
    //     }

    //     return errors
    // }
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      channel: Yup.string().required("Required"),
    }),
  });
  console.log(formik.touched);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="controler">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="controler">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="controler">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldInput;

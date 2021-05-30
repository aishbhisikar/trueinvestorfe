import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import {Link} from "react-router-dom"

function EnrollmentForm() {
  const initialValues = {
    email: "",
    password: "",
    pan: "",
    firstName: "",
    lastName: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    pan: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  label="First Name"
                  name="firstName"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Last Name"
                  name="lastName"
                />
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="PAN"
                  name="pan"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
                <div className="btnContainer">
                  <button type="submit" disabled={!formik.isValid}>
                    Sign Up
                  </button>
                  <p>
                    Have an account ?
                    <span> <Link to="/" style={{color:'yellow'}}>Sign in</Link></span>
                  </p>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}

export default EnrollmentForm;

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Link } from "react-router-dom";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
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
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
                <div className="btnContainer">
                  <button type="submit" disabled={!formik.isValid}>
                    Login
                  </button>
                  <p className=" text-left">
                  Don't Have Account? <Link to="/signup" style={{color:'yellow'}}>Sign-up </Link>
                    <br />
                    
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

export default LoginForm;

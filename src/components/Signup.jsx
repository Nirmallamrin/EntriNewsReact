import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  return (
    <div className='signup-container'>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmpassword: ''
        }}
        validationSchema={Yup.object({
          firstname: Yup.string().required('First Name is required'),
          lastname: Yup.string().required('Last Name is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().required('Password is required'),
          confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Submitted', values);
          setSubmitting(false);
          alert('Welcome to Entri News')
        }}
      >
        <Form className='signup-form'>
          <div>
            <label htmlFor="firstname" className='input-name'>First Name</label>
            <Field type="text" id="firstname" name="firstname" />
            <ErrorMessage name="firstname" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="lastname" className='input-name'>Last Name</label>
            <Field type="text" id="lastname" name="lastname" />
            <ErrorMessage name="lastname" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email" className='input-name'>Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password" className='input-name'>Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="confirmpassword" className='input-name'>Confirm Password</label>
            <Field type="password" id="confirmpassword" name="confirmpassword" />
            <ErrorMessage name="confirmpassword" component="div" className="error" />
          </div>
          <button type='submit' className="signup-btn">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;

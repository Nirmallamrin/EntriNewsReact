import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signin = () => {
  return (
    <div className='signin-container'>
      <h1>Sign in</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          
          // Handle form submission here
          console.log('Submitted:', values);
          setSubmitting(false);
          alert('Welcome to entri News')
        }}
      >
        <Form className='signin-container'>
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
          <button type='submit' className="signin-btn">Sign in</button>
        </Form >
      </Formik>
    </div>
  );
};

export default Signin;
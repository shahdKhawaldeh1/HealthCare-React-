import React from 'react';
import { useFormik } from 'formik';
import './Register.css';
import axios from 'axios';
import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
  let [errors, setErrors] = useState([]);
  let [statusError, setStatusError] = useState('');
  let navigate = useNavigate();

  const schema = Yup.object({
    userName: Yup.string()
      .required("Name is required")
      .min(3, "Minimum is 3 characters")
      .max(10, "Maximum is 10 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Not a valid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/,
        "Password must be strong (at least 8 characters, one uppercase, one lowercase, one digit, and one special character)"
      ),
    cPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref('password')], "Passwords must match"),
  });
  

  async function sendRegisterData(values) {
    try {
      const { data } = await axios.post("https://ecommerce-node-3.vercel.app/auth/signup", values);
      if (data.message === 'success') {
        console.log('Welcome');
        setErrors([]);
        setStatusError('');
        navigate('/login');
      } else {
        setErrors([]); // Clear any previous errors
        setStatusError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error(`Network Error: ${error.message}`);
      setStatusError('Network Error. Please check your internet connection or try again later.');
    }
  }
  

  const formik = useFormik({
    initialValues: {
        userName: '',
      email: '',
      password: '',
      cPassword: '',
    },
    validationSchema: schema,
    onSubmit: sendRegisterData,
  });

  
  

  return (
    <div className='form'>
      <h2 className='heading'>Register Now!</h2>

      <form onSubmit={formik.handleSubmit} className='register-form'>
        <div className='input-icon'>
          <i className='fa-solid fa-user'></i>
          <input
            type='text'
            name='userName'
            className='form-control'
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter your name'
          />
          {formik.touched.userName && formik.errors.userName && (
            <p style={{ color: 'red' }}>{formik.errors.userName}</p>
          )}
        </div>

        <div className='input-icon'>
          <i className='fa-solid fa-envelope'></i>
          <input
            type='email'
            name='email'
            className='form-control'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Email'
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: 'red' }}>{formik.errors.email}</p>
          )}
          <div className='text-danger'>{statusError}</div>
        </div>

        <div className='input-icon'>
          <i className='fa-solid fa-lock'></i>
          <input
            type='password'
            name='password'
            className='form-control'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Password'
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: 'red' }}>{formik.errors.password}</p>
          )}
        </div>

        <div className='input-icon'>
          <i className='fa-solid fa-lock'></i>
          <input
            type='password'
            name='cPassword'
            className='form-control'
            value={formik.values.cPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Confirm Password'
          />
          {formik.touched.cPassword && formik.errors.cPassword && (
            <p style={{ color: 'red' }}>{formik.errors.cPassword}</p>
          )}
        </div>

        <button type='submit' className='uiverse'>
          <div className='wrapper'>
            <span>Register</span>
            <div className='circle circle-12'></div>
            <div className='circle circle-12'></div>
            <div className='circle circle-11'></div>
            <div className='circle circle-10'></div>
            <div className='circle circle-9'></div>
            <div className='circle circle-8'></div>
            <div className='circle circle-7'></div>
            <div className='circle circle-6'></div>
            <div className='circle circle-5'></div>
            <div className='circle circle-4'></div>
            <div className='circle circle-3'></div>
            <div className='circle circle-2'></div>
            <div className='circle circle-1'></div>
          </div>
        </button>
      </form>
    </div>
  );
};

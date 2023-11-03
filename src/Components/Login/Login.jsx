import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


export const Login= (props) => {


  let [errors, setErrors] = useState([]);
  let [statusError, setStatusError] = useState('');
  let navigate = useNavigate();


  const schema = Yup.object({
  
    email: Yup.string()
      .required("Email is required")
      .email("Not a valid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^[A-Z][a-z0-9]{3,7}$/, "Password format is invalid"),

  });
  async function sendRegisterData(values) {
    const requestData = {
      email: values.email,
      password: values.password,
    };

    try {
      const { data } = await axios.post("https://ecommerce-node-3.vercel.app/auth/login", requestData);
      if (data.message === 'success') {
        console.log('Welcome');
        setStatusError('');
        localStorage.setItem("userToken", data.token);
        props.info();
        navigate('/home');
      } else {
        setStatusError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      setStatusError('An error occurred while logging in.');
    }
  }
  const formik = useFormik({
    initialValues: {
    
      email: '',
      password: '',
    
    },
    validationSchema: schema,
    onSubmit: sendRegisterData,
  });

  
  

  return (
    <div className='form'>
  
      <h2 className='heading'>Login Now!</h2>

      <form onSubmit={formik.handleSubmit} className='register-form'>
      

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

      
        <button type='submit' className='uiverse'>
          <div className='wrapper'>
            <span>Login</span>
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

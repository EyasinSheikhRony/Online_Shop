// @ts-nocheck
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import "./Login.css"

const Login = () => {

  let formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      password: yup.string().min(6, "You have at last 6 digit password").required()
    }),
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm({values: ""})
    }
  })

  return (
    <div className='img'>
      <form action="" onSubmit={formik.handleSubmit} className='w-2/6 py-6 px-8 mx-auto justify-center form rounded-xl' >
        <h1 className='form_title'>Login Form</h1>
        <hr className='mb-10 w-20 mx-auto' />
        {/* name field  */}
          <div className="form_name_div">
          <label htmlFor="name" className='form_name'>Name :</label>
          <input type="text" id='name' name='name' placeholder='Eyasin Sheikh Rony'
          className='name_input ml-7'
          value={formik.values.name} onChange={formik.handleChange} required />
        </div>
        <div className='ml-[165px] mt-2 mb-3 font-mono'>
          {formik.errors.name && formik.touched.name && <span className='text-red-600'>{formik.errors.name}</span>}
        </div>

        {/* password field  */}
        <div className="flex justify-center items-center">
          <label htmlFor="password" className='pass_label'>Password :</label>
          <input type="password" id='password' name='password' placeholder='Password Here...'
          className='form_input'
          value={formik.values.password} onChange={formik.handleChange} required />
        </div>
          <div className='flex justify-center font-mono ml-[65px]'>
          {formik.errors.password && formik.touched.password && <span className='text-red-600'>{formik.errors.password}</span>}
        </div>

        <button type="submit" className='submitBtn hover:bg-white hover:text-gray-700 login'>Login</button>
      </form> 
    </div>
  )
}

export default Login;



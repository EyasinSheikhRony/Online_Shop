// @ts-nocheck
import React from 'react'
import { useFormik } from 'formik';
import * as yup from "yup";

const Signup = () => {
  let formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: yup.object({
      fullName: yup.string().required(),
      userName: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(6, "You have at last 6 digit of password"),
      rePassword: yup.string().required().min(6, "You have at last 6 digit of password") ,
    }),
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm({values: ""});
    }
  })
  return (
    <div className='form_div'>
      <form action="" onSubmit={formik.handleSubmit}>
        <h1 className='form_title'>Sign Up</h1>
        <hr className='mb-10 w-20 mx-auto' />

        {/* name field  */}
        <div className="flex justify-start items-center mb-3">
          <label htmlFor="fullName" className='form_name'>Full Name :</label>
          <input type="text" name='fullName' id='fullName' className='name_input ml-6' placeholder='Full Name...' required value={formik.values.fullName} onChange={formik.handleChange} />
        </div>
        <div className="ml-[140px] font-mono">
          {formik.errors.fullName && <span className='text-red-600'>{formik.errors.fullName}</span> && formik.touched.fullName}
        </div>

        {/* userName field  */}
        <div className="form_main_div">
          <label htmlFor="userName" className='userName_label'>User Name :</label>
          <input type="text" name="userName" id="userName" className='form_input ml-[17px]' placeholder='User Name...' value={formik.values.userName} onChange={formik.handleChange} required />
        </div>
        <div className="ml-[140px] font-mono">
          {formik.touched.userName && formik.errors.userName && <span className='text-red-600'>{formik.errors.userName}</span> }
        </div>

        {/* email field  */}
        <div className="form_main_div">
          <label htmlFor="email" className='email_label'>Email :</label>
          <input type="email" name="email" id="email" className='form_input ml-[68px]' placeholder='Email Here...' value={formik.values.email} onChange={formik.handleChange} required />
        </div>
        <div className="ml-[140px] font-mono">
          {formik.touched.email && formik.errors.email && <span className='text-red-600'>{formik.errors.email}</span> }
        </div>

        {/* password field  */}
        <div className="form_main_div">
          <label htmlFor="password" className='pass_label'>Password :</label>
          <input type="password" name="password" id="password" className='form_input ml-[32px]' placeholder='Password Here...' value={formik.values.password} onChange={formik.handleChange} required />
        </div>
        <div className="ml-[140px] font-mono">
          {formik.touched.password && formik.errors.password && <span className='text-red-600'>{formik.errors.password}</span> }
        </div>

        {/* rePassword field  */}
        <div className="form_main_div">
          <label htmlFor="rePassword" className='pass_label'>Re Password :</label>
          <input type="password" name="rePassword" id="rePassword" className='form_input ml-[6px]' placeholder='Re Password...' value={formik.values.rePassword} onChange={formik.handleChange} required />
        </div>
        <div className="ml-[140px] font-mono">
          {formik.touched.rePassword && formik.errors.rePassword && <span className='text-red-600'>{formik.errors.rePassword}</span> }
        </div>

        <button type="submit" className='submitBtn'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup

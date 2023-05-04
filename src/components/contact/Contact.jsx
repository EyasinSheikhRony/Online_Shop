import React from 'react';
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="mt-28 mb-8 rounded-xl py-6 w-auto mx-10 bg-gray-100 flex flex-col items-center">
        <form action="" className=''>
          <div className="contact_us">
            <h1 className=' text-3xl font-bold text-gray-700 flex justify-center mb-8'>Contact Us</h1>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className=' font-semibold text-gray-600 mb-2'>Full Name<span className='text-red-800 font-bold'>*</span> </label>
            <input type="text" className='pl-2 py-1 outline-none border-none mb-2' name="name" id="name" placeholder='Rony Vau' required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className=' font-semibold text-gray-600 mb-2'>Your Email<span className='text-red-800 font-bold'>*</span> </label>
            <input type="email" className='pl-2 py-1 outline-none border-none mb-2' name="email" id="email" placeholder='example@gmail.com' required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className=' font-semibold text-gray-600 mb-2'>Message<span className='text-red-800 font-bold'>*</span></label>
            <textarea name="message" id="message" className=' outline-none border-none py-1 px-2' cols={30} rows={5} placeholder='Message Here...' required></textarea>
          </div>

          <button type="submit" className='flex w-full border-none outline-none py-2 items-center justify-center bg-gray-600 text-white font-bold font-sans mt-6 hover:text-gray-600 hover:bg-white transition duration-700 ease-in-out'>Send Me</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

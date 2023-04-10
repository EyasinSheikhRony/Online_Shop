import React from 'react'
import { FaOpencart } from "react-icons/fa";

export default function IndexHome() {
  return (
    <div>
      {/* navbar  */}
      <div className="flex justify-around mt-6 items-center">
        <div className="">
          <a href="home">
            <img src="./image/super-sale.png" alt="#" className='w-16' />
          </a>
        </div>
        <div className="flex justify-between w-[30%]">
          <a href="home" className=''>Home</a>
          <a href="about" className=''>About</a>
          <a href="categories" className='flex items-center'>Categories <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-1 arrow_down">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg></a>
          <a href="product" className='flex items-center'>Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-1 arrow_down">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a href="contact" className=''>Contact</a>
        </div>
        <div className="flex items-center">
          <div className="src mr-4 border-[2px] border-gray-700 px-2 py-1 rounded-md ">
            <input type="search" name="search" id="search" className='border-none outline-none pr-1' placeholder='Search Here....' />
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className="flex justify-between gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <FaOpencart className='cursor-pointer text-2xl' />
            <i className="fa-solid fa-user cursor-pointer text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

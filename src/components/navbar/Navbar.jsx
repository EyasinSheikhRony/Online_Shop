// @ts-nocheck

import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./Navbar.css";

let src = document.querySelector(".src")
src?.addEventListener("click", () => {
  src.classList.add("active")
})

export default function IndexHome() {
  return (
    <div className=' shadow-lg mb-4 fixed left-0 top-0 z-[100] right-0 bg-white'>
      {/* navbar  */}
      <div className="flex justify-between py-2 items-center w-[80%] mx-auto">
        <div className="">
          <a href="home">
            <img src="./image/super-sale.png" alt="#" className='w-16' />
          </a>
        </div>
        <div className="flex justify-between w-[30%] font-sans text-md font-semibold gap-4 max-[768px]:hidden">
          <a href="home" className='nav_anim'>Home</a>
          <a href="about" className='nav_anim'>About</a>
          <a href="contact" className='nav_anim'>Contact</a>
          <div className="container_drop_down">
            <a href="categories" className='flex items-center nav_anim categories'>Categories <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 ml-1 arrow_down">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <div className="content_drop_down">
            <div className="container_drop_down2">
              <a href="" className='flex items-center justify-center' >Kids <i className="fa-solid fa-arrow-right ml-9"></i></a>
                <div className="content_drop_down2">
                  <a href="">Size - 38-39</a>
                  <a href="">Size - 39-40</a>
                  <a href="">Size - 40-41</a>
                  <a href="">Size - 41-42</a>
                  <a href="">Size - 42-43</a>
                  <a href="">Size - 43-44</a>
                </div>
              </div>

              <div className="container_drop_down2">
              <a href="" className='flex items-center justify-center' >Man <i className="fa-solid fa-arrow-right ml-[34px]"></i></a>
                <div className="content_drop_down2">
                  <a href="">Size - 38-39</a>
                  <a href="">Size - 39-40</a>
                  <a href="">Size - 40-41</a>
                  <a href="">Size - 41-42</a>
                  <a href="">Size - 42-43</a>
                  <a href="">Size - 43-44</a>
                </div>
              </div>

              <div className="container_drop_down2">
                <a href="" className='flex items-center justify-center' >Woman <i className="fa-solid fa-arrow-right ml-[10px]"></i></a>
                <div className="content_drop_down2">
                  <a href="">Size - 38-39</a>
                  <a href="">Size - 39-40</a>
                  <a href="">Size - 40-41</a>
                  <a href="">Size - 41-42</a>
                  <a href="">Size - 42-43</a>
                  <a href="">Size - 43-44</a>
                </div>
              </div>
            </div>
          </div>
          <a href="product" className='nav_anim'>Product</a>
        </div>
        <div className="flex items-center">
          <div className="src mr-4 border-[2px] border-gray-800 px-2 py-1 rounded-md max-[912px]:hidden">
            <input type="search" name="search" id="search" className='border-none outline-none pr-1 bg-transparent' placeholder='Search Here....' />
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className="flex justify-between gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <div className="flex cart cursor-pointer">
            <AddShoppingCartIcon />
            <span className='zero'>0</span>
            </div>
            <i className="fa-solid fa-user cursor-pointer text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

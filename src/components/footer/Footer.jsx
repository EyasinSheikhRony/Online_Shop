import React from 'react';

let full_date = new Date();
let year = full_date.getFullYear();

const Footer = () => {
  return (
    <div className='bg-[#1C3C68] text-white'>
      <div className="flex justify-between pt-10 h-[30vh] w-[80%] mx-auto">
        <div className="">
          <h1 className=' font-bold font-sans text-2xl mb-1'>Discover</h1>
          <hr className='mb-6' />
          <div className="flex">
            <div className="flex flex-col contact text-sm mr-4">
              <a href="home" className='mb-1'>Home</a>
              <a href="terms" className='mb-1'>Terms</a>
              <a href="talent_culture">Talent & Culture</a>
            </div>
            <div className="flex flex-col contact text-sm">
              <a href="refund_policy" className='mb-1'>Refund Policy</a>
              <a href="faq" className='mb-1'>FAQ</a>
              <a href="privacy_policy">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className='mb-1 font-bold font-sans text-2xl'>Payment Methods</h1>
          <hr className='mb-6' />
          <div className="">
            <div className="flex gap-1 mb-1">
              <img src="./Payment-svg/amex.svg" alt="#" />
              <img src="./Payment-svg/mastercard.svg" alt="#" />
              <img src="./Payment-svg/visa.svg" alt="#" />
              <img src="./Payment-svg/dbbl.svg" alt="#" />
            </div>
            <div className="flex gap-1">
              <img src="./Payment-svg/bkash.svg" alt="#" />
              <img src="./Payment-svg/nagad.svg" alt="#" />
              <img src="./Payment-svg/upay.svg" alt="#" />
              <img src="./Payment-svg/union.svg" alt="#" />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className='mb-1 font-bold font-sans text-2xl'>Contact</h1>
          <hr className='mb-6' />
          <div className="contact text-sm">
            <p>+880 1306 333764</p>
            <p>Rupsha, Khulna, Bangladesh</p>
            <p>skrony2573@gmail.com</p>
          </div>
        </div>
        <div className="">
          <h1 className='mb-1 font-bold font-sans text-2xl'>Follow US</h1>
          <hr className='mb-6' />
          <div className="flex">
            <a href="https://www.facebook.com/EyasinSheikhRony" target='_main'>
              <img src="./social-icon/facebook.png" alt="#" className='w-12 h-12 p-2' />
            </a>
            <a href="" target='_main'>
              <img src="./social-icon/instagram.png" alt="#" className='w-12 h-12 p-2' />
            </a>
            <a href="" target='_main'>
              <img src="./social-icon/twitter.png" alt="#" className='w-12 h-12 p-2' />
            </a>
            <a href="" target='_main'>
              <img src="./social-icon/youtube.png" alt="#" className='w-12 h-12 p-2' />
            </a>
          </div>
        </div>
      </div>
      <hr className='w-[80%] mx-auto' />
      <div className="flex items-center justify-between w-[80%] mx-auto py-6">
          <div className="">
            <img src="./image/super-sale.png" alt="#" className='w-16 h-16 bg-white' />
          </div>
          <div className=" font-sans text-sm font-medium">&copy; 2022 - {year} Online Support | All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Footer

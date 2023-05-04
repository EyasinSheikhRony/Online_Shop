import React from 'react';

let full_date = new Date();
let year = full_date.getFullYear();

const Footer = () => {
  return (
    <div className='bg-[#1C3C68] text-white flex-wrap flex mt-24'>
      <div className="flex flex-wrap justify-between pt-10 h-auto w-[80%] max-[425px]:w-[100%] max-[425px]:ml-10 max-[768px]: mx-auto">
        {/* discover sections  */}
        <div className="">
          <h1 className='font-bold font-sans text-2xl mb-1'>Discover</h1>
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
        {/* payment method  */}
        <div className="mr-12 mt-6 lg:mt-0">
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
        {/* contact  */}
        <div className="mt-6 mr-16 lg:mt-0">
          <h1 className='mb-1 font-bold font-sans text-2xl'>Contact</h1>
          <hr className='mb-6' />
          <div className="contact text-sm">
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-phone mr-2"></i>
              <p>+880 1306 333764</p>
            </div>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-location-dot mr-2"></i>
              <p>Rupsha, Khulna, Bangladesh</p>
            </div>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-envelope mr-2"></i>
              <p>skrony2573@gmail.com</p>
            </div>
          </div>
        </div>
        {/* follow us  */}
        <div className="mt-6 min-[764px]:pr-12 xl:mt-0">
          <h1 className='mb-1 font-bold font-sans text-2xl'>Follow US</h1>
          <hr className='mb-5' />
          <div className="flex gap-2">
            <a href="https://www.facebook.com/EyasinSheikhRony" target='_main'>
              <img src="./social-icon/facebook.png" alt="#" className='w-7 h-7' />
            </a>
            <a href="" target='_main'>
              <img src="./social-icon/instagram.png" alt="#" className='w-7 h-7' />
            </a>
            <a href="" target='_main'>
              <img src="./social-icon/twitter.png" alt="#" className='w-7 h-7' />
            </a>
            <a href="" target='_main'>
              <img src="./social-icon/youtube.png" alt="#" className='w-7 h-7' />
            </a>
          </div>
        </div>
      </div>
      <hr className='w-[80%] mx-auto mt-8' />
      <div className="flex items-center justify-between w-[80%] mx-auto py-6">
          <div className="">
            <img src="./image/super-sale.png" alt="#" className='w-16 h-16 bg-white' />
          </div>
          <div className="font-sans text-sm font-medium max-[425px]:ml-[15px] max-[425px]:pt-[25px]">&copy; 2022 - {year} Online Support | All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import "./Card.scss";

const Card = ({item}) => {
  return (
    <div className='card flex flex-wrap max-[1024px]:w-[100%] shadow-xl hover:shadow-2xl rounded-lg mb-8 max-[768px]:ml-[1px] max-[1024px]:ml-[2px] min-[1440px]:ml-[1px] min-[1441px]:ml-[20px] mr-1'>
      <div className="cursor-pointer w-[300px]" >
        <p>{item.isNew && <span className='new'>New Seasion</span> }</p>
        <div className="add_btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8 cursor-pointer new2 add_cart_btn">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        </div>
        <div className="image">
          <img src={item.img1} alt="#" className='fast_img' />
          <img src={item.img2} alt="#" className='second_img' />
        </div>
        <div className="price mt-6 pl-4 pb-4">
          <h1 className=' font-bold text-2xl '>{item.title}</h1>
          <h2 className='font-medium font-sans mt-2'>Discount {item.discount}%</h2>
          <div className="flex items-center text-center">
            <h2 className=' font-medium font-sans text-gray-500 mr-2'>Old Price <del>${item.oldPrice}</del></h2>
            <h2 className='font-bold font-sans text-gray-700'>Price ${item.price}</h2>
          </div>
        </div>
        <div className="add_btn">
          <button type="submit" className='add_cart_btn px-2 py-1 bg-gray-700 text-white rounded-md font-semibold flex text-center'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card;

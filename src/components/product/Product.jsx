// @ts-nocheck
import React, { useState } from 'react';
import "./Product.css"
import { useParams } from 'react-router-dom';
import Products from '../products/Products';

const Product = () => {

  let catId = parseInt(useParams().id);
  let [maxPrice, setMaxPrice] = useState(1000);
  let [sort, setSort] = useState(null);

  return (
    <div className=' mb-8 flex w-[80%] mx-auto gap-4'>
      <div className="left w-[20%] mt-28">
        <div className="filter_item">
          <h1 className='text-2xl font-bold text-gray-700 mb-2' >Product Categories</h1>
          <div className="input_item">
            <input type="checkbox" name="man" id="1" value={1} />
            <label htmlFor="man" className='ml-1 font-medium text-gray-600'>Man</label>
          </div>
          <div className="input_item">
            <input type="checkbox" name="woman" id="2" value={2} />
            <label htmlFor="woman" className='ml-1 font-medium text-gray-600'>Woman</label>
          </div>
          <div className="input_item">
            <input type="checkbox" name="kids" id="3" value={3} />
            <label htmlFor="kids" className='ml-1 font-medium text-gray-600'>Kids</label>
          </div>
        </div>
        <div className="filter_item">
          <h1 className='mt-4 font-bold text-2xl mb-2 text-gray-700'>Filter by Price</h1>
          <div className="filter_price flex items-center">
            <span className='mr-1 font-bold text-sm text-gray-600'>0</span>
            <input type="range" name="filter_price" id="range_price" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span className='ml-1 font-bold text-sm text-gray-600'>{maxPrice} (Max 1000)</span>
          </div>
        </div>
        <div className="filter_item">
          <h1 className='mt-4 font-bold text-2xl mb-2 text-gray-700'>Sort by Price</h1>
          <div className="flex items-center">
            <input type="radio" name="radio_price" id="asc" value="asc" onChange={e => setSort("asc")} />
            <label htmlFor="asc" className='ml-1 font-medium text-gray-600'>Price (Lower First)</label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="radio_price" id="desc" value="desc" onChange={e => setSort("desc")} />
            <label htmlFor="desc" className='ml-1 font-medium text-gray-600'>Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right w-[80%]">
        <Products />
        {/* <div className="">
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52 mb-2' />
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52 mb-2' />
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52' />
        </div>

        <div className="ml-2">
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52 mb-2' />
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52 mb-2' />
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52' />
        </div>

        <div className="ml-2">
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52 mb-2' />
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52 mb-2' />
          <img src="./image/pic.jpg" alt="#" className='w-52 h-52' />
        </div> */}
        
      </div>
    </div>
  )
}

export default Product

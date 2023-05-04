import React from 'react'
import Products from '../products/Products';
import "./Categories.css"

const Categories = () => {
  return (
    <div>
      <Products />
      <div className="flex mx-auto justify-center flex-wrap">
        <div className="row">
          <div className="col"><img src="./image/pic.jpg" alt="#" className='w-[400px] h-[300px] mb-2 mr-2 img_new' />
            <button type='submit' className='new_btn bg-white font-bold text-gray-900'>New</button>
          </div>
          <div className="col"><img src="./image/pic.jpg" alt="#" className='w-[400px] h-[300px] mb-4 mr-2' />
            <button type='submit' className='new_btn bg-white font-bold text-gray-900'>Sale</button>
          </div>
        </div>
        <div className="row">
          <div className="col"><img src="./image/pic.jpg" alt="#" className='w-[400px] mb-4 mr-2 h-[608px]' />
            <button type='submit' className='new_btn bg-white font-bold text-gray-900'>Summer</button>
          </div>
        </div>
        <div className="row">
          <div className="col flex">
            <div className="col"><img src="./image/pic.jpg" alt="#" className='w-[400px] h-[300px] mb-2 mr-2' />
              <button type='submit' className='new_btn bg-white font-bold text-gray-900'>Kids</button>
            </div>
            <div className="col"><img src="./image/pic.jpg" alt="#" className='w-[400px] h-[300px] mb-2 mr-2' />
              <button type='submit' className='new_btn bg-white font-bold text-gray-900'>Man</button>
            </div>
          </div>
          <div className="col">
            <div className="col"><img src="./image/pic.jpg" alt="#" className='w-[810px] h-[300px] mb-4 mr-2' />
              <button type='submit' className='new_btn bg-white font-bold text-gray-900'>Woman</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
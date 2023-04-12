import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({item}) => {
  return (
      <div className="">
        <Link to={`./products/${item.id}`}>
          <div className='image_group'>
            <img src={item.img} alt="#" className='fastImg' />
            <img src={item.img2} alt="#" className='secondImg' />
          </div>
          <h1>{item.title}</h1>
          <div className="">
            <h1>Old Price <span>${item.oldPrice}</span></h1>
            <h1>Price <span>${item.price}</span></h1>
            <h1>Discount <span>{item.discount} %</span></h1>
          </div>
        </Link>
      </div>
  )
}

export default Card

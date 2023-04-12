import React from 'react';
import Card from '../card/Card';

const FeaturedProduct = () => {

  let data = [
    {
      id: 1,
      title: "T-Shirt",
      desc: "This is a Best t-shirt in this market and new arival",
      price: "150",
      oldPrice: "200",
      discount: "25",
      img: 'https://spito.com.bd/wp-content/uploads/2022/04/Men-Stylist-T-Shirt-Single-500x408.png',
      isNew: true,
    },
    {
      id: 2,
      title: "T-Shirt Old",
      desc: "This is a Best t-shirt in this market and new arival",
      price: "75",
      oldPrice: "100",
      discount: "25",
      img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81WB8VEg1eS._UY879_.jpg',
      img2: 'https://static-01.daraz.com.bd/p/9cb42312b74ecec4d35bab1464061f3a.jpg',
      isNew: false,
    },
    {
      id: 3,
      title: "T-Shirt Old",
      desc: "This is a Best t-shirt in this market and new arival",
      price: "50",
      oldPrice: "100",
      discount: "50",
      img: 'https://cdn.shopify.com/s/files/1/0624/4047/2804/products/StripedT-Shirt1.2_533x.jpg?v=1679204659',
      img2: 'https://static-01.daraz.com.bd/p/9cb42312b74ecec4d35bab1464061f3a.jpg',
      isNew: false,
    },
    {
      id: 4,
      title: "T-Shirt",
      desc: "This is a Best t-shirt in this market and new arival",
      price: "150",
      oldPrice: "200",
      discount: "25",
      img: 'https://spito.com.bd/wp-content/uploads/2022/04/Men-Stylist-T-Shirt-Single-500x408.png',
      isNew: true,
    },
    {
      id: 5,
      title: "T-Shirt",
      desc: "This is a Best t-shirt in this market and new arival",
      price: "150",
      oldPrice: "200",
      discount: "25",
      img: 'https://spito.com.bd/wp-content/uploads/2022/04/Men-Stylist-T-Shirt-Single-500x408.png',
      isNew: true,
    },
    {
      id: 6,
      title: "T-Shirt",
      desc: "This is a Best t-shirt in this market and new arival",
      price: "150",
      oldPrice: "200",
      discount: "25",
      img: 'https://spito.com.bd/wp-content/uploads/2022/04/Men-Stylist-T-Shirt-Single-500x408.png',
      isNew: true,
    },
  ]
  return (
    <div>
      <div className="">
        <h1>Featured Products</h1>
        {data.map(item => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProduct;
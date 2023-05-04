// @ts-nocheck
import React from 'react';
import Card from '../card/Card';
import "./Products.css"

let data = [
  {
    id: 1,
    title: "T-Shirt",
    desc: "This is a Best t-shirt in this market and new arival",
    price: "150",
    oldPrice: "200",
    discount: "25",
    img1: 'https://www.aarong.com/media/catalog/product/0/1/0120000030285.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
    isNew: true,
  },
  {
    id: 2,
    title: "T-Shirt Old",
    desc: "This is a Best t-shirt in this market and new arival",
    price: "75",
    oldPrice: "100",
    discount: "25",
    img1: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81WB8VEg1eS._UY879_.jpg',
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
    img1: 'https://cdn.shopify.com/s/files/1/0624/4047/2804/products/StripedT-Shirt1.2_533x.jpg?v=1679204659',
    img2: 'https://www.aarong.com/media/catalog/product/0/1/0120000029935.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
    isNew: false,
  },
  {
    id: 4,
    title: "T-Shirt",
    desc: "This is a Best t-shirt in this market and new arival",
    price: "150",
    oldPrice: "200",
    discount: "25",
    img1: 'https://www.aarong.com/media/catalog/product/0/1/0120000029295.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
    isNew: true,
  },
  // {
  //   id: 5,
  //   title: "T-Shirt",
  //   desc: "This is a Best t-shirt in this market and new arival",
  //   price: "150",
  //   oldPrice: "200",
  //   discount: "25",
  //   img1: 'https://www.aarong.com/media/catalog/product/0/1/0120000031178.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
  //   isNew: true,
  // },
  // {
  //   id: 6,
  //   title: "T-Shirt",
  //   desc: "This is a Best t-shirt in this market and new arival",
  //   price: "150",
  //   oldPrice: "200",
  //   discount: "25",
  //   img1: 'https://www.aarong.com/media/catalog/product/0/1/0120000030598.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
  //   isNew: true,
  // },
]

const Products = () => {
  return (
    <div className="flex flex-wrap mt-32 ml-1 max-[1024px]:pl-10 max-[912px]:w-[100%] max-[912px]:mx-auto">
      <div className='max-[912px]:w-[100%] max-[912px]:mx-auto'>
        <h1 className='font-sans text-3xl product_heading_anim text-gray-600 font-bold ml-4 mb-12'>Featured Product</h1>
        <div className="flex flex-wrap max-[912px]:w-[100%]">
        {data.map(item => <Card item={item} key={item.id} />)}
        {data.map(item => <Card item={item} key={item.id} />)}
        </div>
      </div>

      <div className='mt-12 mb-4'>
        <h1 className='font-sans text-3xl product_heading_anim text-gray-600 font-bold ml-2 mb-12'>Tranding Product</h1>
        <div className="flex flex-wrap">
        {data.map(item => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Products;

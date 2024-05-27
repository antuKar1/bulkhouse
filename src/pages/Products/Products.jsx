import React from 'react'

import Product from '../../component/products/Product';
import { useLoaderData } from 'react-router-dom';

const Products = ({value}) => {
  console.log("Products",value.length)
  return (
    
    <>
    <h1 className="text-4xl text-zinc-800 font-bold my-10 text-center">Our Products</h1>
    <div className='grid grid-cols-3 gap-6 my-8'>
    {
      value.map((shoe)=><Product key={shoe.id} value={shoe}></Product>)
    }
    
       
     
    
      
    </div>
    </>
  )
}

export default Products

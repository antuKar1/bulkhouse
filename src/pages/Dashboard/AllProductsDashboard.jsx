import React, { useEffect, useState } from 'react'

import SingleProduct from '../../component/dashboard/product/SingleProduct'

const AllProductsDashboard = () => {
 
const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/shoes")
        .then(res=>res.json()).
        then(data=>{setProducts(data)})
    },[])

    const deleteHandle=(id)=>{
      setProducts(products.filter((products)=>products.id !== id))
    }

  return (
    <>
    
    <div>
    <h1 className='text-center text-3xl font-extrabold my-16'>All Products</h1>
    <div className='grid grid-cols-3 gap-10 px-20 mb-10 '>
      {
        
        products.map(shoe=><SingleProduct key={shoe.id} value={shoe} ondelete={deleteHandle}></SingleProduct>)
      }
    </div>
    </div>
    </>
  )
}

export default AllProductsDashboard

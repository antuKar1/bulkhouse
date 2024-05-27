import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const EditProduct = () => {
    const product=useLoaderData();
   
   
   const [name,setName]=useState(product.name);
   const [brand,setBrand]=useState(product.brand);
   const [price,setPrice]=useState(product.price);
   const [color,setcolor]=useState(product.color);
   const [size,setSize]=useState(product.size);
   const [category,setCategory]=useState(product.category);
   const [availability,setavailability]=useState(product.availability);
   const [imageurl,setImageUrl]=useState(product.image_url);
   const [id,setId]=useState(product.id); 


     const handleProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const id = form.id.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const color = form.color.value;
    const size = form.size.value;
    const category = form.category.value;
    const availability = form.availability.value;
    const image_url = form.image_url.value;
    const data={id,name,brand,price,color,size,category,availability,image_url}

    fetch(`http://localhost:3000/shoes/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(res=>res.json())
    .then(data=>console.log("Update",data))
    
  };
  return (
    <div className="flex justify-center items-start h-screen ">
      <div className="card w-1/2 bg-base-100 shadow-xl my-4 ">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold mb-8">
            Edit Product
          </h2>
          <form onSubmit={handleProduct} className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-4">
              ID
              <input
                type="text"
                name="id"
                className="grow"
                placeholder="product id"
                value={id}
                onChange={(e)=>setId(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="product name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Brand
              <input
                name="brand"
                type="text"
                className="grow"
                placeholder="brand name"
                value={brand}
                onChange={(e)=>setBrand(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Price
              <input
                name="price"
                type="text"
                className="grow"
                placeholder="0.00$"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Color
              <input
                name="color"
                type="text"
                className="grow"
                placeholder="product color"
                value={color}
                onChange={(e)=>setcolor(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Size
              <input
                name="size"
                type="text"
                className="grow"
                placeholder="product size"
                value={size}
                onChange={(e)=>setSize(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Category
              <input
                name="category"
                type="text"
                className="grow"
                placeholder="product category"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Availability
              <input
                name="availability"
                type="text"
                className="grow"
                placeholder="Product availability"
                value={availability}
                onChange={(e)=>setavailability(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Image URL
              <input
                name="image_url"
                type="text"
                className="grow"
                placeholder="URL"
                value={imageurl}
                onChange={(e)=>setImageUrl(e.target.value)}
              />
            </label>

            <div className="card-actions justify-end">
              <button className="w-full btn bg-black text-white mt-5 ">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProduct

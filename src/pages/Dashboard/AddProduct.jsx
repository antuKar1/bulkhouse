import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  const [pid, setPid] = useState(1012);
  const s={
    
  }
  let id = 10;
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

    fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(res=>res.json())
    .then(data=>console.log(data)
    
    )
  };

  return (
    <div className="flex justify-center items-start h-screen ">
      <div className="card w-1/2 bg-base-100 shadow-xl my-4 ">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold mb-8">
            Add Your Product
          </h2>
          <form onSubmit={handleProduct} className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-4">
              ID
              <input
                type="text"
                name="id"
                className="grow"
                placeholder="product id"
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="product name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Brand
              <input
                name="brand"
                type="text"
                className="grow"
                placeholder="brand name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Price
              <input
                name="price"
                type="text"
                className="grow"
                placeholder="0.00$"
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Color
              <input
                name="color"
                type="text"
                className="grow"
                placeholder="product color"
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Size
              <input
                name="size"
                type="text"
                className="grow"
                placeholder="product size"
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Category
              <input
                name="category"
                type="text"
                className="grow"
                placeholder="product category"
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Availability
              <input
                name="availability"
                type="text"
                className="grow"
                placeholder="Product availability"
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              Image URL
              <input
                name="image_url"
                type="text"
                className="grow"
                placeholder="URL"
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
  );
};

export default AddProduct;

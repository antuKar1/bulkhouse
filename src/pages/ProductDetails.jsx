import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const data=useLoaderData();
   
    const {id,name,image_url,brand,price,size,category}=data;
  return (
    <div className=" my-10">
      <div className="mx-auto card w-1/2 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image_url}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body w-full  ">
            <h2 className="text-2xl font-bold text-center">Product ID {id}</h2>
            <h2 className="card-title text-center">{name}</h2>
            <div className="flex justify-between">
            <h2 className="text-lg font-bold"><span>Brand: </span>{brand}</h2>
            <h2 className="text-lg font-bold"><span>Price: </span>{price}</h2>
            </div>
            
            <div className="flex justify-between text-lg font-bold">
            <h2><span>Size: </span>{size}</h2>
            <h2><span>Category: </span>{category}</h2>
            </div>
          
          <div className="card-actions justify-center my-6">
            <Link className="btn bg-black text-white w-1/2" to={"/"}>Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

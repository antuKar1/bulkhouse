import React from "react";
import { Link } from "react-router-dom";

const Product = ({value }) => {
  
  const {id,name,image_url,brand,price}=value;
  return (
    <>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-64 object-cover"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <div className="flex justify-between">
          <h3 className="text-xl text-slate-600 font-bold">{brand}</h3>
          <h3 className="font-extrabold text-xl text-amber-500">{price}$</h3>
          </div>
          <div className="card-actions justify-center mt-5">
            <Link className="btn bg-zinc-900 text-slate-300 w-full" to={`/productDetails/${id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

import React from "react";
import { Link } from "react-router-dom";
import { MdAutoDelete } from "react-icons/md";
import { MdEditLocationAlt } from "react-icons/md";
import DashModal from "../DashModal";
import AllProductsDashboard from "../../../pages/Dashboard/AllProductsDashboard";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const SingleProduct = ({ value, ondelete }) => {
  const { id, name, image_url, brand, price } = value;

  const deleteProduct = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        ondelete(id);
        console.log("Deleted", data);
      });
  };
  // ========================================
 const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to Delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteProduct()
        },
        {
          label: 'No',
          onClick: () => ""
        }
      ]
    });
  };
  // ========================================
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-64 object-cover" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <div className="flex justify-between">
          <h3 className="text-xl text-slate-600 font-bold">{brand}</h3>
          <h3 className="font-extrabold text-xl text-amber-500">${price}</h3>
        </div>

        <div className="card-actions justify-around items-center mt-5">
          <Link
            to={`edit/${id}`}
            className="text-2xl tooltip tooltip-bottom"
            data-tip="Edit"
          >
            <MdEditLocationAlt />
          </Link>
          <Link
            className="btn bg-zinc-900 text-slate-300 "
            to={`/productDetails/${id}`}
          >
            View Details
          </Link>
          <Link
            onClick={submit}
            className="text-2xl tooltip tooltip-bottom"
            data-tip="Delete"
          >
            <MdAutoDelete />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

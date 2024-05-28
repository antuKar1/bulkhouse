import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import image from "../assets/reg.png"

const Regestration = () => {
    const navigate=useNavigate();
    const {createnamePassUser}=useContext(AuthContext);


const handleRegestrationForm=e=>{
    e.preventDefault();
    const username=e.target.username.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    createnamePassUser(email,password)
    .then(data=>    {
        swal("Aww yiss!😊", "You have Regestered Successfully!", "success").then(value=>navigate("/login"))
        })
    .fetch(error=>console.log(error.message))
}


  return (
    <div className="hero my-10  ">
        <div className="card py-10 px-4  w-1/3 shadow-2xl bg-base-100 ">
          <h1 className="text-4xl text-center font-bold ">
            👓Regestration Now👓
          </h1>
            <img className="w-48 mx-auto" src={image} alt="" />
          <form onSubmit={handleRegestrationForm} className="card-body gap-2 py-0">
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  name="username"
                  type="text"
                  className="grow"
                  placeholder="Username"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  name="email"
                  type="text"
                  className="grow"
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  placeholder="Password"
                  required
                  name="password"
                  type="password"
                  className="grow"
                />
              </label>
              <label className="label flex">
                
                 <span> Have you regestered? <Link className="font-bold" to={"/login"}>Login here</Link></span>
                 
                
              </label>
            </div>
            <div className="form-control gap-2 mt-4">
              <button className="btn btn-primary">Regester</button>
              
            </div>
          </form>
        </div>
      </div>
  )
}

export default Regestration

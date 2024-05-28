import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import swal from 'sweetalert';
const Login = () => {
const provider = new GoogleAuthProvider();
const navigate=useNavigate();
const {signInWithGoogle,namePassLogin,setUser}=useContext(AuthContext);

// Google Login
const googleLogin=()=>{
    signInWithGoogle(provider).
    then( res=>{
      setUser(res.user)
      swal("Aww yiss!😊", "You have Loged In Successfully!", "success").then(value=>navigate("/"))
      
    }).fetch(error=>console.log(error.message))
}

// Email Password Login
const handleForm=(e)=>{

    e.preventDefault();
    
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
     namePassLogin(email,password)
     .then(data=>{
      e.target.reset();
      setUser(data.user)
      swal("Aww yiss!😊", "You have Loged in Successfully!", "success").then(value=>navigate("/"))
      
     }).fetch(error=>console.log(error.message))
}


  return (
    <div className="hero my-10 ">
        <div className="card p-7  w-1/3 shadow-2xl bg-base-100 ">
          <h1 className="text-4xl text-center font-bold my-6">👓Login Now Here👓</h1>
          <figure></figure>
          <div className='card-body'>
          <form  onSubmit={handleForm}>
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
            <div className="form-control my-4">
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
              <label className="label">
                <span>
                  {" "}
                  Haven't you regestered?{" "}
                  <Link className="font-bold" to={"/regestration"}>
                    Regestestration
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control gap-2 mt-4">
              <button className="btn text-lg font-semibold btn-primary">Login</button>
             
            </div>
          </form>
          <div className="form-control gap-2 mt-4">
              
              <button onClick={googleLogin} className="btn text-lg font-semibold   bg-slate-50 1/2">
               <FcGoogle />Google Login 
            </button>
            <button  className="btn bg-black text-white text-lg font-semibold"><FaGithub />Git Login </button>
        </div>
          </div>
          
          <div>
            
          </div>
        </div>
      </div>
  )
}

export default Login

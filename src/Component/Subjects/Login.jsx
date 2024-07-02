import React, { useEffect } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

    const {register, handleSubmit, formState: { errors }, }=useForm();
    const { loginWithRedirect } = useAuth0();
    const history =useNavigate();
     async function submitdata (data) {
       
    }
    

    return (
       <>
       <div className="container">
           
           <div className=" shadow-lg mt-5 col-lg-6 mx-auto p-4 redi ">
               <form action="" method='post' onSubmit={handleSubmit(submitdata)} >
               <h3 className='text-center hed'>Login Hear</h3>
               <div className='col-lg-6 mx-auto mt-3' >
                          <span className='dec ms-1'>Email :</span><input type="text" {...register("email",{required: {
                                value: true,
                                message: "Enter a Email"
                            },
                            pattern: {
                                value: /^[a-z0-9.-_]+@([a-z0-9.-_])+\.([a-z]{2,3})$/,
                                message: "Enter a vallid Email Address"
                            }})} placeholder='enter email' className='form-control'/>
                            {errors.email && <p>{errors.email.message}</p>}
                   </div>
                   <div className='col-lg-6 mx-auto mt-3' >
                          <span className='dec ms-1'>Password :</span><input type="password" {...register("password" ,{required: {
                                value: true,
                                message: "Enter  password"
                            },
                            pattern: {
                                value: /^[0-9]{5}$/,
                                message: "plese enter valid mobile number "
                            }

                        })} 
                          placeholder='enter password' className='form-control'/>
                          {errors.password && <p>{errors.password.message}</p>}
                   </div>
                 
                   
                   <div className='col-lg-12  mt-3 text-center'>
                               <button className='btn btn-primary w-50' onClick={() => loginWithRedirect()}>Login</button><br />
                               {/* <Link to={"/regi"}>New User?</Link> */}
                   </div>

               </form>
           </div>
       </div>
       
       </>
    );
}

export default Login;
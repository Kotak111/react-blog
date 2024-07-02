import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Register(props) {
    const {register, handleSubmit, formState: { errors }, }=useForm();
    const history =useNavigate()
   async function  dataSubmit(data){
        const dataGet = localStorage.getItem('userList')
        const user = dataGet == null ? [] : JSON.parse(dataGet);
        user.push(data)
        localStorage.setItem("userList", JSON.stringify(user))
        // window.location.href = window.location.href;
        history("/login")
    }
    function registrenow(){
        history("/login")

    }
    
    return (
       <>
        <div className='col-6 mx-auto  shadow-lg p-5 main' >
                <h2 className='text-center main mt-4'>Registration Form</h2>
                <form action="" method='post' onSubmit={handleSubmit(dataSubmit)}>
                    <div className='mt-4'>
                        <h6 className='text-center dec' >Your Name : </h6> <input type="text" {...register("name", {
                            required: "Please Enter a Name"
                        })} className='form-control w-50 mx-auto' placeholder='Enter Your Name' autoFocus />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className='mt-4'>
                        <h6 className='text-center dec' >Your email : </h6> <input type="text" {...register("email", {
                            required: {
                                value: true,
                                message: "Enter a Email"
                            },
                            pattern: {
                                value: /^[a-z0-9.-_]+@([a-z0-9.-_])+\.([a-z]{2,3})$/,
                                message: "Enter a vallid Email Address"
                            }
                        })} className='form-control w-50 mx-auto' placeholder='Enter Your Email' />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className='mt-4'>
                        <h6 className='text-center dec' >Your mobile no. :</h6> <input type="number" {...register("mobile", {
                            required: {
                                value: true,
                                message: "Enter a mobile number"
                            },
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "plese enter valid mobile number "
                            }

                        })} className='form-control w-50 mx-auto' placeholder='Enter Your mobile' />
                        {errors.mobile && <p>{errors.mobile.message}</p>}
                    </div>
                    <div className='mt-4'>
                        <h6 className='text-center dec' >Your city :</h6>  <select id="disabledSelect"
                            className="form-select w-50 mx-auto" {...register("city", {
                                required: "plese enter a city"
                            })} >
                            <optgroup label='Your City'>
                                <option>Surat</option>
                                <option value="junagadh">Junagadh</option>
                                <option value="rajkot">Rajkot</option>
                                <option value="ahamedabad">Ahmedabad</option>
                            </optgroup> </select>
                        {errors.city && <p>{errors.city.message}</p>}
                    </div>
                  
                    <div className='mt-4'>
                        <button className='btn btn-primary w-50 yes' onClick={()=>registrenow()}>Register Now</button><br /><br />
                        <Link to={"/login"}className='yes ' >All ready Register?please click and login</Link>

                    </div>

                </form>
            </div>
       </>

    );
}

export default Register;
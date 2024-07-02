import React from 'react';

import { useForm } from 'react-hook-form';


function Contact(props) {
  const{handleSubmit, register , formState: { errors }}=useForm();
  function datasubmit(){

  }
    return(
        <>

        <div className="contact-main mx-auto">
           <div className="container ">
          <div className="row co-mian-1 w-100 shadoe-lg ">
            <div className="col-lg-6 col-md-6 col-sm-12 p-5" >
                <img src="yes2.png" alt="" className='img-fluid'/>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <form action="" onSubmit={handleSubmit(datasubmit)} >
              <h3 className='text-touch mt-5'>Get in touch</h3>
              <div className='col-lg-6 mt-3 col-md-6 col-sm-12 ' >
              <i class="fa fa-user icon"></i>
                           <input type="text" {...register("name",{required:"enter name"})} 
                           className='form-control  input-demo' placeholder='Enter Username' autoFocus  />
                          
                    </div>
                    <div className='col-lg-6 col-md-6 mt-3 inputbox' >
                    <i class="fa-solid fa-envelope icon"></i>
                           <input type="text" {...register("email",{required:"enter name"})} 
                          className='form-control input-demo' placeholder='Enter Email'/>
                          
                    </div>
                    <div className='col-lg-6  col-md-6 mt-3 inputbox' >
                    <i class="fa-solid fa-message icon"></i>
                      <textarea {...register("message",{required:"enter message"})} 
                           className='form-control input-demo-1' placeholder='Message'  rows={4} ></textarea>
                     
                    </div>
                    <div className='col-lg-6 col-md-6  mt-4 ' >
                      <button className='btn btn-primary input-demo-2'>Send</button>
                    </div>
              </form>
              </div>
            </div>
          </div>
          </div>
      
        </>
    )
}

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import "../Blogs/style.css"
import FooterData from './FooterData';

function Footer({dec}) {
    const obj1 = { "/all": "AllBlogs", "/company": "Company" , "/shopes": "PizaaShopes" , "/tes": "TeaStall" , "/bakers": "Bakers" }
    const drop=Object.entries(obj1).map((ele)=>{
        return  <li><Link to={ele[0]} className=' tet ms-3'>{ele[1]}</Link></li>
   
    })
    return (
        <>
        <div className="footer-main">
            <div className="row mx-0 ">
                <div className="col-lg-4  col-md-6 col-sm-12 ">
                <Link className="navbar-brand title ms-5" href="#">SuccessBloger</Link>
                <hr className='hr-1 ms-5'/>
                <ul style={{listStyle:"none"} }>
                   {drop}
                </ul>
                </div>
                <div className="col-lg-4  col-md-6 col-sm-12">
                    {
                        FooterData.map((items)=>{
                            return(
                                <li className='p-1 text-center mx-auto mt-5'>{items.dec}</li>
                            )

                        })
                    }
                  
                </div>
                <div className="col-lg-4  col-md-6 col-sm-12 ">
                    <h3 className='top-reded text-center top-reded mt-3'>About Company</h3>
                    <hr className='hr-1 mx-auto'/>
                            <p className='text-white text-center' style={{fontWeight:"bold"}}>New Rto Road Vastral, Ahmedabad</p>
                            <p className='text-white text-center' style={{fontWeight:"bold",fontSize:"15px"}}>email:-SuccessBloger191@gmail.com</p>
                            <p className='text-primary text-center' style={{fontWeight:"bold"}}>Contact :- 9824292374</p>
                </div>

                
            </div>
            <hr style={{opacity: "0.3"}}/>
                    <p className="Copyright text-center">Copyright ©2024 All rights reserved | This template is made with  <i class="fa-solid fa-heart" style={{color:"#e51f1f"}}></i> by<span style={{color:"red"}}> Harsh kotak</span></p>
                
            
            
        </div>
        
        </>
    );
}

export default Footer;
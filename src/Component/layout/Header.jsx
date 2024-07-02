import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Blogs/style.css"
import Menu from '../Subjects/Menu';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function Header(props) {
    const { loginWithRedirect } = useAuth0();
   const { user, isAuthenticated, isLoading ,  } = useAuth0();
   const { logout } = useAuth0();




    function submit(id) {
        document.querySelector("#yes").style.display = "none"

    }


    const obj = { "/": "Home", "/about": "About", }
    const newData = Object.entries(obj).map((ele) => {
        return <li className="nav-item ">
            <Link className="nav-link " to={ele[0]}>{ele[1]}</Link>
        </li>
    })
    const obj1 = { "/all": "AllBlogs", "/company": "Company", "/shopes": "PizaaShopes", "/tea": "TeaStall", "/bakers": "Bakers" }
    const drop = Object.entries(obj1).map((ele) => {
        return <li><Link className="dropdown-item" to={ele[0]} disabled onClick={() => filterItem(category)}>{ele[1]}</Link></li>

    })

    return (
        <div>
            <nav className="navbar navbar-expand-lg   ty fixed-top  ">
                <div className="container-fluid ">
                    <Link className="navbar-brand title ms-5" href="#">SuccessBloger</Link>
                    <button class="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-2 " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto ">
                            {newData}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Subjects
                                </Link>
                                <ul className="dropdown-menu p-2 " aria-labelledby="navbarDropdown" >
                                    {drop}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                            </li>
                            <li>
                                {isAuthenticated && <p className='text-primary '>{user.name}</p>}
                            </li>

                        </ul>
                            {
                                isAuthenticated ? (
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='btn btn-outline-warning p-3 me-2'>
                                    Log Out
                                  </button>
                                ) : (
                                    <button className='btn btn-outline-danger p-3 me-3' onClick={() => loginWithRedirect()}>Login</button>
                                )
                            }

                       
                       

                    </div>

                </div>

            </nav>
        </div>
    );
}

export default Header;
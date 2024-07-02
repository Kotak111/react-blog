import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewHeader(props) {
    const history=useNavigate();
   
    function submit(id){
        history("/login")
            
    }
   

    const obj = { "/": "Home", "/about": "About", }
    const newData=Object.entries(obj).map((ele)=>{
        return <li className="nav-item ">
        <Link className="nav-link " to={ele[0]}>{ele[1]}</Link>
    </li>
    })
    const obj1 = { "/all": "AllBlogs", "/company": "Company" , "/shopes": "PizaaShopes" , "/tes": "TeaStall" , "/bakers": "Bakers" }
    const drop=Object.entries(obj1).map((ele)=>{
        return  <li><Link className="dropdown-item" to={ele[0]} disabled>{ele[1]}</Link></li>
   
    })
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-white  bg-warning  fixed-top  ">
                <div className="container-fluid ">
                    <Link className="navbar-brand title ms-5" href="#">SuccessBloger</Link>
                    <button class="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                    <div className="collapse navbar-collapse p-2 " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto ">
                        {newData}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Subjects
                                </Link>
                                <ul className="dropdown-menu p-2 " aria-labelledby="navbarDropdown">
                                   {drop}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                            </li>
                            
                        </ul>
            <Link className='btn btn-outline-danger me-5 p-3' to={"/login"} id='yes' onClick={()=>submit()} >Logout</Link>

                      
                    </div>
                    
                </div>
                
            </nav>
        </div>
    );
}

export default NewHeader;
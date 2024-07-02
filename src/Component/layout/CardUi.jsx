import React, { useState  , useNavigate} from 'react';
import "../Blogs/style.css"
import { Link } from 'react-router-dom';
// import {useHistory} from "react-router-dom"

function CardUi({name,dec,date,src,id}) {
    return (
        <>
        <div className="card" >
  <img src={src??"no data"} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    {/* <p className="card-title"> {id}</p> */}
    <h3 className="card-title">{name??"no data"}</h3>
    <p className="card-text">{dec??"no data"}</p>
    <h6 className="card-text mt-2">{date??"no data"}</h6>
   <Link to={`/singlecat/${id}`} className='btn btn-primary'>Read More...</Link>
  </div>
</div>
        </>
    );
}

export default CardUi;
import React, { useEffect, useState } from 'react';
import Menu from '../Subjects/Menu';
import { useParams } from 'react-router-dom';
import "../Blogs/style.css"
function SingleCatagoryShow(props) {
    const { id } = useParams();
    console.log(id);
    const [items, setItems] = useState({});

    const filterItem = (cateItem) => {
        console.log(items)
        const updatedItem = Menu.filter((curElem) => {
            console.log(curElem.id == cateItem)
            return curElem.id == cateItem;
        })
        setItems(updatedItem[0]);
   
    }

    useEffect(() => {
        filterItem(id)
    }, [])

    // console.log(`<img src="${items.src}"/>`)
    return (
        <>
           
            <div className="show-main" >
                    <div className="row mx-0">
                        <div className="col-lg-3 col-sm-12">
                            <img src={`/${items.src}`} alt="..." className='img-fluid  h-100 w-100'  />     
                        </div>
                        <div className="col-lg-9 col-sm-12">
                            <h2 className='single-text'>{items.name}</h2>
                            <p className='single-dec-one'> {items.dec}</p>
                            <h4 className='single-date'>{items.date}</h4>
                            <div className='des-single'>
                                 <h6 > {items.dec2}</h6>
                                 
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default SingleCatagoryShow;
{/* <div className="card" style={{marginTop:"300px"}}>
<img src={items.src??"no data"} className="card-img-top img-fluid" alt="..." />
<div className="card-body">
    <p className="card-title"> {items.id}</p>
    <h5 className="card-title">{items.name ?? "no data"}</h5>
    <p className="card-text">{items.dec ?? "no data"}</p>
    <h4 className="card-text mt-2">{items.date ?? "no data"}</h4>
    <p className="card-text">{items.dec2 ?? "no data"}</p>

</div>
</div> */}

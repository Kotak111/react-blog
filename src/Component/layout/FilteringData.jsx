import React, { useState } from 'react';
import Menu from '../Subjects/Menu';
import CardUi from './CardUi';

function FilteringData(props) {
    const [items,setItems]=useState(Menu);


    const filterItem  = (cateItem)=>{
            const updatedItem = Menu.filter((curElem)=>{
                    return curElem.category === cateItem; 
            })
            setItems(updatedItem);

    }
    return (
        <>
        
        <div className="container fil-1">
        <h1 className='text-center '>Gallery</h1>
        <div className="d-flex justify-content-around mt-5 ">
            <button className='btn btn-outline-danger p-2' onClick={()=>filterItem('comapny')}>Company</button>
            <button className='btn btn-outline-primary p-2'  onClick={()=>filterItem('Shopes')}>Shopes</button>
            <button className='btn btn-outline-success p-2'  onClick={()=>filterItem('Tea')}>TeaCompanys</button>
            <button className='btn btn-outline-dark p-2'  onClick={()=>filterItem('bakers')}>Bakers</button>
            <button className='btn btn-outline-warning p-2 ' onClick={()=>setItems(Menu)}>All</button>
        </div>
        <hr />
       
        <div className="row demo-filter">
            {
                items.map((items)=>{
                    return(
                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                <CardUi id={items.id}  src={items.src} name={items.name} dec={items.dec} date={items.date}></CardUi>
                        </div>
                        
                    )
                })
            }
           </div>
        </div>

        </>
    );
}

export default FilteringData;
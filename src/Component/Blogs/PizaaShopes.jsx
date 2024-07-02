import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from '../Subjects/Menu';
import CardUi from '../layout/CardUi';

function PizaaShopes(props) {

    const [items, setItems] = useState(Menu);

    const filterItem = (cateItem) => {
        console.log(cateItem)
        const updatedItem = Menu.filter((curElem) => {
            return curElem.category === cateItem;
        })
        setItems(updatedItem);
    }

    useEffect(() => {
        filterItem("Shopes")
    }, [])
    return (
        <>
            <div className="row demo-filter drop-file mx-0">
                {
                    items.map((items) => {
                        return (
                            <div className="col-lg-4 col-md-6  col-sm-12">
                                <CardUi id={items.id} src={items.src} name={items.name} dec={items.dec} date={items.date}></CardUi>
                            </div>

                        )
                    })
                }
            </div>
        </>
    );
}

export default PizaaShopes;
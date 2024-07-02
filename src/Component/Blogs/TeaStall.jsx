import React, { useEffect, useState } from 'react';
import CardUi from '../layout/CardUi';
import Menu from '../Subjects/Menu';

function TeaStall(props) {
    const [items, setItems] = useState(Menu);

    const filterItem = (cateItem) => {
        console.log(cateItem)
        const updatedItem = Menu.filter((curElem) => {
            return curElem.category === cateItem;
        })
        setItems(updatedItem);
    }

    useEffect(() => {
        filterItem("Tea")
    }, [])
    return (
        <div>
             <div className="row demo-filter drop-file mx-0">
                {
                    items.map((items) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <CardUi  id={items.id} src={items.src} name={items.name} dec={items.dec} date={items.date}></CardUi>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
}

export default TeaStall;
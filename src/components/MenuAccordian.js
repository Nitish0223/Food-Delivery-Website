import { useState } from "react";
const MenuAccordian = ({title,items}) => {
    const [accordian,setaccordian] = useState(false);
    const handler = () => {
        setaccordian(!accordian);
    }
    return(
        <div className="accordian" onClick={handler}>
            <div className="accordian-header">
            <span>{title} ({items.length})</span>
            <span className="symbol">🔻</span>
            </div>


           {accordian && <div className="accordian-body">
                {items.map((item)=>(
                    <div key={item.id} className="menu-items">
                        <span className="item-name">{item.name}</span>  -  ₹<span className="item-price">{item.price}</span>

                    </div>
                ))}
            </div>    } 
        </div>
    );
};
export default MenuAccordian;
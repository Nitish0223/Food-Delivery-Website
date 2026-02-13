import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMenuPage from "../utils/useMenuPage";
import MenuAccordian from "./MenuAccordian";

const MenuPage = () => {
    const {resId} = useParams();
    const {Menu} = useMenuPage(resId);
    const {Resname} = useMenuPage(resId);
    console.log(Menu);


    return(
        <div id="menu-page">
        <h1 className="resNameMenuPage">{Resname} Menu</h1>
        { 
          Object.entries(Menu).map(([category,items])=>{
             console.log()
              return  <MenuAccordian  key={category}  title={category}  items={items}/>


         } )


        }

        
        </div>
    );
}
export default MenuPage;
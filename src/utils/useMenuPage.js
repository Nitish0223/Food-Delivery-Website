import { useState,useEffect } from "react";

const useMenuPage = (resId) => {
    const[Menu , setMenu] = useState([]);
      const[Resname,setResname] = useState("");

          useEffect(()=>{
              MenuData();
          },[]);

    let MenuData = async () => {
       let Apidata = await fetch(`http://localhost:3001/menus?restaurantId=${resId}`);

        let jsondata = await Apidata.json();
          setMenu(jsondata[0].menu);
          setResname(jsondata[0].ResName);
    };
    return {Menu,Resname};
};
export default useMenuPage;
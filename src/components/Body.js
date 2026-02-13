import ResCard,{ LabelResCard } from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { useOutletContext } from "react-router-dom";


const Body = () => {
    const {ResMockdata,setResMockdata, filtereData,setfilteredData} = useOutletContext();
    const onlineStatus = useOnlinestatus();
    const LabelRes = LabelResCard(ResCard);
    
    
    useEffect(()=>{
        
      const timer =  setTimeout(()=>{
        Fetchdata();
        },500)
    
        return () => clearTimeout(timer); 
    },[])


    const Fetchdata = async () => {
        const Apidata = await fetch("http://localhost:3001/restaurants");
        const jsonValue = await Apidata.json();
        setResMockdata(jsonValue);
        setfilteredData(jsonValue);

    }

const [Searchtext,SetSearchtext] = useState("");

    if(onlineStatus === false)  return (
    <h1>Oops !! Looks like you are offline .</h1>
        
    );

    return ResMockdata.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">

            <div className="search-button">
            <input type="text" placeholder="Search" className="search-box"
            value={Searchtext}
            onChange={(e)=>{
                let val = e.target.value;

                let cleanedval = val.trim().toLowerCase();

                SetSearchtext(val);
                if(val.trim() === ""){
                    setfilteredData(ResMockdata);
                }
                else{
                    const filterData = ResMockdata.filter((res)=>{
                        const NameMatch = res.name.toLowerCase().includes(cleanedval);
                        const CuisineMatch = res.cuisines.join(" ").toLowerCase().includes(cleanedval);


                        return NameMatch || CuisineMatch;
                    });
                    setfilteredData(filterData);
                }
            
            }}
            ></input>

            </div>

            <button className="filter-btn"
            onClick={()=>{
                const Filterdata = ResMockdata.filter((x)=>x.rating>4);
                setfilteredData(Filterdata);
            }}  
            >Show Top Rated Restaurants</button>
            </div>

            <div className="res-containter">
           {
            filtereData.map((res) =>
             (
                <Link key={res.id}


                 to={"/restaurants/"+res.restaurantCode}>

                {res.promoted === true ? <LabelRes resData={res}/> : <ResCard resData={res}/>}


                 </Link>
                
                )
             
             )
           }
            
            </div>
        </div>
    );
}
export default Body;
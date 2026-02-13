import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Header = ({ResMockdata,setfilteredData}) => {
    const [btnName,SetbtnName] = useState("Login");
    const onlineStatus = useOnlinestatus();

    return(
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Status :{onlineStatus === true ? "🟢" : "🔴"}</li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/"  onClick={() => setfilteredData(ResMockdata)}>Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li>Cart</li>
                <button className="login"  
                onClick={()=>{
                    btnName === "Login" ? SetbtnName("Logout") : SetbtnName("Login")
                }}
                >
                {btnName}
                </button>
            </ul>
        </div>
        </div>
    );
}
export default Header;
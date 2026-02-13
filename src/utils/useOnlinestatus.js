import { useState,useEffect } from "react";

const useOnlinestatus = () => {
    const [OnlineStatus,setOnlineStatus] = useState(true);
    

         window.addEventListener("online",()=>{
            setOnlineStatus(true);
    });

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
    });
    
    
    return OnlineStatus;
};
export default useOnlinestatus;
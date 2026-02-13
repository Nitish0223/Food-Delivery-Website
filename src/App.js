import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MenuPage from "./components/MenuPage";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Grocery from "./components/Grocery";
import { useState } from "react";


const AppLayout = () => {

    const Grocery = lazy(import("./components/Grocery"));

    const [ResMockdata, setResMockdata] = useState([]);
    const[filtereData,setfilteredData] = useState([]);

    return (
        <div className="app">
        <Header 
        setfilteredData={setfilteredData}
        ResMockdata = {ResMockdata}
        />
        <Outlet context={{
  ResMockdata,
  setResMockdata,
  filtereData,
  setfilteredData
}}/>
        </div>
    );
}
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement:<Error/>,
 // we have children routes so that our page doesnt reloads everytime we go to another page
        children: [
            {
                path: "/",
                element: <Body />,

            },
             {
                path: "/About",
                element: <About/>
             },
             {
                path: "/Contact",
                element: <Contact/>
              },
              {
                path: "/restaurants/:resId",
                element: <MenuPage/>
              },
              {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading... </h1>}><Grocery/></Suspense>
              },
              
        ]

    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/> );

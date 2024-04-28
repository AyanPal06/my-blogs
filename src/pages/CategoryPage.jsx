import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Pageination from "../components/Pageination";
import Blogs from "../components/Blogs";

const CategoryPage=()=>{
    const navigation=useNavigate();
    const location=useLocation();
    const category=location.pathname.split('/').at(-1);
    console.log("category",category);

    return(
        <div >
            <Header/>
            <div className=" w-11/12 max-w-[650px] mt-[65px] mb-[-40px] mx-auto">
             
            <button className=" rounded-md border border-gray-300 px-4 py-1" onClick={()=> navigation("/")}>
                Home
            </button>
            
            <h2 className="font-bold underline text-xl mt-3">
                Blogs On <span>{category}</span>
            </h2>
            </div>
            <Blogs/>
            <Pageination/>
        </div>
    )
}
export default CategoryPage;
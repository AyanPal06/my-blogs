import React from "react";
import Header from "../components/Header";
import Pageination from "../components/Pageination";
import Blogs from "../components/Blogs";
import { useLocation, useNavigate} from "react-router-dom";

const TagPage =()=>{
    const navigation =useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
    console.log(tag);
    return(
        <div>
            <Header/>
               <div className=" w-11/12 max-w-[650px] mt-[65px] mb-[-40px] mx-auto">
               <button className=" rounded-md border border-gray-300 px-4 py-1" onClick={()=> navigation("/")}>
                   Home
               </button>
                  <h2  className="font-bold underline text-xl mt-3">
                    Blogs Tagged <span>#{tag}</span>
                  </h2>
               </div>
               <Blogs/>
               <Pageination/>
        </div>
    )
}
export default TagPage
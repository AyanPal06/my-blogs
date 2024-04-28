import React from "react";
import Header from "../components/Header";
import Pageination from "../components/Pageination";
import Blogs from "../components/Blogs";

const Home =()=>{
    return(
        <div>
            <Header/> 
               <div>
                <Blogs/>
                <Pageination/>
               </div>
        </div>
    )
}
export default Home
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

export default function Blogs(){

    const {posts,loading}=useContext(AppContext);
    return(
        <div className="w-11/12 max-w-[650px] my-[65px] flex flex-col mx-auto items-center">
           {
            loading? (<Spinner/>):
                posts.length===0?(
                <div  className="min-h-[80vh] w-full flex justify-center items-center">
                    <p className="text-center font-bold text-3xl">No Post Found !</p>
                </div>):(posts.map((post)=>(<Card key={post.id} post={post}/>))
            )
           }
        </div>
    );
}

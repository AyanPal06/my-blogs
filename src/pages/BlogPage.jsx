import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Card from "../components/Card"
import Header from "../components/Header"
import Spinner from "../components/Spinner"


const BlogPage=()=>{
    const [blog,setBlog]=useState(null);
    const[relatedBlogs,setRelatedBlogs]=useState([]);
    const location =useLocation();
    const navigation=useNavigate();
    const {loading,setLoading}=useContext(AppContext);
    const blogId=location.pathname.split("/").at(-1);
    console.log(blogId);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
        //console.log(url);
        try{
            const res=await fetch(url);
            const data=await res.json();
            //console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log(error);
            console.log("404 not found");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
     
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

    return(
       <div>
            <Header/>
        <div  className=" w-11/12 max-w-[650px] mt-[65px] mb-[-40px] mx-auto">
        <button className=" rounded-md border border-gray-300 px-4 py-1"  onClick={() => navigation(-1)}>Back</button>
       </div>
            {/* <Card post={blog}/> */}
        <div className=" w-11/12 max-w-[650px] mt-[65px] mb-[-40px] mx-auto">
           {
                loading ?
                (<div className="flex justify-center items-center">
                   <Spinner/>
                </div>):
                blog?

                 (<div>
                    <Card post={blog}/>
                     <h2 className="font-bold underline text-xl mt-3">Related Blogs</h2>
                     {/* {console.log(relatedBlogs)} */}
                    {relatedBlogs && relatedBlogs.map((post)=>{
                       return(<div key={post.id}>
                        <Card post={post}/>
                       </div>)
                    })}
                </div>):( 
                    <div className="font-bold underline text-xl mt-3"> No Blogs Found !</div>
                )
            }   
        </div>
           
       </div>
    )
}
export default BlogPage;
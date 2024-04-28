// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import Pageination from "./components/Pageination";
import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import {Routes,Route, useSearchParams, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage" ;
import TagPage from "./pages/TagPage";
import BlogPage from "./pages/BlogPage";
import "./App.css";

export default function App() {

  const{fetchBlogPosts}=useContext(AppContext);
  const[searchParams,setSerchParams]=useSearchParams();
  const location=useLocation();

  // useEffect(()=>{
  //     fetchBlogPosts();
  // },[])

  useEffect(()=>{
     const page=searchParams.get("page") ?? 1;
     if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
     }
     else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("_"," ");
      fetchBlogPosts(Number(page),null,category);
     }
     else{
      fetchBlogPosts(Number(page));
     }

  },[location.pathname, location.search]);

  // return (
  //   <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
  //      <Header/>
  //      <Blogs/>
  //      <Pageination/>
  //   </div>
  // );

  return(
    <Routes>
      
      {/* :blogId  --> this is called dynamic parameter. */}
      
         <Route path="/" element={<Home/>}/>
         <Route path="/blog/:blogId" element={<BlogPage/>}/>
         <Route path="/tags/:tag" element={<TagPage/>}/>
         <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
}

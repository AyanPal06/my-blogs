import React from "react";
import { NavLink } from "react-router-dom";

const Card=({post})=>{
    return(
      <div className=" flex flex-col py-3 gap-y-3">
        <NavLink to={`/blog/${post.id}`}>
            <p className="text-sm font-bold">{post.title}</p>
        </NavLink>
        
         <p className="text-[13px]">
            By <span className="italic">{post.author}</span> On{" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","_")}`}><span className="font-semibold underline">{post.category}</span></NavLink>
         </p>
         <p className="text-[13px]">Posted On {post.date}</p>
         <p  className="text-[15px] mt-[5px]">{post.content}</p>
         <div className="flex flex-wrap gap-x-3">
            {
                post.tags.map((tag,index)=>(
                     <NavLink key={index}  to={`/tags/${tag.replaceAll(" ","-")}`}><span className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span></NavLink> 
                ))
            }
         </div>
      </div>
    );
};
export default Card;
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pageination=()=>{
    const {page,handlePageChange,totalPages}=useContext(AppContext);
    return(
        <div className="w-full border-t-2 py-3  bg-white shadow-lg fixed bottom-0">
             <div className=" max-w-[650px] w-11/12 mx-auto flex justify-between items-center">
                <div className="flex flex-start gap-x-3">
                     {page > 1 &&
                        <button className="rounded-md border border-gray-300 px-4 py-1" onClick={()=>handlePageChange(page-1)}>Previous</button>
                     }
                     {page < totalPages &&
                        <button className="rounded-md border border-gray-300 px-4 py-1" onClick={()=>handlePageChange(page+1)}>Next</button>
                     }
                </div>
                
                <p className="text-sm font-bold">
                     page {page} of {totalPages}
               </p>
             </div>
        </div>
    )
}
export default Pageination;
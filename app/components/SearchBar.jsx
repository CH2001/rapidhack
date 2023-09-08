'use client'
import { useState } from "react";

const SearchBar = () => {
    const [searchBar, setSearchBar] = useState("");

    return (
        // <div className="flex-none gap-2">
        //     <div className="form-control">
        //     <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        //     </div>
        // </div> 

        <div className="flex flex-col items-center text-center justify-center w-[600px] md:w-[600px]">
            <input
            onChange={(e) => {
                setSearchBar(e.target.value);
                console.log(searchBar);
            }}
            type="text"
            placeholder="Search anything"
            className="input input-bordered w-full max-w-full bg-white shadow-lg"
            />
        </div>
    );
};

export default SearchBar;

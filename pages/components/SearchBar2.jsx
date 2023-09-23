'use client'
import { useState } from "react";
import { useWindowSize } from 'react-use-size';
import Image from "next/image";

const SearchBar2 = () => {
    const [searchBar, setSearchBar] = useState("");

    let width;

    if (typeof window !== 'undefined') {
      const { width: windowWidth } = useWindowSize();
      width = windowWidth;
    }

    return (
        <div className="flex flex-col items-center text-center justify-center">
            <div className="relative">
            {width > 640 ? (
                <>
                    {/* When width > 640  */}
                    {/* Search text area */}
                    <input
                        onChange={(e) => {
                            setSearchBar(e.target.value);
                            console.log(searchBar);
                        }}
                        type="text"
                        placeholder="Search for MRT/LRT Line"
                        className="input input-bordered w-full max-w-full bg-white shadow-lg rounded-3xl"
                        style={{ width: '700px' }}
                    />

                    {/* Search icon */}
                    <button className="absolute right-2 top-2 h-8 w-8 text-white flex items-center justify-center">
                        <Image src={"/images/Search.png"} width={15} height={15}/>
                    </button>
                </>
                ) : (
                <>
                    {/* When width < 640  */}
                    {/* Search text area */}
                    <input
                        onChange={(e) => {
                            setSearchBar(e.target.value);
                            console.log(searchBar);
                        }}
                        type="text"
                        placeholder="Search for MRT/LRT Line"
                        className="input input-bordered w-full max-w-full bg-white shadow-lg rounded-3xl"
                        style={{ width: '300px' }}
                    />

                    {/* Search icon */}
                    <button className="absolute right-2 top-2 h-8 w-8 text-white flex items-center justify-center">
                        <Image src={"/images/Search.png"} width={15} height={15}/>
                    </button>
                </>
            )}
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default SearchBar2;

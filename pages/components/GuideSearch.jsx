'use client'
import { useState } from "react";
import { useWindowSize } from 'react-use-size';
import Image from "next/image";
import Link from 'next/link';

const GuideSearch = () => {
    const [searchBar, setSearchBar] = useState("");

    let width;

    if (typeof window !== 'undefined') {
      const { width: windowWidth } = useWindowSize();
      width = windowWidth;
    }

    return (
        <div className="flex flex-col">
            <div>
            {width > 640 ? (
                <>
                    {/* When width > 640  */}
                    {/* Search text area */}

                    <div style={{ fontSize: '18px' }} className="relative capitalize font-semibold mt-5 mb-2 ml-3">Start: </div>

                    <div className="flex flex-col items-center text-center justify-center"> 
                        <input
                            onChange={(e) => {
                                setSearchBar(e.target.value);
                                console.log(searchBar);
                            }}
                            type="text"
                            placeholder="Start"
                            className="input input-bordered w-full max-w-full bg-white shadow-lg rounded-3xl"
                            style={{ width: '700px' }}
                        />
                    </div>

                    <div style={{ fontSize: '18px' }} className="relative capitalize font-semibold mt-5 mb-2 ml-3"> End: </div>
                    
                    <div className="flex flex-col items-center text-center justify-center"> 
                        <input
                            onChange={(e) => {
                                setSearchBar(e.target.value);
                                console.log(searchBar);
                            }}
                            type="text"
                            placeholder="Destination"
                            className="input input-bordered w-full max-w-full bg-white shadow-lg rounded-3xl"
                            style={{ width: '700px' }}
                        />
                    </div>

                    <button className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto mt-5">
                        <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">Enter</div>
                        <Image src={"/images/arrow.png"} width={12} height={12} alt="arrow"/>
                    </button>

                </>
                ) : (
                <>
                    {/* When width < 640  */}
                    {/* Search text area */}
                    <div style={{ fontSize: '18px' }} className="relative capitalize font-semibold mt-3 mb-1 ml-3">Start: </div>
                    <div className="flex flex-col items-center text-center justify-center"> 
                        <input
                            onChange={(e) => {
                                setSearchBar(e.target.value);
                                console.log(searchBar);
                            }}
                            type="text"
                            placeholder="Start"
                            className="input input-bordered w-full max-w-full bg-white shadow-lg rounded-3xl"
                            style={{ width: '400px'}}
                        />
                    </div> 

                    <div style={{ fontSize: '18px' }} className="relative capitalize font-semibold mt-5 mb-1 ml-3"> End: </div>
                    <div className="flex flex-col items-center text-center justify-center"> 
                        <input
                            onChange={(e) => {
                                setSearchBar(e.target.value);
                                console.log(searchBar);
                            }}
                            type="text"
                            placeholder="Destination"
                            className="input input-bordered w-full max-w-full bg-white shadow-lg rounded-3xl"
                            style={{ width: '400px' }}
                        />
                    </div> 

                    <Link href="/guide2"> 
                        <button className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto mt-5">
                            <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">Enter</div>
                            <Image src={"/images/arrow.png"} width={12} height={12} alt="arrow"/>
                        </button>
                    </Link> 
                </>
            )}
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default GuideSearch;

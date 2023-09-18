
import React from 'react';
import Image from "next/image";
import Link from 'next/link'; 

const CardButtons = () => {
  return (
    <div className="flex justify-center mb-5">
        <div className="mt-2 card w-96 h-148 m1-2 mr-2"> 
            <div style={{ display: 'flex'}}>
                {/* Reload button  */}
                <div style={{ flex: '65%' }}>
                    <button className="rounded-2xl flex items-center bg-light-blue p-2">
                            <Image src={"/images/plus.png"} width={20} height={20}/>
                        <Link href="/reload">
                            <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold mr-1">Reload Card</div>
                        </Link>
                    </button>
                </div>

                {/* Travel history button  */}
                <div style={{ flex: '35%' }}>
                    <button className="rounded-2xl flex items-center bg-light-blue p-2 ml-auto">
                        <Link href="/">
                            <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold mr-1">Travel history</div>
                        </Link> 
                            <Image src={"/images/arrow.png"} width={12} height={12}/>
                    </button>
                </div>
            </div>

        </div>
    </div>
  );
};

export default CardButtons;
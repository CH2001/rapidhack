'use client'
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

{/* Functionalities: 
1. Change colour when clicked 
2. 
*/}

const NavBtmImgWidth = 25;
const NavBtmImgHeight = 25;

const BottomPageNavigation = () => {
    const router = useRouter()
    return (
        // Bottom Navigation 
        <div className="btm-nav bg-white">

            {/* Button 1 */}
            <button>
                <Link href="/">
                    <Image src={"/images/Home.png"} width={NavBtmImgWidth} height={NavBtmImgHeight}/>
                </Link>
                <span className="btm-nav-label" style={{ fontSize: '13px' }}>Home</span>
            </button>

            {/* Button 2 */}
            <button>
                <Link href="/">
                    <Image src={"/images/Guide.png"} width={NavBtmImgWidth} height={NavBtmImgHeight}/>
                </Link>
                <span className="btm-nav-label" style={{ fontSize: '13px' }}>Guide</span>
            </button>

            {/* Button 3 */}
            {/* <button style={{borderRadius: '100% 100% 0% 0%', // Create a half-circle shape
                    width: '80px', // Adjust the width as needed
                    height: '60px', // Adjust the height as needed
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)'}}> */}
            <button>
                <Link href="/nfc">
                    <Image src={"/images/QR.png"} width={50} height={50}/>
                </Link>
            </button>

            {/* Button 4 */}
            <button>
                <Link href="/accessibility">
                    <Image src={"/images/Accessibility.png"} width={NavBtmImgWidth} height={NavBtmImgHeight}/>
                </Link>
                <span className="btm-nav-label" style={{ fontSize: '13px' }}>Accessibility</span>
            </button>

            {/* Button 5 */}
            <button>
                <Link href="/accessibility">
                    <Image src={"/images/Store.png"} width={NavBtmImgWidth} height={NavBtmImgHeight}/>
                </Link>
                <span className="btm-nav-label" style={{ fontSize: '13px' }}>Store</span>
            </button>
        </div>
    );
};

export default BottomPageNavigation;

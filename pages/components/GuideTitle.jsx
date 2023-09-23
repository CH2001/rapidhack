import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 


const GuideTitle = () => {
	return (
		<div>
			<div className="flex items-center justify-center mt-5 mb-3 ml-3 mr-3"> 
            	<Image src={"/images/PlanYourTrip.png"} width={450} height={250} alt="plan your trip"/>
        	</div>

			<div style={{ display: 'flex'}}>
				<div className="border border-black" style={{ flex: '14%' }}>
					<button className="flex items-center p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/KLCC.png"} width={70} height={70}/>
					</button>
					<div style={{ fontSize: '14px' }} className="relative capitalize">KL Twin Tower</div>
				</div>

				<div className="border border-black" style={{ flex: '14%' }}>
					<button className="flex items-center p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/ZooNegara.png"} width={70} height={70}/>
					</button>
					<div style={{ fontSize: '14px' }} className="relative capitalize">Zoo Negara</div>
				</div>

				<div className="border border-black" style={{ flex: '14%' }}>
					<button className="flex items-center p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/BatuCaves.png"} width={70} height={70}/>
						<div style={{ fontSize: '14px' }} className="relative capitalize">Batu Caves</div>
					</button>
				</div>

				<div className="border border-black" style={{ flex: '14%' }}>
					<button className="flex items-center p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/NationalMuzeum.png"} width={70} height={70}/>
						<div style={{ fontSize: '14px' }} className="relative capitalize">National Museum</div>
					</button>
				</div>
			</div>
		</div>
	); 
}
export default GuideTitle;
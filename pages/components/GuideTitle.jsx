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
				<div style={{ flex: '14%' }}>
					<button className="rounded-full flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/KLCC.png"} width={20} height={20}/>
					</button>
					<div style={{ fontSize: '14px' }} className="relative capitalize">KL Twin Tower</div>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="rounded-full flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/ZooNegara.png"} width={20} height={20}/>
					</button>
					<div style={{ fontSize: '14px' }} className="relative capitalize">Zoo Negara</div>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="rounded-full flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/BatuCaves.png"} width={20} height={20}/>
					</button>
					<div style={{ fontSize: '14px' }} className="relative capitalize">Batu Caves</div>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="rounded-full flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/NationalMuzeum.png"} width={20} height={20}/>
					</button>
					<div style={{ fontSize: '14px' }} className="relative capitalize">National Museum</div>
				</div>
			</div>
		</div>
	); 
}
export default GuideTitle;
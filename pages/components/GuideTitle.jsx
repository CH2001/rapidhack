import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 


const GuideTitle = () => {
	return (
		<div>
			<div className="flex items-center justify-center mt-5 mb-3 ml-3 mr-3"> 
            	<Image src={"/images/PlanYourTrip.png"} width={350} height={150} alt="plan your trip"/>
        	</div>

			<div style={{ display: 'flex'}}>
				<div style={{ flex: '14%' }}>
					<button className="flex items-center p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/KLCC.png"} width={70} height={70}/>
					</button>
					<div style={{ fontSize: '14px', textAlign: 'center'}} className="relative capitalize">KL Twin Tower</div>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="flex items-center p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/ZooNegara.png"} width={70} height={70}/>
					</button>
					<div style={{ fontSize: '14px', textAlign: 'center'}} className="relative capitalize">Zoo Negara</div>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="flex items-center p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/BatuCave.png"} width={70} height={70}/>
					</button>
					<div style={{ fontSize: '14px', textAlign: 'center' }} className="relative capitalize">Batu Caves</div>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="flex items-center p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<Image src={"/images/NationalMuzeum.png"} width={70} height={70}/>
					</button>
					<div style={{ fontSize: '14px', textAlign: 'center'}} className="relative capitalize">National Museum</div>
				</div>
			</div>
		</div>
	); 
}
export default GuideTitle;
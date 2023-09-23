import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 


const GuideTitle = () => {
	return (
		<div>
			<div className="flex items-center justify-center mt-5 mb-3"> 
            	<Image src={"/images/PlanYourTrip.png"} width={550} height={100} alt="plan your trip"/>
        	</div>

			<div style={{ display: 'flex'}}>
				<div style={{ flex: '14%' }}>
					<button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<div style={{ fontSize: '14px' }} className="relative capitalize">KL Twin Tower</div>
					</button>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<div style={{ fontSize: '14px' }} className="relative capitalize">Zoo Negara</div>
					</button>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<div style={{ fontSize: '14px' }} className="relative capitalize">Batu Caves</div>
					</button>
				</div>

				<div style={{ flex: '14%' }}>
					<button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
						<div style={{ fontSize: '14px' }} className="relative capitalize">National Museum</div>
					</button>
				</div>
			</div>
		</div>
	); 
}
export default GuideTitle;
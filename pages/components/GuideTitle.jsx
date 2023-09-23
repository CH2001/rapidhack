import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 


const GuideTitle = () => {
	return (
		<div>
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
	); 
}
export default GuideTitle;
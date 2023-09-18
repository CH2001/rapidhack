import React, { useState } from 'react';
import Image from "next/image";

const jsonData = [
  { 0: "Kelana Jaya Line Not Available on 25/9/23 from 1500-1530 due to maintanence" },
  { 1: "Sunway BRT not Available on 26/7/23 due to maintanence" }, 
  { 2: "MRT to be free for all malaysians in celebration of merdeka on 31/8/23"}
];

const NotificationView = () => {
  const cardsPerPage = 8; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(jsonData.length / cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="justify-center ml-2 mr-2">
      <div style={{ fontSize: '18px' }} className="relative capitalize font-semibold mt-5">Travel With WeGo </div>
      <div style={{ fontSize: '14px' }} className="relative capitalize mb-3"> Get real time updates on any bus , MRT , LRT delays </div>

      <div className="mt-3 ml-2 mr-2">
        {jsonData.map((item, index) => (
          <div key={index} 
          className="p-4 mt-5 mb-5 border rounded-lg bg-light-blue shadow-bottom">
            {Object.entries(item).map(([key, value]) => (
              <div key={key}>
                <div style={{ display: 'flex'}}> 
                    <div style={{ flex: '5%' }}> 
                        <Image src={"/images/BusIcon.png"} width={20} height={20}/>
                    </div> 

                    <div style={{ flex: '95%' }}> 
                        <p>{value}</p>
                    </div> 
                </div> 
              </div>
            ))}
        </div>
        ))}
      </div>

    </div>




  );
};

export default NotificationView;

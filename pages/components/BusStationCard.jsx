// import React from 'react';
// import Image from "next/image";

// const jsonData = [
//     { Card1: "123", Price1: "123" },
//     { Card2: "124", Price2: "183" },
//     { Card3: "124", Price3: "183" },
//     { Card4: "124", Price4: "183" },
// ];

// const StationCard = () => {
//   return (
//     <div> 
//         <div>
//             <div className="mt-3 rounded-2xl flex items-center bg-light-blue p-2 ml-5 mr-5">
//                 <Image src={"/images/BusIcon.png"} width={20} height={20}/>
//                 <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold ml-1">Station code </div>
//             </div>

//             <div className="mt-3 ml-5 mr-5">
//                 {jsonData.map((item, index) => (
//                     <div key={index} 
//                         className="p-4 mt-5 mb-5 border rounded-lg bg-light-blue shadow-bottom">
//                         {Object.entries(item).map(([key, value]) => (
//                             <div key={key}>
//                             <h3 className="text-xl">{key}</h3>
//                             <p>{value}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
//   );
// };

// export default StationCard;
'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 

const jsonData = [
  { "Bus Number": "V 2828", "Arrival Time": ["5", "15", "17"] },
  { "Bus Number": "WWE 4444", "Arrival Time": ["5", "13", "15"] }
];

const StationCard = () => {
  const WaitTime = 30; 
  const cardsPerPage = 3; // Number of cards per page
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
    <div className="mt-3 ml-5 mr-5">
      {/* Station name */}
      <div className="mt-3 rounded-2xl flex items-center bg-light-blue p-2 mb-5">
        <Image src={"/images/BusIcon.png"} width={20} height={20}/>
        <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold ml-1">Station code: B210 Pandan Jaya</div>
        <div style={{ fontSize: '12px' }} className="relative capitalize font-semibold ml-5">(Avg. wait time: {WaitTime} mins)</div>
      </div>

      {/* Card contents */}
      {jsonData.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage).map((item, index) => (
        <div
          key={index}
          className="p-4 mb-4 border rounded-lg shadow-bottom bg-white"
          style={{ display: 'grid', gridTemplateColumns: '30% 70%', gap: '10px' }}
        >
          <div>
            <div style={{ fontSize: '15px' }} className="relative capitalize font-semibold ml-1">Bus Number</div>
            <div style={{ fontSize: '15px' }} className="relative capitalize font-semibold ml-1">{item["Bus Number"]}</div>
          </div>

          <div>
            <div style={{ fontSize: '15px' }} className="relative capitalize font-semibold ml-1">Arrival Time</div>
              {item["Arrival Time"].map((time, i) => (
                <div key={i} 
                      style={{ 
                      width: `${time * 10}px`, //Adjust the width as needed based on your data
                      height: '20px',
                      background: time <= 5 ? 'green' : time <= 15 ? '#FFA500' : 'red', //'blue' Change the background color as needed
                      marginLeft: '10px',
                      borderRadius: '15px',
                    }} 
                      className="relative capitalize font-semibold ml-1 mb-2"
                >
                  <div style={{ fontSize: '12px', fontWeight: 'bold' }} className="text-white mt-5 ml-1">{time} mins</div>
                </div>
              ))}
          </div>


          <button className="rounded-2xl flex items-center bg-light-blue p-2 mr-auto">
            <Link href="/reload">
                <div style={{ fontSize: '10px' }} className="relative capitalize font-semibold mr-1">View Bus Route</div>
            </Link> 
                <Image src={"/images/arrow.png"} width={12} height={12}/>
          </button>
          {/* {Object.entries(item).map(([key, value]) => (
              <div key={key}>
                <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold ml-1"> {key} </div>
                <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold ml-1"> {value} </div>
              </div>
          ))} */}
        </div>
      ))}
      
      {/* Scroll to display next */}
      {/* Style in CSS */}
      <div className="pagination">
        {/* Prev button */}
        <button className="prev-button" onClick={handlePrevPage} style={{ fontSize: '24px'}}>
          &#10094;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? 'active' : ''}`}
          ></span>
        ))}

        {/* Next button */}
        <button className="next-button" onClick={handleNextPage} style={{ fontSize: '24px'}}>
          &#10095;
        </button>
      </div>

    </div>
  );
};

export default StationCard;


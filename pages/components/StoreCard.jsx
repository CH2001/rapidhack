'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 
import Image from "next/image";

const jsonData = [
  { "Pass Type": "One Day Pass", "Validity": "Valid for 31 days", "Price": "RM 30" },
  { "Pass Type": "Student Pass", "Validity": "Valid for 31 days", "Price": "RM 50" }, 
  { "Pass Type": "Monthly Pass", "Validity": "Valid for 31 days", "Price": "RM 50" }
];

const StoreCard = () => {
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
      {/* Card contents */}
      {jsonData.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage).map((item, index) => (
        <div
          key={index}
          className="p-4 mb-4 border rounded-lg shadow-bottom"
          style={{ display: 'grid', gridTemplateColumns: '30% 30% 40%', gap: '10px' }}
        >
          <div>
            <Image src={"/images/TicketIcon.png"} width={50} height={50} alt="ticket icon"/>
          </div>

          <div>
            <div style={{ fontSize: '15px' }} className="relative capitalize font-semibold ml-1">{item["Pass Type"]}</div>
            <div style={{ fontSize: '15px' }} className="relative capitalize font-semibold ml-1">{item["Validity"]}</div>
            <div style={{ fontSize: '15px' }} className="relative capitalize font-semibold ml-1">{item["Price"]}</div>
          </div>

          <div> 
              {/* Buy Now */}
              <button className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto mt-5">
                    <Link href="/">
                      <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">Buy Now</div>
                    </Link>
                      <Image src={"/images/arrow.png"} width={12} height={12}/>
              </button>
          </div> 
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

export default StoreCard;


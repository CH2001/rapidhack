import React from 'react';

const CardDisplay = () => {
  return (
    <div className="flex justify-center">
        <div className="card w-96 shadow-xl p-2 border border-black"
            style={{
                backgroundImage: `url('/images/Card.png')`, 
                backgroundSize: 'cover', // Set the background size to "cover"
                backgroundPosition: 'center', // Center the background image
            }}
        >
            <h2 className="text-2xl font-semibold">Rapid Card</h2>
            
            <div className="text-base-content border border-black">
                <p>Balance:</p>
                <p className="font-bold">RM 23.00</p>
            </div>

            <div className="mt-8 text-sm border border-black">
                <p>123838383 828282</p>
            </div>
            <hr className="my-6" />
        </div>
    </div>
  );
};

export default CardDisplay;

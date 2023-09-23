import React from 'react';

const CardDisplay = () => {
  return (
    <div className="flex justify-center">
        <div className="card w-96 p-4 h-148 m1-5 mr-5"
            style={{
                backgroundImage: `url('/images/Card.png')`, 
                backgroundSize: '130% 155%',
                backgroundPosition: 'center',
            }}
        >
            <h2 className="mt-2 text-2xl font-semibold text-white">Rapid Card</h2>

            <div style={{ display: 'flex'}} className="text-base-content">
                <div style={{ flex: '75%' }} className="text-base-content">
                </div>

                <div style={{ flex: '25%' }} className="text-base-content">
                    <p className="text-white">Balance:</p>
                    <p className="font-bold text-black">RM 23.00</p>
                </div>
            </div>

            <div className="mt-20 text-sm text-white">
                <p>123838383 828282</p>
            </div>
        </div>
    </div>
  );
};

export default CardDisplay;

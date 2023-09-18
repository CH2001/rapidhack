import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 

const ReloadPage = () => {
    const [reloadAmount, setReloadAmount] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
  
    const handleReload = (amount) => {
      setReloadAmount(amount);
      setShowConfirmation(true);
    };
  
    const handleConfirm = () => {
      // Perform the reload action with confirmedAmount here
      // You can send the value to an API or perform other actions as needed
      // After performing the action, you can reset the state and close the confirmation pop-up
      setShowConfirmation(false);
      setReloadAmount('');
    };

    return (
    <div className="justify-center ml-10 mr-10">
        <div className="card-body bg-gray-100 shadow-xl">
            <h2 className="card-title mb-5">Enter reload amount: </h2>
            <input type="text" className="bg-gray-100" style={{border: 'none', outline: 'none', boxShadow: 'none' }} 
            value={reloadAmount}
            onChange={(e) => setReloadAmount(e.target.value)}/>
            <hr/> 
            <div style={{ display: 'flex'}}>
                {/* Reload button  */}
                <div style={{ flex: '25%' }}>
                    <button onClick={() => handleReload(10)} className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto">
                        <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">RM 10</div>
                    </button>
                </div>

                <div style={{ flex: '25%' }}>
                    <button onClick={() => handleReload(20)} className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto">
                        <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">RM 20</div>
                    </button>
                </div>

                <div style={{ flex: '25%' }}>
                    <button onClick={() => handleReload(50)} className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto">
                        <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">RM 50</div>
                    </button>
                </div>

                <div style={{ flex: '25%' }}>
                    <button onClick={() => handleReload(80)} className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto">
                        <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">RM 80</div>
                    </button>
                </div>
            </div>

        </div>
        <br/>

        <div className="card-body shadow-xl mt-3">
            <h2 className="card-title mb-1">Other reload methods: </h2>
            <div className="flex">
                <div style={{ flex: '15%' }}>
                    <Image src={"/images/DuitNow.png"} alt="Duit Now" width={50} height={50} />
                </div>

                <div style={{ flex: '85%' }}>
                    <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold mt-1">Duit Now Transfer</div>
                </div>
            </div>

            <div className="flex">
                <div style={{ flex: '15%' }}>
                    <Image src={"/images/FPX.png"} alt="Online Banking" width={50} height={50} />
                </div>

                <div style={{ flex: '85%' }}>
                    <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold">Online Banking</div>
                </div>
            </div>
        </div>

        <button className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto mt-5" onClick={() => handleReload(reloadAmount)}>
            <Link href="/reload">
                <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">Reload</div>
            </Link> 
            <Image src={"/images/arrow.png"} width={12} height={12} alt="arrow"/>
        </button>

        {showConfirmation && (
            <div className="card-body shadow-xl mt-3">
                <p>You will be reloading <b>RM {reloadAmount}</b></p>
                <button className="bg-dark-pink text-white rounded-2xl items-center p-2 mx-auto" onClick={handleConfirm}>Confirm</button>
            </div>
        )}
    </div>
    );
};
  
export default ReloadPage;






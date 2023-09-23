import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 

const NotificationPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="justify-center ml-5 mr-5">
      {/* Notifications */}
      <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold mb-3">Notifications</div>

      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="toggle visually-hidden"
          checked={isChecked}
          onChange={handleChange}
        />

        <span className="relative">
          {/* <span className="block bg-green-500 w-8 h-4 rounded-full"></span> */}
          <span
            className={`absolute block w-3 h-3 rounded-full transform transition-transform duration-300 ease-in-out ${
              isChecked ? 'translate-x-full' : 'translate-x-0'
            } toggle-switch`}
          ></span>
        </span>

        <span className={`ml-2 ${isChecked ? 'text-green-500' : 'text-red-500'}`} style={{ fontSize: '12px' }}>
          {isChecked ? 'ON' : 'OFF'}
        </span>
      </label>

      {/* Select time  */}
      <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold mt-5">Time period</div>
      <div style={{ fontSize: '13px' }} className="relative capitalize mb-3"> During which period do you want to receive your notification?</div>

      <button className="rounded-2xl flex items-center bg-light-blue p-2">
            <Image src={"/images/plus.png"} width={20} height={20}/>
            <div style={{ fontSize: '12px' }} className="relative capitalize font-semibold mr-1">Select time</div>
      </button>

      {/* Select time period */}
      <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold mt-5">Time period</div>
      <div style={{ fontSize: '13px' }} className="relative capitalize mb-3"> On which days do you wish to receive your notification?</div>

      <div style={{ display: 'flex'}}>
        {/* Reload button  */}
        <div style={{ flex: '14%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px' }} className="relative capitalize">Mon</div>
            </button>
        </div>

        <div style={{ flex: '14%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px' }} className="relative capitalize">Tues</div>
            </button>
        </div>

        <div style={{ flex: '14%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px' }} className="relative capitalize">Wed</div>
            </button>
        </div>        

        <div style={{ flex: '14%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px' }} className="relative capitalize">Thurs</div>
            </button>
        </div>        

        <div style={{ flex: '14%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px' }} className="relative capitalize">Fri</div>
            </button>
        </div>      

        <div style={{ flex: '14%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px' }} className="relative capitalize">Sat</div>
            </button>
        </div>

        <div style={{ flex: '14%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2 mx-auto" style={{ width: '50px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px' }} className="relative capitalize">Sun</div>
            </button>
        </div>  
      </div>
      
      {/* Lines  */}
      <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold mt-5">Time period</div>
      <div style={{ fontSize: '13px' }} className="relative capitalize mb-3">Select the MRT/LRT lines you frequently take and the bus number</div>

      <div style={{ display: 'flex'}}>
        <div style={{ flex: '20%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2">
                <Image src={"/images/plus.png"} width={20} height={20}/>
                <div style={{ fontSize: '12px' }} className="relative capitalize font-semibold mr-1">Bus</div>
            </button>   
        </div>

        <div style={{ flex: '80%' }}>
            <button className="rounded-2xl flex items-center bg-light-blue p-2 mr-auto">
                <Image src={"/images/plus.png"} width={20} height={20}/>
                <div style={{ fontSize: '12px' }} className="relative capitalize font-semibold mr-1">MRT/LRT/Monorail</div>
            </button>  
        </div>
      </div>       

      {/* Save changes */}
      <button className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto mt-5">
            <Link href="/notificationview">
              <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">Save changes</div>
            </Link>
      </button>
      

    </div>
  );
};

export default NotificationPage;

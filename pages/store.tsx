import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import Image from "next/image";
import Link from 'next/link';
{/* <Link href="/contact">tesat</Link> */}

const Store = () => {

  return (
    <div className="relative">
      <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
        <TopPageNavigation/> 
      </div>
      <div className="flex items-center justify-center mt-5">
          <Image src={"/images/Ticket.png"} width={250} height={250} alt="qr"/>
      </div>

      This is store.
      <BottomPageNavigation/>
    </div>
  );
};

export default Store;
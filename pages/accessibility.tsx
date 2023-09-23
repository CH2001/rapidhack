import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import SearchBar2 from './components/SearchBar2';
import Image from "next/image";
import BlankSpace from './components/BlankSpace'; 
import Link from 'next/link';
{/* <Link href="/contact">tesat</Link> */}

const Accessibility = () => {

  return (
    <div className="relative">
      <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
        <TopPageNavigation/> 
      </div>
      <div className="flex items-center justify-center mt-5 mb-3">
          <Image src={"/images/Bus.png"} width={450} height={250} alt="ticket"/>
      </div>
      <div style={{ fontSize: '18px' }} className="relative capitalize font-semibold mt-5 ml-5 mr-5">Inclusive Travel For All</div>
      <div style={{ fontSize: '14px' }} className="relative mb-3 ml-5 mr-5"> WeGo allows users to rate the accessibility of MRT (Mass Rapid Transit) stops based on their specific mobility needs, promoting transparency and helping others with similar requirements make informed travel choices. </div>
      <SearchBar2/>
      <Link href="/accessibility2"> 
        <button className="rounded-2xl flex items-center bg-dark-blue p-2 mx-auto mt-5">
              <div style={{ fontSize: '14px' }} className="relative capitalize font-semibold text-white mr-1">Enter</div>
              <Image src={"/images/arrow.png"} width={12} height={12} alt="arrow"/>
        </button>
      </Link>
      <BlankSpace/>
      <BottomPageNavigation/>
    </div>
  );
};

export default Accessibility;
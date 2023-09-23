import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import ChatBotIcon from './components/ChatBot';
import CardDisplay from './components/Card';
import CardButtons from './components/CardButtons'; 
import StationCard from './components/BusStationCard'; 
import BlankSpace from './components/BlankSpace'; 
import Image from "next/image";

const NFC = () => {
    return (
      <div className="relative">
        <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
          <TopPageNavigation/>
        </div>
        <CardDisplay/>
        <div className="flex items-center justify-center mt-5">
          <Image src={"/images/QRDisplay.png"} width={250} height={250} alt="qr"/>
        </div>
        <p className="mt-5 text-center font-bold">SCAN TO BOARD</p>
        <BlankSpace/>
        <BottomPageNavigation/>
      </div>
    )
  }
  
export default NFC; 
import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import ChatBotIcon from './components/ChatBot';
import CardDisplay from './components/Card';
import CardButtons from './components/CardButtons'; 
import StationCard from './components/BusStationCard'; 
import BlankSpace from './components/BlankSpace'; 
import Link from 'next/link';
{/* <Link href="/contact">tesat</Link> */}

const Home = () => {

  return (
    <div className="relative">
      <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
        <TopPageNavigation/>
        <SearchBar/>  
      </div>
      <CardDisplay/>
      <CardButtons/>
      <StationCard/>
      <ChatBotIcon/>
      <BlankSpace/>
      <BottomPageNavigation/>
    </div>
  );
};

export default Home;
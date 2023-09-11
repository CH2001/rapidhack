// import Image from 'next/image'; 
import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import ChatBotIcon from './components/ChatBot';
import CardDisplay from './components/Card';

const Home = () => {
  return (
    <div className="relative">
      <TopPageNavigation/>
      <SearchBar/>
      <h1>Hello bye 2</h1>
      <CardDisplay/>
      <ChatBotIcon/>
      <BottomPageNavigation/>
    </div>
  );
};

export default Home;
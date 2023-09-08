// import Image from 'next/image'; 
import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import SearchBar from './components/SearchBar';

const Home = () => {
  return (
    <div className="relative">
      <TopPageNavigation/>
      <SearchBar/>
      <h1>Hello bye 2</h1>
      <BottomPageNavigation/>
    </div>
  );
};

export default Home;
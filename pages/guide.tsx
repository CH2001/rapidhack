import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import GuideTitle from './components/GuideTitle';
import BlankSpace from './components/BlankSpace';
import GuideSearch from './components/GuideSearch';
import Link from 'next/link';

const Guide = () => {

  return (
    <div className="relative body-img">
      <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
        <TopPageNavigation/> 
      </div>
      <GuideTitle/>
      <GuideSearch/> 
      <BlankSpace/>
      <BottomPageNavigation/>
    </div>
  );
};

export default Guide;
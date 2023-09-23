import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import GuideTitle from './components/GuideTitle';
import Link from 'next/link';
{/* <Link href="/contact">tesat</Link> */}

const Guide = () => {

  return (
    <div className="relative">
      <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
        <TopPageNavigation/> 
      </div>
      <GuideTitle/>
      <BottomPageNavigation/>
    </div>
  );
};

export default Guide;
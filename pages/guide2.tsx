import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import BlankSpace from './components/BlankSpace';
import GuideSearch from './components/GuideSearch';
import Link from 'next/link';
import Image from "next/image";

const Guide2 = () => {

  return (
    <div className="relative body-img">
      <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
        <TopPageNavigation/> 
      </div>
      <GuideSearch/> 
      <div className="flex items-center justify-center mt-5 mb-3">
          <Image src={"/images/DirectionMapFull.png"} width={350} height={250} alt="map"/>
      </div>
      <BlankSpace/>
      <BottomPageNavigation/>
    </div>
  );
};

export default Guide2;
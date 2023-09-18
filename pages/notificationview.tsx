import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import SearchBar from './components/SearchBar';
import BlankSpace from './components/BlankSpace'; 
import Image from "next/image";
import ReloadPage from './components/Reload'; 
import NotificationView from './components/NotificationsView'; 

const NotificationViewPage = () => {
    return (
      <div className="relative">
        <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
          <TopPageNavigation/>
        </div>

        <div className="flex items-center justify-center mt-1"> 
            <Image src={"/images/Notification.png"} width={550} height={100} alt="notificationpic"/>
        </div>
        <NotificationView/>

        <BlankSpace/>
        <BottomPageNavigation/>
      </div>
    )
  }
  
export default NotificationViewPage; 
import BottomPageNavigation from './components/BottomNavBar';
import TopPageNavigation from './components/TopNavBar';
import React from 'react';
import BlankSpace from './components/BlankSpace';

const ChatBotPage = () => {
  const iframeStyle = {
        height: 'calc(100vh - 50px)',
        width: '100%',
  };
  
  return (
    <div>
      <div className="[background:linear-gradient(180deg,_#4c2ffd_48.23%,_rgba(0,_224,_255,_0)_99.99%,_rgba(255,_67,_67,_0))]"> 
        <TopPageNavigation/>
      </div>
      <iframe
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/fdb6bd84-87bf-4c67-bb79-76ca1a2e14ec"
        style={iframeStyle}
      >

      </iframe>
      <BlankSpace/>
      <BottomPageNavigation/>
    </div>
  );
};

export default ChatBotPage;




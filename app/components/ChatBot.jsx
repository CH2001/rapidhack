import React from 'react';
import Image from "next/image";

const ChatBotIcon = () => {
    return (
      <button className="chatbot-icon"> 
      {/*Reference global.css for styling*/}
        <Image src="/images/Chatbot.png" width={80} height={80} />
      </button>
    );
};
  
export default ChatBotIcon;
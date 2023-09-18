import React from 'react';
import Image from "next/image";
import Link from "next/link"; 

const ChatBotIcon = () => {
    return (
      <button className="chatbot-icon"> 
      {/*Reference global.css for styling*/}
        <Link href="/chatbotconversation">
            <Image src="/images/Chatbot.png" width={80} height={80} />
        </Link>
      </button>
    );
};
  
export default ChatBotIcon;
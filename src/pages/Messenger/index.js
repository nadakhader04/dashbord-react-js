import { Link } from "react-router-dom";
import { FaFacebookMessenger, FaAngleRight } from "react-icons/fa";
import { Send } from "lucide-react";
import { createContext, useState } from 'react';
import Button from '@mui/material/Button';
import { Backdrop } from "@mui/material";

export const OpenContext = createContext();

const Messenger =()=>{

    const [messages, setMessages] = useState([
        { text: "Hello! How are you?", sender: "other" },
        { text: "I'm good! How about you?", sender: "me" },
      ]);
      const [input, setInput] = useState("");
      const [isOpen, setIsOpen] = useState(true);
      const [activeTab, setActiveTab] = useState(0);

      const sendMessage = () => {
        if (input.trim()) {
          setMessages([...messages, { text: input, sender: "me" }]);
          setInput("");
        }
      };
    
    return (

        <>
            <div className="sidebar card "  
                style={{
                    width: '400px',
                    bottom: '10px',   
                    right: '10px',    
                    position: 'fixed',
                    zIndex: 1000 ,
                    borderRadius: '20%'
                  }}          
            >

                <OpenContext.Provider value={{ isOpen, setIsOpen }}>
                
                {/* Chat Interface */}
                {isOpen && (
                    
                    <div className="fixed bottom-4 right-4 w-72 bg-white shadow-lg rounded-lg overflow-hidden "> 

                        <div className="d-flex p-3 chat">
                            <span className="font-semibold text-lg chatText">Chat</span>
                            <Button 
                                onClick={() => setIsOpen(false)} 
                                className="colse"
                                style={{ 
                                    minWidth: '32px', 
                                    height: '32px', 
                                    borderRadius: '50%', 
                                    marginLeft: 'auto', 
                                    color: 'white'
                                }}
                            >
                                ✖
                            </Button>
                        </div>


                        <div className="flex-1 p-3 overflow-auto flex flex-col-reverse">
                            {messages.slice().reverse().map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-xs ${
                                msg.sender === "me" ? "ml-auto bg-blue-500 " : "bg-gray-200"
                                } mb-2`}
                            >
                                {msg.text}
                            </div>
                            ))}
                        </div>

                        <div className="p-3 border-t d-flex gap-0">
                            <input
                                type="text"
                                className="flex-1 p-2 border rounded-lg "
                                // className="p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[70%] sm:w-[80%] md:w-full"

                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                            />
                            <Button onClick={sendMessage} className="bg-blue-500 rounded-lg">
                            <Send className="w-5 h-5"/>
                            </Button>
                        </div>
                    </div>
                )}
                </OpenContext.Provider>
                

            </div>
        
        </>

    );

}

export default Messenger;
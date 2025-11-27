import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import { FaUserCircle } from 'react-icons/fa'

function Bot() {

      const [messages,setMessages]=useState([])
      const[input,setInput]=useState("")
      const[loading,setLoading]=useState(false)
      const messagesEndRef = useRef(null);

      
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);

      const handleSendMessage = async() =>{
      if(!input.trim()) return;

      setLoading(true);
      
        try {
          
          const res = await axios.post("http://localhost:4002/bot/v1/message",{
            text:input
          })
          if(res.status === 200){
            setMessages([...messages, {text: res.data.userMessage,sender:'user'},{text:res.data.botMessage, sender: 'bot'}]);
          }
          console.log(res.data)
        } catch (error) {
          console.log("Error sending message: ",error);
        }
        setInput("");
        setLoading(false);
      }
       const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage()}

return (
  <div className="flex flex-col min-h-screen bg-white text-gray-900">
    {/* Navbar & Header */}
    <header className="fixed top-0 left-0 w-full border-b border-gray-300 bg-white z-10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-700">Rule-Based Chatbot</h1>
        <FaUserCircle size={30} className="cursor-pointer text-blue-700" />
      </div>
    </header>

    {/* Chat area */}
    <main className="flex-1 overflow-y-auto pt-20 pb-24 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col space-y-3">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 text-lg mt-12">
            👋 Hi, I'm{" "}
            <span className="text-blue-700 font-semibold">Rule-Based Chatbot</span>.
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-xl max-w-[75%] shadow-sm ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-blue-900 self-end"
                    : "bg-gray-200 text-gray-900 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl max-w-[60%] self-start">
                Bot is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
    </main>

    {/* Input & Footer */}
    <footer className="fixed bottom-0 left-0 w-full border-t border-gray-300 bg-white z-10 shadow-inner">
      <div className="max-w-3xl mx-auto flex justify-center px-4 py-3">
        <div className="w-full flex bg-gray-100 rounded-full px-4 py-2 shadow-inner">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 px-2"
            placeholder="Ask Rule-Based Chatbot here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-700 hover:bg-blue-800 px-4 py-1 rounded-full text-white font-medium transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </footer>
  </div>
);


}

export default Bot
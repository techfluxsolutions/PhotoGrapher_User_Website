import React, { useEffect, useRef, useState } from "react";
import "./Chats.css";

const Chats = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi", sender: "user", time: "11:34 AM" },
    { id: 2, text: "Hello", sender: "admin", time: "11:35 AM" },
    {
      id: 3,
      text: "I just want to know more about the services",
      sender: "user",
      time: "11:36 AM",
    },
    { id: 4, text: "Sure", sender: "admin", time: "11:36 AM" },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="chat-wrapper">

      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-left">
          <div className="brand">
            Veroa<br />Studios
          </div>
          <div className="admin-info">
            <p className="admin-name">Admin</p>
            <span className="admin-status">Online</span>
          </div>
        </div>
        <div className="menu">⋮</div>
      </div>

      {/* Chat Body */}
      <div className="chat-body">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-row ${msg.sender === "user" ? "right" : "left"}`}
          >
            {msg.sender === "admin" && (
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="avatar"
                className="avatar"
              />
            )}

            <div
              className={`message-bubble ${
                msg.sender === "user" ? "dark" : "light"
              }`}
            >
              {msg.text}
              <span className="time">{msg.time}</span>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Start Typing..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="send-btn" onClick={handleSend}>
          ➤
        </button>
      </div>

    </div>
  );
};

export default Chats;

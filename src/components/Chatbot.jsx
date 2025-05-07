import React from "react";
import ChatbotImg from "../assets/Chatbotimg.png";

const Chatbot = () => {
  return (
    <button
        style={{ backgroundImage: `url(${ChatbotImg})` }}
        className={`fixed bottom-4 right-4 w-18 h-18 rounded-full bg-cover bg-bottom shadow-lg hover:scale-105 active:scale-90 transition-transform z-50`}
    />
  );
};

export default Chatbot;

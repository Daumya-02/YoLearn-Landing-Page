import React from "react";
import ChatbotImg from "../assets/ChatbotImg.png";

const Chatbot = () => {
  return (
    <button
        style={{ backgroundImage: `url(${ChatbotImg})` }}
        className={`fixed bottom-0 right-0 w-18 h-18 m-8 rounded-full bg-cover bg-bottom shadow-lg hover:scale-105 active:scale-90 transition-transform z-50`}
    />
  );
};

export default Chatbot;

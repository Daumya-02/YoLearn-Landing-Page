import React from "react";
import HeroSection from "./sections/HeroSection";
import Section2 from "./sections/Section2";
import Header1 from "./sections/Header1";
import Header2 from "./sections/Header2";
import Chatbot from "./components/Chatbot";
import Features from "./sections/Features";
import Features2 from "./sections/Features2";
import Reviews from "./sections/Reviews";
import Faq from "./sections/Faq";
import Pricing from "./sections/Pricing";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

const App = () => {
  
  return (
	<>
		<Header1/>
		<Header2/>
		<Chatbot/>
		<HeroSection/>
		<Section2/>
		<Features/>
		<Features2/>
		<Reviews/>
		<Faq/>
		<Pricing/>
		<FinalCTA/>
		<Footer/>
	</>
    
  );
};

export default App;

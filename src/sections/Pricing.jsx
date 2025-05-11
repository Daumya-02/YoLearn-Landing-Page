import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import PricingImg from "../assets/PricingImg.png";
import Pricingdiv from "../components/Pricingdiv";

const Pricing = () => {
  const pricingData = [
    {
      name: "Basic Plan",
      desc: "Teachers exploring the platform or with minimal usage needs",
      price: "FREE",
      features: [
        { icon: "✔️", text: "Planning studio (Limited)" },
        { icon: "✔️", text: "Teaching studio (Limited)" },
        { icon: "✔️", text: "Content Lab" },
        { icon: "✔️", text: "Command desk" },
        { icon: "✔️", text: "Growth Hub" },
        { icon: "✔️", text: "Avatar Hub" },
        { icon: "🖼️", text: "5 images/month, 0 min video" },
        { icon: "📝", text: "Max 5 lesson plans & quizzes/month" },
        { icon: "🚫", text: "No content export" },
      ],
    },
    {
      name: "Pro Plan",
      desc: "Subject teachers managing weekly content, assessments, and visuals",
      price: "$5/month or $50/year",
      features: [
        { icon: "✔️", text: "Planning studio" },
        { icon: "✔️", text: "Teaching studio" },
        { icon: "✔️", text: "Content Lab" },
        { icon: "✔️", text: "Command desk" },
        { icon: "✔️", text: "Growth Hub" },
        { icon: "✔️", text: "Avatar Hub" },
        { icon: "🖼️", text: "20 images/month, 5 min video" },
        { icon: "➕", text: "Add-on: $1 per 10 extra images" },
        { icon: "➕", text: "$2 per extra video minute" },
      ],
    },
    {
      name: "Master Plan",
      desc: "Full-time/advanced teachers using AI end-to-end",
      price: "$10/month or $100/year",
      features: [
        { icon: "✔️", text: "Planning studio" },
        { icon: "✔️", text: "Teaching studio" },
        { icon: "✔️", text: "Content Lab" },
        { icon: "✔️", text: "Command desk" },
        { icon: "✔️", text: "Growth Hub" },
        { icon: "✔️", text: "Avatar Hub" },
        { icon: "🖼️", text: "60 images/month, 15 min video" },
        { icon: "➕", text: "Add-on: $2 per 10 extra images" },
        { icon: "➕", text: "$4 per extra 10 video minutes" },
      ],
    },
  ];

  return (
    <div className="min-h-[100vh] bg-[#FFFEFA] flex flex-col items-center py-10 px-10 md:px-20 text-center">
      <Heading text="Teach Better. Less Effort. More Impact." color="#1A1B41" />
      <SubHeading
        text="Join thousands of educators across who enhance their teaching with AI powered tools on YOlearn"
        color="#0F766E"
      />
      <br />
      <img
        src={PricingImg}
        alt="Image"
        className="lg:w-[50vw] md:w-[80vw] h-[30vh] hidden md:block "
      />
      {/* toggle button */}
      <div className="flex flex-col md:flex-row ">
        {pricingData.map((plan, index) => (
          <Pricingdiv key={index} item={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;

import React from "react";
import logo from "../assets/logo.png";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import icon7 from "../assets/icons/icon7.png";
import icon8 from "../assets/icons/icon8.png";
import bubbles from "../assets/bubbles.png";

const Footer = () => {
  const links = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];

  return (
    <div className=" relative min-h-screen footer pt-10 pb-20 px-5 md:px-20">
        <img src={bubbles} alt="" className="absolute bottom-0 left-2" />
        <img src={bubbles} alt="" className="absolute -top-10 -right-5 transform -rotate-180 w-[10vw] " />
      {/* First section - Logo and company description */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="text-left mb-8">
          <img
            src={logo}
            alt="YoLearn.ai Logo"
            className="h-[20vh] md:h-[10vh]"
          />
          <p className="text-white text-sm my-5">
            AI powered learning, beyond Limits.
          </p>
          <div className="flex flex-wrap gap-4 cursor-pointer">
            {links.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Social link ${index + 1}`}
                className="h-8 hover:scale-105"
              />
            ))}
          </div>
        </div>

        <div className="text-left md:max-w-[50vw] mb-5">
          <h3 className="text-white text-lg font-bold">
            Empowering Learning with AI – For Students, Teachers & Institutions
          </h3>
          <p className="text-[#FBFBFBCC] my-3">
            YoLearn.ai is an AI-powered learning platform designed to enhance
            education for students, teachers, and institutions across the globe.
            From personalized AI tutors to school-wide curriculum tools –
            YoLearn makes education smarter and more accessible.
          </p>
          <p className="font-bold text-white">
            ✅ ISO Certified 📘 NEP-Aligned 🛡️ Data Privacy Compliant
          </p>
        </div>
      </div>

      {/* Second section - Navigation links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 my-10 mt-20 md:mt-40 text-sm text-center md:text-left">
        {/* Sitemap Links */}
        <nav >
          <h4 className="text-xl text-white font-medium mb-3">SITEMAP</h4>
          <ul className="flex flex-col text-[#E6E6E6]">
            {["Tools", "Studios", "Assistants"].map((item) => (
              <li
                key={item}
                className="hover:bg-[#B1B1B14D] rounded-md cursor-pointer px-3 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Company Links */}
        <nav>
          <h4 className="text-xl text-white font-medium mb-3">COMPANY</h4>
          <ul className="flex flex-col text-[#E6E6E6]">
            {["About", "Career", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:bg-[#B1B1B14D] rounded-md cursor-pointer px-3 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal Links */}
        <nav>
          <h4 className="text-xl text-white font-medium mb-3">LEGAL</h4>
          <ul className="flex flex-col text-[#E6E6E6]">
            {["Terms & Conditions", "Privacy Policy", "Data Policy"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:bg-[#B1B1B14D] rounded-md cursor-pointer px-3 py-1"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Social Links */}
        <nav >
          <h4 className="text-xl text-white font-medium mb-3">SOCIAL</h4>
          <ul className="flex flex-col text-[#E6E6E6]">
            {["X (Twitter)", "LinkedIn", "YouTube", "WhatsApp Channel"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:bg-[#B1B1B14D] rounded-md cursor-pointer px-3 py-1"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>

        {/* For Users Links */}
        <nav >
          <ul className="flex flex-col text-[#E6E6E6]">
            {[
              "For Students",
              "For Teachers",
              "For Schools",
              "For Organisations",
              "Resources",
              "Pricing",
            ].map((item) => (
              <li
                key={item}
                className="hover:bg-[#B1B1B14D] rounded-md cursor-pointer px-3 py-1 mb-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Third section - Disclaimer and copyright */}
      <footer className="mt-10">
        <p className="text-white text-sm w-full mb-8">
          All educational content, AI tutors, and institutional tools are
          intended for learners of appropriate age groups and verified educator
          use. YoLearn.ai follows national and international education safety
          standards.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-[#F1F1F1] font-bold md:min-w-[50%]">
            © 2025 AI.YoLearn Private Limited. All rights reserved.
          </p>
          <nav aria-label="Footer links">
            <ul className="flex flex-wrap gap-3 md:gap-4">
              {[
                "Terms of Use",
                "Cookie Policy",
                "Contact Us",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="cursor-pointer font-semibold text-sm text-white hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
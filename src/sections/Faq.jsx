import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Accordion from "../components/Accordian";
import accordianImage from "../assets/accordianImage.jpg";

const Faq = () => {
  const workspacesFaq = [
    {
      title: "What’s the difference between Plan and Design workspaces?",
      answer:
        "The Plan Workspace helps you map your academic year, curriculum, and weekly teaching flow. The Design Workspace lets you create specific assignments like quizzes, homework, and worksheets using your AI Teaching Assistant.",
    },
    {
      title: "How do I use the Lesson Planner?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Can I reuse content across multiple classes?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const pricingfaq = [
    {
      title: "Is YoLearn.ai free for teachers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
    {
      title: "What’s included in each subscription tier?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
    {
      title: "Can my school pay for my access?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
  ];

  const curriculumFaq = [
    {
      title: "Is content aligned with my curriculum, board and standards?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
    {
      title: "Can I customize output based on grade level and learning styles?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
    {
      title: "How does the AI support differentiated instruction?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
  ];

  return (
    <div className="min-h-[100vh] w-full p-10 rounded-b-3xl bg-[#4169E1]">
      <div className="md:mx-12 mx-3">
        <Heading text="Frequently Asked Questions" color="#E6F7F2" />
        <SubHeading
          text="Find answers to common questions about YoLearn.ai"
          color="#E6F7F2"
        />
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row p-2 mt-5">
        {/* left part */}
        <div
          style={{ backgroundImage: `url(${accordianImage})` }}
          className="w-full h-[80vh] md:w-[30vw] overflow-hidden rounded-lg bg-center bg-cover border-solid border mx-9 "
        ></div>
        {/* right part */}
        <div className="w-full h-[80vh] md:w-[65vw] rounded-lg relative overflow-y-hidden">
          <Accordion heading="Workspace and tools" arr={workspacesFaq} />
          <Accordion heading="Pricing and payments" arr={pricingfaq} />
          <Accordion heading="Curriculum & Pedagogy" arr={curriculumFaq} />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#4169E1] to-transparent"></div>
          <button className=" px-10 py-3 m-4 rounded-full text-white bg-[#00BBA6] hover:scale-105 transition-transform active:scale-95 active:shadow-none shadow-xl hover:shadow-2xl cursor-pointer absolute bottom-0 right-0">
            View all FAQ's →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;

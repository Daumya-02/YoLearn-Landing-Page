import React from "react";
import ReviewBg from "../assets/ReviewBg.jpg";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Marquee from "../components/Marquee";
import user1 from "../assets/reviews/user1.png";
import user2 from "../assets/reviews/user2.png";
import user3 from "../assets/reviews/user3.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Reviews = () => {
  const reviews = [
    {
      img: user1,
      name: "Ms. Emily Zhang",
      curriculum: "Ontario Curriculum",
      job: "High School Teacher — Canada",
      review:
        "Integrating YoLearn.ai into my classroom has been a game-changer. It provides tailored resources that cater to each student's needs.",
    },
    {
      img: user2,
      name: "Mr. David Ncube",
      curriculum: "CAPS Curriculum",
      job: "Middle School Teacher — South Africa",
      review:
        "YoLearn.ai's AI tutor supports my teaching by offering additional explanations and practice for students, enhancing their understanding.",
    },
    {
      img: user3,
      name: "Mrs. Fatima Al-Mansouri",
      curriculum: "British Curriculum",
      job: "Elementary Teacher – UAE",
      review:
        "The platform's interactive tools and multilingual support have made it easier to engage my diverse classroom effectively.",
    },
  ];

  const stats = [
    {
      from: 100000,
      to: 240000,
      text: "Lessons Created",
      sign: "+",
    },
    {
      from: 1000000,
      to: 1200000,
      text: "Teacher Hours Saved",
      sign: "+",
    },
    {
      from: 100,
      to: 3500,
      text: "Schools Onboarded",
      sign: "+",
    },
    {
      from: 30000,
      to: 52000,
      text: "AI Companies Deployed",
      sign: "+",
    },
    {
      from: 0,
      to: 95,
      text: "Academic Improvement",
      sign: "%",
    },
    {
      from: 0,
      to: 93,
      text: "Increased Engagement",
      sign: "%",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      style={{
        "--image-url": `url(${ReviewBg})`,
      }}
      className="min-h-[100vh] gradient_image flex flex-col items-center py-10 text-center"
    >
      <Heading text="TEACHER SUCCESS STORIES" color="#FFFFFF" />
      <SubHeading
        text="Discover how educators around the world are transforming their classrooms with YoLearn."
        color="#FFFFFF"
      />

      <br />
      <br />

      {/* marquee */}
      <Marquee direction="left">
        {reviews.map((item, index) => (
          <div
            key={index}
            className=" bg-white backdrop-blur-md text-black rounded-lg py-4 px-5 mx-8 shadow-md"
          >
            <div className="flex items-start justify-start text-left">
              <img
                src={item.img}
                alt={item.name}
                className="w-15 h-15 rounded-full border-4 border-white mb-3 mr-4"
              />

              <div className="">
                <p className="font-semibold">{item.name}</p>
                <p className="text-[#00BBA6] text-sm">{item.curriculum}</p>
                <p className="text-[#1A1B41B2] text-xs">{item.job}</p>
              </div>
            </div>
            <p className="text-sm mt-2 italic w-[40vw] md:w-[30vw] text-wrap">
              "{item.review}"
            </p>
          </div>
        ))}
      </Marquee>

      <br />
      <br />
      <Heading text="WHAT WE'VE ACHIEVED TOGETHER" color="#FFFFFF" />
      <br />
      <br />
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 m-5 max-w-[90vw] gap-10">
          {stats.map((item, index) => {
            return (
              <div
                className="p-3 rounded-2xl hover:scale-102 transition-transform flex flex-col items-center justify-center bg-[#E6F7F2]"
                key={index}
              >
                <h2 className="text-[#00BBA6] pt-2 my-1 font-extrabold text-4xl">
                  {inView && (
                    <CountUp
                      start={item.from}
                      end={item.to}
                      duration={2.75}
                    ></CountUp>
                  )}
                  {item.sign}
                </h2>
                <p className="text-black font-semibold py-2 my-1">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Reviews;

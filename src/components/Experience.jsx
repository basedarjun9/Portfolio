import React from "react";

import weather from "../assets/weather.jpg";
import coffee from "../assets/Coffee-Shop.jpg"
import Portfolio from "../assets/Portfolio.webp"
const Experience = ({ isDark }) => {
  return (
    <>
      <section id="projects">
        <div
          className={`flex flex-col min-h-screen items-center justify-center ${
            isDark
              ? "bg-gradient-to-b from-gray-800 via-gray-800 to-gray-700  text-white"
              : "bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 text-black"
          }`}
        >
          <div className="text-center ">
            <h1
              data-aos="fade-down"
              className="text-4xl mt-20 font-bold font-head"
            >
              My <span className="text-blue-500"> Creations</span>
            </h1>
            <p className="mt-4 font-medium" data-aos="fade-down">
              A showcase of projects built using the React
              demonstrating my ability to create full-stack applications and
              dynamic user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            
           

            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="150"
              data-aos-offset="0"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={weather}
                  alt="Shooting Star"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Weather App
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Created a dynamic weather application using React that
                  provides real-time weather updates and forecasts by
                  integrating with a weather API, featuring an intuitive user
                  interface for easy navigation.
                </p>
                <a
                  href="https://arjunweather-app-gamma-nine-87.vercel.app/"
                  className="rounded-full bg-gradient-to-r from-sky-400 to-blue-800  hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More
                </a>
              </div>
            </div>
<div
  className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
  data-aos="zoom-in"
  data-aos-easing="ease-in-back"
  data-aos-delay="150"
  data-aos-offset="0"
>
  <div className="h-96 w-72">
    <img
      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
      src={coffee}
      alt="Shooting Star"
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
    <h1 className="font-dmserif text-3xl font-bold text-white">
      StarRupees
    </h1>
    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
     Developed a responsive coffee shop website “Starrupees” using modern web technologies, showcasing menu offerings, brand story, and customer engagement features with an attractive UI and smooth navigation.
    </p>
    <a
      href="https://star-rupees.vercel.app/"
      className="rounded-full bg-gradient-to-r from-sky-400 to-blue-800  hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
    >
      See More
    </a>
  </div>
</div>
<div
  className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
  data-aos="zoom-in"
  data-aos-easing="ease-in-back"
  data-aos-delay="150"
  data-aos-offset="0"
>
  <div className="h-96 w-72">
    <img
      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
      src={Portfolio}
      alt="Shooting Star"
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
    <h1 className="font-dmserif text-3xl font-bold text-white">
      Portfolio
    </h1>
    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      Developed a personal portfolio website using React to showcase my projects, skills, and experience with a modern and responsive design a dynamic featuring my projects, resume, and contact information.
    </p>
    <a
      href="https://arjunweather-app-gamma-nine-87.vercel.app/"
      className="rounded-full bg-gradient-to-r from-sky-400 to-blue-800  hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
    >
      See More
    </a>
  </div>
</div>

          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default Experience;

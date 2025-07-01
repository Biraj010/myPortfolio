import React from "react";
import myphoto from "../assets/img/myphoto.jpg";
import { portfolioData } from "../data";

const About = () => {
  const { paragraph, personalInfo } = portfolioData.about;

  return (
    <section id="about" className="py-20 animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-12">
        About <span className="text-accent">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img
            src={myphoto}
            alt="Biraj Regmi"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-secondary text-lg mb-6">{paragraph}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-secondary">
            <span>{personalInfo.email}</span>
            <span>&bull;</span>
            <span>{personalInfo.phone}</span>
            <span>&bull;</span>
            <span>{personalInfo.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { portfolioData } from "../data";

const Skills = () => {
  const skills = portfolioData.skills;
  const skillCategories = Object.keys(skills);

  return (
    <section id="skills" className="py-20 animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-12">
        Technical <span className="text-accent">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category} className="bg-surface p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <ul>
              {skills[category].map((skill) => (
                <li key={skill} className="text-secondary mb-2">
                  <i className="bx bxs-chevron-right text-accent"></i> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Projects = ({ projects }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      <section id="projects" className="py-20 animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-accent">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-border text-xs text-secondary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setLightboxIndex(index)}
                    className="text-accent hover:underline"
                  >
                    Demo
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        open={lightboxIndex > -1}
        close={() => setLightboxIndex(-1)}
        slides={lightboxIndex > -1 ? projects[lightboxIndex].gallery : []}
      />
    </>
  );
};

export default Projects;

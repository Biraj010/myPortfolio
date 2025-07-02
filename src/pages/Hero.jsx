import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { portfolioData } from "../data";
import { Link } from "react-scroll";

const Hero = () => {
  const { name, titles, description } = portfolioData.hero;
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: titles,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, [titles]);

  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center animate-fade-in"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{name}</h1>
        <h2 className="text-2xl md:text-4xl text-accent mb-6">
          <span ref={typedElement}></span>
        </h2>
        <p className="text-secondary text-lg md:text-xl mb-8">{description}</p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="bg-accent text-background font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors cursor-pointer"
          spy={true}
          activeClass="text-accent"
          hash={true}
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;

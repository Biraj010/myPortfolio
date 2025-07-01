import React from "react";
import { portfolioData } from "../data";

const Footer = () => {
  const { socialLinks } = portfolioData.footer;

  return (
    <footer className="bg-surface py-8 mt-20">
      <div className="mx-auto max-w-5xl px-4 flex flex-col items-center gap-4">
        <div className="flex items-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors text-2xl"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <p className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} Biraj Regmi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

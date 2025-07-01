import React, { useState } from "react";
import { Link } from "react-scroll";
import { portfolioData } from "../data";

const Header = () => {
  const { navLinks } = portfolioData.header;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer text-2xl font-bold text-accent"
            spy={true}
            activeClass="text-accent"
            hash={true}
          >
            Biraj Regmi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.href.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-secondary hover:text-accent transition-colors"
                spy={true}
                activeClass="text-accent"
                hash={true}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary hover:text-accent focus:outline-none"
            >
              <i
                className={`bx ${
                  isMobileMenuOpen ? "bx-x" : "bx-menu"
                } text-3xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-surface`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.href.replace("#", "")}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-secondary hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              spy={true}
              activeClass="text-accent"
              hash={true}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

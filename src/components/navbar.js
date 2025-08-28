import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa';
import { Mobilenav } from "./mobilenav";
import { Bio } from "../data/constants";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#exp", label: "Experiences" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const isDropdown = useRef();

  const closeModal = (e) => {
    if (isDropdown.current === e.target) {
      setNav(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Find the current section in view
      let current = "#about";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = link.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-40%" },
  };

  return (
    <div
      ref={isDropdown}
      onClick={closeModal}
      className={`h-[64px] flex justify-center items-center sticky top-0 z-20 transition-all duration-300
        ${scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg"
          : "bg-[#1a1a2e] bg-opacity-100"
        }`}
    >
      {/* Nav Container */}
      <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 gap-4">
        {/* Logo */}
        <div className="text-white text-2xl sm:text-3xl cursor-pointer font-bold">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-slate-700 to-slate-200">Nihar</p>
        </div>
        {/* Mobile icon */}
        <motion.div
          animate={nav ? "open" : "closed"}
          variants={variants}
          className="block md:hidden text-2xl cursor-pointer text-[#F2F3F4]"
        >
          <button onClick={() => setNav(!nav)}>
            {nav ? <FaTimes /> : <FaBars />}
          </button>
          {nav ? <Mobilenav nav={nav} /> : null}
        </motion.div>
        {/* Nav content */}
        <div className="hidden md:flex gap-2 lg:gap-6 border p-1 text-white rounded-3xl bg-black/50 backdrop-blur-lg">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-3xl p-2 transition
                hover:bg-white/35 hover:text-yellow-500
                ${activeSection === link.href ? "bg-white/35 text-yellow-500 font-bold" : ""}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Button */}
        <div className="hidden md:block">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-3 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              <FaGithub />
            </span>
            <span className="relative invisible">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};
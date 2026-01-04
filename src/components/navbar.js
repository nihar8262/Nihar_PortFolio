import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
        ${
          scrolled
            ? "bg-black/40 backdrop-blur-md shadow-lg"
            : "bg-[#1a1a2e] bg-opacity-100"
        }`}
    >
      {/* Nav Container */}
      <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 gap-4">
        {/* Logo */}
        <div className="text-white text-2xl sm:text-3xl cursor-pointer font-bold">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-slate-700 to-slate-200">
            Nihar
          </p>
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
          {nav ? <Mobilenav onClose={() => setNav(false)} /> : null}
        </motion.div>
        {/* Nav content */}
        <div className="hidden md:flex gap-2 lg:gap-6 border p-1 text-white rounded-3xl  backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-3xl p-2 transition
                hover:bg-[#631fd9]/20 hover:text-white
                ${
                  activeSection === link.href
                    ? "bg-[#631fd9]/30 backdrop-blur-md text-white font-semibold border border-white/10 shadow-sm"
                    : ""
                }
              `}
            >
              <h3 className="">{link.label}</h3>
            </a>
          ))}
        </div>
        {/* Button */}
        <div className="hidden md:block">
          <a href={Bio.github} target="_blank" rel="noopener noreferrer">
            <button class="group relative cursor-pointer outline-none border-none rounded-full flex flex-row items-center justify-start h-8 w-[100px] px-2 transition-all duration-[0.75s] before:content-[''] before:absolute before:w-full before:h-full before:inset-0 before:bg-[linear-gradient(130deg,#7209d4,#2832d4_33%,#631fd9)] before:ring-4 before:ring-offset-2 before:ring-[#631fd9] before:rounded-full before:transition before:duration-300 before:ring-offset-[#fff] hover:before:scale-105 active:before:scale-95 text-white">
              <svg
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-1 left-1 group-hover:left-1.5 group-active:left-[10px] duration-300 transition-[left] z-10 w-8 h-8 text-white"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              <span class="absolute right-2 text-[15px] font-semibold z-20 pointer-events-none">
                Github
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

import { useRef, useState, useEffect } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
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
        <div className="hidden md:block text-white border border-white/20 px-4 py-2 rounded-full hover:bg-[#631fd9] transition cursor-pointer">
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <div><FaGithub/> </div>
            <div>Github</div>
          </a>
        </div>
      </div>
    </div>
  );
};

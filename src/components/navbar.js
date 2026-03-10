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
  const [buttonGlow, setButtonGlow] = useState({ id: "", x: 0, y: 0 });
  const [outerGlow, setOuterGlow] = useState({ active: false, x: 0, y: 0 });
  const isDropdown = useRef();

  const handleButtonMouseMove = (id, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setButtonGlow({
      id,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleOuterMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOuterGlow({
      active: true,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

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
        <div
          className="hidden md:flex relative overflow-hidden gap-2 lg:gap-6 border border-white/30 p-1 text-white rounded-3xl backdrop-blur-lg"
          onMouseMove={handleOuterMouseMove}
          onMouseEnter={handleOuterMouseMove}
          onMouseLeave={() => setOuterGlow((prev) => ({ ...prev, active: false }))}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-200"
            style={{
              opacity: outerGlow.active ? 1 : 0,
              padding: "1px",
              background: `radial-gradient(180px circle at ${outerGlow.x}px ${outerGlow.y}px, rgba(148, 163, 184, 0.95), rgba(209, 213, 217, 0.45) 35%, rgba(148, 163, 184, 0) 70%)`,
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseMove={(event) => handleButtonMouseMove(link.href, event)}
              onMouseEnter={(event) => handleButtonMouseMove(link.href, event)}
              onMouseLeave={() => setButtonGlow((prev) => ({ ...prev, id: "" }))}
              className={`relative overflow-hidden rounded-3xl p-2 border border-transparent transition
                ${
                  activeSection === link.href
                    ? "bg-[#631fd9]/30 backdrop-blur-md text-white font-semibold border border-purple-500/50 shadow-sm"
                    : "text-white/90"
                }
              `}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-200"
                style={{
                  opacity: buttonGlow.id === link.href ? 1 : 0,
                  background: `radial-gradient(140px circle at ${buttonGlow.x}px ${buttonGlow.y}px, rgba(133, 76, 230, 0.22), rgba(133, 76, 230, 0.1) 35%, rgba(133, 76, 230, 0) 70%)`,
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-200"
                style={{
                  opacity: buttonGlow.id === link.href ? 1 : 0,
                  padding: "1.5px",
                  background: `radial-gradient(140px circle at ${buttonGlow.x}px ${buttonGlow.y}px, rgba(133, 76, 230, 0.95), rgba(133, 76, 230, 0.45) 35%, rgba(133, 76, 230, 0) 70%)`,
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <h3 className="relative z-10">{link.label}</h3>
            </a>
          ))}
        </div>
        {/* Button */}
        <a
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={(event) => handleButtonMouseMove("github", event)}
          onMouseEnter={(event) => handleButtonMouseMove("github", event)}
          onMouseLeave={() => setButtonGlow((prev) => ({ ...prev, id: "" }))}
          className="hidden md:block relative overflow-hidden text-white border border-white/20 px-4 py-2 rounded-full transition cursor-pointer"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-200"
            style={{
              opacity: buttonGlow.id === "github" ? 1 : 0,
              background: `radial-gradient(140px circle at ${buttonGlow.x}px ${buttonGlow.y}px, rgba(133, 76, 230, 0.22), rgba(133, 76, 230, 0.1) 35%, rgba(133, 76, 230, 0) 70%)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-200"
            style={{
              opacity: buttonGlow.id === "github" ? 1 : 0,
              padding: "1.5px",
              background: `radial-gradient(140px circle at ${buttonGlow.x}px ${buttonGlow.y}px, rgba(133, 76, 230, 0.95), rgba(133, 76, 230, 0.45) 35%, rgba(133, 76, 230, 0) 70%)`,
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="relative z-10 flex items-center gap-1">
            <div className="bg-purple-500/70 rounded-full p-1 bg-blur"><FaGithub/> </div>
            <div>Github</div>
          </div>
        </a>
      </div>
    </div>
  );
};

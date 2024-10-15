import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
const Header = () => {
  const [active, setActive] = useState("Projects");

  const links = [
    { name: "Home", href: "home" },
    { name: "Acerca de", href: "about-us" },
    { name: "Experiencia", href: "experience" },
    { name: "Proyectos", href: "projects" },
    { name: "Habilidades", href: "skills" },
    { name: "Contacto", href: "contact" },
  ];

  return (
    <header className="z-[999] relative">
      <div className="lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[80rem]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] rounded-none border border-white border-opacity-40 bg-[#BDBDBD] shadow-lg backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full w-auto px-4" // Usar w-auto y padding horizontal
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex justify-center h-full">
          <ul className="flex w-auto flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
            {links.map((link, index) => (
              <motion.li
                className="relative flex items-center justify-center cursor-pointer h-3/4"
                key={link.hash || index}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  spy={true}
                  activeClass="active"
                  offset={-100}
                  duration={700}
                  className={clsx(
                    "flex items-center justify-center w-full px-3 py-3 transition",
                    active === link.name
                      ? "text-[#ffa726]"
                      : "hover:text-[#ffa726]"
                  )}
                  onSetActive={() => setActive(link.name)}
                >
                  {link.name}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
      </div>
    </header>
  );
};

export default Header;

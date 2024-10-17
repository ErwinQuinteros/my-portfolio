import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import LanguageSelector from "../hoc/LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("Projects");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "home", href: "home" },
    { name: "about_us", href: "about-us" },
    { name: "experience", href: "experience" },
    { name: "projects", href: "projects" },
    { name: "skills_n", href: "skills" },
    { name: "contact", href: "contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="z-[999] relative">
      <div className="lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[80rem]">
        <motion.div
          className="hidden md:block fixed top-0 left-1/2 h-[4.5rem] rounded-none border border-white border-opacity-40 bg-[#BDBDBD] shadow-lg backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full w-auto px-4"
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
                    {t(link.name)}
                  </ScrollLink>
                </motion.li>
              ))}
              <LanguageSelector />
            </ul>
          </nav>
        </motion.div>
           

        <div
          className={clsx(
            "fixed top-0 left-0 px-4 z-50 w-full transition-all duration-300 md:hidden",
            scrolled ? "bg-[#030618] shadow-lg" : "bg-transparent"
          )}
        >
          <div className="flex items-center justify-between p-4">
            <LanguageSelector />
            <div
              className={clsx("menu-icon space-y-1 cursor-pointer", {
                open: menuOpen,
              })}
              onClick={toggleMenu}
            >
              <div
                className={clsx(
                  "w-6 h-1 transition-all duration-300",
                  scrolled ? "bg-white" : "bg-white"
                )}
              ></div>
              <div
                className={clsx(
                  "w-6 h-1 transition-all duration-300",
                  scrolled ? "bg-white" : "bg-white"
                )}
              ></div>
              <div
                className={clsx(
                  "w-6 h-1 transition-all duration-300",
                  scrolled ? "bg-white" : "bg-white"
                )}
              ></div>
            </div>
          </div>

          <div
            className={clsx(
              "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              { hidden: !menuOpen }
            )}
            onClick={closeMenu}
          >
            <div
              className="w-64 h-full p-6 pt-10 bg-[#030618] text-white cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <ScrollLink
                      to={link.href}
                      smooth={true}
                      spy={true}
                      activeClass="active"
                      offset={-100}
                      duration={700}
                      className="block text-lg font-semibold hover:text-[#ffa726]"
                      onClick={closeMenu}
                    >
                      {t(link.name)}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

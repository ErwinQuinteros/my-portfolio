import React, { useState } from 'react';
import clsx from 'clsx';
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState('Projects');

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about-us' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 text-gray-950">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
              <motion.li
              className="relative flex items-center justify-center h-3/4"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                href={link.href}
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition',
                  active === link.name && 'text-white dark:text-black'
                )}
                onClick={() => setActive(link.name)}
              >
                {link.name}
                {active === link.name && (
                  <span className="absolute inset-0 bg-gray-100 rounded-full -z-10"></span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
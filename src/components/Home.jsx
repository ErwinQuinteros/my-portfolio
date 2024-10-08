import React from "react";
import ParticlesComponent from "./ParticlesComponent";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section id="home" className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4">
      <ParticlesComponent />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img
              src={profile}
              alt="Erwin Quinteros"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="w-40 h-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-5xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hola, Soy Erwin.</span>
        <p className="font-bold">
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block", color: "#fff" }}
            repeat={Infinity}
          />
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-105 active:scale-105 borderBlack text-gray-950"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="flex items-center gap-2 py-3 text-white transition bg-transparent border-2 border-white rounded-full outline-none group px-7 focus:scale-105 hover:scale-105 active:scale-105 border-opacity-40"
          href="https://www.linkedin.com/in/erwin-quinteros-v/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

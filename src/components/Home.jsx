import React from "react";
import ParticlesComponent from "./ParticlesComponent";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4">
     
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
                  alt="Ricardo portrait"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
            className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hola, Soy Erwin.</span> Soy un{" "}
            <span className="font-bold">Desarrollador de Software Frontend y Backend</span>
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
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
              href="#"
              target="_blank"
            >
              GitHub <FaGithub className="opacity-70" />
            </a>

            <a
              className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
              href="https://www.linkedin.com/in/erwin-quinteros-v/"
              target="_blank"
            >
              <span className="opacity-70">LinkedIn</span>
              <BsLinkedin className="opacity-70" />
            </a>
          </motion.div>
        
    </section>
  );
};

export default Home;

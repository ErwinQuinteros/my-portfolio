import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="about-us" className="relative z-50 bg-white border-[#25213b]">
      <div className="relative border-t bg-white border-[#353951] text-white">
        <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
          <motion.div>
            <h2 className="text-[#111827] font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
              Sobre mí.
            </h2>
          </motion.div>
          <div className="flex px-6 pt-24 pb-24 sm:pt-28 md:pt-20 md:px-24">
            <div className="self-center">
              <div className="flex flex-wrap gap-2 align-center md:flex-nowrap">
                <div className="lg:w-[80%] text-gray-900 text-left">
                  <h2 className="text-xl">Software Developer</h2>
                  <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
                    Erwin Quinteros
                  </h1>
                  <p className="mt-6 text-base font-light lg:w-[87%] leading-7">
                    ¡Hola! Soy Erwin Quinteros, un apasionado desarrollador de
                    software con experiencia en backend y frontend. A lo largo
                    de mi carrera, he tenido la oportunidad de trabajar en una
                    amplia variedad de proyectos, desde aplicaciones web
                    complejas hasta soluciones de comercio electrónico. Mi
                    enfoque siempre ha sido ofrecer productos de alta calidad
                    que no solo cumplan con los requisitos técnicos, sino que
                    también proporcionen una experiencia de usuario excepcional.
                  </p>
                  <div className="flex gap-2 mt-6">
                    <a
                      className="flex items-center gap-2 py-3 text-white transition border-2 border-white rounded-full outline-none group bg-gray-950 px-7 focus:scale-105 hover:scale-105 active:scale-105 border-opacity-40"
                      href="#projects"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="opacity-70">Proyectos</span>
                    </a>
                    <a
                      className="flex items-center gap-2 py-3 text-white transition border-2 border-white rounded-full outline-none group bg-gray-950 px-7 focus:scale-105 hover:scale-105 active:scale-105 border-opacity-40"
                      href="#contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="opacity-70">Contacto</span>
                    </a>
                  </div>
                </div>

                <div className="hidden lg:block w-[480px] self-center">
                  <img
                    className="rounded-[10%] transform rotate-3"
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

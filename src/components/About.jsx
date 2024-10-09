import React from "react";
import "./../index.css";
const About = () => {
  return (
    <section
      id="about-us"
      className="relative z-50 bg-[#030618] border-[#353951] border-t"
    >
      <div className="py-10 px-6 mx-auto sm:px-16 sm:py-16 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>
        <div className="flex flex-wrap gap-2 pt-5 align-center md:flex-nowrap">
          <div className="lg:w-[80%] text-white text-left">
            <h2 className="sm:text-[18px] text-[16px]">Software Developer</h2>
            <h1 className="font-black sm:text-[40px] text-[30px] lg:w-[85%]">
              Resumen
            </h1>
            <p className="mt-6 text-base lg:w-[87%] leading-7 text-justify font-normal">
              ¡Hola! Soy Erwin Quinteros, un apasionado desarrollador de
              software con experiencia en backend y frontend. A lo largo de mi
              carrera, he tenido la oportunidad de trabajar en una amplia
              variedad de proyectos, desde aplicaciones web complejas hasta
              soluciones de comercio electrónico. Mi enfoque siempre ha sido
              ofrecer productos de alta calidad que no solo cumplan con los
              requisitos técnicos, sino que también proporcionen una experiencia
              de usuario excepcional.
            </p>
            <div className="flex gap-2 mt-6">
              <a
                className="flex items-center gap-2 py-3 text-white transition border-2 font-bold border-white rounded-full outline-none group bg-[#030618] px-5 focus:scale-105 hover:scale-105 active:scale-105"
                href="#projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="opacity-70">Proyectos</span>
              </a>
              <a
                className="flex items-center gap-2 py-3 text-white transition border-2 font-bold border-white rounded-full outline-none group bg-[#030618] px-5 focus:scale-105 hover:scale-105 active:scale-105"
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
              className="rounded-[10%] transform"
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

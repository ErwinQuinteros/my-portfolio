import React from "react";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";
import "./../index.css";
import { styles } from "../styles";

const About = () => {
  const { ref: sectionRef, inView: isVisible } = useInView({
    triggerOnce: true, 
    threshold: 0.4,
  });

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="relative z-50 bg-[#030618] border-[#353951] border-t"
    >
      <div className={`${styles.bgSections} `}>
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        </div>
        <div className="flex flex-wrap gap-2 pt-5 align-center md:flex-nowrap">
          <div
            className={`lg:w-[80%] text-[#BDBDBD] text-left transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="sm:text-[18px] text-[16px] text-[#ffa726]">
              Desarrollador de Software
            </h2>
            <h1 className="font-black sm:text-[40px] text-[30px] border-b-4 border-[#ffa726] w-12">
              Resumen
            </h1>
            <p className="mt-6 text-base lg:w-[87%] leading-7 text-justify font-normal">
              ¡Hola! Soy Erwin Quinteros, desarrollador de software con
              experiencia en backend y frontend. A lo largo de mi vida
              profesional, he tenido la oportunidad de trabajar en una amplia
              variedad de proyectos realizando tareas diferentes en cada
              proyecto. He cumplido funciones de desarrollador como de encargado
              de algunos proyectos pequeños que he ido realizando con un equipo.
              Mi enfoque siempre ha sido ofrecer productos de alta calidad que no solo
              cumplan con los requisitos técnicos, sino que también proporcionen una
              buena experiencia al usuario final.
            </p>
            <div className="flex gap-2 mt-6">
              <ScrollLink
                to="projects"
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                duration={700}
                className="flex items-center cursor-pointer gap-2 py-3 shadow-lg hover:shadow-slate-600/60 text-gray-950 hover:border-[#BDBDBD] hover:bg-[#BDBDBD] transition border-2 font-bold border-[#d4a22d] bg-[#d4a22d] rounded-full  px-5 focus:scale-105 hover:scale-105 active:scale-105"
              >
                <span className="opacity-70">Proyectos</span>
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-100}
                duration={700}
                className="flex items-center cursor-pointer gap-2 py-3 shadow-lg hover:shadow-slate-600/60 text-[#d4a22d] hover:text-[#030618] hover:bg-[#BDBDBD] transition border-2 font-bold border-[#BDBDBD] rounded-full bg-[#030618] px-5 focus:scale-105 hover:scale-105 active:scale-105"
              >
                <span className="opacity-70">Contacto</span>
              </ScrollLink>
            </div>
          </div>

          <div
            className={`hidden lg:block w-[480px] self-center transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <img
              alt="about"
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

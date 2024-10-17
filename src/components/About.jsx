import "./../index.css";
import React from "react";
import { styles } from "../styles";
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from "react-scroll";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { t } = useTranslation();
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
              {t('ocupation')}
            </h2>
            <h1 className="font-black sm:text-[40px] text-[30px] border-b-4 border-[#ffa726] w-12">
            {t('summary')}
            </h1>
            <p className="mt-6 text-base lg:w-[87%] leading-7 text-justify font-normal">
            {t('su_description')}
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
                <span className="opacity-70"> {t('button_project')}</span>
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
                <span className="opacity-70"> {t('button_contact')}</span>
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

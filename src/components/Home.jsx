import React from "react";
import ParticlesComponent from "./ParticlesComponent";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="relative z-40 bg-[#030618] border-[#353951] border-t"
    >
      <div className={`${styles.bgSections} `}>
        <ParticlesComponent />
        <div className="flex items-center justify-center pt-14">
          <div className="relative">
            <div
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
            </div>

            <span
              className="absolute bottom-0 right-0 text-4xl"
             
            >
              👋
            </span>
          </div>
        </div>
        <h1
          className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-5xl text-white max-w-[50rem] mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">{t('i_am')}</span>
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
        </h1>

        <div
          className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            className="shadow-lg hover:shadow-slate-600/60 flex items-center gap-2 py-3 transition hover:bg-[#BDBDBD] bg-[#d4a22d] rounded-full cursor-pointer group px-7 focus:scale-110 hover:scale-105 active:scale-105 borderBlack text-gray-950"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FaGithub className="opacity-70" />
          </a>

          <a
            className="shadow-lg hover:shadow-slate-600/60 flex items-center gap-2 py-3 text-[#d4a22d] hover:text-[#030618]  hover:bg-[#BDBDBD] transition bg-transparent border-2 border-white rounded-full group px-7 focus:scale-105 hover:scale-105 active:scale-105 border-opacity-40"
            href="https://www.linkedin.com/in/erwin-quinteros-v/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="opacity-70">LinkedIn</span>
            <BsLinkedin className="opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

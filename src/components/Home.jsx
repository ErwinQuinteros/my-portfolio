import React from "react";
import developerHeader from "../assets/developer.png";
import header from "../assets/header.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <img alt="header" src={header} className="md:hidden w-screen" />
      <div className="md:h-20 min-[700px]:hidden bg-[#2B2B29]"></div>
      <img
        alt="developer"
        src={developerHeader}
        className="absolute left-[50%] top-[130px] md:left-[20%] md:static"
      />

      <div className="absolute md:text-[40px] xl:left-[-20px] xl:text-[40px]  md:left-[0] md:w-screen p-6  md:static left-[20%] top-[40%] w-[619px] h-[250px] text-black text-[64px] font-normal">
        <p> Hi! Im Name a software developer</p>
        <Link
          className="cursor-pointer text-[20px]  text-white bg-slate-500 mt-2 p-4"
          to="Projects"
          smooth="500"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Home;

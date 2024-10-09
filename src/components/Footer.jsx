import React from "react";

const Footer = () => {
    return (
      <section id="footer" >
      <div className="relative z-50 bg-[#030618] border-[#353951] border-t">
        <div className="py-10 px-6 mx-auto sm:px-16 sm:py-16 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[80rem]">
          <div className="flex justify-center -z-40">
            <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          <div className="flex flex-col items-center justify-between text-white md:flex-row">
            <p className="text-sm">
              © Desarollado Portafolio por  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/" className="text-[#d4a22d] font-bold">Erwin Quinteros</a>
            </p>
          </div>
        </div>
      </div >
      </section>
    );
  };

export default Footer;

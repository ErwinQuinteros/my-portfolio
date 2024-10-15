import React, { useState, useEffect } from "react";
import { styles } from "../styles";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="footer">
      <div className="relative z-50 bg-[#030618] border-[#353951] border-t">
        <div className={`${styles.bgSections}`}>
          <div className="flex justify-center -z-40">
            <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
          </div>
          <div className="flex flex-col items-center justify-between text-[#BDBDBD] md:flex-row">
            <p className="text-sm text-[#B4B4C8]">
              © Desarollado Portafolio por{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/"
                className="text-[#FFA726] font-bold"
              >
                Erwin Quinteros
              </a>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        style={{ zIndex: 100 }}
        className={`fixed bottom-5 right-5 w-12 h-12 p-3 m-5 bg-[#FFA726] text-[#030618] hover:text-[#464c6a] animate-bounce font-bold rounded-full shadow-lg hover:bg-[#BDBDBD] transition-opacity duration-300 transform ${
          showButton ? "opacity-100 scale-100" : "opacity-0 scale-20"
        } hover:translate-y-[-5px] transition-transform ease-in-out duration-300`}
      >
        ↑
      </button>
    </section>
  );
};

export default Footer;

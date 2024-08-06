import React from "react";

const About = () => {
  return (
    <div
      id="about-us"
      className="relative z-50 bg-white border-[#25213b]"
    >
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Sobre mí
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="text-left lg:py-9 max-w-screen-lg mx-auto">
        <p>¡Hola! Soy Erwin Quinteros, un apasionado desarrollador de software con experiencia en backend y frontend. A lo largo de mi carrera, he tenido la oportunidad de trabajar en una amplia variedad de proyectos, desde aplicaciones web complejas hasta soluciones de comercio electrónico. Mi enfoque siempre ha sido ofrecer productos de alta calidad que no solo cumplan con los requisitos técnicos, sino que también proporcionen una experiencia de usuario excepcional.</p>
        <span>Creo firmemente en la importancia de la colaboración y la comunicación en cada proyecto. Trabajar estrechamente con diseñadores, otros desarrolladores y clientes me permite entender mejor sus necesidades y crear soluciones que superen sus expectativas. Estoy comprometido con la mejora continua, manteniéndome actualizado con las últimas tendencias y tecnologías para ofrecer siempre lo mejor a mis clientes.</span>
      </div>
    </div>
  );
};

export default About;

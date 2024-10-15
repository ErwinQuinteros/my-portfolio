import React, { useState } from "react";


const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
   
    console.log("Idioma cambiado a:", lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 w-12 h-12 bg-[#FFA726] text-[#030618] font-bold rounded-full shadow-lg flex items-center justify-center hover:bg-[#BDBDBD] transition-opacity duration-300"
      >
        🌐
      </button>
      {isOpen && (
        <div className="absolute z-50 w-32 bg-white rounded-md shadow-lg right-4 top-16">
          <ul className="flex flex-col">
            <li onClick={() => handleLanguageChange("es")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Español</li>
            <li onClick={() => handleLanguageChange("en")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">English</li>
            <li onClick={() => handleLanguageChange("pt")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Português</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

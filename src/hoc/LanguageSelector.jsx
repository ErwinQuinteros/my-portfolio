import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", icon: "/svg/united-states.ico" },
    { code: "es", name: "Español", icon: "/svg/spain.ico" },
    { code: "pt", name: "Português", icon: "/svg/brazil.ico" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center px-4 py-2 bg-white border border-gray-400 rounded-md cursor-pointer md:bg-transparent md:border-transparent"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          src={languages.find((lang) => lang.code === selectedLanguage).icon}
          alt="Selected Language"
          className="inline-block w-5 h-5 mr-2 md:mr-6 xl:mr-0"
        />
        <span className="md:hidden">
          {languages.find((lang) => lang.code === selectedLanguage).name}
        </span>
      </div>

      {isDropdownOpen && (
        <ul className="absolute w-32 mt-2 bg-white border border-gray-300 rounded-md shadow-lg md:w-full">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => changeLanguage(lang.code)}
            >
              <img
                src={lang.icon}
                alt={lang.name}
                className="inline-block w-5 h-5 mr-2"
              />
              <span className="md:hidden">{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;

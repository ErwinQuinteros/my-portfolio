import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" bg-[#0d1224]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div id="contact" class="my-12 lg:my-16 relative mt-24 text-white">
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                Contact
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-medium mb-5 text-[#f23016] text-xl uppercase">
                Contact with me
              </p>
              <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
                <p className="text-left text-md text-[#d3d8e8] py-3">
                  If you have any questions or concerns, please don't hesitate
                  to contact me. I am open to any work opportunities that align
                  with my skills and interests.
                </p>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-base font-medium text-left"
                    >
                      Your Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base font-medium text-left"
                    >
                      Your Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-base font-medium text-left"
                    >
                      Your Message:
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
                    ></textarea>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button
                      type="submit"
                      className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:w-3/4 ">
              <div className="flex flex-col gap-5 lg:gap-9">
                <p className="flex items-center gap-3 text-sm md:text-xl">
                  <MdAlternateEmail
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>erwinquinterosvillarroel@gmail.com</span>
                </p>
                <p className="flex items-center gap-3 text-sm md:text-xl">
                  <IoMdCall
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>+59177982523</span>
                </p>
                <p className="flex items-center gap-3 text-sm md:text-xl">
                  <CiLocationOn
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span>Cochabamba, Bolivia</span>
                </p>
              </div>
              <div className="flex items-center gap-5 mt-8 lg:mt-16 lg:gap-10">
                <a target="_blank" href="/" rel="noopener noreferrer">
                  <IoLogoGithub
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
                <a target="_blank" href="/" rel="noopener noreferrer">
                  <BiLogoLinkedin
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
                <a target="_blank" href="/" rel="noopener noreferrer">
                  <FaXTwitter
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
                <a target="_blank" href="/" rel="noopener noreferrer">
                  <FaStackOverflow
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
                <a target="_blank" href="/" rel="noopener noreferrer">
                  <FaFacebook
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

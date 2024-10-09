import emailjs from "emailjs-com";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import swal from "sweetalert";
import "./../index.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = e.target.elements;

    const templateParams = {
      from_name: name.value,
      email: email.value,
      message: message.value,
    };

    emailjs.send(
        "service_3hi86ab",
        "template_8twxt8d",
        templateParams,
        "ystOkJA7-d_DAwXUz"
      )
      .then(
        (response) => {
          console.log(
            "Email successfully sent!",
            response.status,
            response.text
          );
          swal({
            title: "¡Éxito!",
            text: "Tu mensaje ha sido enviado con éxito.",
            icon: "success",
            className: "my-swal-success",
            buttons: false,
            timer: 3000,
          });
        },
        (err) => {
          console.error("Failed to send email. Error:", err);
          swal({
            title: "Error",
            text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
            icon: "error",
            className: "my-swal-error",
            buttons: false,
            timer: 3000,
          });
        }
      );
  };

  return (
    <section
      id="about-us"
      className="relative z-50 bg-[#030618] border-[#353951] border-t"
    >
      <div className="py-10 px-6 mx-auto sm:px-16 sm:py-16 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[80rem]">
        <div className="lg:w-[80%] text-white text-left mb-5">
          <h1 className="font-black sm:text-[40px] text-[30px] lg:w-[85%]">
            Contacto
          </h1>
        </div>
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
            <p className="text-left text-md text-[#d3d8e8] py-3">
              Si tiene alguna pregunta o inquietud, no dude en ponerse en
              contacto conmigo.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-medium text-left"
                >
                  Nombre:
                </label>
                <input
                  required
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
                  Email:
                </label>
                <input
                  required
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
                  Mensaje:
                </label>
                <textarea
                  required
                  id="message"
                  rows="4"
                  className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
                ></textarea>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  type="submit"
                  className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-3/4 ">
            <div className="flex flex-col gap-5 text-white lg:gap-9">
              <p className="flex items-center gap-3 text-sm md:text-lg">
                <MdAlternateEmail
                  className="bg-[#fff] p-2 rounded-full hover:bg-[#d4a22d] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>erwinquinterosvillarroel@gmail.com</span>
              </p>
              <p className="flex items-center gap-3 text-sm md:text-lg">
                <IoMdCall
                  className="bg-[#fff] p-2 rounded-full hover:bg-[#d4a22d] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>+59177982523</span>
              </p>
              <p className="flex items-center gap-3 text-sm md:text-lg">
                <IoLocationSharp
                  className="bg-[#fff] p-2 rounded-full hover:bg-[#d4a22d] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>Cochabamba, Bolivia</span>
              </p>
            </div>
            <div className="flex items-center gap-5 mt-8 lg:mt-16 lg:gap-10">
              <a target="_blank" href="/" rel="noopener noreferrer">
                <IoLogoGithub
                  className="bg-[#fff] p-3 rounded-full hover:bg-[#d4a22d] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href="/" rel="noopener noreferrer">
                <BiLogoLinkedin
                  className="bg-[#fff] p-3 rounded-full hover:bg-[#d4a22d] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href="/" rel="noopener noreferrer">
                <FaXTwitter
                  className="bg-[#fff] p-3 rounded-full hover:bg-[#d4a22d] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href="/" rel="noopener noreferrer">
                <FaStackOverflow
                  className="bg-[#fff] p-3 rounded-full hover:bg-[#d4a22d] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href="/" rel="noopener noreferrer">
                <FaFacebook
                  className="bg-[#fff] p-3 rounded-full hover:bg-[#d4a22d] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

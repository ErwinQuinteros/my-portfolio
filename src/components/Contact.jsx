import emailjs from "emailjs-com";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoGithub, IoLogoWhatsapp } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import swal from "sweetalert";
import "./../index.css";
import { styles } from "../styles";

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
          e.target.reset();
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
      id="contact"
      className="relative z-50 bg-[#030618] border-[#353951] border-t"
    >
      <div className={`${styles.bgSections} `}>
        <div className="lg:w-[80%] text-[#BDBDBD] text-left mb-5">
          <h1 className="font-black sm:text-[40px] text-[30px] border-b-4 border-[#ffa726] w-12">
            Contacto
          </h1>
        </div>
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-3xl text-[#BDBDBD] rounded-lg border border-[#464c6a] p-3 lg:p-5">
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
                  className="w-full p-2 text-[#030618] bg-[#BDBDBD] border border-gray-700 rounded"
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
                  className="w-full p-2 text-[#030618] bg-[#BDBDBD] border border-gray-700 rounded"
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
                  className="w-full p-2 text-[#030618] bg-[#BDBDBD] border border-gray-700 rounded"
                ></textarea>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  type="submit"
                  className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#ffa726] px-5 md:px-12 py-2.5 md:py-3 md:text-sm text-lg tracking-wider text-[#030618] duration-200 hover:text-[#030618] hover:no-underline md:font-semibold  shadow-lg hover:shadow-slate-600/60 hover:border-[#BDBDBD] hover:bg-[#BDBDBD]  border-2 border-[#d4a22d] focus:scale-105 hover:scale-105 active:scale-105"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-3/4 ">
            <div className="flex flex-col gap-5 text-[#BDBDBD] lg:gap-9">
              <p className="flex items-center gap-3 text-sm md:text-lg">
                <MdAlternateEmail
                  className="bg-[#BDBDBD] p-2 rounded-full hover:bg-[#ffa726] transition-all duration-300 text-gray-800"
                  size={36}
                />
                <span>erwinquinterosvillarroel@gmail.com</span>
              </p>
              <p className="flex items-center gap-3 text-sm md:text-lg">
                <IoLogoWhatsapp
                  className="bg-[#BDBDBD] p-2 rounded-full hover:bg-[#ffa726] transition-all duration-300 text-gray-800"
                  size={36}
                />
                <span> (11) 918502877</span>
              </p>
              <p className="flex items-center gap-3 text-sm md:text-lg">
                <IoLocationSharp
                  className="bg-[#BDBDBD] p-2 rounded-full hover:bg-[#ffa726] transition-all duration-300 text-gray-800"
                  size={36}
                />
                <span>São Paulo, Brazil</span>
              </p>
            </div>
            <div className="flex items-center gap-5 mt-8 lg:mt-16 lg:gap-10">
              <a target="_blank" href="https://github.com/ErwinQuinteros" rel="noopener noreferrer">
                <IoLogoGithub
                  className="bg-[#BDBDBD] p-2 rounded-full hover:bg-[#ffa726] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/erwin-quinteros-v/" rel="noopener noreferrer">
                <BiLogoLinkedin
                  className="bg-[#BDBDBD] p-2 rounded-full hover:bg-[#ffa726] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/quinteroserwin/" rel="noopener noreferrer">
                <FaInstagram
                  className="bg-[#BDBDBD] p-2 rounded-full hover:bg-[#ffa726] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100089440620606" rel="noopener noreferrer">
                <FaFacebook
                  className="bg-[#BDBDBD] p-2 rounded-full hover:bg-[#ffa726] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
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

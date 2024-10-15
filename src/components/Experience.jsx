import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { styles } from "../styles";

const Experience = () => {
  return (
    <section id="experience" className="relative z-50 bg-[#030618]">
      <div className={`${styles.bgSections} `}>
        <div>
          <p className="sm:text-[18px] text-[16px] text-[#FFA726] tracking-wider text-center">
            Lo que he hecho hasta ahora
          </p>
          <h2 className="text-[#BDBDBD] font-black sm:text-[40px] text-[30px]">
            Experiencia Laboral
          </h2>
        </div>
        <div className="sm:mt-11 sm:mb-11 md:mb-16 md:mt-16">
          <VerticalTimeline
            contentStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            className="text-black"
          >
            <VerticalTimelineElement
              className="text-start"
              contentStyle={{
                background: "#BDBDBD",
                color: "#111827",
                marginTop: "2rem",
              }}
              dateClassName="text-[#FFA726]"
              date="2020-08-09 - 2021-03-30"
              iconStyle={{
                background: "#030618",
                color: "#FFA726",
                BiFontSize: 2,
              }}
              icon={<VscWorkspaceTrusted />}
            >
              <div>
                <div className="text-center">
                  <h3 className="text-lg font-bold">
                    Pasante QA (Quality Assurance)
                  </h3>
                  <h4 className="font-bold text-md">Xanthops</h4>
                </div>
                <p className="text-gray-900">
                  <ul className="mt-5 ml-5 space-y-2 text-justify list-disc">
                    <li className="pl-1 tracking-wider text-gray-600">
                      Diseño y creación de casos de prueba basados en los
                      requisitos del producto.
                    </li>
                    <li className="pl-1 tracking-wider text-gray-600">
                      Hice pruebas de compatibilidad en diferentes sistemas
                      operativos, pruebas de regresión después de los cambios y
                      actualizaciones.
                    </li>
                    <li className="pl-1 tracking-wider text-gray-600">
                      Trabaje con documentaciones haciendo reportes de bugs la
                      cual compartía con los del equipo en cada reunión
                    </li>
                    <li className="pl-1 tracking-wider text-gray-600">
                      Participacion en reuniones con los desarrolladores, QA's y
                      cliente para clarificar requisitos y expectativas
                    </li>
                  </ul>
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#BDBDBD",
                color: "#111827",
              }}
              dateClassName="text-[#FFA726]"
              date="2021-03-01 - 2024-06-26"
              iconStyle={{
                background: "#030618",
                color: "#FFA726",
              }}
              icon={<FaCode />}
            >
              <div className="">
                <div className="text-center">
                  <h3 className="text-lg font-bold">
                    Desarrollador (Fronted | Backend)
                  </h3>
                </div>
                <h4 className="font-bold text-md">Xanthops</h4>
                <p className="text-left text-gray-600">
                  <ul className="mt-5 ml-5 space-y-2 text-justify list-disc">
                    <li className="pl-1 tracking-wider text-gray-600">
                      Participé en diversos proyectos utilizando tecnologías
                      como Node.js, PHP, Laravel y React, donde integré frontend
                      y backend a través del consumo de APIs RESTful. Además,
                      desarrollé maquetaciones responsivas empleando frameworks
                      como Bootstrap, Tailwind y Vuetify.
                    </li>
                    <li className="pl-1 tracking-wider text-gray-600">
                      También he trabajado como QA, asegurando la calidad en
                      diferentes proyectos. Además, he guiado a nuevos
                      desarrolladores en el área de frontend, ayudándolos a
                      integrarse y a mejorar sus habilidades.
                    </li>
                  </ul>
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="text-start"
              contentStyle={{
                background: "#BDBDBD",
                color: "#111827",
              }}
              dateClassName="text-[#FFA726]"
              date="2024-06-15"
              iconStyle={{ background: "#030618", color: "#FFA726" }}
              icon={<FaLaptopCode />}
            >
              <div className="text-left">
                <div className="text-center">
                  <h3 className="text-lg font-bold">
                    Desarrollador (Fronted | Backend)
                  </h3>
                  <h4 className="font-bold text-md">Efinich Tech Solutions</h4>
                </div>

                <p className="text-gray-600">
                  <ul className="mt-5 ml-5 space-y-2 text-justify list-disc">
                    <li className="pl-1 tracking-wider text-gray-600">
                      He estado profundizando mis conocimientos en React y
                      lideré un proyecto utilizando React y Laravel. Fui el
                      encargado de un proyecto, donde mis funciones incluían
                      organizar las tareas del equipo, además de asumir roles
                      como desarrollador, front-end y QA.
                    </li>
                  </ul>
                </p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;

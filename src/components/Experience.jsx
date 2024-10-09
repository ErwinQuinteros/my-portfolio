import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaServer, FaLaptopCode } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative z-50 bg-[#030618]"
    >
      <div className="py-10 px-6 mx-auto sm:px-16 sm:py-16 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[80rem]">
        <div>
          <p className="sm:text-[18px] text-[16px] text-white tracking-wider text-center">
            Lo que he hecho hasta ahora
          </p>
          <h2 className="text-white font-black sm:text-[40px] text-[30px]">
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
                background: "#fff",
                color: "#111827",
                marginTop: "2rem",
              }}
              dateClassName="text-white"
              date="2020-08-09"
              iconStyle={{
                background: "#d4a22d",
                color: "#111827",
                BiFontSize: 2,
              }}
              icon={<VscWorkspaceTrusted />}
            >
              <div className="text-center">
                <h3 className="text-lg font-bold">QA (Quality Assurance)</h3>
                <h4 className="font-bold text-md">Xanthops SRL</h4>
                <p className="text-gray-900">
                  Description of QA responsibilities and experiences.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "#111827",
              }}
              dateClassName="text-white"
              date="2024-07-20"
              iconStyle={{ background: "#d4a22d", color: "#111827" }}
              icon={<FaServer />}
            >
              <div className="text-left">
                <h3 className="text-lg font-bold">QA (Quality Assurance)</h3>
                <h4 className="font-bold text-md">Xanthops SRL</h4>
                <p className="text-gray-600">
                  Description of QA responsibilities and experiences.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="text-start"
              contentStyle={{
                background: "#fff",
                color: "#111827",
              }}
              dateClassName="text-white"
              date="2024-06-15"
              iconStyle={{ background: "#d4a22d", color: "#111827" }}
              icon={<FaLaptopCode />}
            >
              <div className="text-left">
                <h3 className="text-lg font-bold">QA (Quality Assurance)</h3>
                <h4 className="font-bold text-md">Xanthops SRL</h4>
                <p className="text-gray-600">
                  Description of QA responsibilities and experiences.
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

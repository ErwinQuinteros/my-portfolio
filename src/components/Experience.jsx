import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegQuestionCircle, FaServer, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="bg-[#111827] py-6">
      <div className="flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
          }}
          date="2020-08-09"
          iconStyle={{ background: "#777777", color: "#333845" }}
          icon={<FaRegQuestionCircle />}
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
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
          }}
          date="2024-07-20"
          iconStyle={{ background: "#777777", color: "#fff" }}
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
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
          }}
          date="2024-06-15"
          iconStyle={{ background: "#777777", color: "#fff" }}
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
  );
};

export default Experience;

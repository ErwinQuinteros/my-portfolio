import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegQuestionCircle, FaServer, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="experience" className="py-6 bg-white">
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Lo que he hecho hasta ahora
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experiencia Laboral.
        </h2>
      </motion.div>
      <div className='mt-20 mb-20'>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{
            background: "#262D3A",
            color: "#fff",
            marginTop: "2rem"
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
            background: "#262D3A",
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
            background: "#262D3A",
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
    </div>
  );
};

export default Experience;

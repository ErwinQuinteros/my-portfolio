import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section id="experience" className="relative z-50 bg-[#030618]">
      <div className={`${styles.bgSections} `}>
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="sm:text-[18px] text-[16px] text-[#FFA726] tracking-wider text-center">
            {t("experience_p")}
          </p>
          <h2 className="text-[#BDBDBD] font-black sm:text-[40px] text-[30px]">
            {t("experience_h2")}
          </h2>
        </motion.h1>
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
                    {t("experience_1_title")}
                  </h3>
                  <h4 className="font-bold text-md">Xanthops</h4>
                </div>
                <p className="text-gray-900">
                  <ul className="mt-5 ml-5 space-y-2 text-justify list-disc">
                    <li className="pl-1 tracking-wider text-gray-600">
                      {t("experience_1_point0")}
                    </li>
                    <li className="pl-1 tracking-wider text-gray-600">
                      {t("experience_1_point1")}
                    </li>
                    <li className="pl-1 tracking-wider text-gray-600">
                      {t("experience_1_point2")}
                    </li>
                    <li className="pl-1 tracking-wider text-gray-600">
                      {t("experience_1_point3")}
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
                    {t("experience_2_title")}
                  </h3>
                </div>
                <h4 className="font-bold text-md">Xanthops</h4>
                <p className="text-left text-gray-600">
                  <ul className="mt-5 ml-5 space-y-2 text-justify list-disc">
                    <li className="pl-1 tracking-wider text-gray-600">
                      {t("experience_2_point0")}
                    </li>
                    <li className="pl-1 tracking-wider text-gray-600">
                      {t("experience_2_point1")}
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
                    {t("experience_2_title")}
                  </h3>
                  <h4 className="font-bold text-md">Efinich Tech Solutions</h4>
                </div>

                <p className="text-gray-600">
                  <ul className="mt-5 ml-5 space-y-2 text-justify list-disc">
                    <li className="pl-1 tracking-wider text-gray-600">
                      {t("experience_3_point0")}
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

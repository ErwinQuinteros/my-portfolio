import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ index, name, description, tags, image }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      key={`project-${index}`}
      variants={fadeIn("right", "spring", index * 0.3, 3)}
      className="w-full md:max-w-[360px]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full p-5 bg-[#BDBDBD] bg-tertiary rounded-2xl min-h-[450px] flex flex-col justify-between"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="object-cover w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <img
                src="/path/to/source_code_icon.png"
                alt="source_code"
                className="object-contain w-1/2 h-1/2"
              />
            </div> */}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-gray-900 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-5 text-justify">
            {t(description)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 overflow-hidden">
          {tags.map((tag) => (
            <div key={`${name}-${tag.name}`} className="flex items-center">
              <img
                src={`/svg/${tag.img}`}
                alt={tag.name}
                className="w-5 h-5 mr-1"
              />
              <p className={`text-[14px] ${tag.color} whitespace-nowrap`}>
                {tag.name}
              </p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <motion.h1
        className="text-center"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="sm:text-[18px] text-[16px] text-[#FFA726] tracking-wider">
          {t("project_subtitle")}
        </p>
        <h2 className="text-[#BDBDBD] font-black sm:text-[40px] text-[30px]">
          {t("project_title")}
        </h2>
      </motion.h1>

      <div className="grid w-full grid-cols-1 gap-6 mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");

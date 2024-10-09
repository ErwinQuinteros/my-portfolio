import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
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
        className="w-full p-5 bg-white bg-tertiary rounded-2xl min-h-[450px] flex flex-col justify-between"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="object-cover w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <img
                src="/path/to/source_code_icon.png"
                alt="source code"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-gray-900 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 overflow-hidden">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} whitespace-nowrap`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className="sm:text-[18px] text-[16px] text-white tracking-wider">
          Mi trabajo
        </p>
        <h2 className="text-white font-black sm:text-[40px] text-[30px]">
          Proyectos
        </h2>
      </motion.div>

      <div className="grid w-full grid-cols-1 gap-6 mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");

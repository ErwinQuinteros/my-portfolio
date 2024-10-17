import { styles } from "../styles";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useTranslation } from 'react-i18next';
import { skillsData } from "../utils/data/skills";
import { skillsImage } from "../utils/skill-image";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });
  return (
    <section
      id="skills"
      className="relative z-50 bg-[#030618]"
    >
      <div className={`${styles.bgSections} `}>
      <motion.h1
       className="sm:text-[18px] text-[16px] text-[#BDBDBD] tracking-wider text-center pb-8"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-[#BDBDBD] font-black sm:text-[40px] text-[30px]">
            {t('skills')}
          </h2>
          </motion.h1>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-[#FFA726] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="w-auto h-full rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-[#BDBDBD] sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-[#FFA726] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="w-auto h-full rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-[#BDBDBD] sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;

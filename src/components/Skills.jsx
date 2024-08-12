import { skillsData } from "../utils/data/skills";
import { skillsImage } from "../utils/skill-image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div className="bg-[#0d1224]">
      <div
        id="skills"
        className="relative z-50 border-[#25213b] mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white"
      >
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Skills
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div className="w-full py-4">
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
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
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
                    <p className="text-sm text-white sm:text-lg">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;

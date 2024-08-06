
import projectImage from "../assets/project.jpg";

const Projects = () => {
  const projects = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage,
      githubLink: "",
      deployLink: "",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage,
      githubLink: "",
      deployLink: "",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage,
      githubLink: "",
      deployLink: "",
    },
  ];

  return (
    <div
    id="Projects"
    className="relative z-50 bg-white"
  >
    <div className="flex justify-center lg:py-8">
      <div className="flex  items-center">
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Projects
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>

    
  </div>
  );
};

export default Projects;

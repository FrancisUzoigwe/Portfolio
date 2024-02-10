import { useSelector } from "react-redux";
import TimeLine from "./TimeLine";

const Projects = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="projects"
      className={`min-h-[100vh] w-full flex items-center flex-col ${
        !mode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className="mt-[65px] font-[Buba] text-4xl max-md:text-2xl ">
        Projects
      </div>
      <TimeLine />
    </div>
  );
};

export default Projects;

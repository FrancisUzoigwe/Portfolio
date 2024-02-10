import { useSelector } from "react-redux";

const Skills = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="skills"
      className={`${
        !mode ? "bg-black text-white" : "bg-white text-black"
      } h-[100vh] w-full flex justify-center  text-white`}
    >
      <div className="w-full flex items-center flex-col">
        <div
          className={`mt-[67px] font-[Buba] text-4xl max-md:text-2xl ${
            !mode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Skills
        </div>
      </div>
    </div>
  );
};

export default Skills;

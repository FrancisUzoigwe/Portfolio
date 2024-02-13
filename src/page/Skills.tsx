import { useSelector } from "react-redux";
import Skill from "../components/static/Skill";
import react from "../assets/react.svg"
import typescript from "../assets/typescript.svg"
import firebase from "../assets/firebase.svg"
import javascript from "../assets/javascript.svg"
import tailwindcss from "../assets/tailwind-css.svg"
const Skills = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="skills"
      className={`${!mode ? "bg-black text-white" : "bg-white text-black"
        } min-h-[100vh] w-full flex justify-center  text-white`}
    >
      <div className="w-full flex items-center flex-col">
        <div
          className={`mt-[67px] font-[Buba] text-4xl max-md:text-2xl ${!mode ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
          Skills
        </div>
        <div className="w-full flex justify-center ">
          <div className="grid grid-cols-8 w-[90%]  max-lg:grid-cols-6 max-md:grid-cols-4 mt-7 max-sm:grid-cols-3 gap-4">
            <Skill text="React" src={react} />
            <Skill text="Typescript" src={typescript} />
            <Skill text="Firebase" src={firebase} />
            <Skill text="Javascript" src={javascript} />
            <Skill text="Tailwindcss" src={tailwindcss} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

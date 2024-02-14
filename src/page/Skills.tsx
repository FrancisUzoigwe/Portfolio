import { useSelector } from "react-redux";
import Skill from "../components/static/Skill";
import react from "../assets/react.svg"
import typescript from "../assets/typescript.svg"
import firebase from "../assets/firebase.svg"
import javascript from "../assets/javascript.svg"
import tailwindcss from "../assets/tailwind-css.svg"
import three from "../assets/threejs.svg"
import figma from "../assets/figma.svg"
import redux from "../assets/redux-original.svg"
import mongoDB from "../assets/mongoDB.svg"
import postgres from "../assets/postgresql.svg"
import git from "../assets/git.svg"
import express from "../assets/node-js.svg"
import node from "../assets/node.svg"
import vercel from "../assets/vercel.svg"
import py from "../assets/python.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import vite from "../assets/vite.svg"
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
          <div className="grid grid-cols-8 w-[90%]  max-lg:grid-cols-6 max-md:grid-cols-4 mt-7 max-sm:grid-cols-3 gap-4 place-items-center">
            <Skill text="React" src={react} />
            <Skill text="HTML" src={html} />
            <Skill text="CSS" src={css} />
            <Skill text="Tailwindcss" src={tailwindcss} />
            <Skill text="MongoDB" src={mongoDB} />
            <Skill text="SQL" src={postgres} />
            <Skill text="Figma" src={figma} />
            <Skill text="Firebase" src={firebase} />
            <Skill text="Typescript" src={typescript} />
            <Skill text="Javascript" src={javascript} />
            <Skill text="Redux Toolkit" src={redux} />
            <Skill text="ThreeJS" src={three} style="bg-white" />
            <Skill text="Git" src={git} />
            <Skill text="Node" src={node} />
            <Skill text="ExpressJS" src={express} />
            <Skill text="Python" src={py} />
            <Skill text="Vite" src={vite} style="bg-white" />
            <Skill text="Vercel" src={vercel} style="bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

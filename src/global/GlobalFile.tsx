import { useSelector } from "react-redux";
import About from "../page/About";
import Contact from "../page/Contact";
import MainPage from "../page/MainPage";
import Projects from "../page/Projects";
import Resume from "../page/Resume";
import Skills from "../page/Skills";
import { IoIosTimer } from "react-icons/io"

const GlobalFile = () => {

  const mode = useSelector((state: any) => state.mode)
  return (
    <div className={`${!mode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="w-full flex justify-center item-center fixed mt-5">
        <div className={` flex item-center px-7 py-3 rounded-full font-black ${mode ? "bg-[gray] text-white" : "bg-white text-black"}`}>Upgrage Occuring <div className="ml-4"><IoIosTimer className="text-2xl" /></div></div></div>
      <MainPage />
      <About />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
    </div>
  );
};

export default GlobalFile;

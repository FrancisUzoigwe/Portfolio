import { useSelector } from "react-redux";
import About from "../page/About";
import Contact from "../page/Contact";
import MainPage from "../page/MainPage";
import Projects from "../page/Projects";
import Resume from "../page/Resume";
import Skills from "../page/Skills";

const GlobalFile = () => {

  const mode = useSelector((state: any) => state.mode)
  return (
    <div className={`${!mode ? "bg-black text-white" : "bg-white text-black"}`}>
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

import About from "../page/About";
import Contact from "../page/Contact";
import MainPage from "../page/MainPage";
import Projects from "../page/Projects";
import Resume from "../page/Resume";
import Skills from "../page/Skills";

const GlobalFile = () => {
  return (
    <div className="">
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

import { useSelector } from "react-redux";
import frontend from "./../assets/front.jpg"
import { Fade } from "react-awesome-reveal";
const About = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="about"
      className={`min-h-[100vh] w-full flex justify-center ${!mode ? "bg-black" : "bg-white"
        } text-white`}
    >
      <div className={`mt-[65px] w-full flex flex-col items-center h-auto ${!mode ? "bg-black text-white" : "text-black bg-white"}`}>
        <div className="text-4xl max-md:text-2xl font-[Buba]">About Me</div>
        <Fade triggerOnce={true} delay={1000}>

          <div>
            <div className="my-10" />
            <div className="w-full flex justify-center items-center ">
              <div className="w-[80%] h-full flex max-md:flex-col items-center">
                <div className={`min-w-[200px] h-[150px] bg-white rounded-lg mr-5 border-[2px] ${!mode ? "border-none" : "border-[gray]"}`}>
                  <img src={frontend} alt="FrontEnd" className="h-full w-full  rounded-lg  object-cover" />
                </div>
                <div className="max-md:text-center mt-3 text-[15px]">Proficient in crafting compelling interfaces with HTML, CSS, and JavaScript, enhanced by React, Vite, and Tailwind. Specialize in seamless state management for responsive layouts and dynamic interactions, enhancing user experience.</div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce={true} delay={1000}>

          <div>
            <div className="my-10" />
            <div className="w-full flex justify-center items-center ">
              <div className="w-[80%] h-full flex-row-reverse flex max-md:flex-col items-center">
                <div className={`min-w-[200px] h-[150px] bg-white rounded-lg mr-5 border-[2px] ${!mode ? "border-none" : "border-[gray]"}`}>
                  <img src={frontend} alt="FrontEnd" className="h-full w-full  rounded-lg  object-cover" />
                </div>
                <div className="max-md:text-center mt-3 text-[15px]">
                  Proficient in Node.js and Express for robust backend architectures. Experienced in database design, scripting, RESTful APIs, authentication, and management for seamless functionality..</div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce={true} delay={1000}>

          <div>
            <div className="my-10" />
            <div className="w-full flex justify-center items-center ">
              <div className="w-[80%] h-full flex max-md:flex-col items-center">
                <div className={`min-w-[200px] h-[150px] bg-white rounded-lg mr-5 border-[2px] ${!mode ? "border-none" : "border-[gray]"}`}>
                  <img src={frontend} alt="FrontEnd" className="h-full w-full  rounded-lg  object-cover" />
                </div>
                <div className="max-md:text-center mt-3 text-[15px]">Passionate about intuitive user experiences and effective UI/UX design. Skilled in user research, prototyping, and rigorous testing to create captivating interfaces tailored to diverse user needs.</div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce={true} delay={1000}>

          <div>
            <div className="my-10" />
            <div className="w-full flex justify-center items-center ">
              <div className="w-[80%] h-full flex-row-reverse flex max-md:flex-col items-center">
                <div className={`min-w-[200px] h-[150px] bg-white rounded-lg mr-5 border-[2px] ${!mode ? "border-none" : "border-[gray]"}`}>
                  <img src={frontend} alt="FrontEnd" className="h-full w-full  rounded-lg  object-cover" />
                </div>
                <div className="max-md:text-center mt-3 text-[15px]">Experienced in collaborative environments, working with diverse teams to achieve shared goals. Utilize GitHub for seamless communication and teamwork to drive success..</div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce={true} delay={1000}>

          <div>
            <div className="my-10" />
            <div className="w-full flex justify-center items-center ">
              <div className="w-[80%] h-full flex max-md:flex-col items-center">
                <div className={`min-w-[200px] h-[150px] bg-white rounded-lg mr-5 border-[2px] ${!mode ? "border-none" : "border-[gray]"}`}>
                  <img src={frontend} alt="FrontEnd" className="h-full w-full  rounded-lg  object-cover" />
                </div>
                <div className="max-md:text-center mt-3 text-[15px]">
                  Committed to using technology to solve real-world problems and enhance digital experiences. Striving to deliver impactful solutions through innovation.</div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce={true} delay={1000}>
          <div >
            <div className="my-10" />
            <div className="w-full flex justify-center items-center ">
              <div className="w-[80%] h-full flex-row-reverse flex max-md:flex-col items-center">
                <div className={`min-w-[200px] h-[150px] bg-white rounded-lg mr-5 border-[2px] ${!mode ? "border-none" : "border-[gray]"}`}>
                  <img src={frontend} alt="FrontEnd" className="h-full w-full  rounded-lg  object-cover" />
                </div>
                <div className="max-md:text-center mt-3 text-[15px]">Excited to connect with developers, designers, and tech enthusiasts. Let's collaborate, discuss trends, and share ideas. Reach out and let's innovate together!</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

    </div>
  );
};

export default About;

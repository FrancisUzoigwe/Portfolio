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
                <div className="max-md:text-center mt-3 text-[15px]">I excel in crafting captivating and intuitive interfaces, employing a blend of HTML, CSS, and JavaScript alongside cutting-edge frameworks such as React, Vite, and Tailwind. By integrating seamless state management, I breathe life into designs, ensuring responsive layouts and dynamic interactions that elevate user experience to its zenith.</div>
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
                <div className="max-md:text-center mt-3 text-[15px]">I'm dedicated to crafting resilient backend architectures for dynamic web applications, harnessing the power of technologies like Node.js and Express. From meticulous database design to flawless server-side scripting, I guarantee efficient and secure systems. My proficiency extends to building RESTful APIs, implementing authentication mechanisms, and managing databases, all to ensure seamless application functionality and user satisfaction.</div>
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
                <div className="max-md:text-center mt-3 text-[15px]">Beyond technical prowess, I'm driven by a passion for crafting intuitive user experiences that resonate with users on a profound level. I firmly believe that effective UI/UX design is the cornerstone of user satisfaction. By meticulously conducting user research, prototyping, and rigorous testing, I bring to life visually captivating and seamlessly navigable interfaces tailored to meet the diverse needs of users.</div>
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
                <div className="max-md:text-center mt-3 text-[15px]">I thrive in collaborative environments, seamlessly integrating with designers, engineers, and stakeholders to realize shared objectives. With a commitment to open communication and teamwork, I leverage platforms like GitHub to foster cohesion and drive success within cross-functional teams.</div>
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
                <div className="max-md:text-center mt-3 text-[15px]"> I aim to use technology to solve real-world problems and
                  improve digital interactions. Whether building innovative
                  products, optimizing systems, or pushing creative
                  boundaries, I'm dedicated to delivering high-quality
                  solutions that have a positive impact.</div>
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
                <div className="max-md:text-center mt-3 text-[15px]">I'm excited to engage with fellow developers, designers, and tech aficionados. Whether it's collaborating on projects, delving into industry trends, or exchanging innovative ideas, don't hesitate to reach out. Let's embark on a journey of innovation together!</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

    </div>
  );
};

export default About;

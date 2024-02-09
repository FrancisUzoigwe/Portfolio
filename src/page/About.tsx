import { useSelector } from "react-redux";
import other from "../assets/main.png";
import { Fade } from "react-awesome-reveal";
const About = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="about"
      className={`min-h-[100vh] w-full flex justify-center ${
        !mode ? "bg-black" : "bg-white"
      } text-white`}
    >
      <div
        className={`flex flex-col my-1 items-center ${
          !mode ? "text-white" : "text-black font-black"
        } mt-[63px] w-[95%] pb-2`}
      >
        <div className="font-[Buba] text-4xl max-md:text-2xl">About Me</div>
        <div className="flex h-full w-full justify-between items-center max-md:flex-col">
          <div className="w-[400px] max-md:w-[70%] max-md:mb-2 h-[95%] ">
            <img src={other} className="w-full h-full object-contain" />
          </div>
          <div className="w-[66%] max-md:w-full max-md:ml-0 ml-5 h-[95%] ">
            <div className="text-[orange] font-[Buba] text-2xl">
              Full Stack Developer
            </div>
            <div>
              <Fade direction="right" duration={1000} triggerOnce={true}>
                <div className="flex flex-col my-2">
                  <li className="text-[orange] text-[17px] font-[Buba]">
                    My Background
                  </li>
                  <div className="text-[13px]">
                    I embarked on my programming journey [briefly mention your
                    background or education]. Over time, I've mastered a range
                    of technologies and frameworks, enabling me to excel in both
                    frontend and backend development.
                  </div>
                </div>
              </Fade>
              <Fade direction="right" duration={1000} triggerOnce={true}>
                <div className="flex flex-col my-2">
                  <li className="text-[orange] text-[17px] font-[Buba]">
                    Frontend Expertise
                  </li>
                  <div className="text-[13px]">
                    I specialize in creating captivating and user-friendly
                    interfaces. Utilizing HTML, CSS, JavaScript, and modern
                    frameworks like React and Angular, I bring designs to life
                    with responsive layouts and interactive elements.
                  </div>
                </div>
              </Fade>
              <Fade direction="right" duration={1000} triggerOnce={true}>
                <div className="flex flex-col my-2">
                  <li className="text-[orange] text-[17px] font-[Buba]">
                    Backend Proficiency
                  </li>
                  <div className="text-[13px]">
                    I specialize in developing robust backend architectures for
                    dynamic web applications. Leveraging technologies like
                    Node.js, Python, and Java, I ensure efficient and secure
                    systems from database design to server-side scripting. My
                    expertise includes RESTful APIs, authentication, and
                    database management, ensuring seamless application
                    functionality.
                  </div>
                </div>
              </Fade>
              <Fade direction="right" duration={1000} triggerOnce={true}>
                <div className="flex flex-col my-2">
                  <li className="text-[orange] text-[17px] font-[Buba]">
                    UI/UX Design
                  </li>
                  <div className="text-[13px]">
                    Beyond technical skills, I'm passionate about crafting
                    intuitive user experiences. I believe effective UI/UX design
                    drives user satisfaction. Through user research,
                    prototyping, and testing, I deliver visually appealing and
                    user-friendly interfaces that meet user needs.
                  </div>
                </div>
              </Fade>
              <Fade direction="right" duration={1000} triggerOnce={true}>
                <div className="flex flex-col my-2">
                  <li className="text-[orange] text-[17px] font-[Buba]">
                    Collaborative Approach
                  </li>
                  <div className="text-[13px]">
                    I excel in collaborative settings, working with designers,
                    engineers, and stakeholders to achieve shared goals. I
                    prioritize open communication and teamwork to drive success
                    in cross-functional teams.
                  </div>
                </div>
              </Fade>
              <Fade direction="right" duration={1000} triggerOnce={true}>
                <div className="flex flex-col my-2">
                  <li className="text-[orange] text-[17px] font-[Buba]">
                    My Mission
                  </li>
                  <div className="text-[13px]">
                    I aim to use technology to solve real-world problems and
                    improve digital interactions. Whether building innovative
                    products, optimizing systems, or pushing creative
                    boundaries, I'm dedicated to delivering high-quality
                    solutions that have a positive impact.
                  </div>
                </div>
              </Fade>
              <Fade direction="right" duration={1000} triggerOnce={true}>
                <div className="flex flex-col my-2">
                  <li className="text-[orange] text-[17px] font-[Buba]">
                    Let's Connect
                  </li>
                  <div className="text-[13px]">
                    I'm eager to connect with fellow developers, designers, and
                    tech enthusiasts. Whether collaborating, discussing industry
                    trends, or sharing ideas, feel free to reach out. Let's
                    innovate together!
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

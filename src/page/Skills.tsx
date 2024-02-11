import { useSelector } from "react-redux";
import { Slide } from "react-awesome-reveal";
const Skills = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="skills"
      className={`${
        !mode ? "bg-black text-white" : "bg-white text-black"
      } min-h-[100vh] w-full flex justify-center  text-white`}
    >
      <div className="w-full flex items-center flex-col">
        <div
          className={`mt-[67px] font-[Buba] text-4xl max-md:text-2xl ${
            !mode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Skills
        </div>
        <div className="w-full flex flex-col items-center h-auto">
          <div className="flex justify-between items-center max-md:flex-col w-[90%] mt-5">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                HTMl/CSS
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[89%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    89%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">React</div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[95%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    95%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                JavaScript
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[80%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    80%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                TypeScript
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[90%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    90%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Tailwindcss
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[99%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    99%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Api Consumption
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[95%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    95%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Frontend Development
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[99%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    99%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Backend Development
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[76%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    75%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                State Management
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[90%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    90%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Mobile Development
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[60%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    60%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                ExpressJS
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[90%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    90%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Code Utilization
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[80%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    80%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { useSelector } from "react-redux";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import man from "../assets/man.png";
import "./image.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const MainPage = () => {
  const mode = useSelector((state: any) => state.mode);

  const mainVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <div
        id="home"
        className={` w-full max-md:min-h-[110vh] min-h-[100vh] overflow-hidden   flex  justify-center ${
          mode ? "text-black bg-white" : "text-white bg-black"
        } `}
      >
        <div
          className={`w-[95%] ${
            !mode ? "text-white" : "text-black"
          } flex  justify-between  h-[400px] mt-20 "`}
        >
          <div className="image">
            <div className="max-md:mt-16 ">
              <motion.div
                variants={mainVariant}
                initial="hidden"
                animate="show"
                className="text-5xl max-md:text-4xl pt-14 font-black max-sm:text-center w-[630px] max-md:w-full"
              >
                Hi, I'm {""}
                <span className="text-[orange] ">Francis</span> Uzoigwe
              </motion.div>
              <div className="flex relative w-[98%]">
                <motion.div
                  initial={{ x: "-100", opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 2.0,
                    },
                  }}
                  className="flex flex-col items-center "
                >
                  <div
                    className={`w-[22px] h-[22px] rounded-full ${
                      !mode ? "bg-white" : "bg-black"
                    }`}
                  ></div>
                  <div
                    className={`${
                      !mode ? "bg-white" : "bg-black"
                    } h-[350px]  w-[3px]`}
                  ></div>
                </motion.div>
                <div className="text-white  w-[510px] max-md:w-auto absolute  left-5 max-md:top-4 top-4 max-md:text-left">
                  <motion.div
                    variants={item}
                    className={`font-black   ${
                      mode ? "text-black " : "text-white"
                    }`}
                  >
                    <div className="font-[Buba] max-md:text-[22px] text-4xl max-md:w-auto w-[520px] ">
                      I'm a{" "}
                      <span className="text-[orange]">
                        <TypeAnimation
                          sequence={[
                            "Full-Stack Developer",
                            1000,
                            "Frontend Developer",
                            1000,
                            "Backend Developer",
                            1000,
                            "Ui/Ux Developer",
                            1000,
                            "Project Manager",
                          ]}
                          speed={10}
                          repeat={Infinity}
                        />
                      </span>
                    </div>
                    Driving digital transformation with mastery in both
                    front-end and back-end development. Seamlessly bridging
                    creativity and functionality to deliver captivating user
                    experiences. A versatile full-stack{" "}
                    <span className="text-[orange] underline">(M.E.R.N)</span>{" "}
                    developer poised to elevate projects with comprehensive
                    expertise and refined craftsmanship.
                  </motion.div>

                  <button className="hover:cursor-pointer px-5 py-[10px] my-5 transition duration-300 rounded-full bg-[orange] font-black hover:-translate-y-2">
                    Download CV
                  </button>
                  <div className="flex mt-2">
                    <a href="https://facebook.com/FrancisUzoigwe.28/">
                      <div
                        className={`w-[47px] h-[45px] rounded-xl ${
                          !mode
                            ? "bg-white hover:bg-[#777676] transition duration-300"
                            : "bg-black hover:bg-[#242424]"
                        } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaFacebookF
                          className={`${!mode ? "text-[blue] " : "text-white"}`}
                          size={30}
                        />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/francis-uzoigwe-2b3b9b246">
                      <div
                        className={`w-[47px] h-[45px] rounded-xl ${
                          !mode
                            ? "bg-white hover:bg-[#777676]"
                            : "bg-black hover:bg-[#242424]"
                        } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaLinkedinIn
                          className={`${!mode ? "text-[blue]" : "text-white"}`}
                          size={30}
                        />
                      </div>
                    </a>
                    <a href="https://twitter.com/francisuzoigwe1">
                      <div
                        className={`w-[47px] h-[45px] rounded-xl ${
                          !mode
                            ? "bg-white hover:bg-[#777676]"
                            : "bg-black hover:bg-[#242424]"
                        } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaXTwitter
                          className={`${!mode ? "text-[black]" : "text-white"}`}
                          size={30}
                        />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/FrancisUzoigwe.28">
                      <div
                        className={`w-[47px] h-[45px] rounded-xl ${
                          !mode
                            ? "bg-white hover:bg-[#777676]"
                            : "bg-black hover:bg-[#242424]"
                        } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaInstagram
                          className={`${
                            !mode ? "text-[#b33c3c]" : "text-white"
                          }`}
                          size={30}
                        />
                      </div>
                    </a>
                    <a href="https://github.com/FrancisUzoigwe">
                      <div
                        className={`w-[47px] h-[45px] rounded-xl ${
                          !mode
                            ? "bg-white hover:bg-[#777676]"
                            : "bg-black hover:bg-[#242424] "
                        } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaGithub
                          className={`${
                            !mode ? "text-[black] " : "text-white"
                          }`}
                          size={30}
                        />
                      </div>
                    </a>
                    <a href="https://wa.link/hu8yek">
                      <div
                        className={`w-[47px] h-[45px] rounded-xl ${
                          !mode
                            ? "bg-white hover:bg-[#777676]"
                            : "bg-black hover:bg-[#242424] "
                        } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaWhatsapp
                          className={`${
                            !mode ? "text-[green] " : "text-white"
                          }`}
                          size={30}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[500px] max-lg:hidden -mt-20 h-[500px]"
            style={{ background: `url(${man})`, backgroundRepeat: "no-repeat" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

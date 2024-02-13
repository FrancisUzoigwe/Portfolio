import { useSelector } from "react-redux";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import me from "../assets/main.png";
import LazyLoading from "react-lazy-load"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
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
        className={` w-full  min-h-[100vh] overflow-hidden   flex  justify-center ${mode ? "text-black bg-white" : "text-white bg-black"
          } `}
      >
        <div
          className={`w-[95%] ${!mode ? "text-white" : "text-black"
            } flex max-lg:flex-col  justify-between  h-auto mt-5 "`}
        >
          <div className=" mt-16 max-md:mt-4">
            <div className="">
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
                  initial={{ x: "-150", opacity: 0 }}
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
                    className={`w-[22px] h-[22px] rounded-full ${!mode ? "bg-white" : "bg-black"
                      }`}
                  ></div>
                  <div
                    className={`${!mode ? "bg-white" : "bg-black"
                      } h-[300px]  w-[3px]`}
                  ></div>
                </motion.div>
                <div className="text-white  w-[510px] max-md:w-auto absolute  left-5 max-md:top-4 top-4 max-md:text-left">
                  <motion.div
                    variants={item}
                    className={`  ${mode ? "text-black font-black  " : "text-white"
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
                            1000,
                            "CyberSecurity expert",
                            1000,
                          ]}
                          speed={10}
                          repeat={Infinity}
                        />
                      </span>
                    </div>
                    <div className="text-[14px] mt-[2px]">
                      Driving digital transformation with mastery in both
                      front-end and back-end development. Seamlessly bridging
                      creativity and functionality to deliver captivating user
                      experiences. A versatile full-stack{" "}
                      <span className="text-[orange] underline">(M.E.R.N)</span>{" "}
                      developer poised to elevate projects with comprehensive
                      expertise and refined craftsmanship.
                    </div>
                  </motion.div>

                  <Link to="resume" duration={1000} smooth={true}>
                    <button className="hover:cursor-pointer px-5 py-[10px] my-5 transition duration-300 rounded-full bg-[orange] font-black hover:-translate-y-2">
                      View Resume
                    </button>
                  </Link>
                  <div className="flex mt-2">
                    <a href="https://facebook.com/FrancisUzoigwe.28/">
                      <div
                        className={`w-[37px] h-[37px] rounded-xl ${!mode
                          ? "bg-white hover:bg-[#777676] transition duration-300"
                          : "bg-black hover:bg-[#242424]"
                          } mx-[5px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaFacebookF
                          className={`${!mode ? "text-[blue] " : "text-white"}`}
                          size={25}
                        />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/francis-uzoigwe-2b3b9b246">
                      <div
                        className={`w-[37px] h-[37px] rounded-xl ${!mode
                          ? "bg-white hover:bg-[#777676]"
                          : "bg-black hover:bg-[#242424]"
                          } mx-[5px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaLinkedinIn
                          className={`${!mode ? "text-[blue]" : "text-white"}`}
                          size={25}
                        />
                      </div>
                    </a>
                    <a href="https://twitter.com/francisuzoigwe1">
                      <div
                        className={`w-[37px] h-[37px] rounded-xl ${!mode
                          ? "bg-white hover:bg-[#777676]"
                          : "bg-black hover:bg-[#242424]"
                          } mx-[5px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaXTwitter
                          className={`${!mode ? "text-[black]" : "text-white"}`}
                          size={25}
                        />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/FrancisUzoigwe.28">
                      <div
                        className={`w-[37px] h-[37px] rounded-xl ${!mode
                          ? "bg-white hover:bg-[#777676]"
                          : "bg-black hover:bg-[#242424]"
                          } mx-[5px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaInstagram
                          className={`${!mode ? "text-[#b33c3c]" : "text-white"
                            }`}
                          size={25}
                        />
                      </div>
                    </a>
                    <a href="https://github.com/FrancisUzoigwe">
                      <div
                        className={`w-[37px] h-[37px] rounded-xl ${!mode
                          ? "bg-white hover:bg-[#777676]"
                          : "bg-black hover:bg-[#242424] "
                          } mx-[5px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaGithub
                          className={`${!mode ? "text-[black] " : "text-white"
                            }`}
                          size={25}
                        />
                      </div>
                    </a>
                    <a href="https://wa.link/r3i1hv">
                      <div
                        className={`w-[37px] h-[37px] rounded-xl ${!mode
                          ? "bg-white hover:bg-[#777676]"
                          : "bg-black hover:bg-[#242424] "
                          } mx-[5px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                      >
                        <FaWhatsapp
                          className={`${!mode ? "text-[green] " : "text-white"
                            }`}
                          size={25}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LazyLoading height={500} >
            <div
              className="min-w-[400px] mt-1 max-md:w-[95%] h-[500px] "
            >
              <img src={me} alt="FrancisUzoigwe" className="w-full h-full object-contain" />
            </div>
          </LazyLoading>
        </div>
      </div>
    </>
  );
};

export default MainPage;

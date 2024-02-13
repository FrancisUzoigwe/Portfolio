import { useDispatch, useSelector } from "react-redux";
import { changedToggle, dark, light } from "../../global/globalState";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

import { useState } from "react";

const DropDown = () => {
  const dispatch = useDispatch();
  const container = {
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

  const [mode, setMode] = useState<boolean>(false);
  const onMode = () => {
    setMode(!mode);
  };

  const main = useSelector((state: any) => state.mode);
  return (
    <>
      <div className="w-full backdrop-blur-lg h-screen max-md:block justify-center fixed z-[900] top-0 left-0 hidden ">
        <div className="w-[90%] flex ">
          <div className="absolute right-[14px] top-[20px]">
            <HiMenu
              className={`text-3xl hover:cursor-pointer font-[Buba] hover:scale-[1.2] transition duration-300 ${main ? "text-black" : "text-white"
                }`}
              onClick={() => {
                dispatch(changedToggle());
              }}
            />
          </div>
          <div
            className=" absolute top-[60px] right-4"
            onClick={() => {
              onMode();
            }}
          >
            {main ? (
              <BsToggle2Off
                className="text-2xl hover:cursor-pointer font-[Buba] hover:scale-[1.2] duration-[450ms] transition-all"
                onClick={() => {
                  dispatch(dark());
                }}
              />
            ) : (
              <BsToggle2On
                className="text-2xl hover:cursor-pointer font-[Buba] hover:scale-[1.2] duration-[450ms] transition-all text-white"
                onClick={() => {
                  dispatch(light());
                }}
              />
            )}
          </div>
          <motion.div
            className="flex w-full  justify-center h-full mt-14 flex-col items-center  max-md:block"
            variants={container}
            animate="show"
            initial="hidden"
          >
            <div className="w-full ml-5 flex-col items-center flex">
              <Link to="home" smooth={true} duration={1000}>
                <motion.div onClick={() => {
                  dispatch(changedToggle())
                }}
                  variants={item}
                  className={`mx-5  max-md:my-8 my-9 hover:cursor-pointer font-[Buba] ${main ? "text-black" : "text-white"
                    }`}
                >
                  Home
                </motion.div>
              </Link>
              <Link to="about" smooth={true} duration={1000}>
                <motion.div onClick={() => {
                  dispatch(changedToggle())
                }}
                  variants={item}
                  className={`mx-5  max-md:my-8 my-9 hover:cursor-pointer font-[Buba] ${main ? "text-black" : "text-white"
                    }`}
                >
                  About Me
                </motion.div>
              </Link>
              <Link to="projects" smooth={true} duration={1000}>
                <motion.div onClick={() => {
                  dispatch(changedToggle())
                }}
                  variants={item}
                  className={`mx-5  max-md:my-8 my-9 hover:cursor-pointer font-[Buba] ${main ? "text-black" : "text-white"
                    }`}
                >
                  Projects
                </motion.div>
              </Link>
              <Link to="resume" smooth={true} duration={1000}>
                <motion.div onClick={() => {
                  dispatch(changedToggle())
                }}
                  variants={item}
                  className={`mx-5  max-md:my-8 my-9 hover:cursor-pointer font-[Buba] ${main ? "text-black" : "text-white"
                    }`}
                >
                  Resume
                </motion.div>
              </Link>
              <Link to="skills" smooth={true} duration={1000}>
                <motion.div onClick={() => {
                  dispatch(changedToggle())
                }}
                  variants={item}
                  className={`mx-5  max-md:my-8 my-9 hover:cursor-pointer font-[Buba] ${main ? "text-black" : "text-white"
                    }`}
                >
                  Skills
                </motion.div>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <motion.div onClick={() => {
                  dispatch(changedToggle())
                }}
                  variants={item}
                  className={`mx-5  max-md:my-8 my-9 hover:cursor-pointer font-[Buba] ${main ? "text-black" : "text-white"
                    }`}
                >
                  Contact
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DropDown;

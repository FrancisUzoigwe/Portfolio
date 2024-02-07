import { useDispatch } from "react-redux";
import { changedToggle } from "../../global/globalState";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const DropDown = () => {
  const dispatch = useDispatch();

  const motionVariant = {
    closed: {
      opacity: 0,
      y: "-80px",
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <div className="w-full backdrop-blur-lg h-screen max-md:block justify-center fixed z-[900] top-0 left-0 hidden ">
        <div className="w-[90%] flex ">
          <div className="absolute right-[14px] top-[20px]">
            <HiMenu
              className="text-3xl hover:cursor-pointer hover:scale-[1.2] transition duration-300 text-white"
              onClick={() => {
                dispatch(changedToggle());
              }}
            />
          </div>
          <motion.div
            className="flex w-full  justify-center h-full mt-14   max-md:block"
            variants={motionVariant}
            animate="open"
            initial="closed"
          >
            <div className="w-full ml-5 flex-col items-center flex">
              <Link to="home" smooth={true} duration={1000}>
                <div className="mx-5 max-md:my-8 my-9 hover:cursor-pointer text-white ">
                  Home
                </div>
              </Link>
              <Link to="about">
                <div className="mx-5 max-md:my-8 my-9 hover:cursor-pointer text-white">
                  About Me
                </div>
              </Link>
              <Link to="projects" smooth={true} duration={1000}>
                <div className="mx-5 max-md:my-8 my-9 hover:cursor-pointer text-white">
                  Projects
                </div>
              </Link>
              <Link to="resume" smooth={true} duration={1000}>
                <div className="mx-5 max-md:my-8 my-9 hover:cursor-pointer text-white">
                  Resume
                </div>
              </Link>
              <Link to="skills" smooth={true} duration={1000}>
                <div className="mx-5 max-md:my-8 my-9 hover:cursor-pointer text-white">
                  Skills
                </div>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <div className="mx-5 max-md:my-8 my-9 hover:cursor-pointer text-white">
                  Contact
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DropDown;

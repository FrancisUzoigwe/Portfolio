import { useDispatch, useSelector } from "react-redux";
import { changedToggle } from "../../global/globalState";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DropDown = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-150px" },
  };
  return (
    <>
      <div className="w-full h-screen max-md:block hidden ">
        <motion.div className="w-full absolute ">
          <div className=" w-full fixed bg-black h-screen  ">
            <div className="absolute h-screen flex justify-center w-full ">
              <HiMenu
                className={`text-3xl hover:cursor-pointer hover:scale-[1.2] transition duration-300 ${
                  !toggle ? "text-black" : "text-white"
                } absolute top-[20px] right-3`}
                onClick={() => {
                  dispatch(changedToggle());
                }}
              />
              <motion.div
                className="mt-20"
                variants={variants}
                animate="open"
                initial="closed"
              >
                <div className=" w-[150px] flex flex-col items-center ">
                  <Link to="/">
                    <div className=" my-6 text-white">Home</div>
                  </Link>
                  <Link to="/about">
                    <div className=" my-6 text-white">About Me</div>
                  </Link>
                  <Link to="/projects">
                    <div className=" my-6 text-white">Projects</div>
                  </Link>
                  <Link to="/resume">
                    <div className=" my-6 text-white">Resume</div>
                  </Link>
                  <Link to="skills">
                    <div className=" my-6 text-white">Skills</div>
                  </Link>
                  <Link to="/contact">
                    <div className=" my-6 text-white">Contact</div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DropDown;

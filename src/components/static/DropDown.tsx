import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DropDown = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "300px" },
  };
  return (
    <>
      <div className="w-full h-full fixed top-0 ">
        <div className="w-full   h-screen max-md:block hidden backdrop-blur-sm">
          <motion.div className="w-full h-screen fixed">
            <div className=" w-full  h-screen">
              <div className=" h-screen flex justify-center w-full ">
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
      </div>
    </>
  );
};

export default DropDown;

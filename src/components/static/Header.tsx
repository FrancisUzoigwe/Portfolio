import { HiMenu } from "react-icons/hi";
import francis from "../../assets/Logo1.svg";
import francis1 from "../../assets/Logo2.svg"
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  return (
    <>
      <div className="w-full h-[70px] flex items-center justify-center">
        <div className="w-full h-[70px] flex items-center justify-center fixed">
          {scroll ? (
            <div className="w-full bg-black transition duration-300  text-white h-[70px] flex items-center justify-center">
              <div className="w-[95%] flex items-center justify-between">
                <div className="h-[35px] ">
                  <img
                    src={francis1}
                    alt="FrancisUzoigwe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center max-md:hidden">
                  <Link to="/">
                    <div className="mx-5 hover:cursor-pointer">Home</div>
                  </Link>
                  <Link to="/about">
                    <div className="mx-5 hover:cursor-pointer">About Me</div>
                  </Link>
                  <Link to="/projects">
                    <div className="mx-5 hover:cursor-pointer">Projects</div>
                  </Link>
                  <Link to="/resume">
                    <div className="mx-5 hover:cursor-pointer">Resume</div>
                  </Link>
                  <Link to="skills">
                    <div className="mx-5 hover:cursor-pointer">Skills</div>
                  </Link>
                  <Link to="/contact">
                    <div className="mx-5 hover:cursor-pointer">Contact</div>
                  </Link>
                </div>
                <div className="max-md:block hidden">
                  <HiMenu className="text-3xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300" />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-[70px] flex items-center justify-center">
              <div className="w-[95%] flex items-center justify-between">
                <div className="h-[35px] ">
                  <img
                    src={francis}
                    alt="FrancisUzoigwe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center max-md:hidden">
                  <Link to="/">
                    <div className="mx-5 hover:cursor-pointer">Home</div>
                  </Link>
                  <Link to="/about">
                    <div className="mx-5 hover:cursor-pointer">About Me</div>
                  </Link>
                  <Link to="/projects">
                    <div className="mx-5 hover:cursor-pointer">Projects</div>
                  </Link>
                  <Link to="/resume">
                    <div className="mx-5 hover:cursor-pointer">Resume</div>
                  </Link>
                  <Link to="skills">
                    <div className="mx-5 hover:cursor-pointer">Skills</div>
                  </Link>
                  <Link to="/contact">
                    <div className="mx-5 hover:cursor-pointer">Contact</div>
                  </Link>
                </div>
                <div className="max-md:block hidden">
                  <HiMenu className="text-3xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

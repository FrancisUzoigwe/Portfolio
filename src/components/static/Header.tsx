import { HiMenu } from "react-icons/hi";
import francis from "../../assets/Logo1.svg";
import francis1 from "../../assets/Logo2.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggled } from "../../global/globalState";
import DropDown from "./DropDown";
import { Link } from "react-scroll";

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

  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <>
      {toggle && <DropDown />}
      <div className="w-full h-[70px] flex items-center justify-center">
        <div className="w-full h-[70px] flex items-center justify-center fixed">
          {!scroll ? (
            <div className="w-full  bg-black transition  duration-300  text-white h-[70px] flex items-center justify-center">
              <div className="w-[95%] flex items-center justify-between">
                <Link to="home" smooth={true} duration={1000}>
                  <div className="h-[35px] max-md:h-[25px]  ">
                    <img
                      src={francis1}
                      alt="FrancisUzoigwe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="flex items-center max-md:hidden">
                  <Link to="home" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Home</div>
                  </Link>
                  <Link to="about">
                    <div className="mx-5 hover:cursor-pointer">About Me</div>
                  </Link>
                  <Link to="projects" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Projects</div>
                  </Link>
                  <Link to="resume" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Resume</div>
                  </Link>
                  <Link to="skills" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Skills</div>
                  </Link>
                  <Link to="contact" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Contact</div>
                  </Link>
                </div>
                <div className="max-md:block hidden">
                  <HiMenu
                    className="text-3xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300"
                    onClick={() => {
                      dispatch(toggled());
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full bg-white text-black h-[70px] flex items-center justify-center shadow-md transition duration-300">
              <div className="w-[95%] flex items-center justify-between">
                <Link to="home" smooth={true} duration={1000}>
                  <div className="h-[35px] max-md:h-[25px]">
                    <img
                      src={francis}
                      alt="FrancisUzoigwe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="flex items-center max-md:hidden">
                  <Link to="home" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Home</div>
                  </Link>
                  <Link to="about" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">About Me</div>
                  </Link>
                  <Link to="projects" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Projects</div>
                  </Link>
                  <Link to="resume" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Resume</div>
                  </Link>
                  <Link to="skills" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Skills</div>
                  </Link>
                  <Link to="contact" smooth={true} duration={1000}>
                    <div className="mx-5 hover:cursor-pointer">Contact</div>
                  </Link>
                </div>
                <div className="max-md:block hidden">
                  <HiMenu
                    className="text-3xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300"
                    onClick={() => {
                      dispatch(toggled());
                    }}
                  />
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

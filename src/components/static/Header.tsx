import { HiMenu } from "react-icons/hi";
import francis from "../../assets/Logo1.svg";
import francis1 from "../../assets/Logo2.svg";
import { useDispatch, useSelector } from "react-redux";
import { dark, light, toggled } from "../../global/globalState";
import DropDown from "./DropDown";
import { Link } from "react-scroll";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const main = useSelector((state: any) => state.mode);

  const [mode, setMode] = useState<boolean>(false);
  const onMode = () => {
    setMode(!mode);
  };
  return (
    <>
      {toggle && <DropDown />}
      <div className="w-full h-[70px] relative flex items-center justify-center z-[500]">
        <div className="w-full h-[70px]  flex items-center justify-center fixed">
          <div
            className={`w-full  ${
              !main ? "bg-black text-white" : "bg-white text-black"
            }  h-[70px] flex items-center justify-center`}
          >
            <div className="w-[95%] flex items-center justify-between">
              <Link to="home" smooth={true} duration={1000}>
                <div className="h-[35px] max-md:h-[25px] ml-2  ">
                  <img
                    src={!main ? francis1 : francis}
                    alt="FrancisUzoigwe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="flex items-center max-md:hidden">
                <Link to="home" smooth={true} duration={1000}>
                  <div className="mx-5 hover:cursor-pointer font-[Buba]">
                    Home
                  </div>
                </Link>
                <Link to="about" smooth={true} duration={1000}>
                  <div className="mx-5 hover:cursor-pointer font-[Buba]">
                    About Me
                  </div>
                </Link>
                <Link to="projects" smooth={true} duration={1000}>
                  <div className="mx-5 hover:cursor-pointer font-[Buba]">
                    Projects
                  </div>
                </Link>
                <Link to="resume" smooth={true} duration={1000}>
                  <div className="mx-5 hover:cursor-pointer font-[Buba]">
                    Resume
                  </div>
                </Link>
                <Link to="skills" smooth={true} duration={1000}>
                  <div className="mx-5 hover:cursor-pointer font-[Buba]">
                    Skills
                  </div>
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                  <div className="mx-5 hover:cursor-pointer font-[Buba]">
                    Contact
                  </div>
                </Link>
                <div
                  className="flex"
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
              </div>
            </div>
            <div className="max-md:block hidden">
              <HiMenu
                className="text-3xl mr-[12px] hover:cursor-pointer font-[Buba] hover:scale-[1.2] transition-all duration-300"
                onClick={() => {
                  dispatch(toggled());
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

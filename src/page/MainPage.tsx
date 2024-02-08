import { useSelector } from "react-redux";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const MainPage = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <>
      <div
        id="home"
        className={` w-full min-h-[100vh]  flex  justify-center ${
          mode ? "text-black bg-white" : "text-white bg-black"
        } `}
      >
        <div
          className={`w-[95%] ${
            !mode ? "text-white" : "text-black"
          } flex max-md:flex-col justify-between  h-[450px] mt-20 "`}
        >
          <div>
            <div className="text-5xl max-md:text-4xl font-[Buba] max-sm:text-center w-[630px] max-md:w-full">
              Hi, I'm {""}
              <span className="text-[orange] ">Francis</span> Uzoigwe
            </div>
            <div className="flex relative w-[98%]">
              <div className="flex flex-col items-center ">
                <div
                  className={`w-[25px] h-[25px] rounded-full ${
                    !mode ? "bg-white" : "bg-black"
                  }`}
                ></div>
                <div
                  className={`${
                    !mode ? "bg-white" : "bg-black"
                  } h-[280px] max-md:h-[300px] w-[3px]`}
                ></div>
              </div>
              <div className="text-white  w-[500px] max-md:w-auto absolute  left-10 max-md:top-4 top-4 max-md:text-left">
                <div
                  className={`font-[Buba]  ${
                    mode ? "text-black " : "text-white"
                  }`}
                >
                  Driving digital transformation with mastery in both front-end
                  and back-end development. Seamlessly bridging creativity and
                  functionality to deliver captivating user experiences. A
                  versatile full-stack{" "}
                  <span className="text-[orange] underline">(M.E.R.N)</span>{" "}
                  developer poised to elevate projects with comprehensive
                  expertise and refined craftsmanship.
                </div>
                <button className="hover:cursor-pointer px-5 py-[10px] my-5 transition duration-300 rounded-full bg-[orange] font-[Buba] hover:-translate-y-2">
                  Download CV
                </button>
                <div className="flex mt-2">
                  <a href="https://facebook.com/FrancisUzoigwe.28/">
                    <div
                      className={`w-[47px] h-[45px] rounded-xl ${
                        !mode ? "bg-white" : "bg-black"
                      } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                    >
                      <FaFacebookF
                        className={`${!mode ? "text-[blue]" : "text-white"}`}
                        size={30}
                      />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/francis-uzoigwe-2b3b9b246">
                    <div
                      className={`w-[47px] h-[45px] rounded-xl ${
                        !mode ? "bg-white" : "bg-black"
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
                        !mode ? "bg-white" : "bg-black"
                      } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                    >
                      <FaTwitter
                        className={`${!mode ? "text-[blue]" : "text-white"}`}
                        size={30}
                      />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/FrancisUzoigwe.28">
                    <div
                      className={`w-[47px] h-[45px] rounded-xl ${
                        !mode ? "bg-white" : "bg-black"
                      } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                    >
                      <FaInstagram
                        className={`${!mode ? "text-[#b33c3c]" : "text-white"}`}
                        size={30}
                      />
                    </div>
                  </a>
                  <a href="https://github.com/FrancisUzoigwe">
                    <div
                      className={`w-[47px] h-[45px] rounded-xl ${
                        !mode ? "bg-white" : "bg-black"
                      } mx-[6px] flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                    >
                      <FaGithub
                        className={`${!mode ? "text-[black]" : "text-white"}`}
                        size={30}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>Right</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

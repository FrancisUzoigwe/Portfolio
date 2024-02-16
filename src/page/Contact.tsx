import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useSelector } from "react-redux";
import Message from "./Message";

const Contact = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="contact"
      className={`h-[80vh] w-full flex justify-center ${!mode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <div className="w-full h-auto flex flex-col items-center mt-[65px]">
        <div className="text-4xl max-md:text-2xl font-[Buba]">Contact Me</div>
        <div className="w-[90%] h-auto ">
          <div className=" ml-2 font-[Buba] text-[20px]">Send me an email</div>
          <Message />
          <div className="text-white w-full   flex-col items-end flex">
            <div className="my-3">Reach me on</div>
            <div className="flex ">
              <a href="https://facebook.com/FrancisUzoigwe.28/">
                <div
                  className={`w-[37px] h-[37px] rounded-xl ${!mode
                    ? "bg-white hover:bg-[#777676] transition duration-300"
                    : "bg-black hover:bg-[#242424]"
                    } mx-1 flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                >
                  <FaFacebookF
                    className={`${!mode ? "text-[blue] " : "text-white"}`}
                    size={25}
                  />
                </div>
              </a>
              <a href="https://www.youtube.com/channel/UC6rvLb8SLFHsKb3EkeI2yTg">
                <div
                  className={`w-[37px] h-[37px] rounded-xl ${!mode
                    ? "bg-white hover:bg-[#777676]"
                    : "bg-black hover:bg-[#242424]"
                    } mx-1 flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                >
                  <FaYoutube
                    className={`${!mode ? "text-[red]" : "text-white"}`}
                    size={25}
                  />
                </div>
              </a>
              {/* <a href="https://www.tiktok.com/@francisuzoigwe28">
                <div
                  className={`w-[37px] h-[37px] rounded-xl ${
                    !mode
                      ? "bg-white hover:bg-[#777676]"
                      : "bg-black hover:bg-[#242424]"
                  } mx-1 flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                >
                  <FaTiktok
                    className={`${!mode ? "text-[black]" : "text-white"}`}
                    size={25}
                  />
                </div>
              </a> */}
              <a href="https://www.linkedin.com/in/francis-uzoigwe-2b3b9b246">
                <div
                  className={`w-[37px] h-[37px] rounded-xl ${!mode
                    ? "bg-white hover:bg-[#777676]"
                    : "bg-black hover:bg-[#242424]"
                    } mx-1 flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
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
                    } mx-1 flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
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
                    } mx-1 flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                >
                  <FaInstagram
                    className={`${!mode ? "text-[#b33c3c]" : "text-white"}`}
                    size={25}
                  />
                </div>
              </a>
              <a href="https://github.com/FrancisUzoigwe">
                <div
                  className={`w-[37px] h-[37px] rounded-xl ${!mode
                    ? "bg-white hover:bg-[#777676]"
                    : "bg-black hover:bg-[#242424] "
                    } mx-1 flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                >
                  <FaGithub
                    className={`${!mode ? "text-[black] " : "text-white"}`}
                    size={25}
                  />
                </div>
              </a>
              <a href="https://wa.link/r3i1hv">
                <div
                  className={`w-[37px] h-[37px] rounded-xl ${!mode
                    ? "bg-white hover:bg-[#777676]"
                    : "bg-black hover:bg-[#242424] "
                    } mx-1 flex items-center justify-center hover:cursor-pointer hover:-translate-y-2 transition duration-300`}
                >
                  <FaWhatsapp
                    className={`${!mode ? "text-[green] " : "text-white"}`}
                    size={25}
                  />
                </div>
              </a>
            </div>
            <div className={`w-full flex items-center justify-center h-[10px] my-4 ${!mode ? "bg-black text-white" : "bg-white text-black"}`}>
              <div className={`font-[Buba] text-[14px] mt-4 w-full flex justify-center items-center ${!mode ? "bg-black text-white" : "bg-white text-black"}`}>
                © <a href="https://github.com/Francisuzoigwe">FrancisUzoigwe 2024</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

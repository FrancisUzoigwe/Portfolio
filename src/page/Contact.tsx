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

const Contact = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="contact"
      className={`h-[80vh] w-full flex justify-center ${
        !mode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full h-auto flex flex-col items-center mt-[65px]">
        <div className="text-4xl max-md:text-2xl font-[Buba]">Contact</div>
        <div className="w-[90%] h-auto ">
          <div className=" ml-2 font-[Buba] text-[20px]">Send me an email</div>
          <div className="w-full  rounded-lg h-auto">
            <div className="w-full flex justify-between max-md:flex-col items-center">
              <div className="w-[47%]  max-md:w-full h-[50px] mt-5">
                <label
                  htmlFor="Username"
                  className="relative h-full block rounded-md border border-gray-200 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white"
                >
                  <input
                    type="text"
                    id="Username"
                    className="peer pl-3 h-full w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Username"
                  />

                  <span
                    className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 ${
                      !mode ? "bg-black text-white" : "bg-white text-black"
                    } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs`}
                  >
                    Name
                  </span>
                </label>
              </div>
              <div className="w-[47%]  max-md:w-full h-[50px] mt-5">
                <label
                  htmlFor="EmailAddress"
                  className="relative h-full block rounded-md border focus-within:border-white focus-within:ring-1 focus-within:ring-white  "
                >
                  <input
                    type="text"
                    id="EmailAddress"
                    className="peer pl-3 h-full w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Username"
                  />

                  <span
                    className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 ${
                      !mode ? "bg-black text-white" : "bg-white text-black"
                    } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs`}
                  >
                    EmailAddress
                  </span>
                </label>
              </div>
            </div>
            <div className="w-full  auto mt-5">
              <label
                // htmlFor="Username"
                className="relative h-full block rounded-md border border-gray-200 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white"
              >
                <textarea
                  id="Username"
                  className="peer pl-3 min-h-[50px] w-full mt-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Username"
                />

                <span
                  className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 ${
                    !mode ? "bg-black text-white" : "bg-white text-black"
                  } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs`}
                >
                  Write Message Here
                </span>
              </label>
            </div>
            <div className="w-full items-center flex justify-start mt-3">
              <button className="px-5 hover:scale-[1.1] transition duration-300 py-2 rounded-md bg-[orange] text-white">
                Submit
              </button>
            </div>
          </div>
          {/* <div className="w-full justify-center text-white flex">OR</div> */}
          <div className="text-white w-full mt-5 justify-end flex">
            <div className="flex mt-2">
              <a href="https://facebook.com/FrancisUzoigwe.28/">
                <div
                  className={`w-[37px] h-[37px] rounded-xl ${
                    !mode
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
                  className={`w-[37px] h-[37px] rounded-xl ${
                    !mode
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
                  className={`w-[37px] h-[37px] rounded-xl ${
                    !mode
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
                  className={`w-[37px] h-[37px] rounded-xl ${
                    !mode
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
                  className={`w-[37px] h-[37px] rounded-xl ${
                    !mode
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
                  className={`w-[37px] h-[37px] rounded-xl ${
                    !mode
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
                  className={`w-[37px] h-[37px] rounded-xl ${
                    !mode
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

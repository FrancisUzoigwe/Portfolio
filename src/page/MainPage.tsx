import { useSelector } from "react-redux";
const MainPage = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <>
      <div
        id="home"
        className={`relative -z-10 w-full min-h-[100vh]  flex  justify-center ${
          mode ? "text-black bg-white" : "text-white bg-black"
        } `}
      >
        <div className="w-[95%] text-white flex max-md:flex-col justify-between  h-[450px] mt-20 ">
          <div>
            <div className="text-5xl font-[Buba] max-sm:text-center w-[630px] max-md:w-auto">
              Hi, I'm {""}
              <span className="text-[orange] ">Francis</span> Uzoigwe
            </div>
            <div className="flex relative w-[98%]">
              <div className="flex flex-col items-center absolute">
                <div className="w-[25px] h-[25px] rounded-full bg-white"></div>
                <div className="bg-white h-[250px] w-[3px]"></div>
              </div>
              <div className="text-white  w-[500px] max-md:w-auto absolute left-10 max-md:top-8 top-4 max-md:text-center">
                <div className="font-[Buba]">
                  Driving digital transformation with mastery in both front-end
                  and back-end development. Seamlessly bridging creativity and
                  functionality to deliver captivating user experiences. A
                  versatile full-stack developer poised to elevate projects with
                  comprehensive expertise and refined craftsmanship.
                </div>
                  <button
                    className="bg-[orange] text-[15px] px-4 py-[10px] rounded-full z-[900] hover:cursor-pointer  hover:translate-x-2 my-5"
                    onClick={() => {
                      alert("Please");
                    }}
                  >
                    Download Resume
                  </button>
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

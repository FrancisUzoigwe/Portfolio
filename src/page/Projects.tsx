const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-[100vh] w-full flex items-center bg-black flex-col text-white  "
    >
      <div className="mt-[65px] font-[Buba] text-4xl max-md:text-2xl ">
        Projects
      </div>
      <div className="w-[95%] flex justify-between h-auto">
        <div className="w-full flex items-start">
          <div className="w-[90%] mr-5 mt-3 rounded-lg bg-white h-[100px]">Hello</div>
          <div className="w-full h-auto  flex ">
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-white mt-5"></div>
              <div className="w-[5px] min-h-[350px] bg-white"></div>
            </div>
            <div className="mt-[40px] ml-3">Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

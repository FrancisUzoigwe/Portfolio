import { useSelector } from "react-redux";

const Resume = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <div
      id="resume"
      className={`h-[100vh] w-full flex  justify-center ${
        !mode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center mt-[65px]">
        <div className="font-[Buba] text-4xl max-md:text-2xl">Resume</div>
        <div>Currently not available</div>
      </div>
    </div>
  );
};

export default Resume;

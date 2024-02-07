import { useSelector } from "react-redux";

const MainPage = () => {
  const mode = useSelector((state: any) => state.mode);
  return (
    <>
      <div
        id="home"
        className={`relative -z-10 w-full min-h-[100vh]  flex items-center justify-center ${mode? "text-black bg-white" : "text-white bg-black"} `}
      >
        MainPage
      </div>
    </>
  );
};

export default MainPage;

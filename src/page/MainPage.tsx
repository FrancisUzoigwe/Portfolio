import francis from "../assets/main.png";

const MainPage = () => {
  return (
    <>
      <div
        className="relative -z-10 w-full min-h-[100vh] bg-[black] flex items-center justify-center "
        style={{
          background: `url(${francis})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 14%",
          backgroundSize: "cover",
          backgroundColor: "black",
        }}
      ></div>
    </>
  );
};

export default MainPage;

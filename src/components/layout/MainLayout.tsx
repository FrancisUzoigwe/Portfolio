import Header from "../static/Header";
import Footer from "../static/Footer";
import GlobalFile from "../../global/GlobalFile";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <GlobalFile />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

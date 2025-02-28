import Products from "../../components/landing/Products";
import Navbar from "../../components/landing/Navbar";
import Tokenomics from "../../components/landing/Tocenomics";
import Roadmap from "../../components/landing/Roadmap";
import Line from "../../components/shared/Line";
import Footer from "../../components/landing/Footer";
import System from "../../components/landing/System";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[70px]">
        <Products />
        <Line />
        <Tokenomics />
        <Line />
        <Roadmap />
        <Line />
        <System />
        <Footer />
      </div>
    </>
  );
};

export default Home;

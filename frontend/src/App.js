import HeroBanner from "./components/HeroBanner";
import CardBanner from "./components/CardBanner";
import CategoryBanner from "./components/CategoryBanner";
import Footer from "./components/Footer";
// import Cards from "./components/Cards";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-3xl">
        <Navbar />
        <CategoryBanner />
          {/* <Home /> */}
        <HeroBanner /> 
        {/* <Cards /> */}
        <CardBanner />
        <CardBanner />
        <CardBanner />
        <CardBanner />
        <Footer />
    </div>
  );
}

export default App;

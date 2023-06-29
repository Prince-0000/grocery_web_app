import Banner from "./components/Banner";
import CardBanner from "./components/CardBanner";
import Cards from "./components/Cards";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-3xl">
        <Navbar />
          {/* <Home /> */}
        <Banner /> 
        {/* <Cards /> */}
        <CardBanner />
        <CardBanner />
        <CardBanner />
        <CardBanner />
    </div>
  );
}

export default App;

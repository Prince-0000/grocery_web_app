// import HeroBanner from "./components/HeroBanner";
// import CardBanner from "./components/CardBanner";
// import CategoryBanner from "./components/CategoryBanner";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import RouteLayout from "./components/RouteLayout";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from './components/Cart';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouteLayout/>}>
      <Route index element={<Home />}/>
      <Route path='/product' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  ))
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;

import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import RouteLayout from "./components/RouteLayout";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from './components/Cart';
import Success from './components/Success';
import Cancel from './components/Cancel';
import CategoryPage from './components/CategoryPage';
import Search from './components/Search';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouteLayout/>}>
      <Route index element={<Home />}/>
      <Route path='/product/:productId' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path = '/success' element={<Success />} />
      <Route path = '/cancel' element={<Cancel />} />
      <Route path='/category/:productType' element={<CategoryPage />}/>
      <Route path='/search' element={<Search />} />
    </Route>
  ))
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;

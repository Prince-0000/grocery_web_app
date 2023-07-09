import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { urlFor } from "../lib/client";
const Cart = () => {
  const products = useSelector((state) => state.cart);

  // if(products.length===0) return <h1>Loading...</h1>;
  return (
    <div className="my-3">
      <div className="font-medium text-base mx-2 my-1 border-1 border-black">
        <h1 className="px-5 py-3 border-[0.5px] border-slate-300">Your Cart</h1>
      </div>
      <div className="relative">
      <div id="slider" className="p-2 grid grid-cols-1 divide-y gap-2 overflow-y-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar">
        {products.map((product) => (
          <CartCard
            image={urlFor(product.image).url()}
            name={product.name}
            price={product.price}
            id={product._id}
            quantity={product.quantity}
          />
        ))}
      </div>
      <div className="absolute top-0 right-[3rem] bg-white w-[30%] h-[15rem]">
          <div className="m-4 text-xl font-medium">
            <p>Total Quantity</p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;

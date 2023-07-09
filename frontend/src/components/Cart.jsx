import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import Speaker from "../assests/speaker1.webp";
import { RiDeleteBin6Line } from "react-icons/ri";
import { remove, incQty, decQty } from "../store/cartSlice";
import { urlFor } from "../lib/client";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };
  const increment = (id) => {
    dispatch(incQty(id))
  }
  const decrement = (id) => {
    dispatch(decQty(id))
  }

  return (
    <div className="my-3">
      <div className="font-medium text-base mx-2 my-1 border-1 border-black">
        <h1 className="px-5 py-3 border-[0.5px] border-slate-300">Your Cart</h1>
      </div>
      <div className="p-2 grid grid-cols-1 divide-y gap-2">
        {products.map((product) => (
          <div className="p-5 w-[60%] bg-white h-[180px] relative">
            <div className="relative">
              <div className="w-[100px] h-[100px]">
                <img src={urlFor(product.image).url()} alt="speaker" />
              </div>
              <div className="py-4 px-[10px]">
                <button onClick={() => decrement(product._id)} className="px-2 border border-slate-300">-</button>
                <button className="px-2 border border-slate-300">{product.quantity}</button>
                <button onClick={() => increment(product._id)} className="px-2 border border-slate-300">+</button>
              </div>
              <p className="text-base font-medium absolute top-0 left-[9rem]">
                {product.name}
              </p>
              <p className="text-base absolute bottom-[5rem] left-[9rem]">
                Rs.{product.price}
              </p>
              <div className="absolute top-0 right-5">
                <button onClick={() => removeFromCart(product._id)}>
                  <RiDeleteBin6Line size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

{
  /* <div className="bg-gray-100 fixed z-50 right-0 top-0 w-[30%] h-full text-black border-r-gray-900 ease-in-out duration-500">
        <div className="text-black m-5 text-base font-medium">
          <h3>Your Cart</h3>
          <CartCard />
        </div>
      </div> */
}

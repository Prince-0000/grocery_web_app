
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <div className='my-3'>
      <div className="font-medium text-base mx-2 my-1 border-1 border-black">
        <h1 className="px-5 py-3 border-[0.5px] border-slate-300">Your Cart</h1>
      </div>
      <div className="p-2 grid grid-cols-1 divide-y gap-2">
        <CartCard />
        <CartCard />
        <CartCard />
        
      </div>
    </div>
  );
};

export default Cart;



{/* <div className="bg-gray-100 fixed z-50 right-0 top-0 w-[30%] h-full text-black border-r-gray-900 ease-in-out duration-500">
        <div className="text-black m-5 text-base font-medium">
          <h3>Your Cart</h3>
          <CartCard />
        </div>
      </div> */}
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";
import { FaSpinner } from "react-icons/fa";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('https://dukaan-prince-0000.vercel.app/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
    });
    if(response.statusCode === 500) return;
    const data = await response.json();
    if (products.length === 0) return <div className="flex items-center justify-center h-screen">
    <FaSpinner className="animate-spin text-4xl text-gray-500" />
  </div>
  
    // if(data.length===0) return <div>Redirecting...</div>
    stripe.redirectToCheckout({sessionId : data.id});
}

  const getTotalQuanity = () => {
    // console.log("Get total quantity",products);
    let total = 0;

    products.forEach((item) =>{
        total += item.quantity;
    })
    return total;
  }
  const getTotalPrice = () => {
    let total = 0;

    products.forEach((item) => {
      total += item.quantity*item.price;
    })
    return total;
  }

  // async function handleCheckout() {
  //   const stripe = await getStripe();
  //   const { error } = await stripe.redirectToCheckout({
  //     lineItems: [
  //       {
  //         // image: {products[0].image},
  //         price: 10000,
  //         quantity: 2,
  //       },
  //     ],
  //     mode: 'subscription',
  //     successUrl: `http://localhost:3000/success`,
  //     cancelUrl: `http://localhost:3000/cancel`,
  //     customerEmail: 'princemehta516@gmail.com',
  //   });
  //   console.warn(error.message);
  // }
  // if(products.length===0) return <h1>Loading...</h1>;
  return (
    <div className="my-3">
      <div className="font-medium text-base mx-2 my-1 border-1 border-black">
        <h1 className="px-5 py-3 border-[0.5px] border-slate-300">Your Cart</h1>
      </div>
      <div className="relative">
      <div id="slider" className="p-2 grid grid-cols-1 divide-y gap-2 overflow-y-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar">
        {products.map((product) => (
          <div key={product._id}>
          <CartCard
            image={urlFor(product.image).url()}
            name={product.name}
            price={product.price}
            id={product._id}
            quantity={product.quantity}
          />
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-[3rem] bg-white w-[30%] h-[12rem]">
          <div className="m-4 text-base font-normal">
            <p>Total Quantity:<span className="px-2 font-medium">{getTotalQuanity()}</span></p>
            <p className="my-4">Total Price:<span className="px-2 font-medium">Rs.{getTotalPrice()}</span></p>
          </div>
          <div className="mt-10 mx-[4.5rem] w-[15rem] ">
          <button onClick={handleCheckout} className="rounded-lg bg-green-500 text-white text-[17px] leading-8 w-[15rem] h-9">
            Proceed to Checkout
          </button>
          </div>
          
      </div>
      </div>
    </div>
  );
};

export default Cart;

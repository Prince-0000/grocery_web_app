import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [search,setSearch] = useState("");
  console.log(search);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log("user",user);
  const {data} = useSelector((state)=>state.products)
  const products = useSelector((state) => state.cart);
  const getTotalQuanity = () => {
    let total = 0;

    products.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  const handleSearch =  (event) => {
    if (event.key === "Enter") {
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.type.toLowerCase().includes(search.toLowerCase())
      );
      console.log("Filter Products",filteredProducts)
      navigate('/search', { state: { products: filteredProducts } });
    }
  };


  return (
    <div className="text-white flex justify-between items-center w-full bg-green-600 md:h-[80px] sm:h-[70px] h-[60px]  mx-auto md:px-[50px] sm:px-[40px] px-[20px] p-4">
      <a href="/" alt="home" className="md:text-3xl sm:text-2xl text-xl font-bold">
        Dukaan
      </a>
      <input
        type="text"
        placeholder="Search items"
        className="h-[35px] pl-4 placeholder:pl-placeholder:text-base md:placeholder:text-lg text:border rounded-md text:border-solid block w-5/12 text-base text-slate-500"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        onKeyDown={handleSearch}
      ></input>
      <ul className="hidden md:flex text-base font-normal">
        <Link to="/" className="p-4 px-5">
          Home
        </Link>
        <Link to="/cart">
          <div className="relative">
            <button className="p-4 py-5">
              <FiShoppingCart size={20} />
            </button>
            <BsFillCircleFill className="absolute top-3 right-2 text-red-500 border-xl" />
            <p className="absolute top-3 right-3 text-xs">
              {getTotalQuanity()}
            </p>
          </div>
        </Link>
        {isAuthenticated === true ? (
          <>
            <button
              className="mx-5 text-black my-[10px] mx-[3px] bg-white w-[90px] h-[35px] font-medium"
              onClick={() => logout()}
            >
              Logout
            </button>
            <div className="flex mx-auto my-[10px] ml-3">
            <img src={user.picture} alt="Profile" className="w-9 h-9 rounded-full" />

              <p className="ml-3 my-1  font-medium">{(user.name).split(" ")[0]}</p>
            </div>
          </>
        ) : (
          <>
            <button
              className="mx-5 text-black my-[10px] mx-[3px] bg-white w-[90px] h-[35px] font-medium"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
            <div className="flex mx-auto my-[10px] ml-3">
              <FaUserCircle size={35} />
            </div>
          </>
        )}
      </ul>
      <div onClick={handleNav} className="cursor-pointer md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "bg-green-600 fixed z-50 left-0 top-0 w-[60%] h-full border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full md:text-3xl text-2xl font-bold text-white m-4">
          Dukaan
        </h1>
        <ul className="flex flex-col text-base font-normal text-white">
          <Link onClick={handleNav} to='/' className="border-b border-gray-200 p-4 px-5 cursor-pointer">Home</Link>

          {/* <button
            className="mx-4 text-black my-[18px] bg-white w-[80px] h-[35px] font-medium"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button> */}
          <Link to="/cart">
          <div className="relative">
            <button className="m-5 my-5">
              <FiShoppingCart size={20} />
            </button>
            <BsFillCircleFill className="absolute top-3 left-8 text-red-500 border-xl" />
            <p className="absolute top-3 left-9 text-xs">
              {getTotalQuanity()}
            </p>
          </div>
        </Link>
          {isAuthenticated === true ? (
          <div className="relative">
            <button
              className="m-4 text-black bg-white w-[90px] h-[35px] font-medium"
              onClick={() => logout()}
            >
              Logout
            </button>
            <div className="flex mx-auto my-[10px] ml-3">
            <img src={user.picture} alt="Profile" className="mx-auto my-[10px] ml-3 absolute top-1 right-16" />
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              className="m-4 text-black bg-white w-[90px] h-[35px] font-medium"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
            <div className="mx-auto my-[10px] ml-3 absolute top-1 right-16">
              <FaUserCircle size={35} />
            </div>
          </div>
        )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

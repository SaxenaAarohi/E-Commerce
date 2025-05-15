import React, { useContext, useMemo } from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { MdLogin } from "react-icons/md";
import Login from './Login';
import { useSelector } from 'react-redux';
import Cart from '../Cart';
import { productSuggestions } from '../data/suggestion';
import { Appcontext } from '../App';

const Navbar = () => {

  const cart = useSelector(store => store.cart);
  const { user } = useContext(Appcontext);
  const navigate = useNavigate();

  const [inp, setInp] = useState("");

const totalquantity = useMemo(() => {
  return cart.items.reduce((val, item) => val + item.quantity, 0);
}, [cart.items]);


  function handlesearch() {
    if (inp) {
      navigate(`/search?query=${encodeURIComponent(inp)}`);
      setInp("");
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlesearch();
    }
  };

  const filterdata = useMemo(() => {
    if (inp == "") return [];
    const suggestion = productSuggestions?.filter((item) => item?.toLowerCase().includes(inp.toLowerCase()));
    return suggestion;
  })


  return (
    <nav className="bg-[#131921] text-white px-2 flex justify-between items-center h-12">

      <div className="flex items-center ml-0 md:ml-1 space-x-2 cursor-pointer">
        <span className="text-yellow-400 font-bold text-xl">Amazon</span>
      </div>

    <div className="flex relative w-full md:w-[30%] ml-4 md:ml-0 items-center">
  <input
    type="text"
    value={inp}
    onKeyDown={handleKeyDown}
    onChange={(e) => setInp(e.target.value)}
    placeholder="Search Amazon"
    className="w-full px-4 py-2 text-black text-sm rounded-l-md"
  />
  <button
    onClick={handlesearch}
    className="text-xl bg-yellow-400 px-2 py-2 rounded-r-md hover:bg-yellow-500 text-black font-semibold"
  >
    <FaSearch />
  </button>

  {filterdata?.length > 0 && (
    <div className="absolute top-full left-0 w-full md:w-[90%] z-30 h-auto space-y-2 py-2 mt-1 bg-white shadow-md rounded-md max-h-48 overflow-y-auto">
      {filterdata.slice(0, window.innerWidth < 768 ? 3 : filterdata.length).map((text, i) => (
        <div
          onClick={handlesearch}
          key={i}
          className="flex items-center gap-2 px-4 cursor-pointer hover:bg-gray-100"
        >
          <FaSearch className="text-sm text-black" />
          <p className="text-sm text-black">{text}</p>
        </div>
      ))}
    </div>
  )}
</div>




      <div className="flex items-center space-x-4 mr-1 text-base font-medium">

        <div className="hidden md:block cursor-pointer leading-tight">
          <p className="text-xs">Hello, {user}</p>
          <p className="font-semibold text-sm">Account & Lists</p>
        </div>

        <div className="hidden md:block cursor-pointer leading-tight">
          <p className="text-xs">Returns</p>
          <p className="font-semibold text-xs">& Orders</p>
        </div>

        <div className="relative flex items-center cursor-pointer">
          <FaShoppingCart onClick={() => navigate('/cart')} className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full">
            {totalquantity}
          </span>

        </div>
        <div>
          <MdLogin className="w-7 h-7" onClick={() => navigate('/login')} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar

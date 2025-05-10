import React, { useContext, useMemo } from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { MdLogin } from "react-icons/md";
import Login from './Login';
import Cart from '../Cart';
import { productSuggestions } from '../data/suggestion';
import { Appcontext } from '../App';

const Navbar = () => {

 const {user} = useContext(Appcontext);
  const navigate = useNavigate();

  const [inp, setInp] = useState("");


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
    <nav className="bg-[#131921] text-white px-6 py-5 flex items-center justify-around h-36">

      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="text-yellow-400 font-bold text-6xl">Amazon</span>
      </div>

    <div className="flex relative flex-grow max-w-3xl items-center mx-4">
  <input
    type="text"
    value={inp}
     onKeyDown={handleKeyDown}
    onChange={(e) => setInp(e.target.value)}
    placeholder="Search Amazon"
    className="w-full px-4 py-7 text-black text-3xl rounded-l-md"
  />
  <button
    onClick={handlesearch}
    className="text-5xl bg-yellow-400 px-5 py-6 rounded-r-md hover:bg-yellow-500 text-black font-semibold"
  >
    <FaSearch />
  </button>

  {filterdata?.length > 0 && (
    <div className="absolute top-full w-full z-30 h-auto space-y-3 py-3 mt-2 bg-white shadow-md rounded-md">
      {filterdata.map((text, i) => (
        <div onClick={handlesearch} key={i} className="flex items-center gap-2 px-4">
          <button  className="text-xl text-black ">
            <FaSearch />
          </button>
          <p className="text-3xl text-black">{text}</p>
        </div>
      ))}
    </div>
  )}
</div>



      <div className="flex items-center space-x-8 text-base font-medium">

        <div className="hidden md:block cursor-pointer leading-tight">
          <p className="text-4xl">Hello, {user}</p>
          <p className="font-semibold text-3xl">Account & Lists</p>
        </div>

        <div className="hidden md:block cursor-pointer leading-tight">
          <p className="text-4xl">Returns</p>
          <p className="font-semibold text-4xl">& Orders</p>
        </div>

        <div className="relative flex items-center cursor-pointer">
          <FaShoppingCart onClick={() => navigate('/cart')} className="w-12 h-12" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1 rounded-full">
            4
          </span>

        </div>
        <div>
          <MdLogin className="w-16 h-16" onClick={() => navigate('/login')} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar

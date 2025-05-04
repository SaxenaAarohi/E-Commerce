import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const [isopen, setOopen] = useState(false);

  return (
    <div className='flex justify-between md:justify-around text-4xl'>
      <div>
        <img src='https://c8.alamy.com/comp/2R4N8TT/online-mart-shopping-logo-design-grocery-store-shopping-logo-2R4N8TT.jpg' className='w-[80px] md:w-[150px] h-auto md:h-[150px]' />
      </div>

      <div
        onClick={() => setOopen(!isopen)}
        className={`md:hidden text-4xl  mt-4`}
      >
        ☰
      </div>
      
      <div className={`flex ml-[135px] md:ml-0 flex-col md:flex-row md:space-x-10  absolute md:static top-12  w-[27%] md:w-auto bg-gray-600 md:text-black text-white md:bg-transparent p-4 md:p-0 z-10 transition-all ease-in-out duration-300 ${
          isopen ? 'block' : 'hidden'
        } md:flex text-xl gap-3 md:gap-0 md:text-4xl md:mt-7`}>
        <p onClick={()=>{setOopen(!isopen);navigate('/')}}>Home</p>
        <p onClick={()=>{setOopen(!isopen);navigate('/collection')}}>Collection</p>
        <p>About us </p>
        <p>Contact</p>
      </div>

      <div className=' flex  text-3xl md:text-5xl gap-12 md:gap-24 md:mr-0 mr-4 py-2 md;py-12'>
        <button ><FaSearch /></button>
        <button><FaShoppingCart /></button>
        <button><FaUser /></button>
      </div>
    </div>
  )
}

export default Navbar

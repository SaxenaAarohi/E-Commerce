import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='flex justify-around text-4xl'>
      <div>
       <img  src='https://c8.alamy.com/comp/2R4N8TT/online-mart-shopping-logo-design-grocery-store-shopping-logo-2R4N8TT.jpg' className=' h-[150px] w-[200px]'/>
      </div>
      <div className='flex gap-5 py-12'>
        <p onClick={()=>navigate('/')}>Home</p>
        <p onClick={()=>navigate('/collection')}>Collection</p>
        <p>About us </p>
        <p>Contact</p>
       
      </div>
      <div className='flex gap-24  py-12'>
    <button ><FaSearch /></button>
    <button><FaShoppingCart/></button>
    <button><FaUser/></button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addtocart } from '../slice/Cartslice';

const Display = ({ item, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function handlecart() {
    dispatch(addtocart(item));
    alert("added");
    // if (!item || !item.id) return;
    // const cartItems={
    //   ...item,
    //    quantity : 1,
    // }
    //  let previtem=localStorage.getItem("cart");
    //  if(previtem){
    //   previtem=JSON.parse(previtem);

    //   const existingIndex = previtem.findIndex(i => i.id === cartItems.id);

    //   if (existingIndex !== -1) {
    //     previtem[existingIndex].quantity += 1;
    //   } else {
    //     previtem.push(cartItems);
    //   }
    //   localStorage.setItem("cart",JSON.stringify(previtem));
    //  }
    //  else{
    //   localStorage.setItem("cart",JSON.stringify([cartItems]));
    //  }
    //  navigate('/cart');

  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[450px] hover:shadow-xl transition flex flex-col justify-between h-[900px]">
      <div>
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-76 object-contain mb-3"
        />

        <h2 className="font-semibold text-4xl mb-1 line-clamp-2">{item.title}</h2>
        <p className="text-3xl text-gray-600 line-clamp-3 mb-2">{item.description}</p>

        <div className="text-yellow-500 flex items-center text-lg mb-1">
          {Array.from({ length: Math.round(item.rating || 0) }).map((_, index) => (
            <FaStar key={index} />
          ))}
          <span className="ml-2 text-gray-700">({item.rating || 0})</span>
        </div>

        <p className="font-bold text-3xl mb-2">${item.price}</p>
      </div>

      <div className="flex flex-col items-center mt-10 gap-4">
        <button onClick={handlecart} className="bg-yellow-400 w-[80%] hover:bg-yellow-500 text-black py-2 rounded-xl text-2xl">
          Add to Cart
        </button>
        <button className="bg-orange-500 w-[80%] hover:bg-orange-600 text-white py-2 rounded-xl text-2xl">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Display;

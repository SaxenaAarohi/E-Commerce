import React from 'react';
import { useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { addtocart } from '../slice/Cartslice';

const Display = ({ item }) => {
  const dispatch = useDispatch();

  const handlecart = () => {
    dispatch(addtocart(item));
    alert("Added to cart");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-3 w-[180px] sm:w-[200px] flex flex-col justify-between hover:shadow-lg transition h-[320px]">
      <div>
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-24 object-contain mb-2"
        />
        <h2 className="text-sm font-semibold line-clamp-1">{item.title}</h2>
        <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>

        <div className="flex items-center text-yellow-500 text-xs mt-1">
          {Array.from({ length: Math.round(item.rating || 0) }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-600">({item.rating || 0})</span>
        </div>

        <p className="text-base font-bold mt-1">${item.price}</p>
      </div>

      <div className="flex flex-col items-center gap-1 mt-2">
        <button
          onClick={handlecart}
          className="bg-yellow-400 hover:bg-yellow-500 w-full py-1 rounded-lg text-xs font-medium"
        >
          Add to Cart
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 w-full py-1 rounded-lg text-xs font-medium text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Display;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Display = ({ item, id }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/details/${id}`)} className="cursor:none group mt-2 md:mt-12 relative flex md:flex-col items-center space-y-4  p-3 md:p-4 w-[400px] md:w-[600px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-blue-100 rounded-xl shadow-md hover:shadow-lg">

      <div className="md:h-[400px] h-[100px] w-[100px] md:w-full overflow-hidden rounded-lg">
        <img
          src={item.images[0]}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <p className="text-2xl font-semibold text-gray-800 truncate w-full text-center">{item.title}</p>

      <p className="text-xl font-bold text-red-400">{item.price}$</p>

    </div>
  );
};

export default Display;

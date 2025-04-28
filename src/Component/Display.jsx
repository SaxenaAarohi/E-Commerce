import React from 'react';

const Display = ({ item }) => {
  return (
    <div className="cursor:none group mt-12 relative flex flex-col items-center space-y-4 p-4 w-[600px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-blue-100 rounded-xl shadow-md hover:shadow-lg">
      
      <div className="h-[400px] w-full overflow-hidden rounded-lg">
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

import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import Display from './Display';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // menu toggle
  const query = searchParams?.get("query");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await res.json();
        setResult(data.products);
        setFilteredResults(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [query]);

  const handleRatingFilter = (rating) => {
    setFilteredResults(result.filter(product => product.rating >= rating));
  };

  const filterByPrice = (min, max) => {
    setFilteredResults(result.filter(item => item.price >= min && item.price <= max));
  };

  // Prevent background scroll when menu is open on mobile
  React.useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [menuOpen]);

  return (
    <div className='h-auto w-full flex mt-5 relative'>

  
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed   bg-yellow-400 p-2 rounded"
        aria-label="Open filter menu"
      >
        ☰
      </button>


      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

   {/* Filter sidebar */}
<div
  className={`
    bg-white rounded-lg pt-7 pb-6 pl-5 h-full shadow-md flex flex-col
    md:w-[18%] w-[70vw] max-w-[260px]
    fixed top-0 bottom-0 left-0 z-50
    transform transition-transform duration-300 ease-in-out
    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0 md:relative md:block md:max-w-none md:left-auto
    ml-0 md:ml-10
  `}
>

        <div className="mb-4 ">
          <h2 className="font-semibold text-sm pb-3 ">Category</h2>
          <ul className="space-y-2  text-xs">
            <li><a href="#" className="text-blue-600  hover:underline">All</a></li>
            <li><a href="#" className="hover:underline">Electronics</a></li>
            <li><a href="#" className="hover:underline">Computers</a></li>
            <li><a href="#" className="hover:underline">Kitchen</a></li>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Wearables</a></li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="pb-3  font-semibold text-sm">Price</h2>
          <div className="flex gap-1 text-xs items-center">
            <input
              type="number"
              onChange={(e) => setMinPrice(Number(e.target.value))}
              placeholder="$ Min"
              className="border rounded px-2 py-3 w-1/2"
            />
            <input
              type="number"
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              placeholder="$ Max"
              className="border rounded px-2 py-3 w-1/2"
            />
          </div>
          <button
            onClick={() => filterByPrice(minPrice, maxPrice)}
            className="mt-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded text-black text-xs"
          >
            Go
          </button>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold text-sm mb-2 pb-3">Customer Reviews</h2>
          <ul className="space-y-2 text-xs text-gray-700">
            <li><button onClick={() => handleRatingFilter(4)} className="hover:underline">⭐⭐⭐⭐ & Up</button></li>
            <li><button onClick={() => handleRatingFilter(3)} className="hover:underline">⭐⭐⭐ & Up</button></li>
            <li><button onClick={() => handleRatingFilter(2)} className="hover:underline">⭐⭐ & Up</button></li>
            <li><button onClick={() => handleRatingFilter(1)} className="hover:underline">⭐ & Up</button></li>
          </ul>
        </div>

        <div>
          <h2 className="pb-3 font-semibold text-sm mb-2">Shipping</h2>
          <ul className="space-y-2 text-xs text-gray-700">
            <li><a href="#" className="hover:underline">Prime eligible</a></li>
            <li><a href="#" className="hover:underline">Free shipping</a></li>
          </ul>
        </div>
      </div>

      {/* Main product area */}
      <div className="w-[90%] mt-6 ml-5 md:ml-0 md:w-[82%]">
        {filteredResults && filteredResults.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3">
            {filteredResults.map((item, index) => (
              <Display item={item} id={item.id} key={index} />
            ))}
          </div>
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Search;

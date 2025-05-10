import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import Display from './Display';
import { useParams, useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState([]);
  const query = searchParams?.get("query");
 const [filteredResults, setFilteredResults] = useState([]);
const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await res.json();
        setResult(data.products)
        setFilteredResults(data.products)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

const handleRatingFilter = (rating) => {
 
  const filtered = result.filter(product => product.rating >= rating);
  setFilteredResults(filtered);
};

const filterByPrice = (min, max) => {
  const filtered = result.filter(item => {
    return item.price >= min && item.price <= max;
  });
  setFilteredResults(filtered);
};
  return (

    <div className='h-screen w-full flex  mt-10' >

      <div className='bg-white rounded-lg pl-20 pt-10 shadow-md flex flex-col ml-20 relative w-[5px] md:w-[20%] '>

  {/* Category */}
  <div className="mb-6 ">
    <h2 className="font-semibold text-5xl pb-7 mb-2">Category</h2>
    <ul className="space-y-4  text-3xl">
      <li><a href="#" className="text-blue-600  hover:underline">All</a></li>
      <li><a href="#" className="hover:underline">Electronics</a></li>
      <li><a href="#" className="hover:underline">Computers</a></li>
      <li><a href="#" className="hover:underline">Kitchen</a></li>
      <li><a href="#" className="hover:underline">Home</a></li>
      <li><a href="#" className="hover:underline">Wearables</a></li>
    </ul>
  </div>

  {/* Price */}
  <div className="mb-6">
    <h2 className="pb-7 font-semibold text-5xl mb-2">Price</h2>
    <div className="flex gap-2 text-3xl items-center">
      <input type="number" onChange={(e) => setMinPrice(Number(e.target.value))}  placeholder="$ Min" className="border rounded px-2 py-3 w-1/2" />
      <input type="number" onChange={(e) => setMaxPrice(Number(e.target.value))} placeholder="$ Max" className="border rounded px-2 py-3 w-1/2" />
    </div>
    <button  onClick={() => filterByPrice(minPrice, maxPrice)} className="mt-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded text-black text-2xl">Go</button>
  </div>

  {/* Customer Reviews */}
  <div className="mb-6">
    <h2 className="font-semibold text-5xl mb-2 pb-7">Customer Reviews</h2>
<ul className="space-y-4 text-3xl text-gray-700">
  <li><button onClick={() => handleRatingFilter(4)} className="hover:underline">⭐⭐⭐⭐ & Up</button></li>
  <li><button onClick={() => handleRatingFilter(3)} className="hover:underline">⭐⭐⭐ & Up</button></li>
  <li><button onClick={() => handleRatingFilter(2)} className="hover:underline">⭐⭐ & Up</button></li>
  <li><button onClick={() => handleRatingFilter(1)} className="hover:underline">⭐ & Up</button></li>
</ul>

  </div>

  {/* Shipping */}
  <div>
    <h2 className="pb-7 font-semibold text-5xl mb-2">Shipping</h2>
    <ul className="space-y-4 text-3xl text-gray-700">
      <li><a href="#" className="hover:underline">Prime eligible</a></li>
      <li><a href="#" className="hover:underline">Free shipping</a></li>
    </ul>

</div>

      </div>
      <div className=" w-[80%] mt-6">
        {filteredResults && filteredResults.length > 0 ? (
          <div className=" flex flex-wrap justify-center gap-6">
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
}

export default Search

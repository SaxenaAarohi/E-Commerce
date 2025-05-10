import React, { useEffect, useMemo, useState } from 'react'
import Display from './Display';
import Footer from './Footer';
import Shimmer from './Shimmer';
import Carousel from './Carousel';

const HOme = () => {
  const [response, setRes] = useState("");

  useEffect(() => {
    async function getdata() {
      try {
        const data = await fetch('https://dummyjson.com/products?limit=100');
        const res = await data.json();
        setRes(res);
      }
      catch (err) {
        alert(err);
      }
    }
    getdata();
  }, []);

  const shuffle = useMemo(() => {
    if (!response || !Array.isArray(response.products)) {
      return [];
    }
    const copied = [...response.products];
    const shuffledClothes = copied.sort(() => 0.8 - Math.random());
    return shuffledClothes?.slice(14, 24);
  }, [response])

  const bestshuffle = useMemo(() => {
    if (!response || !Array.isArray(response.products)) {
      return [];
    }
    const copied = [...response.products];
    const best = copied.sort((a, b) => b.price - a.price).slice(3, 8);
    return best;
  }, [response])

  return (
    
    <div className='flex  flex-col h-full items-center '>
      <div className='bg-gray-300 md:h-[600px] h-[200px] w-full' ><Carousel/></div>

      <p className='text-3xl md:text-7xl  font-bold mt-16 text-left'>Latest Collection </p>
      <div className='flex mt-10 flex-wrap gap-x-6 w-[80%] gap-y-10 justify-center'>
        {shuffle && shuffle.length > 0 ? (
          shuffle?.map((item, index) => (
            <Display item={item} id={item.id} key={index} />
          ))
        ) : (<Shimmer />)
        }
      </div>

      <p className='text-3xl md:text-7xl font-bold mt-16 '>Best Seller</p>
      <div className='flex md:flex-row gap-x-6 w-[80%] gap-y-10 flex-col mt-10 justify-center'>
        {bestshuffle && bestshuffle.length > 0 ? (
          bestshuffle?.map((item, index) => (
            <Display item={item} id={item.id} key={index} />
          ))) : (
          <Shimmer />
        )
        }
      </div>
      
      <Footer />
    </div>
  )
}

export default HOme

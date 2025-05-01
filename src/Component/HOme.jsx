import React, { useEffect, useMemo, useState } from 'react'
import Display from './Display';
import Footer from './Footer';

const HOme = () => {
  const [latestcollection, setLatest] = useState(null);
  const [bestseller, setBest] = useState(null);
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

  useEffect(() => {
    if (shuffle.length)
      setLatest(shuffle);
  }, [shuffle])

  const bestshuffle = useMemo(() => {
    if (!response || !Array.isArray(response.products)) {
      return [];
    }
    const copied = [...response.products];
    const best = copied.sort((a, b) => b.price - a.price).slice(3, 8);
    return best;
  }, [response])

  useEffect(() => {
    if (bestshuffle.length)
      setBest(bestshuffle);
  }, [bestshuffle]);

  return (
    <div className='flex mt-5 flex-col h-full items-center '>
      <div className='bg-gray-300 h-[700px] w-[85%]'>

      </div>
      <p className='text-7xl font-bold mt-16 text-left'>Latest Collection </p>
      <div className='flex flex-wrap mt-5 justify-center'>
        {latestcollection?.map((item, index) => (
          <Display item={item} id={item.id} key={index} />
        ))}
      </div>
      <p className='text-7xl font-bold mt-16 '>Best Seller</p>
      <div className='flex mt-5 justify-center'>
        {bestseller && bestseller.length > 0 ? (
          bestseller?.map((item, index) => (
            <Display item={item} id={item.id} key={index} />
          ))) : (

          <p>Loading</p>
        )
        }
      </div>
      <Footer />
    </div>
  )
}

export default HOme

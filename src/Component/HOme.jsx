import React, { useEffect, useState } from 'react'
import Display from './Display';
import Footer from './Footer';
const HOme = () => {
  const [latestcollection, setLatest] = useState(null);
  const [bestseller, setBest] = useState(null);
  useEffect(() => {
    async function getdata() {
      try {
        const data = await fetch('https://dummyjson.com/products?limit=100');
        const res = await data.json();
        console.log(res);
        const clothes = res.products.filter((product) =>
          product.category.includes('mens-shirts') || product.category.includes('beauty')||product.category.includes('furniture')
        );
      
        const shuffledClothes = clothes.sort(() => 0.8 - Math.random());
        setLatest(shuffledClothes?.slice(0,10 ));
        const best = res?.products.sort((a, b) => b.price - a.price).slice(3, 8);
        setBest(best);
      }
      catch (err) {
        alert(err);
      }
    }
    getdata();
  }, []);
  return (
    <div className='flex mt-5 flex-col h-full items-center '>
      <div className='bg-gray-300 h-[700px] w-[85%]'>

      </div>
      <p className='text-7xl font-bold mt-16 text-left'>Latest Collection </p>
      <div className='flex flex-wrap mt-5 justify-center'>
        {latestcollection?.map((item,index) => (
        <Display item={item} key={index}/>
        ))}
      </div>
      <p className='text-7xl font-bold mt-16 '>Best Seller</p>
      <div className='flex mt-5 justify-center'>
      {bestseller && bestseller.length > 0 ? (
        bestseller?.map((item,index) => (
          <Display item={item} key={index}/>
        ))):(
          
          <p>Loading</p>
        )
      }
      </div>
      <Footer/>
    </div>
  )
}

export default HOme

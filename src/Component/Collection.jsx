import React, { useEffect, useMemo, useState } from 'react'
import Display from './Display';
import HOme from './HOme';
import Shimmer from './Shimmer';

const Collection = () => {
  const [active, setActive] = useState("");
  const [isloading, setload] = useState(false);
  const [typeofdata, setType] = useState("Collectionn");
  const [isclick, setClick] = useState(false);
  const [collection, setCol] = useState(null);
  const [filteredarray, setFilter] = useState([]);
  const [response, setRes] = useState("");

  const arr = [
    "Beauty", "Fragrances", "Furniture", "Groceries", "Home-Decoration",
    "Kitchen-Accessories", "Laptops", "Mens-Shirts", "Mens-Shoes", "Mens-Watches",
    "Mobile-Accessories", "Skin-Care", "Smartphones", "Sports-Accessories",
    "Sunglasses", "Tablets", "Tops", "Womens-Bags", "Womens-Dresses",
    "Womens-Jewellery", "Womens-Shoes", "Womens-Watches"
  ];

  useEffect(() => {
    async function getcol() {
      try {
        const data = await fetch('https://dummyjson.com/products?limit=100');
        const res = await data.json();
        setRes(res);
      }
      catch (err) {
        alert(err);
      }
    }
    getcol();
  }, [])

  const shuffle = useMemo(() => {
    if (!response || !Array.isArray(response.products)) {
      return [];
    }
    const copied = [...response.products];
    const shuffledClothes = copied.sort(() => 0.4 - Math.random());
    return shuffledClothes.slice(0, 80);
  }, [response])

  useEffect(() => {
    if (shuffle.length) {
      setCol(shuffle);
    }
  }, [shuffle]);


  async function getfilter(type, ind) {
    setClick(true);
    setActive(ind);
    setload(true);
    setType(type);
    try {
      const data = await fetch(`https://dummyjson.com/products/category/${type}`)
      const res = await data.json();
      setFilter(res.products);
      setload(false);
    }
    catch (err) {
      alert(err);
    }


  }

  const datatoshow = isclick ? filteredarray : collection;

  return (
    <div className='h-screen w-full flex mt-10' >

      {/* filterside */}
      <div className=' flex justify-center w-[20%] '>
        <div className='w-[80%] '>
          <div className='text-6xl'>
            Filter
          </div>
          <div className='flex flex-col pt-10  gap-y-9  text-4xl'>
            {arr?.map((item, index) =>
              <div onClick={() => getfilter(item, index)} className='flex  gap-5'>

                {(active === index) ?
                  <div>✅</div>
                  :
                  <input className='h-9 w-9 rounded-lg' type='checkbox' />

                }

                <p key={index} >{item}</p>
              </div>

            )}
          </div>
        </div>
      </div>

      {/* rightside */}
      <div className='flex flex-col w-[80%]'>
        <div className='text-7xl'>
          {typeofdata}
        </div>
        {!isloading ?
          (<div className=' flex shadow-md pt-5 flex-wrap'>
            <>
              {datatoshow && datatoshow.length > 0 ? (
                datatoshow?.map((item, index) => {
                  return <Display item={item} id={item.id} key={index} />
                }))
                : (<Shimmer />)
              }
            </>
          </div>)
          : (<Shimmer />
          )}

      </div>
    </div>
  )
}

export default Collection

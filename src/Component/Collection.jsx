import React, { useEffect, useMemo, useState } from 'react'
import Display from './Display';
import HOme from './HOme';
import Shimmer from './Shimmer';

const Collection = () => {
  const [isopen,setOopen]=useState(false);
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
    <div className='h-screen w-full flex  mt-10' >

      {/* filterside */}
      <div className=' flex justify-center relative w-[5px] md:w-[20%] '>
        <div onClick={()=>setOopen(!isopen)}
          className={`md:hidden text-4xl`}
        >
          ☰
        </div>

        <div className={`left-0 md:ml-0  md:bg-transparent z-20 absolute md:static bg-gray-600 md:text-black md:block text-white  overflow-hidden top-12 w-[150px] md:w-[80%] ${isopen?'block':'hidden' }`}>
          <div className='text-xl md:text-6xl'>
            Filter
          </div>
          <div className='flex flex-col pt-5 md:pt-10  gap-y-4 md:gap-y-9  text-xl md:text-2xl md:text-4xl'>
            {arr?.map((item, index) =>
              <div onClick={() =>{setOopen(!isopen);getfilter(item, index)} } className='flex gap-5'>

                {(active === index) ?
                  <div className='text-sm md:text-4xl '>✅</div>
                  :
                  <input className='md:h-9 h-3 w-3 md:w-9 rounded-lg' type='checkbox' />

                }

                <p key={index} className='tetx-xl md:text-4xl ' >{item}</p>
              </div>

            )}
          </div>
        </div>
      </div>

      {/* rightside */}
      <div className='flex flex-col w-full md:w-[80%]'>
        <div className='text-3xl pl-5 md:text-7xl'>
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

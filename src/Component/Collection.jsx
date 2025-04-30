import React, { useEffect, useState } from 'react'
import Display from './Display';
import HOme from './HOme';

const Collection = () => {
  const [isclick,setClick]=useState(false);
  const [collection, setCol] = useState(null);
  const [filteredarray,setFilter]=useState([]);
  useEffect(() => {
    async function getcol() {
      try{const data = await fetch('https://dummyjson.com/products?limit=100');
        const res = await data.json();
        const shuffledClothes = res?.products.sort(() => 0.4 - Math.random());
        setCol(shuffledClothes?.slice(0,80));
      }
catch(err){
 alert(err);
}
    }
    getcol();
  }, [])

  async function getfilter(e){
    setClick(true);
  
    const type=e.target.innerText.toLowerCase();
   const data=await fetch(`https://dummyjson.com/products/category/${type}`)
   const res=await data.json();
   setFilter(res.products);
  }
  return (
    <div className='h-screen w-full flex mt-10' >
      <div className=' flex justify-center w-[20%] '>
        <div className='w-[80%] '>
        <div className='text-6xl'>
         Filter
        </div>
        <div className='flex flex-col pt-10  gap-y-9  text-4xl'>
          <p onClick={(e)=>{getfilter(e)}}>Beauty</p>
          <p onClick={(e)=>{getfilter(e)}}>Fragrances</p>
          <p onClick={(e)=>{getfilter(e)}}>Furniture</p>
          <p onClick={(e)=>{getfilter(e)}}>Groceries</p>
          <p onClick={(e)=>{getfilter(e)}}>Home-Decoration</p>
          <p onClick={(e)=>{getfilter(e)}}>Kitchen-Accessories</p>
          <p onClick={(e)=>{getfilter(e)}}>Laptops</p>
          <p onClick={(e)=>{getfilter(e)}}>Mens-Shirts</p>
          <p onClick={(e)=>{getfilter(e)}}>Mens-Shoes</p>
          <p onClick={(e)=>{getfilter(e)}}>Mens-Watches</p>
          <p onClick={(e)=>{getfilter(e)}}>Mobile-Accessories</p>
          <p onClick={(e)=>{getfilter(e)}}>Skin-Care</p>
          <p onClick={(e)=>{getfilter(e)}}>Smartphones</p>
          <p onClick={(e)=>{getfilter(e)}}>Sports-Accessories</p>
          <p onClick={(e)=>{getfilter(e)}}>Sunglasses</p>
          <p onClick={(e)=>{getfilter(e)}}>Tablets</p>
          <p onClick={(e)=>{getfilter(e)}}>Tops</p>
          <p onClick={(e)=>{getfilter(e)}}>Womens-Bags</p>
          <p onClick={(e)=>{getfilter(e)}}>Womens-Dresses</p>
          <p onClick={(e)=>{getfilter(e)}}>Womens-Jewellery</p>
          <p onClick={(e)=>{getfilter(e)}}>Womens-Shoes</p>
          <p onClick={(e)=>{getfilter(e)}}>Womens-Watches</p>
        </div>
        </div>
      </div>
      <div className='flex flex-col w-[80%]'>
        <div className='text-7xl'>
          Collection
        </div>
      <div className=' flex shadow-md pt-5 flex-wrap'>
       {isclick?
       <>
        {filteredarray && filteredarray.length > 0 ?(
        filteredarray?.map((item,index) => {
          return <Display item={item} key={index} />
        }))
        :(<p>Loading</p>)
        }
       </>

       :
       <>
        
                 {collection && collection.length > 0 ?(
   collection?.map((item,index) => {
     return <Display item={item} key={index} />
   }))
   :(<p>Loading</p>)
   }
       </>

       }
     
   
     </div>
      </div>
    
    </div>
  )
}

export default Collection

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [detailobj, setObj] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getdetails() {
            try {
                const data = await fetch(`https://dummyjson.com/products/${id}`);
                const res = await data.json();
                setObj(res);
            }
            catch (err) {
                alert(err);
            }

        }
        getdetails();
    }, [id]);


    const { title, description, price, discountPercentage, rating, brand, warrantyInformation, shippingInformation, thumbnail, availabilityStatus, returnPolicy, images } = detailobj;
    const [mainimgurl,setMainimg]=useState("");
    useEffect(() => {
        if (thumbnail) {
          setMainimg(thumbnail);
        }
      }, [thumbnail]);
    return (
        <div className='h-screen flex justify-center w-screen'>
            <div className='flex justify-between h-full w-[90%] '>

                <div className=' flex flex-col justify-center ml-10 gap-5 h-full w-[10%]'>
                    {images && images.length > 0 ?
                        images?.map((item) =>
                            <img onClick={()=>setMainimg(item)} src={item} key={item.id} />
                        )
                        : (<>
                               <p>Loading...</p>
                        </>)

                    }
                </div>

                <div className='  mt-28 h-full w-[30%]'>
                    <img className='h-[60%] w-full' src={mainimgurl}></img>
                </div>

                <div className='flex flex-col  h-full mt-60 w-[50%]'>
                    <p className='font-sans  font-bold text-7xl'>{title}</p>
                    <p className='text-left mt-12  text-5xl font-serif'>{description}</p>
                    <p className='text-4xl pt-4 text-green-600'>{brand}</p>
                    <p className='flex bg-green-600 mt-5 p-2 text-center text-3xl rounded-lg w-28'>{rating}<img className='h-9 w-9' src='https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-white-star-png-png-image_11494271.png' /></p>
                    <p className='text-green-600 pt-6 text-3xl font-semibold'> Special price</p>
                    <div className='flex items-center gap-5'>
                        <p className='font-bold text-9xl  '>{price}$</p>
                        <p className='text-green-600 pt-5  text-6xl fort-semibold '>{discountPercentage}% off</p>
                    </div>
                    <p className=' text-4xl pt-5'>Inclusive of all taxes</p>
                    <div className='flex  text-center text-3xl gap-16 mt-20'>
                        <div className='p-7 bg-green-400 h-[100px] w-[200px]'>
        
                            <p className='text-center'>{availabilityStatus}</p>
                        </div>
                        <div className='p-2 bg-green-400 h-[100px] w-[200px]'>
    
                            <p>{shippingInformation}</p>
                        </div>
                        <div className='p-2 bg-green-400 h-[100px] w-[200px]'>
                        
                            <p>{warrantyInformation}</p>
                        </div>
                        <div className='p-2 bg-green-400 h-[100px] w-[200px]'>
                            
                            <p>{returnPolicy}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details

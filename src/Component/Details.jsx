import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productdetails from './Productdetails';
import Reviews from './Reviews';

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

    const { title, description, price, discountPercentage, reviews, rating, weight, dimensions, brand, warrantyInformation, shippingInformation, thumbnail, availabilityStatus, returnPolicy, images } = detailobj;
    const [mainimgurl, setMainimg] = useState("");

    useEffect(() => {
        if (thumbnail) {
            setMainimg(thumbnail);
        }
    }, [thumbnail]);

    return (
        <div className='h-screen select-none flex flex-col items-center cursor-pointer w-screen'>

            <div className='flex md:flex-row  flex-col  md:justify-between items-center md:items-start h-full md:w-[90%] '>

                <div className=' md:flex md:flex-col justify-center ml-10 gap-5 h-full w-[10%]  hidden'>
                    {images && images.length > 0 ?
                        images?.map((item) =>
                            <img className='hover:border hover:border-indigo-500' onClick={() => setMainimg(item)} src={item} key={item.id} />
                        )
                        : (
                            <>
                                <p>Loading...</p>
                            </>
                        )
                    }
                </div>

                <div className='  mt-16 md:mt-28 h-full w-full md:w-[30%]'>

                    <div className='flex items-center flex-col'>
                        {mainimgurl && (<img className='h-full w-full  ' src={mainimgurl}></img>)}
                        <div className=' flex justify-center  gap-3 h-[14%] mt-5 md:mt-0  w-[20%] md:w-[10%] md:hidden '>
                            {images && images.length > 0 ?
                                images?.map((item) =>
                                    <img className='hover:border hover:border-indigo-500' onClick={() => setMainimg(item)} src={item} key={item.id} />
                                )
                                : (
                                    <>
                                        <p>Loading...</p>
                                    </>
                                )
                            }
                        </div>
                    </div>

                </div>

                <div className='flex md:overflow-y-auto md:scrollbar-hide flex-col mt-10 md:mt-16  w-[75%] md:w-[50%]'>

                    <p className='font-sans  font-bold  text-3xl md:text-7xl'>{title}</p>

                    <p className='text-left mt-5 md:mt-12 md:block hidden text-xl md:text-4xl '>{description}</p>
                    <div className='md:block flex gap-5'>
                        <p className='text-2xl md:text-5xl pt-2 md:pt-5 text-green-600'>{brand}</p>

                        <p className='flex bg-green-600 mt-0 md:mt-7  text-center text-xl md:text-3xl px-4 py-1 md:py-3 font-bold rounded-3xl w-24 md:w-32'>{rating}<img className='h-9 mr-4 w-9' src='https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-white-star-png-png-image_11494271.png' /></p>
                    </div>


                    <p className='text-green-600 pt-3 md:pt-6  text-xl md:text-3xl font-semibold'> Special price</p>

                    <div className='flex flex-row   gap-5'>
                        <p className='font-bold text-4xl md:text-9xl  '>{price}$</p>
                        <p className='text-green-600 pt-0 md:pt-5  text-2xl md:text-6xl fort-semibold '>{discountPercentage}% off</p>
                    </div>

                    <p className=' text-2xl md:text-4xl pt-2 md:pt-5'>Inclusive of all taxes</p>

                    <div className='flex flex-wrap md:flex-none text-center text-sm  md:text-3xl gap-5 md:gap-16 mt-8 md:mt-20'>
                        <div className=' pt-4 rounded-xl bg-green-400 h-[50px] w-[140px] md:h-[100px] md:w-[200px]'>
                            <p >{availabilityStatus}</p>
                        </div>

                        <div className=' p-2 rounded-xl bg-green-400 h-[50px] w-[140px] md:h-[100px] md:w-[200px]'>
                            <p>{shippingInformation}</p>
                        </div>

                        <div className='p-2 rounded-xl bg-green-400 h-[50px] w-[140px] md:h-[100px] md:w-[200px]'>
                            <p>{warrantyInformation}</p>
                        </div>
                        <div className='p-2 rounded-xl bg-green-400 h-[50px] w-[140px] md:h-[100px] md:w-[200px]'>
                            <p>{returnPolicy}</p>
                        </div>

                    </div>

                    <Productdetails description={description} weight={weight} width={dimensions?.width} height={dimensions?.height} depth={dimensions?.depth} brand={brand} />

                    <Reviews reviews={reviews} rating={rating} />

                </div>
            </div>
        </div>
    )
}

export default Details

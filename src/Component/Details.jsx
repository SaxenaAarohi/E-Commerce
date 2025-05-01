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


    const { title, description, price, discountPercentage, rating, brand, warrantyInformation, shippingInformation, thumbnail, stock, returnPolicy, images } = detailobj;
    return (
        <div className='h-screen flex justify-center w-screen'>
            <div className='flex justify-between h-full w-[90%] bg-pink-100'>
                <div className=' flex flex-col justify-center  gap-5 h-full w-[10%]'>
                    {/* <img src='https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp' />
                    <img src='https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp' />
                    <img src='https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/4.webp' /> */}
                    {images && images.length > 0 ?
                        images?.map((item) => {
                            <img src={item} />
                        })
                        : <p>Loading</p>}
                </div>
                <div className='  h-full w-[30%]'>
                    <img src={thumbnail}></img>
                </div>
                <div className='flex flex-col  h-full mt-60 w-[50%]'>
                    <p className='font-sans  font-bold text-7xl'>{title}</p>
                    <p className='text-left mt-12  text-5xl'>{description}</p>
                    <p className='text-4xl pt-3 text-green-600'>{brand}</p>
                    <p className='flex bg-green-600 mt-4 p-2 text-center text-3xl rounded-lg w-28'>{rating}<img className='h-9 w-9' src='https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-white-star-png-png-image_11494271.png' /></p>
                    <p className='text-green-600 pt-4 text-3xl font-semibold'> Special price</p>
                    <div className='flex items-center gap-5'>
                        <p className='font-bold text-9xl pt-4 '>{price}$</p>
                        <p className='text-green-600  text-6xl fort-semibold '>{discountPercentage}% off</p>
                    </div>
                    <p className=' text-4xl pt-3'>Inclusive of all taxes</p>
                    <div className='flex  text-center text-3xl gap-16 mt-12'>
                        <div className='flex flex-col bg-gray-200 h-[100px] w-[200px]'>
                            <p className='font-bold'>In Stock</p>
                            <p>{stock}</p>
                        </div>
                        <div className='bg-gray-200 h-[100px] w-[200px]'>
                            <p className='font-bold'>Ships in</p>
                            <p>{shippingInformation}</p>
                        </div>
                        <div className='bg-gray-200 h-[100px] w-[200px]'>
                            <p className='font-bold'>Warrenty</p>
                            <p>{warrantyInformation}</p>
                        </div>
                        <div className='bg-gray-200 h-[100px] w-[200px]'>
                            <p className='font-bold'>Return Policy</p>
                            <p>{returnPolicy}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details

import React from 'react'

const Productdetails = ({description,weight,width,height,depth ,brand}) => {
  return (
    <div>
       <div className='mt-12 md:mt-28'>
                    <h1 className='text-3xl md:text-6xl font-bold'>Product Details</h1>
                    <div className='flex flex-col mt-4 md:mt-20'>
                        <div className='text-xl md:text-3xl p-1 md:p-5 flex gap-10 md:gap-28'>
                            <p className=' text-gray-500'>Description </p>
                            <p className='line-clamp-3 md:line-clamp-none'>{description}</p>
                        </div>
                        <div className='text-xl md:text-3xl p-2 md:p-5 flex gap-20 md:gap-48'>
                            <p className='text-gray-500'>Brand </p>
                            <p>{brand}</p>
                        </div>
                        <div className='text-xl md:text-3xl p-1 md:p-5 flex gap-20 md:gap-48'>
                            <p className='text-gray-500'>Weight </p>
                            <p>{weight}</p>
                        </div>
                         <div className='text-xl md:text-3xl p-1 md:p-5 flex gap-20 md:gap-48'>
                            <p className='text-gray-500'>Width </p>
                            <p>{width}</p>
                        </div>
                        <div className='text-xl md:text-3xl p-1 md:p-5 flex gap-20 md:gap-48'>
                            <p className='text-gray-500'>Height </p>
                            <p>{height}</p>
                        </div>
                        <div className='text-xl md:text-3xl p-1 md:p-5 flex gap-20 md:gap-48'>
                            <p className='text-gray-500'>Depth </p>
                            <p>{depth}</p>
                        </div>
                    </div>
                    
                   </div>
    </div>
  )
}

export default Productdetails

import React from 'react'

const Reviews = ({ reviews, rating }) => {
    return (
        <div className='mt-12 md:mt-28'>

            <div className='flex gap-5'>
                <h1 className='text-3xl md:text-6xl font-bold'>Reviews</h1>
                <p className='flex bg-green-600  text-center text-xl md:text-3xl px-4 py-1 md:py-3 font-bold rounded-3xl w-24 md:w-32'>{rating}<img className='h-7 md:h-9 mr-4 w-9' src='https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-white-star-png-png-image_11494271.png' /></p>
            </div>

            <div className='mt-2 md:mt-16 flex flex-col'>

                {reviews && (
                    reviews.map((item) => {
                        return (
                            <div className='mt-5 md:mt-10   shadow-2xl h-52 md:h-64 w-full md:w-[80%]  '>
                                <p className='flex bg-green-600  text-center text-xl md:text-3xl px-4 py-1 md:py-3 font-bold rounded-3xl w-24'>{item.rating}<img className='h-9 mr-4 w-9' src='https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-white-star-png-png-image_11494271.png' /></p>
                                 <p className='text-2xl md:text-5xl pt-4 md:pt-10'>{item.comment}</p>
                                 <p className='pt-3 md:pt-5 text-2xl md:text-4xl text-gray-400'>{item.reviewerName}</p>
                                 <p className='pt-3 text-gray-400 '> {item.date}</p>
                            </div>
                        )

                    })
                )}





            </div>

        </div>
    )
}

export default Reviews

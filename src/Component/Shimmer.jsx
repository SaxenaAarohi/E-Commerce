import React from 'react'

const Shimmer = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-6 justify-center mt-5">
                {Array.from({ length: 8 }).map((_, index) => (
                   
                        <div className="bg-gray-300 h-[200px] w-[200px] overflow-hidden rounded-lg mb-4"></div>
                    
                ))}
            </div>

        </div>
    )
}

export default Shimmer

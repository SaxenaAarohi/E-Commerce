import React from 'react'

const Shimmer = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-6 justify-center mt-12">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div
                        key={index}
                        className="p-4 w-[600px] rounded-xl bg-white shadow animate-pulse">
                        <div className="bg-gray-300 h-[400px] w-full overflow-hidden rounded-lg mb-4"></div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Shimmer

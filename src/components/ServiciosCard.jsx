import React from 'react'

const ServiciosCard = ({ titulo, bgClass }) => {
    return (
        <div className={`flex flex-col ${bgClass} rounded-md h-60 sm:h-96 w-full overflow-hidden shadow-md px-3 relative`}>
            <div className='absolute inset-0  bg-gray-950/60 z-10'></div>
            <h3 className='text-gray-200 font-semibold text-xl text-left my-auto mr-auto z-20 uppercase'>
                {titulo}
            </h3>
        </div>
    )
}

export default ServiciosCard
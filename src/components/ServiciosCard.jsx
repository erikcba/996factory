import React from 'react'

const ServiciosCard = ({ imagen, titulo }) => {
    return (
        <div className='flex flex-col rounded-md h-96 w-full overflow-hidden shadow-md'>
            <div className='h-3/4 '>
                <img className='w-full h-full sm:h-full object-cover object-center' src={imagen} alt="" />
            </div>
            <div className='h-1/4 bg-zinc-800 p-2 flex items-center justify-center'>
                <h3 className='text-gray-200 font-semibold text-xl text-center'>
                    {titulo}
                </h3>
            </div>
        </div>
    )
}

export default ServiciosCard
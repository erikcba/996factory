import React from 'react'

const SubHeroCards = ({icono, texto}) => {
  return (
    <div className='bg-zinc-800 px-4 py-3 rounded-md shadow-md'>
        <p className='text-gray-300 text-lg flex flex-row gap-2 items-center'>
            {icono}
            {texto}
        </p>
    </div>
  )
}

export default SubHeroCards
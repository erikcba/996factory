import React from 'react'
import Carrusel from '../components/Carrusel'

const GaleriaSection = () => {
  return (
    <div className='pt-10 pb-20 bg-zinc-950 '>
        <h3 className='text-3xl sm:text-5xl font-semibold text-center pb-10 text-gray-200 uppercase'>Galeria</h3>
        <Carrusel/>
    </div>
  )
}

export default GaleriaSection
import React from 'react'
import ServiciosCard from '../components/ServiciosCard'

const Servicios = () => {
  return (
    <section id='servicios' className='bg-zinc-950 sm:py-20 py-10 px-5 sm:px-0 '>
        <div className='flex flex-col justify-center items-center container mx-auto gap-10 sm:gap-12'>
            <h1 className='text-3xl sm:text-5xl font-semibold text-center py-10 text-gray-200 uppercase '>
                Nuestros productos 
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-10 sm:gap-4'>
                <ServiciosCard bgClass="bg-card-1" titulo={"Silenciadores, slip on, medio escape y full system"}  />
                <ServiciosCard bgClass="bg-card-2" titulo={"Desarrollo, diseño, ingenieria inversa (dentro de la metalmecanica) volcado"}  />
                <ServiciosCard bgClass="bg-card-3" titulo={"Desarrollo de piezas en fibra de carbono"}  />
                <ServiciosCard bgClass="bg-card-4" titulo={"Mantenimiento general (exclusivo)"}  />
                <ServiciosCard bgClass="bg-card-5" titulo={"Ecu Remap"}  />
            </div>
        </div>
    </section>
  )
}

export default Servicios
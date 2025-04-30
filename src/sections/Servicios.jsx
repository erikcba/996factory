import React from 'react'
import ServiciosCard from '../components/ServiciosCard'
import escapes from "../assets/escapes.jpeg"
import fibraCarbono from "../assets/fibraCarbono.JPG"
import metalmecanica from "../assets/metalmecanica.JPG"
import ecu from "../assets/ecu.jpg"
import mantenimiento from "../assets/mantenimiento.JPG"

const Servicios = () => {
  return (
    <section className='bg-zinc-950 sm:py-32 py-10 px-5 sm:px-0 '>
        <div className='flex flex-col justify-center items-center container mx-auto gap-10 sm:gap-12'>
            <h1 className='text-3xl sm:text-5xl font-semibold text-center text-gray-200 uppercase '>
                Nuestros productos 
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-10 sm:gap-4'>
                <ServiciosCard imagen={escapes} titulo={"Silenciadores, slip on, medio escape y full system"}  />
                <ServiciosCard imagen={metalmecanica} titulo={"Desarrollo, diseño, ingenieria inversa (dentro de la metalmecanica) volcado"}  />
                <ServiciosCard imagen={fibraCarbono} titulo={"Desarrollo de piezas en fibra de carbono"}  />
                <ServiciosCard imagen={mantenimiento} titulo={"Mantenimiento general (exclusivo)"}  />
                <ServiciosCard imagen={ecu} titulo={"Ecu Remap"}  />
            </div>
        </div>
    </section>
  )
}

export default Servicios
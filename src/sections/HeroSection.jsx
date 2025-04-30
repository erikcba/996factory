import React from 'react'
import logo from '../assets/996factory-logo2.png'
import video from '../assets/hero-mobile.mp4'

const HeroSection = () => {
    return (
        <section className="relative h-screen overflow-hidden sm:pt-0 pt-20">
            {/* Fondo (imagen) */}
            <video
                className="absolute inset-0 w-full h-full object-cover sm:hidden"
                src={video}
                autoPlay
                muted
                loop
                playsInline
            ></video>
            <div className="hidden sm:block absolute inset-0 sm:bg-[url('./assets/hero-img.jpg')] bg-cover bg-center bg-no-repeat"></div>

            {/* Capa de blur */}
            <div className="absolute inset-0  bg-gray-950/70 z-10"></div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-5 sm:px-0">
                <div className='w-full sm:w-3/4 mx-auto text-center'>
                    <img className='sm:mx-auto mr-auto w-3/4 sm:w-1/4 ' src={logo} alt="" />
                    <p className='text-gray-200 sm:text-center text-left text-2xl font-medium w-full sm:w-2/3 mx-auto mt-4'>
                        Diseñamos y fabricamos componentes a medida para motocicletas de competición que maximizan el rendimiento y la fiabilidad.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-center items-start justify-start mt-8 w-full'>
                        <button className='border-2 border-white w-1/2 sm:w-auto px-2 sm:px-5 py-2 rounded-sm text-gray-200 font-medium text-lg hover:cursor-pointer hover:bg-stone-100 hover:text-stone-800 shadow-md hover:shadow-stone-600/50 transition-all ease-in-out'>
                            Ver trabajos
                        </button>
                        <button className='bg-rose-600 border-2 w-1/2 sm:w-auto border-rose-600  px-5 py-2 rounded-sm text-gray-200 font-bold text-lg hover:cursor-pointer hover:bg-rose-500 hover:border-rose-500 shadow-md hover:shadow-rose-600/50 transition-all ease-in-out'>
                            Contactanos
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection

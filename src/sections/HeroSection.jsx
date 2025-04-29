import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Fondo (imagen) */}
            <div className="absolute inset-0 bg-[url('./assets/hero-img.jpg')] bg-cover bg-center bg-no-repeat"></div>

            {/* Capa de blur */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-950/80 z-10"></div>

            {/* Contenido */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
                <div className='w-3/4 mx-auto text-center'>
                    <h1 className="text-white text-8xl font-bold">Piezas de Alta Competición</h1>
                    <p className='text-gray-200 text-2xl font-medium w-2/3 mx-auto mt-4'>
                        Diseñamos y fabricamos componentes a medida para motocicletas de competición que maximizan el rendimiento y la fiabilidad
                    </p>
                    <div className='flex flex-row gap-4 items-center justify-center mt-8 w-full'>
                        <button className='border-2 border-white px-5 py-2 rounded-sm text-gray-200 font-medium text-lg hover:cursor-pointer hover:bg-stone-100 hover:text-stone-800 shadow-md hover:shadow-stone-600/50'>Ver Trabajos</button>
                        <button className='bg-rose-600 border-2 border-rose-600  px-5 py-2 rounded-sm text-gray-200 font-bold text-lg hover:cursor-pointer hover:bg-rose-500 hover:border-rose-500 shadow-md hover:shadow-rose-600/50'>Contactanos</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection

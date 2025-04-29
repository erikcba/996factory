import React from 'react'
import subHimg from '../assets/subHero-img.jpg'
import SubHeroCards from '../components/SubHeroCards'

const SubHero = () => {

    const ingIcon = <box-icon name='cog' type='solid' color='#e81f1f' ></box-icon>
    const llaveIcon = <box-icon name='wrench' type='solid' color='#e81f1f' ></box-icon>
    const calidadIcon = <box-icon name='check-shield' type='solid' color='#e81f1f' ></box-icon>
    const encajeIcon = <box-icon name='diamond' color='#e81f1f' ></box-icon>
    const flechaDerIcon = <box-icon name='right-arrow-alt' color='#e81f1f' ></box-icon>

    return (
        <section className='bg-zinc-900 py-14 sm:px-0 px-3 sm:py-32 h-full'>
            <div className='flex flex-col sm:flex-row-reverse items-center justify-center gap-10 sm:h-96'>
                <div className='w-full sm:w-1/3 h-full flex flex-col gap-5 justify-center'>
                    <h1 className='text-4xl font-bold uppercase text-gray-200 text-start'>
                        Fabricamos Excelencia
                    </h1>
                    <p className='text-lg font-normal text-gray-400 text-start'>
                        Cada pieza que sale de nuestro taller es un testimonio de nuestra dedicación a la excelencia. Nuestros maestros artesanos combinan técnicas tradicionales con tecnología de vanguardia para crear piezas de motocicleta que son a la vez hermosas y funcionales.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <SubHeroCards icono={ingIcon} texto={'Ingenieria de precisión'} />
                        <SubHeroCards icono={llaveIcon} texto={'Fabricación personalizada'} />
                        <SubHeroCards icono={calidadIcon} texto={'Materiales de calidad'} />
                        <SubHeroCards icono={encajeIcon} texto={'Encaje perfecto'} />
                    </div>
                    <a className='flex flex-row items-center gap-2 text-red-500 text-lg font-medium w-fit hover:scale-105 transition-all ease-in-out' href="">Conocé lo que hacemos {flechaDerIcon} </a>
                </div>
                <div className='hidden sm:block sm:w-1/3 shadow-md'>
                    <img className='rounded-md' src={subHimg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SubHero
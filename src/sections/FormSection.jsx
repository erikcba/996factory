import React from 'react'
import Form from '../components/Form'
import Footer from './Footer'

const FormSection = () => {

    const instaLogo = <box-icon type='logo' color="#e5e7eb" name='instagram'></box-icon>

    return (
        <section id='form' className='bg-zinc-800 py-10'>
            <h1 className='text-3xl sm:text-5xl py-10 font-semibold text-center text-gray-200 uppercase px-5 sm:px-0'>
                Contactate con nosotros
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 pb-10 pt-0 sm:py-14 sm:container sm:mx-auto'>
                <Form />
                <Footer />
            </div>
            <div className='border-t-2 border-zinc-500 container mx-auto px-0 pt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between sm:items-center'>
                <p className='text-center text-gray-300'>© 2025 996Factory. Todos los derechos reservados.</p>
                <a href='https://www.instagram.com/996factory/' target='_blank' rel='noreferrer' className='text-center text-gray-200 flex flex-row gap-2 items-center justify-center'>{instaLogo}@996factory</a>
                <p className='text-center text-gray-300'>Hecho por TakeOff Agency</p>
            </div>
        </section>
    )
}

export default FormSection
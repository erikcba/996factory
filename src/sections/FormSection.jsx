import React from 'react'
import Form from '../components/Form'
import Footer from './Footer'

const FormSection = () => {
    return (
        <section id='form' className='bg-zinc-800 py-10'>
            <h1 className='text-3xl sm:text-5xl font-semibold text-center text-gray-200 uppercase px-5 sm:px-0'>
                Contactate con nosotros
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:py-14 sm:container sm:mx-auto'>
                <Form />
                <Footer />
            </div>
        </section>
    )
}

export default FormSection
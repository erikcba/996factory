import React from 'react'
import Form from '../components/Form'

const FormSection = () => {
  return (
    <section id='form' className='bg-zinc-800 py-10'>
        <h1 className='text-3xl sm:text-5xl font-semibold text-center text-gray-200 uppercase px-5 sm:px-0'>
            Contactate con nosotros
        </h1>
        <Form/>
    </section>
  )
}

export default FormSection
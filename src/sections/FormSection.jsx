import React from 'react'
import Form from '../components/Form'

const FormSection = () => {
  return (
    <section className='bg-zinc-800 py-10'>
        <h1 className='text-3xl sm:text-5xl font-semibold text-center text-gray-200 uppercase '>
            Contactate con nosotros
        </h1>
        <Form/>
    </section>
  )
}

export default FormSection
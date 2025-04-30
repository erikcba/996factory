import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            // Permitir solo números
            if (!/^\d*$/.test(value)) return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        setErrors(prev => ({
            ...prev,
            [name]: ''
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {};
        setSuccessMessage('')

        if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio'
        if (!formData.apellido) newErrors.apellido = 'El apellido es obligatorio'
        if (!formData.telefono) {
            newErrors.telefono = 'El teléfono es obligatorio'
        } else if (!/^\d+$/.test(formData.telefono)) {
            newErrors.telefono = 'El teléfono debe contener solo números'
        }
        if (!formData.email) {
            newErrors.email = 'El email es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El email no es válido'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return;
        }

        console.log('Datos enviados:', formData)
        setSuccessMessage('¡Formulario enviado correctamente!')
        setFormData({
            nombre: '',
            apellido: '',
            telefono: '',
            email: ''
        });
        setErrors({})
    }

    return (
        <div className=' grid grid-cols-1 gap-5 py-10 px-5'>
            <div className='flex flex-col gap-2'>
                <label className='text-gray-200 font-medium'>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder=''
                    required
                    className='bg-zinc-700 border-1 border-zinc-500 rounded-md px-2 py-1 w-full focus:outline-rose-600 text-gray-200 font-medium'
                />
                {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-gray-200 font-medium'>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder=''
                    required
                    className='bg-zinc-700 border-1 border-zinc-500 rounded-md px-2 py-1 w-full focus:outline-rose-600 text-gray-200 font-medium'
                />
                {errors.apellido && <p style={{ color: 'red' }}>{errors.apellido}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-gray-200 font-medium'>Teléfono</label>
                <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder=''
                    required
                    className='bg-zinc-700 border-1 border-zinc-500 rounded-md px-2 py-1 w-full focus:outline-rose-600 text-gray-200 font-medium'
                />
                {errors.telefono && <p style={{ color: 'red' }}>{errors.telefono}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-gray-200 font-medium'>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=''
                    required
                    className='bg-zinc-700 border-1 border-zinc-500 rounded-md px-2 py-1 w-full focus:outline-rose-600 text-gray-200 font-medium'
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            {successMessage && (
                <p className='text-rose-600 font-bold text-center'>{successMessage}</p>
            )}
            <button onClick={handleSubmit} type="submit" className='bg-rose-600 px-5 py-2 rounded-sm text-gray-200 font-medium text-md md:text-lg hover:cursor-pointer hover:bg-rose-500 shadow-md hover:shadow-rose-600/50'>Enviar</button>
        </div>
    )
}

export default Form
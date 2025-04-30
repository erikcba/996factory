import React from 'react'

const Footer = () => {

    const ubicacionIcon = <box-icon type='solid' color='#e81f1f' name='map' size="md"></box-icon>
    const telefonoIcon = <box-icon name='phone' color='#e81f1f' type='solid' size="md" ></box-icon>
    const emailIcon = <box-icon name='envelope' color='#e81f1f' size="md"></box-icon>
    const horarioIcon = <box-icon name='time-five' color='#e81f1f' size="md"></box-icon>

    return (
        <div className='flex flex-col items-start justify-start px-5 py-4 gap-5'>
            <div className='flex flex-row items-center gap-4'>
                <div>
                    {ubicacionIcon}
                </div>
                <div>
                    <p className='text-gray-200 font-medium text-2xl'>Dirección</p>
                    <p className='text-gray-400 font-medium text-md'>José Javier Díaz 1591, X5000 Córdoba</p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <div>
                    {telefonoIcon}
                </div>
                <div>
                    <p className='text-gray-200 font-medium text-2xl'>Teléfono</p>
                    <p className='text-gray-400 font-medium text-md'>3517474469</p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <div>
                    {emailIcon}
                </div>
                <div>
                    <p className='text-gray-200 font-medium text-2xl'>Email</p>
                    <p className='text-gray-400 font-medium text-md'>996factory@gmail.com</p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <div>
                    {horarioIcon}
                </div>
                <div>
                    <p className='text-gray-200 font-medium text-2xl'>Horarios</p>
                    <p className='text-gray-400 font-medium text-md'>Lunes a Viernes 9:00am - 13:30pm / 14:30pm - 18:00pm</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
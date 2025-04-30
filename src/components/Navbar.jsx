import React from 'react'
import logo from '../assets/996factory-logo2.png'

const Navbar = () => {
    return (
        <nav className='w-full bg-zinc-950 h-24 shadow-md fixed top-0 z-20'>
            <div className='flex flex-row justify-around items-center h-full'>
                <a href="#hero" className='w-1/4'>
                    <img className='  ' src={logo} alt="" />
                </a>
                <ul className='text-gray-300 hidden sm:flex flex-row gap-5 font-medium text-lg'>
                    <a className='hover:text-gray-100 transition-all ease-in-out hover:scale-105 hover:cursor-pointer' href="">Trabajos</a>
                    <a className='hover:text-gray-100 transition-all ease-in-out hover:scale-105 hover:cursor-pointer' href="">Galeria</a>
                    <a className='hover:text-gray-100 transition-all ease-in-out hover:scale-105 hover:cursor-pointer' href="">Sobre nosotros</a>
                    <a className='hover:text-gray-100 transition-all ease-in-out hover:scale-105 hover:cursor-pointer' href="">Contacto</a>
                </ul>
                <a href="#form" className='bg-rose-600 px-5 py-2 rounded-sm text-gray-200 font-semibold text-md md:text-lg hover:cursor-pointer hover:bg-rose-500 shadow-md hover:shadow-rose-600/50'>
                    Contactanos
                </a>
            </div>
        </nav>
    )
}

export default Navbar
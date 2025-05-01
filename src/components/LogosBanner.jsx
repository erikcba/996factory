import React from 'react'
import logo1 from "../assets/996factory-logo2.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"

const LogosBanner = () => {
    return (
        <section className='bg-zinc-950 pt-10 pb-20'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4 container mx-auto'>
                <img className='my-auto w-2/4 mx-auto' src={logo2} alt="" />
                <img className='my-auto w-2/4 mx-auto' src={logo1} alt="" />
                <img className='my-auto w-2/4 mx-auto' src={logo3} alt="" />
            </div>
        </section>
    )
}

export default LogosBanner
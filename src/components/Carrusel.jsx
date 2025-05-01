import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../assets/img1.JPG'
import img2 from '../assets/img2.JPG'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'

const Carrusel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    }

    return (
        <div className='px-5 container mx-auto'>
            <div className='slider-container'>
                <Slider {...settings}>
                   <div className='px-2'>
                    <img src={img1} alt="" />
                   </div>
                   <div className='px-2'>
                    <img src={img2} alt="" />
                   </div>
                   <div className='px-2'>
                    <img src={img3} alt="" />
                   </div>
                   <div className='px-2'>
                    <img src={img4} alt="" />
                   </div>
                   <div className='px-2'>
                    <img src={img5} alt="" />
                   </div>
                   <div className='px-2'>
                    <img src={img6} alt="" />
                   </div>
                   <div className='px-2'>
                    <img src={img7} alt="" />
                   </div>
                   <div className='px-2'>
                    <img src={img8} alt="" />
                   </div>
                   <div className='px-2'>
                    <img src={img9} alt="" />
                   </div>
                </Slider>
            </div>
        </div>
    )
}

export default Carrusel
import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
    return (
        <div className="heroSection bg-[url('/Hero%20BG.png')] bg-no-repeat bg-cover bg-top-center  ">
            <Navbar />

            <div className={`container flex items-center justify-center min-h-screen`}>
                <div className="hero_section">
                    <h1><img src="/mainHead.svg" alt="" className='m-auto' /></h1>
                    <p className='text-center'>Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth</p>
                    <div className="hero_img">
                        <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1772939497/Group_71_3_d3mq5l.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

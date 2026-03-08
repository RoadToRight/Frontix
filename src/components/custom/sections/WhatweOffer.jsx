import React from 'react'
import Card from '../Card'
import { Button } from '@/components/ui/button'

const WhatweOffer = () => {
    return (
        <div className="flex flex-col gap-[20px] container">
            <div className="highlight">Exclusive Features</div>
            <h2>What We Offer</h2>
            <p>We deliver innovative media and IT solutions designed to elevate your brand, enhance performance, and drive lasting growth.</p>
            <h6>Hello</h6>
            <div className="card_wrapper flex gap-[20px]">
                <Card
                    title="Digital Solutions"
                    description="Power up your brand with smart, automated marketing solutions designed to increase reach, optimize performance, and drive growth."
                    image="/digitalSolutions.svg"
                />

                <Card
                    title="Innovative Solutions"
                    description="Power up your brand with smart, automated marketing solutions designed to increase reach, optimize performance and drive growth."
                    image="/Innovative Solutions.svg"
                />

                <Card
                    title="Automation with AI"
                    description="Power up your brand with smart, automated marketing solutions designed to increase reach, optimize performance, and drive growth."
                    image="/Automation with AI.svg"
                />
            </div>
            <Button variant='pinky' className={"w-max m-auto"}>View All Services</Button>

        </div>
    )
}

export default WhatweOffer
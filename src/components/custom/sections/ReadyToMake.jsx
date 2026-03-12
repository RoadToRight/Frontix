import Image from 'next/image'
import React from 'react'

const ReadyToMake = () => {
    return (
        <div className=" bg-[linear-gradient(102.16deg,#B384EF_0%,#7A28E1_100%,#FFFFFF_100%)] rounded-[15.6px] p-8 text-white">
            import Image from "next/image"
        <img src="/stats.png"/>
            {/* <Image
                src="/stats.png"
                alt="Business growth illustration"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         800px"
                priority
            /> */}
            <h3 className="text-2xl font-semibold">
                Ready To Take Your Business To The Next Level?
            </h3>

            <p className="mt-3 text-sm text-white/90">
                Let’s turn your vision into a powerful digital experience. Partner with us to grow smarter,
                faster, and stronger in today’s digital world.
            </p>
            <Image />
        </div>
    )
}

export default ReadyToMake
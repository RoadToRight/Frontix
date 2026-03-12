import Image from 'next/image'
import React from 'react'

const ReadyToMake = () => {
    return (
        <div className="max-w-450 m-auto flex justify-between bg-[linear-gradient(102.16deg,#B384EF_0%,#7A28E1_100%,#FFFFFF_100%)] rounded-3xl text-white">
           
            <Image
                src="/stats.png"
                alt="Business growth illustration"
                width={800}
                height={600}
                className="w-auto max-w-full h-auto rounded-xl"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
            />
            <div className="content flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold">
                    Ready To Take Your Business To The Next Level?
                </h3>

                <p className="mt-3 text-sm text-white/90">
                    Let’s turn your vision into a powerful digital experience. Partner with us to grow smarter,
                    faster, and stronger in today’s digital world.
                </p>
            </div>
            <Image
                src="/stats2.png"
                alt="Business growth illustration"
                width={800}
                height={600}
                className="w-auto max-w-full h-auto rounded-xl"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
            />
        </div>
    )
}

export default ReadyToMake
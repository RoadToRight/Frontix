import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"

const ImageText = () => {
    return (
        <section className="relative overflow-hidden bg-[#07060d] py-16">
            <div className="container mx-auto flex flex-col-reverse items-center gap-10 px-4 lg:flex-row lg:gap-16">
                <div className="w-full lg:w-1/2">
                    <div className="mx-auto max-w-md rounded-[2.5rem] p-10">
                        <div className="rounded-3xl p-6 shadow-xl">
                            <Image
                                src="/image_text.webp"
                                alt="Pricing preview cards"
                                width={840}
                                height={620}
                                className="w-full h-auto"
                                sizes="(max-width: 768px) 100vw, 480px"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Flexible Plans for <span className="text-[#B384EF]">Every Need</span>
                        </h2>
                        <p className="mx-auto max-w-xl text-base text-white/70 lg:mx-0">
                            Whether you’re a startup or an established brand, our customizable plans are designed to deliver results that match your vision and budget.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Button variant="pinky" size="lg">
                                View Pricing
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageText

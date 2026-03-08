import React from "react";

const Card = ({
    title = "Digital Solutions",
    description = "Power up your brand with smart, automated marketing solutions designed to increase reach, optimize performance, and drive growth.",
    image = "/digitalSolutions.svg",
    bgColor = "#180332",
}) => {
    return (
        <div className="flex items-center justify-center font-sans">
            <div
                className="max-w-[640px] w-full rounded-3xl p-8 sm:p-10 transition-all duration-300 ease-in-out hover:scale-[1.02]"
                style={{
                    backgroundColor: bgColor,
                    boxShadow: `0 30px 50px -15px rgba(0,0,0,0.8), 0 0 40px ${bgColor}`,
                }}
            >
                <img
                    src={image}
                    className="mb-5"
                    alt={title}
                    priority={false}
                />

                <h1
                    className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5"
                    style={{
                        background: "linear-gradient(to right, white, #d6e8ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {title}
                </h1>

                <p className="text-lg sm:text-xl text-[#b1c7e6] leading-relaxed max-w-[90%] opacity-95">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
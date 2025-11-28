import React, { useState, useEffect } from "react";

const Hero = () => {
    const slides = [
        {
            image: "./src/assets/bed.jpg",
            title: "Premium ICU Patient Bed",
            description: "Designed for maximum comfort and safety with advanced adjustable features.",
        },
        {
            image: "./src/assets/babyTrolly.jpg",
            title: "Neonatal Baby Trolley",
            description: "Safe, hygienic and fully equipped trolley for newborn care and mobility.",
        },
        {
            image: "./src/assets/iquipment.jpg",
            title: "Advanced Medical Equipment Setup",
            description: "Reliable, high-precision medical devices designed for efficient patient care.",
        },

        {
            image: "./src/assets/wheelchair.jpg",
            title: "Durable & Comfortable Wheelchair",
            description: "Lightweight, strong, and designed to provide effortless patient movement.",
        },
    ];


    const [index, setIndex] = useState(0);

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="hero" className="w-full h-[80vh] md:h-[90vh] relative overflow-hidden">

            {/* IMAGES */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`
            absolute inset-0 w-full h-full transition-opacity duration-1000 
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
                >
                    <img
                        src={slide.image}
                        className="w-full h-full object-cover"
                        alt={slide.title}
                    />

                    {/* TEXT OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-center px-10 md:px-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                            {slide.title}
                        </h2>
                        <p className="text-lg md:text-2xl mt-4 text-gray-200 max-w-2xl drop-shadow-lg">
                            {slide.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Hero;

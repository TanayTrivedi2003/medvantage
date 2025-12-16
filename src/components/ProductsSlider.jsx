import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import AOS from "aos";
import "aos/dist/aos.css";

const sliderData = [
    {
        img: "./bed1.jpg",
        name: "ICU Bed",
    },
    {
        img: "./walker203.webp",
        name: "Walker",
    },
    {
        img: "./wheelchair.jpg",
        name: "Wheelchair",
    },
    {
        img: "./trolly1.webp",
        name: "Emergency Trolly",
    },
    {
        img: "./table403.webp",
        name: "Bed Cum Chair",
    },
    {
        img: "./stool2.webp",
        name: "Patients Stool",
    },
    {
        img: "./labour-table.jpeg",
        name: "Labour Beds",
    },
    {
        img: "./bedsidelocker1001.jpg",
        name: "Bed Side Locker ",
    },
    {
        img: "./kidneytray1101.jpg",
        name: "Kidney Tray ",
    },
    {
        img: "./kidneytray1101.jpg",
        name: "Kidney Tray ",
    },
    // {
    //     img: "./surgicalLights.jpg",
    //     name: "Surgical Lights",
    // },
];

const ProductsSlider = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section
            className="
                w-full
                bg-[#F7FBFF]
                py-12
                overflow-hidden
            "
            data-aos="fade-up"
        >

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 px-4">
                Featured{" "}
                <span className="bg-linear-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                    Products
                </span>
            </h2>


            {/* SLIDER */}
            <Swiper
                loop
                centeredSlides
                grabCursor
                effect="coverflow"
                slidesPerView={1.6}
                spaceBetween={40}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1.5,
                    slideShadows: false,
                }}
                speed={2300}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow]}
                breakpoints={{
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 },
                    1280: { slidesPerView: 4.2 },
                }}
                className="pb-10"
            >

                {sliderData.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="
                                relative overflow-hidden group
                                bg-white
                                rounded-3xl
                                shadow-md
                                hover:shadow-[0_20px_45px_rgba(58,141,255,0.25)]
                                transition-all duration-500 ease-out
                                cursor-pointer
                                hover:-translate-y-[4px]
                            "
                        >

                            {/* shimmer shine */}
                            <span
                                className="
                                    absolute top-0 left-[-150%]
                                    w-[70%] h-full
                                    bg-linear-to-r
                                    from-transparent via-white/40 to-transparent
                                    rotate-[20deg]
                                    transition-all duration-[800ms]
                                    ease-out
                                    group-hover:left-[160%]
                                    pointer-events-none
                                "
                            />

                            {/* IMAGE */}
                            <img
                                src={item.img}
                                alt={item.name}
                                className="
                                    w-full h-[320px] sm:h-[360px] md:h-[400px]
                                    object-contain
                                    scale-110 md:scale-125
                                    bg-white
                                    transition-transform duration-700 ease-out
                                    group-hover:scale-105
                                "
                            />

                            {/* bottom highlight */}
                            <div
                                className="
                                    absolute inset-x-0 bottom-0
                                    h-16
                                    bg-linear-to-t
                                    from-white/40
                                    to-transparent
                                "
                            />

                            {/* title */}
                            <p
                                className="
                                    absolute bottom-4 w-full
                                    text-center
                                    text-base
                                    font-bold
                                    text-[#0A2540]
                                    bg-white/80
                                    backdrop-blur-sm
                                    py-2
                                "
                            >
                                {item.name}
                            </p>

                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    );
};

export default ProductsSlider;

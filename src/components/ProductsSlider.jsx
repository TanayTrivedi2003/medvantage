

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { categoriesData } from "../data/productsData";

import AOS from "aos";
import "aos/dist/aos.css";

const ProductsSlider = () => {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const featured = categoriesData
        .flatMap(cat => cat.products)
        .slice(0, 8);

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

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 px-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                    Products
                </span>
            </h2>

            {/* FULL WIDTH SLIDER */}
            <Swiper
                loop
                centeredSlides
                grabCursor

                effect="coverflow"

                slidesPerView={1.6}     // ✅ bigger center card
                spaceBetween={40}      // ✅ breathing space

                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1.5,
                    slideShadows: false,
                }}

                speed={2400}

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

                {featured.map((p, i) => (
                    <SwiperSlide key={i}>

                        {/* CARD */}
                        <div className="
              relative overflow-hidden group
              bg-white
              rounded-3xl
              shadow-md hover:shadow-[0_20px_45px_rgba(58,141,255,0.25)]
              transition-all duration-500 ease-out
              cursor-pointer
              hover:-translate-y-[4px]
            ">

                            {/* GLASS SHINE */}
                            <span className="
                absolute top-0 left-[-150%]
                w-[70%] h-full
                bg-gradient-to-r
                from-transparent via-white/40 to-transparent
                rotate-[20deg]
                transition-all duration-[800ms] ease-out
                group-hover:left-[160%]
                pointer-events-none
              " />

                            {/* IMAGE – BIG HERO STYLE */}

                            <img
                                src={p.img}
                                alt={p.name}
                                className="
    w-full h-[320px] sm:h-[360px] md:h-[400px]
  object-contain scale-110 md:scale-125

    bg-white
    transition-transform duration-700 ease-out
    group-hover:scale-105
  "
                            />




                            {/* Bottom glass fade */}
                            <div className="
                absolute inset-x-0 bottom-0
                h-16
                bg-gradient-to-t
                from-white/40
                to-transparent
              " />

                            {/* TITLE */}
                            <p className="
                absolute bottom-4 w-full
                text-center text-base
                font-bold text-[#0A2540]
                bg-white/80 backdrop-blur-sm
                py-2
              ">
                                {p.name}
                            </p>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    );
};

export default ProductsSlider;

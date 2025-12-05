import React from "react";
import { Link } from "react-router-dom";
import { categoriesData } from "../data/productsData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "./productsGrid.css";

const ProductsGrid = () => {
    return (




        <section className="w-full bg-[#F7FBFF] pb-20 px-6 sm:px-10 lg:px-20">

            {categoriesData.map((cat, ci) => {

                // Split category products into 2 rows
                const mid = Math.ceil(cat.products.length / 2);
                const row1 = cat.products.slice(0, mid);
                const row2 = cat.products.slice(mid);

                return (
                    <div key={ci} className="mb-16 mt-10">

                        {/* Category Title */}
                        <h2
                            className="
                                text-2xl sm:text-3xl font-bold mb-6
                                text-[#0A2540]
                                border-l-4 border-[#3A8DFF] pl-3
                            "
                        >
                            {cat.title}
                        </h2>

                        {/* ---------- ROW 1 SLIDER ---------- */}
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            spaceBetween={20}
                            slidesPerView={4}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                            }}
                            className="mb-8"
                        >
                            {row1.map((p, i) => (
                                <SwiperSlide key={i}>
                                    <ProductCard p={p} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* ---------- ROW 2 SLIDER ---------- */}
                        {row2.length > 0 && (
                            <Swiper
                                modules={[Navigation]}
                                navigation
                                spaceBetween={20}
                                slidesPerView={4}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 4 },
                                }}
                            >
                                {row2.map((p, i) => (
                                    <SwiperSlide key={i}>
                                        <ProductCard p={p} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                    </div>
                );
            })}

        </section>
    );
};


/* ===================================================== */
/* ================= PRODUCT CARD ====================== */
/* ===================================================== */

const ProductCard = ({ p }) => {
    return (


        <div
            className="
                bg-white rounded-xl overflow-hidden
                shadow-md hover:shadow-xl
                transition-all duration-500 ease-out
                relative flex flex-col
                h-full min-h-[360px]
            "
        >

            {/* PRODUCT CODE */}
            {p.code && (
                <span
                    className="
                        absolute top-3 right-3 z-10
                        bg-gradient-to-r
                        from-[#3A8DFF] to-[#32D3C8]
                        text-white text-[11px] font-semibold
                        px-2 py-[2px]
                        rounded-md shadow"
                >
                    {p.code}
                </span>
            )}

            {/* PRODUCT IMAGE */}
            {p.img && (
                <div className="relative overflow-hidden h-44">
                    <img
                        src={p.img}
                        alt={p.name}
                        className="
                            w-full h-full object-contain bg-white
                            transition-transform duration-700
                            hover:scale-110
                        "
                    />
                </div>
            )}

            {/* PRODUCT CONTENT */}
            <div className="p-5 flex flex-col flex-grow">

                <h3 className="font-semibold text-[#0A2540]">
                    {p.name}
                </h3>

                <p className="
                    text-sm text-gray-600 mt-1
                    line-clamp-2
                ">
                    {p.desc}
                </p>

                {/* CTA locked at bottom */}
                <div className="mt-auto">
                    <Link
                        to={`/product/${p.slug}`}
                        className="
                            inline-block mt-4
                            bg-gradient-to-r
                            from-[#3A8DFF] to-[#32D3C8]
                            text-white text-sm font-semibold
                            px-4 py-2
                            rounded-md
                            shadow hover:shadow-lg
                            transition-all duration-300
                            w-full text-center
                        "
                    >
                        View Details →
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default ProductsGrid;

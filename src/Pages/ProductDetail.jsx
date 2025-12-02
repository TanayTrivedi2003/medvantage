import React from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { CheckCircle, MessageCircle, ArrowLeft } from "lucide-react";
import { categoriesData } from "../data/productsData";

const ProductDetail = () => {

    const { slug } = useParams();

    const product = categoriesData
        .flatMap(cat => cat.products)
        .find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="py-20 text-center text-xl">
                Product not found
            </div>
        );
    }

    return (

        <section className="w-full bg-[#F7FBFF] py-16 px-6 sm:px-10 lg:px-20">

            {/* Back */}
            <Link
                to="/products"
                className="inline-flex items-center gap-2 mb-8 text-[#3A8DFF] hover:underline"
            >
                <ArrowLeft size={18} />
                Back to Products
            </Link>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* ✅ LEFT — IMAGES */}
                <div>

                    <Swiper
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop
                        modules={[Autoplay]}
                        className="rounded-3xl overflow-hidden shadow-xl"
                    >
                        {(product.images?.length ? product.images : [product.img]).map((img, i) => (

                            <SwiperSlide key={i}>

                                <div className="relative group overflow-hidden bg-white">

                                    {/* Product Code Badge */}
                                    {product.code && (
                                        <span className="
                      absolute top-4 right-4 z-20
                      bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8]
                      text-white text-xs font-bold
                      px-3 py-1 rounded-md shadow
                    ">
                                            {product.code}
                                        </span>
                                    )}

                                    {/* Shine layer */}
                                    <span
                                        className="
                      absolute top-0 left-[-130%]
                      w-[70%] h-full
                      bg-gradient-to-r
                      from-transparent via-white/40 to-transparent
                      rotate-[20deg]
                      transition-all duration-700 ease-out
                      group-hover:left-[160%]
                    "
                                    ></span>

                                    <img
                                        src={img}
                                        alt={product.name}
                                        className="
                      w-full h-[360px] sm:h-[420px]
                      object-contain bg-white
                      scale-110
                      transition-transform duration-700 ease-out
                      group-hover:scale-125
                    "
                                    />

                                </div>

                            </SwiperSlide>

                        ))}
                    </Swiper>

                </div>

                {/* ✅ RIGHT — DETAILS */}
                <div>

                    {/* Name */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540]">
                        {product.name}
                    </h1>

                    {/* ✅ Product Code under title */}
                    {product.code && (
                        <p className="mt-1 text-sm font-semibold text-[#3A8DFF]">
                            Product Code: {product.code}
                        </p>
                    )}

                    {/* Intro */}
                    <p className="mt-4 text-gray-600 max-w-xl">
                        {product.intro}
                    </p>

                    {/* FEATURES */}
                    <h3 className="mt-8 mb-3 text-lg font-bold text-[#0A2540]">
                        Key Features
                    </h3>

                    <ul className="space-y-2">
                        {product.features.map((f, i) => (
                            <li key={i} className="flex gap-2 text-gray-700">
                                <CheckCircle className="text-[#32D3C8] mt-1" size={18} />
                                {f}
                            </li>
                        ))}
                    </ul>

                    {/* SPECS */}
                    <h3 className="mt-10 mb-3 text-lg font-bold text-[#0A2540]">
                        Specifications
                    </h3>

                    <div className="bg-white rounded-xl shadow-md border overflow-hidden">
                        <table className="w-full text-sm">
                            <tbody>
                                {Object.entries(product.specs).map(([k, v], i) => (
                                    <tr key={i} className="border">
                                        <td className="p-3 font-medium w-[40%] bg-gray-50">{k}</td>
                                        <td className="p-3">{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* APPLICATION */}
                    <h3 className="mt-8 mb-2 text-lg font-bold text-[#0A2540]">
                        Application
                    </h3>

                    <p className="text-gray-600 max-w-xl">
                        {product.application}
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-10">

                        <a
                            href={`https://wa.me/918299522798?text=${encodeURIComponent(
                                `Hello, I want details about ${product.name} (${product.code}).`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
    flex-1 flex items-center justify-center gap-2
    bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8]
    text-white py-3 rounded-xl font-semibold
    hover:shadow-xl transition
  "
                        >
                            <MessageCircle size={18} />
                            WhatsApp Enquiry
                        </a>



                        <button
                            className="
                flex-1 border-2 border-[#3A8DFF]
                text-[#3A8DFF] py-3 rounded-xl
                font-semibold
                hover:bg-[#3A8DFF] hover:text-white
                transition
              "
                        >
                            Request Quote
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductDetail;

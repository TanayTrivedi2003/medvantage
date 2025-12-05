import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"
const ProductsPreview = () => {
    const products = [
        {
            img: "./bed1.jpg",
            name: "ICU Bed",
            desc: "Advanced ICU bed with modern adjustable features.",
        },
        {
            img: "./patientsMonitor.jpg",
            name: "Patient Monitor",
            desc: "High accuracy vitals monitoring system.",
        },
        {
            img: "./wheelchair.jpg",
            name: "Wheelchair",
            desc: "Lightweight and highly durable wheelchair.",
        },
        {
            img: "./benchChair.jpg",
            name: "Emergency Trolley",
            desc: "Multi-purpose medical emergency trolley.",
        },
    ];

    return (
        <section id="products"
            className="w-full py-16 px-6 sm:px-10 lg:px-20 bg-repeat"
            style={{
                backgroundImage: "url('./productbg.png')",
                backgroundSize: "800px",     // ⭐ image size small
            }}
        >

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
                Our{" "}
                <span className="bg-linear-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                    Products
                </span>
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {products.map((p, i) => (
                    <div
                        key={i}
                        className="bg-[#F7FBFF] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-100"
                    >
                        <img
                            src={p.img}
                            alt={p.name}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />

                        <div className="p-5">
                            <h3 className="text-lg font-bold text-[#0A2540]">{p.name}</h3>
                            <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Products Button */}
            <div className="text-center mt-10">
                <Link
                    to="/products"
                    className="inline-flex items-center gap-2 bg-linear-to-r 
               from-[#3A8DFF] to-[#32D3C8] text-white font-semibold px-6 py-3 
               rounded-lg shadow-md hover:shadow-xl hover:scale-[1.04] 
               transition-all duration-300"
                >
                    More Products <FaArrowRight />
                </Link>
            </div>
        </section>
    );
};

export default ProductsPreview;

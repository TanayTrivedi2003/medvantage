import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";
import { categoriesData } from "../data/productsData";

import "./productsGrid.css";

const ProductsGrid = () => {

    const [activeProduct, setActiveProduct] = useState(null);

    return (

        <section className="w-full bg-[#F7FBFF] pb-20 px-6 sm:px-10 lg:px-20">

            {categoriesData.map((cat, ci) => (

                <div key={ci} className="mb-16">

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

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                        {cat.products.map((p, pi) => (

                            <div
                                key={pi}
                                data-aos="zoom-in"
                                data-aos-delay={pi * 70}
                                className="
                  bg-white rounded-xl
                  relative overflow-hidden group
                  shadow-md hover:shadow-xl
                  hover:-translate-y-[4px]
                  transition-all duration-500 ease-out
                "
                            >

                                {/* ✅ Product Code Chip */}
                                {p.code && (
                                    <span className="
                    absolute top-3 right-3 z-20
                    bg-gradient-to-r
                    from-[#3A8DFF] to-[#32D3C8]
                    text-white text-[11px] font-semibold
                    px-2 py-[2px]
                    rounded-md shadow
                  ">
                                        {p.code}
                                    </span>
                                )}

                                {/* IMAGE + SHINE EFFECT */}
                                {p.img && (
                                    <div className="relative overflow-hidden shine-wrapper group">

                                        <img
                                            src={p.img}
                                            alt={p.name}
                                            className="
                        w-full h-44
                        object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-110
                      "
                                        />

                                    </div>
                                )}

                                {/* CONTENT */}
                                <div className="p-5">

                                    <h3 className="font-bold text-[#0A2540]">
                                        {p.name}
                                    </h3>

                                    <p className="text-sm text-gray-600 mt-1">
                                        {p.desc}
                                    </p>

                                    {/* CTA */}
                                    <Link
                                        to={`/product/${p.slug}`}
                                        className="
                      inline-block mt-4
                      bg-gradient-to-r
                      from-[#3A8DFF] to-[#32D3C8]
                      text-white text-sm font-semibold
                      px-4 py-2 rounded-md
                      shadow hover:shadow-lg
                      transition-all duration-300 ease-out
                    "
                                    >
                                        View Details →
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            ))}

            {/* Optional Modal (for later use) */}
            <ProductModal
                product={activeProduct}
                onClose={() => setActiveProduct(null)}
            />

        </section>
    );
};

export default ProductsGrid;

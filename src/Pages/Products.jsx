// src/Pages/Products.jsx
import React from "react";
import ProductsSlider from "../components/ProductsSlider";
import ProductsGrid from "../components/ProductsGrid";

const Products = () => {
    return (
        <section className="w-full bg-[#F7FBFF] min-h-screen pb-20">
            {/* Top spacing / heading */}
            <div className="px-6 sm:px-10 lg:px-20 pt-10">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] mb-2">
                    Our Products
                </h1>
                <p className="text-gray-600">
                    Browse MedVantage hospital furniture, equipment & instruments.
                </p>
            </div>

            {/* Slider */}
            <ProductsSlider />

            {/* Grid */}
            <ProductsGrid />
        </section>
    );
};

export default Products;

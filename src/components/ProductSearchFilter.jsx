import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductSearchFilter = ({ onSearch, onCategoryChange }) => {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const categories = [
        "All",
        "Hospital Beds",
        "Wheelchairs",
        "Walkers",
        "OT Furniture",
        "Trolleys",
        "Sinks & Basins",
        "OT Accessories",
        "Machinery",
    ];

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearch(val);
        onSearch(val);
    };

    const handleCategory = (e) => {
        const val = e.target.value;
        setCategory(val);
        onCategoryChange(val);
    };

    return (
        <section
            data-aos="fade-up"
            className="w-full bg-[#F5FAFF] py-8 px-6 sm:px-10 lg:px-20"
        >
            <div className="max-w-7xl mx-auto">

                {/* Filter Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-4 items-center">

                    {/* SEARCH INPUT */}
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search product..."
                        className="
              w-full md:w-[60%]
              px-4 py-3
              rounded-xl border border-blue-200
              focus:outline-none
              focus:ring-2 focus:ring-[#32D3C8]
              transition-all
              text-gray-700
            "
                    />

                    {/* CATEGORY DROPDOWN */}
                    <select
                        value={category}
                        onChange={handleCategory}
                        className="
              w-full md:w-[40%]
              px-4 py-3 rounded-xl
              border border-blue-200
              bg-white
              focus:outline-none
              focus:ring-2 focus:ring-[#32D3C8]
              transition-all
              text-gray-700
              cursor-pointer
            "
                    >
                        {categories.map((cat, i) => (
                            <option key={i} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
        </section>
    );
};

export default ProductSearchFilter;

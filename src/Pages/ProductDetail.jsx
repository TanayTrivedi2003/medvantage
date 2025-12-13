




import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { categoriesData } from "../data/productsData";
import { FaWhatsapp, FaShareAlt, FaArrowLeft, FaCheck, FaStar } from "react-icons/fa";

const ProductDetails = () => {
    const { slug } = useParams();
    const [activeTab, setActiveTab] = useState("specs");

    const product = categoriesData
        .flatMap(cat => cat.products)
        .find(p => p.slug === slug);

    // Only single image — clean and simple
    const productImages = [product?.img];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
                Product Not Found
            </div>
        );
    }

    // Share Handler
    const handleShare = async () => {
        const shareData = {
            title: product.name,
            text: `Check out this product: ${product.name}`,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
            }
        } catch (err) {
            console.log("Share cancelled");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">

            {/* PAGE HEADER */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600 flex gap-2">
                            <Link to="/" className="hover:text-blue-600">Home</Link>
                            ›
                            <Link to="/products" className="hover:text-blue-600">Products</Link>
                            ›
                            <span className="text-blue-600 font-medium">{product.name}</span>
                        </div>

                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                            In Stock
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10">

                {/* BACK BUTTON */}
                <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:shadow transition mb-6"
                >
                    <FaArrowLeft />Back to Products
                </Link>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT IMAGE */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-10 group">
                        <img
                            src={productImages[0]}
                            alt={product.name}
                            className="w-full h-96 object-contain animate-fade-in transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-10 group flex items-center justify-center">
                        <img
                            src={productImages[0]}
                            alt={product.name}
                            className="max-h-96 max-w-full object-contain animate-fade-in transition-transform duration-700 group-hover:scale-105"
                        />
                    </div> */}


                    {/* RIGHT PRODUCT INFO */}
                    <div className="space-y-6">

                        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

                        {/* Ratings */}
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map(i => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                            <span className="text-sm text-gray-600">(24 reviews)</span>
                        </div>

                        <p className="text-gray-700 text-lg">{product.intro}</p>

                        {/* BADGES */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[
                                { icon: "🚚", text: "Free Delivery" },
                                { icon: "🛡️", text: "1 Year Warranty" },
                                { icon: "🔧", text: "Durable Build" },
                                { icon: "🏥", text: "Hospital Grade" },
                            ].map((b, i) => (
                                <div key={i} className="bg-white border rounded-xl p-3 text-center">
                                    <div className="text-xl">{b.icon}</div>
                                    <div className="text-xs mt-1 font-medium">{b.text}</div>
                                </div>
                            ))}
                        </div>

                        {/* FEATURES */}
                        <div className="p-6 bg-blue-50 rounded-xl">
                            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                                <FaCheck className="text-green-500" /> Key Features
                            </h3>

                            <ul className="space-y-2">
                                {product.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <button
                                onClick={handleShare}
                                className="flex items-center justify-center gap-3 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                            >
                                <FaShareAlt /> Share Product
                            </button>

                            <a
                                href={`https://wa.me/917275233309?text=${encodeURIComponent(
                                    `Hello! I'm interested in: ${product.name}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
                            >
                                <FaWhatsapp /> WhatsApp Quote
                            </a>
                        </div>
                    </div>
                </div>

                {/* TABS */}
                <div className="mt-12">
                    <div className="flex gap-2 border-b pb-2">
                        {["specs", "description", "applications"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 rounded-t-lg font-medium transition 
                                ${activeTab === tab
                                        ? "bg-white border border-b-0 text-blue-600"
                                        : "hover:bg-blue-50 text-gray-600"
                                    }`}
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* TAB CONTENT */}
                    <div className="p-6 bg-white rounded-b-xl shadow">

                        {activeTab === "specs" && (
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(product.specs).map(([k, v], i) => (
                                    <div key={i} className="p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-semibold mb-1">{k}</h4>
                                        <p className="text-gray-700">{v}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "description" && (
                            <p className="text-gray-700 leading-relaxed">{product.desc}</p>
                        )}

                        {activeTab === "applications" && (
                            <p className="text-gray-700 leading-relaxed">{product.application}</p>
                        )}

                    </div>
                </div>
            </div>

            {/* Animation CSS */}
            <style jsx>{`
                @keyframes fadeIn {
                    0% { opacity: 0; transform: scale(0.95); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.7s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ProductDetails;

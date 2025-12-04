import React from "react";
import { useParams } from "react-router-dom";
import { categoriesData } from "../data/productsData";
import { Link } from "react-router-dom";

const ProductDetails = () => {

    const { slug } = useParams();

    const product = categoriesData
        .flatMap(cat => cat.products)
        .find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="p-20 text-center text-xl text-red-500">
                Product not found
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
                alert("✅ Product link copied!");
            }
        } catch (err) {
            console.log("Share cancelled");
        }
    };

    return (

        <section className="bg-[#F7FBFF] px-6 sm:px-12 lg:px-20 py-16">


            {/* BACK BUTTON */}
            <Link
                to="/products"
                data-aos="fade-right"
                className="
    inline-flex items-center gap-2
    mb-6 px-5 py-2.5
    bg-white text-[#0A2540] font-semibold
    rounded-full border border-gray-300
    shadow hover:shadow-lg

    transition-all duration-300 ease-out
    hover:-translate-y-[2px] hover:scale-[1.03]
  "
            >
                ← Back to Products
            </Link>

            {/* ====================== TOP SECTION ====================== */}
            <div
                data-aos="fade-up"
                className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-md"
            >

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-xl group">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="
              w-full h-[360px] object-contain bg-white
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
                    />

                    {/* Shine */}
                    <div className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            translate-x-[-100%]
            group-hover:translate-x-[100%]
            transition-transform duration-[1200ms]
          " />

                </div>

                {/* INFO PANEL */}
                <div>

                    <h1
                        data-aos="fade-right"
                        className="text-3xl font-bold text-[#0A2540]"
                    >
                        {product.name}
                    </h1>

                    <p
                        data-aos="fade-right"
                        data-aos-delay="100"
                        className="text-gray-600 mt-2 leading-relaxed"
                    >
                        {product.intro}
                    </p>

                    {/* KEY FEATURES */}
                    <h3
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="mt-5 text-xl font-semibold text-[#0A2540]"
                    >
                        Key Features
                    </h3>

                    <ul
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="list-disc list-inside mt-3 space-y-2 text-gray-700"
                    >
                        {product.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>

                    {/* APPLICATION */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mt-5"
                    >
                        <h3 className="text-xl font-semibold text-[#0A2540] mb-1">
                            Application
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                            {product.application}
                        </p>
                    </div>

                </div>
            </div>


            {/* ====================== BOTTOM ====================== */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* ---------- SPECIFICATIONS ---------- */}
                <div
                    data-aos="fade-up"
                    className="bg-white p-8 rounded-2xl shadow-md
                     hover:shadow-xl transition-all duration-500"
                >
                    <h2 className="text-xl font-bold text-[#0A2540] mb-4">
                        Specifications
                    </h2>

                    <div className="grid grid-cols-2 gap-y-3 text-gray-700">
                        {Object.entries(product.specs).map(([k, v], i) => (
                            <React.Fragment key={i}>
                                <p className="font-semibold">{k}</p>
                                <p>{v}</p>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* ---------- CTA ZONE ---------- */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="flex flex-col justify-center gap-6"
                >

                    {/* WHATSAPP CTA */}
                    <a
                        href={`https://wa.me/918299522798?text=Hi, I’m interested in ${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              relative overflow-hidden
              bg-[#25D366] text-white font-bold
              py-4 rounded-xl text-center
              shadow-md

              hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03]
              transition-all duration-300 ease-out
            "
                    >
                        <span className="relative z-10 text-lg">💬 Chat on WhatsApp</span>

                        {/* Pulse Glow */}
                        <span className="
              absolute inset-0 opacity-0
              group-hover:opacity-100
              bg-white/10
              animate-pulse
            " />
                    </a>


                    {/* SHARE CTA */}
                    <button
                        onClick={handleShare}
                        className="
              bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8]
              text-white font-bold
              py-4 rounded-xl text-center
              shadow-md

              hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03]
              transition-all duration-300 ease-out
            "
                    >
                        🔗 Share this Product
                    </button>

                </div>

            </div>

        </section>
    );
};

export default ProductDetails;

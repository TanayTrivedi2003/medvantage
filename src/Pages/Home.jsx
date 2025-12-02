import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductsPreview from "../components/ProductsPreview";
import Contact from "../components/Contact";

import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatsAppFloat from "../components/whatsAppFloat";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <ProductsPreview />
            <Contact />

            {/* ✅ FLOATING GLOBAL BUTTONS (HOME TEST) */}

        </>
    );
};

export default Home;

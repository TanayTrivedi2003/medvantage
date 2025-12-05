import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/About";
import ProductsPreview from "../components/ProductsPreview";
import Contact from "../components/Contact";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(
                location.hash.replace("#", "")
            );

            element?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <ProductsPreview />
            <Contact />
        </>
    );
};

export default Home;

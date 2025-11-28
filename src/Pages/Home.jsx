import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductsPreview from "../components/ProductsPreview";
import AboutExtra from "../components/AboutExtra";
import Contact from "../components/Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";
const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <ProductsPreview />
            <Contact />
            <ScrollToTopButton />

        </>
    );
};

export default Home;

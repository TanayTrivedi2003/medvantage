import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Contact from "../components/Contact";
const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;

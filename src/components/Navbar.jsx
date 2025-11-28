import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <header className="relative shadow-lg sticky top-0 z-50">


            {/* ⭐ NAVBAR CONTENT */}
            <nav className="relative bg-white/70 backdrop-blur-md max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">

                    <div onClick={() => navigate("/")}>
                        <img src="./src/assets/navLogo.png" alt="Logo" className="h-12" />
                    </div>
                    <div onClick={() => navigate("/")}>

                        <span className="text-xl font-bold text-[#050B13]">MediTech Solutions</span>
                    </div>

                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 font-semibold ">


                    <li>
                        <button
                            // onClick={() => document.getElementById("hero")?.scrollIntoView({
                            //     behavior: "smooth"
                            // })}
                            onClick={() => navigate("/")}
                            className="text-[#3A8DFF] transition-all duration-300 hover:text-[#0155b0] hover:drop-shadow-sm"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => document.getElementById("about")?.scrollIntoView({
                                behavior: "smooth"
                            })}
                            className="text-[#3A8DFF] transition-all duration-300 hover:text-[#0155b0] hover:drop-shadow-sm"
                        >
                            About Us
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => document.getElementById("products")?.scrollIntoView({
                                behavior: "smooth"
                            })}
                            className="text-[#3A8DFF] transition-all duration-300 hover:text-[#0155b0] hover:drop-shadow-sm"
                        >
                            Products
                        </button>
                    </li>


                    <li>

                        <a
                            className="bg-linear-to-r from-[#3A8DFF] to-[#32D3C8] text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:from-[#62AFFF] hover:to-[#5BE2D4] hover:scale-105 hover:shadow-lg"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[#0073E6] text-3xl p-2 rounded-lg"
                >
                    {open ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/95 backdrop-blur-md px-6 py-4 border-t border-blue-100">

                    <ul className="flex flex-col gap-4 text-[#004A99] font-medium">

                        {/* Home */}
                        <li>
                            <button
                                onClick={() => {
                                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                                    setOpen(false);
                                }}
                                className="py-2 block text-[#3A8DFF] hover:text-[#0155b0]"
                            >
                                Home
                            </button>
                        </li>

                        {/* About Us */}
                        <li>
                            <button
                                onClick={() => {
                                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                                    setOpen(false);
                                }}
                                className="py-2 block text-[#3A8DFF] hover:text-[#0155b0]"
                            >
                                About Us
                            </button>
                        </li>

                        {/* Products */}
                        <li>
                            <button
                                onClick={() => {
                                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                                    setOpen(false);
                                }}
                                className="py-2 block text-[#3A8DFF] hover:text-[#0155b0]"
                            >
                                Products
                            </button>
                        </li>

                        {/* Services */}
                        <li>
                            <button
                                onClick={() => {
                                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                                    setOpen(false);
                                }}
                                className="py-2 block text-[#3A8DFF] hover:text-[#0155b0]"
                            >
                                Services
                            </button>
                        </li>

                        <li>
                            <a
                                onClick={() => setOpen(false)}
                                className="w-full text-center bg-linear-to-r from-[#3A8DFF] to-[#32D3C8]
                                text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition block"
                            >
                                Contact Us
                            </a>
                        </li>

                    </ul>

                    {/* <ul className="flex flex-col gap-4 font-medium">


                        <li><a onClick={() => setOpen(false)} className="py-2 block  text-[#3A8DFF]  hover:text-[#0155b0] ">About Us</a></li>
                        <li>
                            <button
                                onClick={() => {
                                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                                    setOpen(false);
                                }}
                                className="py-2 block  text-[#3A8DFF]  hover:text-[#0155b0] "
                            >
                                Products
                            </button>
                        </li>
                        <li><a onClick={() => setOpen(false)} className="py-2 block  text-[#3A8DFF]  hover:text-[#0155b0] ">Services</a></li>



                    </ul> */}
                </div>
            )}
        </header>
    );
};

export default Navbar;

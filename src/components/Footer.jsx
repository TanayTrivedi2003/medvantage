import React from "react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const goToSection = (id) => {
        navigate(`/#${id}`);
    };


    return (
        <footer className="bg-[#083E50] text-white pt-16 pb-8 px-6 sm:px-10 lg:px-20 mt-20">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* LOGO + ABOUT */}
                <div>
                    <div className="flex items-center gap-1 mb-4">
                        <img
                            src="/navLogo.png"
                            alt="Logo"
                            loading="eager"
                            fetchpriority="high"
                            width="140"
                            height="40"
                            className="h-10 w-auto object-contain"
                        />

                        <h2 className=" font-bold tracking-wide">MedVantage</h2>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed ">
                        Delivering reliable, modern & innovative medical equipment
                        to hospitals and healthcare centers across India.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 mt-5">
                        <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <FaFacebookF size={16} />
                        </a>
                        <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <FaInstagram size={16} />
                        </a>
                        <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <FaLinkedinIn size={16} />
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS */}

                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

                    <ul className="space-y-3 text-gray-300">

                        <li>
                            <button
                                onClick={() => goToSection("about")}
                                className="hover:text-[#32D3C8] transition"
                            >
                                About Us
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => goToSection("products")}
                                className="hover:text-[#32D3C8] transition"
                            >
                                Products
                            </button>
                        </li>



                        <li>
                            <button
                                onClick={() => goToSection("contact")}
                                className="hover:text-[#32D3C8] transition"
                            >
                                Contact Us
                            </button>
                        </li>

                    </ul>
                </div>


                {/* PRODUCTS */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Top Products</h3>

                    <ul className="space-y-3 text-gray-300">

                        <li>
                            <button
                                onClick={() => navigate("/products")}
                                className="hover:text-[#32D3C8] transition"
                            >
                                Hospital Beds
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => navigate("/products")}
                                className="hover:text-[#32D3C8] transition"
                            >
                                ICU Equipment
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => navigate("/products")}
                                className="hover:text-[#32D3C8] transition"
                            >
                                Wheelchairs
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => navigate("/products")}
                                className="hover:text-[#32D3C8] transition"
                            >
                                Surgical Tools
                            </button>
                        </li>

                    </ul>
                </div>


                {/* CONTACT */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

                    <div className="flex items-start gap-3 mb-3">
                        <MdLocationPin size={20} className="text-[#32D3C8]" />
                        <p className="text-gray-300 text-sm">Kanpur, India</p>
                    </div>

                    <div className="flex items-center  gap-3 mb-3">
                        <MdPhone size={20} className="text-[#32D3C8]" />
                        <div className="flex-col">
                            <p className="text-gray-300 text-sm">+91 9506989899</p>
                            <p className="text-gray-300 text-sm">+91 7275233309</p>
                        </div>

                    </div>

                    <div className="flex items-start gap-3">
                        <MdEmail size={20} className="text-[#32D3C8]" />
                        <div>
                            <p className="text-gray-300 text-sm">healthcaremedvantage@gmail.com</p>
                            <p className="text-gray-300 text-sm">kamlesh@medvantage.com</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM COPYRIGHT BAR */}
            <div className="border-t border-white/20 mt-12 pt-5 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Brandmate Digital & Verelios. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

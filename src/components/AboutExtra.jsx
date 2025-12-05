import React, { useEffect } from "react";
import { FaHeartbeat, FaUserShield, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";
import { MdVerified, MdSupportAgent } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutExtra = () => {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <section className="w-full bg-[#F5FAFF] py-20 px-6 sm:px-10 lg:px-20">

            {/* ⭐ MISSION SECTION */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-10">
                Our <span className="bg-linear-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">Mission</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-blue-50">
                    <FaHeartbeat className="text-[#3A8DFF] text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Enhance Patient Care</h3>
                    <p className="text-gray-600">Equipment designed to deliver better and safer patient outcomes.</p>
                </div>

                {/* Card 2 */}
                <div data-aos="fade-up" data-aos-delay="150" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-blue-50">
                    <FaUserShield className="text-[#3A8DFF] text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Trusted Quality</h3>
                    <p className="text-gray-600">We follow international safety and manufacturing standards.</p>
                </div>

                {/* Card 3 */}
                <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-blue-50">
                    <FaLightbulb className="text-[#3A8DFF] text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Continuous Innovation</h3>
                    <p className="text-gray-600">We upgrade our technology to support modern medical needs.</p>
                </div>
            </div>

            {/* ⭐ WHY CHOOSE US */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mt-20 mb-12">
                Why <span className="bg-linear-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">Choose Us</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <div data-aos="zoom-in" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
                    <MdSupportAgent className="text-[#32D3C8] text-5xl mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-[#0A2540]">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Always available for hospitals & emergency setups.</p>
                </div>

                <div data-aos="zoom-in" data-aos-delay="120" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
                    <FaTools className="text-[#32D3C8] text-5xl mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-[#0A2540]">Expert Technicians</h3>
                    <p className="text-gray-600 text-sm">Highly trained engineers & biomedical experts.</p>
                </div>

                <div data-aos="zoom-in" data-aos-delay="240" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
                    <FaCheckCircle className="text-[#32D3C8] text-5xl mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-[#0A2540]">Certified Products</h3>
                    <p className="text-gray-600 text-sm">ISO, CE & WHO standard approved products.</p>
                </div>

                <div data-aos="zoom-in" data-aos-delay="360" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
                    <MdVerified className="text-[#32D3C8] text-5xl mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-[#0A2540]">10,000+ Clients</h3>
                    <p className="text-gray-600 text-sm">Trusted by hospitals across the country.</p>
                </div>
            </div>

            {/* ⭐ CERTIFICATIONS */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mt-20 mb-12">
                Our{" "}
                <span className="bg-linear-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                    Certifications
                </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

                <div data-aos="fade-right" className="bg-white p-8 rounded-2xl shadow-md border border-blue-50 hover:shadow-xl transition text-center">
                    <MdVerified className="text-[#3A8DFF] text-6xl mx-auto mb-3" />
                    <h3 className="font-bold text-lg">ISO 9001:2015</h3>
                    <p className="text-gray-600 text-sm">Quality Management Certified</p>
                </div>

                <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-md border border-blue-50 hover:shadow-xl transition text-center">
                    <FaCheckCircle className="text-[#3A8DFF] text-6xl mx-auto mb-3" />
                    <h3 className="font-bold text-lg">CE Certified</h3>
                    <p className="text-gray-600 text-sm">European Safety Standards</p>
                </div>

                <div data-aos="fade-left" className="bg-white p-8 rounded-2xl shadow-md border border-blue-50 hover:shadow-xl transition text-center">
                    <FaTools className="text-[#3A8DFF] text-6xl mx-auto mb-3" />
                    <h3 className="font-bold text-lg">Biomedical Tested</h3>
                    <p className="text-gray-600 text-sm">Fully compliant with WHO guidelines</p>
                </div>

            </div>
        </section>
    );
};

export default AboutExtra;

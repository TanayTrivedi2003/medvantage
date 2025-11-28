import React from "react";
import { MdPrecisionManufacturing } from "react-icons/md";
import { FaProcedures, FaTools, FaHospitalSymbol } from "react-icons/fa";
import AboutExtra from "./AboutExtra";
const About = () => {
    return (
        <section id="about" className="w-full bg-[#F7FBFF] py-16 px-6 sm:px-10 lg:px-20">

            {/* Title with Gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12">
                About{" "}
                <span className="bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                 MedVantage
                </span>
            </h2>

            {/* About Section */}
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                 MedVantage is committed to delivering advanced, safe, and reliable medical equipment
                    to hospitals, clinics, and healthcare institutions across India.
                    Our focus is on innovation, quality, and long-term trust — ensuring that every healthcare
                    professional has access to technology that supports excellent patient care.
                </p>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-6">
                    With years of industry experience and a mission to make high-quality healthcare more accessible,
                    we provide equipment that meets international standards and enhances hospital efficiency.
                    From modern ICU setups to essential medical tools, our solutions are designed to make a real impact
                    in the medical world.
                </p>
            </div>


            {/* Main Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center pt-20">

                {/* Card 1 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    className="flex flex-col items-center"
                >
                    <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] transition-transform duration-300 hover:scale-110">
                        <div className="p-4 bg-white rounded-full">
                            <MdPrecisionManufacturing size={35} className="text-[#3A8DFF]" />
                        </div>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-[#0A2540]">Diagnostic Equipment</h3>
                    <p className="text-gray-600 text-sm mt-1">Reliable healthcare diagnostics.</p>
                </div>

                {/* Card 2 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="flex flex-col items-center"
                >
                    <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] transition-transform duration-300 hover:scale-110">
                        <div className="p-4 bg-white rounded-full">
                            <FaTools size={35} className="text-[#3A8DFF]" />
                        </div>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-[#0A2540]">Surgical Tools</h3>
                    <p className="text-gray-600 text-sm mt-1">High-precision surgical tools.</p>
                </div>

                {/* Card 3 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-col items-center"
                >
                    <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] transition-transform duration-300 hover:scale-110">
                        <div className="p-4 bg-white rounded-full">
                            <FaHospitalSymbol size={35} className="text-[#3A8DFF]" />
                        </div>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-[#0A2540]">Hospital Furniture</h3>
                    <p className="text-gray-600 text-sm mt-1">Durable hospital furniture.</p>
                </div>

                {/* Card 4 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="450"
                    className="flex flex-col items-center"
                >
                    <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] transition-transform duration-300 hover:scale-110">
                        <div className="p-4 bg-white rounded-full">
                            <FaProcedures size={35} className="text-[#3A8DFF]" />
                        </div>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-[#0A2540]">ICU & Support Systems</h3>
                    <p className="text-gray-600 text-sm mt-1">Advanced ICU systems.</p>
                </div>

            </div>


            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center gap-12 mt-16 text-center">
                <div>
                    <h3 className="text-4xl font-extrabold bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                        20+ Years
                    </h3>
                    <p className="text-gray-600">Industry Experience</p>
                </div>

                <div>
                    <h3 className="text-4xl font-extrabold bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                        10,000+
                    </h3>
                    <p className="text-gray-600">Satisfied Clients</p>
                </div>
            </div>

            {/* Support List */}
            <div className="flex flex-row  items-center justify-center gap-3 mt-10 text-gray-600 text-lg">
                <p>✔ 24/7 Technical Support</p>
                <p>✔ Installation & Training</p>
                <p>✔ ISO & CE Certified Products</p>
            </div>

            <AboutExtra />


        </section >
    );
};

export default About;

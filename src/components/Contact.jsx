import React from "react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-[#F7FBFF] py-20 px-6 sm:px-10 lg:px-20"
        >
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6">
                Get In{" "}
                <span className="bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                    Touch With Us
                </span>
            </h2>

            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                We're here to support hospitals and healthcare centers with reliable
                medical equipment and dedicated customer support.
            </p>

            {/* GRID - IMAGE + FORM */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

                {/* LEFT — IMAGE */}
                <div className="flex items-center justify-center">
                    <img
                        src="./src/assets/contact.jpg"
                        className="w-full h-[450px] object-cover rounded-xl shadow-lg"
                        alt="contact"
                    />
                </div>

                {/* RIGHT — FORM */}
                <div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all ">
                        <h3 className="text-2xl font-bold mb-6 text-[#0A2540]">
                            Send a Message
                        </h3>

                        <form className="flex flex-col gap-5">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3A8DFF] outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3A8DFF] outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3A8DFF] outline-none"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3A8DFF] outline-none"
                            ></textarea>

                            <button
                                className="mt-3 bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ⭐ CONTACT DETAILS — FULL WIDTH (Horizontal Row) */}
            <div className="bg-white p-6 rounded-xl shadow-md max-w-6xl mx-auto ">

                <div className="flex flex-wrap items-center justify-center gap-5">

                    {/* Phone */}
                    <div className="flex items-center gap-3 min-w-[220px]  linear">
                        <div className="p-2.5 rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] text-white shadow-sm">
                            <MdPhone size={20} />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-[#0A2540]">Phone</h3>
                            <p className="text-gray-600 text-sm">+91 98765 43210</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 min-w-[220px]  linear">
                        <div className="p-2.5 rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] text-white shadow-sm">
                            <MdEmail size={20} />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-[#0A2540]">Email</h3>
                            <p className="text-gray-600 text-sm">support@meditech.com</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-3 min-w-[220px]  linear">
                        <div className="p-2.5 rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] text-white shadow-sm">
                            <MdLocationPin size={20} />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-[#0A2540]">Location</h3>
                            <p className="text-gray-600 text-sm">Mumbai, India</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center gap-3 min-w-[220px] linear">
                        <div className="p-2.5 rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] text-white shadow-sm">
                            <FaRegClock size={18} />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-[#0A2540]">Hours</h3>
                            <p className="text-gray-600 text-sm">Mon–Sat · 9AM–7PM</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;

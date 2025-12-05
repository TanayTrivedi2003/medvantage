import React, { useState } from "react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MessageCircle } from "lucide-react";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "917275233309";

        const text =
            `New Website Enquiry

          Name: ${name}
          Phone: ${phone}
         Email: ${email}

         Message:${message}`;

        // ✅ Detect device
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        // ✅ Build WhatsApp link based on device
        const waLink = isMobile
            ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
            : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;

        // ✅ Open WhatsApp
        window.open(waLink, "_blank");

        // ✅ Reset form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        // ✅ Show success alert
        setAlert(true);
        setTimeout(() => setAlert(false), 4000);
    };


    return (
        <section
            id="contact"
            className="w-full bg-[#F7FBFF] py-20 px-6 sm:px-10 lg:px-20"
        >

            {/* ✅ SUCCESS ALERT */}
            {alert && (
                <div className="fixed z-[999] top-5 right-5 bg-green-500 text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                    <MessageCircle size={18} />
                    Message sent successfully on WhatsApp!
                </div>
            )}

            {/* TITLE */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6">
                Get In{" "}
                <span className="bg-linear-to-r from-[#3A8DFF] to-[#32D3C8] bg-clip-text text-transparent">
                    Touch With Us
                </span>
            </h2>

            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                We're here to support hospitals and healthcare centers with reliable
                medical equipment and dedicated customer support.
            </p>

            {/* FORM + IMAGE GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

                {/* IMAGE */}
                <div className="flex items-center justify-center">
                    <img
                        src="./contact.jpg"
                        alt="contact"
                        className="
                          w-full h-[420px]
                          object-cover
                          rounded-3xl
                          shadow-xl
                          hover:scale-105
                          transition-transform duration-500
                        "
                    />
                </div>

                {/* FORM */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all">

                    <h3 className="text-2xl font-bold mb-6 text-[#0A2540]">
                        Send a Message
                    </h3>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-style"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-style"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input-style"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="input-style resize-none"
                        />

                        <button
                            type="submit"
                            className="
                              flex items-center justify-center gap-2
                              bg-linear-to-r from-[#3A8DFF] to-[#32D3C8]
                              text-white font-semibold
                              px-6 py-3
                              rounded-xl shadow-md
                              hover:scale-105 hover:shadow-xl
                              transition-all
                            "
                        >
                            <MessageCircle size={18} />
                            Send Message
                        </button>

                    </form>

                </div>
            </div>

            {/* ✅ CONTACT DETAILS */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <ContactCard
                        icon={<MdPhone size={22} />}
                        label="Phone"
                        value={`+91 7275233309 \n +91 9506989899`}
                    />


                    <ContactCard
                        icon={<MdEmail size={22} />}
                        label="Email"
                        value={`healthcaremedvantage@gmail.com `}
                    />


                    <ContactCard
                        icon={<MdLocationPin size={22} />}
                        label="Location"
                        value="Kanpur, India"
                    />

                    <ContactCard
                        icon={<FaRegClock size={20} />}
                        label="Hours"
                        value="Mon–Sat · 9AM–7PM"
                    />

                </div>
            </div>

        </section>
    );
};

/* ✅ CONTACT CARD */
const ContactCard = ({ icon, label, value }) => (
    <div
        className="
          bg-white
          p-6
          rounded-2xl
          shadow-md hover:shadow-xl
          transition-all duration-300
          flex items-center gap-4
          min-h-[90px]
          break-words
          overflow-hidden
        "
    >

        {/* ICON */}
        <div
            className="
              p-3 rounded-full
              bg-linear-to-r from-[#3A8DFF] to-[#32D3C8]
              text-white shadow
              shrink-0
            "
        >
            {icon}
        </div>

        {/* TEXT */}
        <div className="flex-1 min-w-0">
            <h3 className="text-[14px] font-semibold text-[#0A2540] mb-1 truncate">
                {label}
            </h3>

            <p className="text-sm text-gray-600 break-all leading-relaxed">
                {value}
            </p>
        </div>

    </div>
);

export default Contact;

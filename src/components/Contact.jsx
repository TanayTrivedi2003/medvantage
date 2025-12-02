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

    // ✅ SUBMIT HANDLER
    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "918299522798"; // ✅ your number

        const text = `
New Website Enquiry

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
`;

        const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(waLink, "_blank");

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

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
                <div className="
          fixed z-[999]
          top-5 right-5
          bg-green-500
          text-white
          px-6 py-4
          rounded-xl
          shadow-xl
          flex items-center gap-3
          animate-bounce
        ">
                    <MessageCircle size={18} />
                    Message sent successfully on WhatsApp!
                </div>
            )}

            {/* Title */}
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

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

                {/* LEFT IMAGE */}
                <div className="flex items-center justify-center">
                    <img
                        src="./contact.jpg"
                        className="
              w-full h-[450px]
              object-cover rounded-3xl
              shadow-xl
              hover:scale-105 transition-transform duration-500
            "
                        alt="contact"
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
                bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8]
                text-white font-semibold
                px-6 py-3
                rounded-xl shadow-md
                hover:scale-105 hover:shadow-xl
                transition-all
              "
                        >
                            <MessageCircle size={18} /> Send Message
                        </button>

                    </form>
                </div>
            </div>

            {/* ✅ CONTACT DETAILS - PREMIUM */}
            <div className="max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <ContactCard icon={<MdPhone size={22} />} label="Phone" value="+91 98765 43210" />
                    <ContactCard icon={<MdEmail size={22} />} label="Email" value="healthcaremedvantage@gmail.com" />
                    <ContactCard icon={<MdLocationPin size={22} />} label="Location" value="Kanpur, India" />
                    <ContactCard icon={<FaRegClock size={20} />} label="Hours" value="Mon–Sat · 9AM–7PM" />

                </div>
            </div>

        </section>
    );
};

/* ✅ CARD COMPONENT */
const ContactCard = ({ icon, label, value }) => (
    <div className="
    bg-white
    p-6 rounded-2xl
    shadow-md hover:shadow-2xl
    hover:-translate-y-2
    transition-all duration-300
    flex items-center gap-4
  ">
        <div className="
      p-3 rounded-full
      bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8]
      text-white shadow
    ">
            {icon}
        </div>

        <div>
            <h3 className="text-[15px] font-semibold text-[#0A2540]">
                {label}
            </h3>
            <p className="text-sm text-gray-600">
                {value}
            </p>
        </div>
    </div>
);

export default Contact;

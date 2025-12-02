import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {

    const phone = "917309180407"; // ✅ WhatsApp number (without +)
    const message = "Hello, I am interested in your MedVantage medical equipment. Please share more details.";

    const encodedMessage = encodeURIComponent(message);

    return (
        <a
            href={`https://wa.me/${phone}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
        fixed bottom-20 right-5 z-[999]
        w-14 h-14
        bg-[#25D366]
        text-white
        flex items-center justify-center
        rounded-full
        shadow-xl
        hover:shadow-2xl hover:scale-110
        transition-all duration-300
      "
            title="Chat on WhatsApp"
        >
            <MessageCircle size={26} />
        </a>
    );
};

export default WhatsAppFloat;

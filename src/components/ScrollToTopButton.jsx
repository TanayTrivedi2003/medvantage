import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    // Show button when scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="
                        fixed bottom-6 right-6
                        bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8]
                        text-white p-4 rounded-full shadow-xl
                        hover:scale-110 hover:shadow-2xl
                        transition-all duration-300
                        z-50
                    "
                >
                    <FaArrowUp size={18} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-4 w-12 h-12 flex items-center justify-center bg-linear-to-br from-[#3A8DFF] to-[#32D3C8] text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 z-50"
                >
                    <FaArrowUp size={18} />
                </button>

            )}
        </>
    );
};

export default ScrollToTopButton;

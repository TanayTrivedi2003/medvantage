import React from "react";
import { X } from "lucide-react";

const ProductModal = ({ product, onClose }) => {

    if (!product) return null;

    return (
        <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">

            <div className="bg-white max-w-3xl w-full rounded-2xl overflow-y-auto max-h-[90vh]">

                {/* Header */}
                <div className="flex justify-between items-center p-5 border-b">
                    <h2 className="text-xl font-bold text-[#0A2540]">
                        {product.name}
                    </h2>

                    <button onClick={onClose}>
                        <X className="w-6 h-6 text-gray-600 hover:text-red-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">

                    {/* Image */}
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-56 object-cover rounded-xl"
                    />

                    {/* Intro */}
                    <p className="text-gray-600">{product.intro}</p>

                    {/* FEATURES */}
                    <div>
                        <h3 className="font-semibold mb-2">Features</h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            {product.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* SPECIFICATIONS */}
                    <div>
                        <h3 className="font-semibold mb-2">Specifications</h3>

                        <table className="w-full text-sm border">
                            <tbody>
                                {Object.entries(product.specs).map(([key, val], i) => (
                                    <tr key={i} className="border">
                                        <td className="p-2 font-medium bg-gray-50">
                                            {key}
                                        </td>
                                        <td className="p-2">{val}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* APPLICATION */}
                    <div>
                        <h3 className="font-semibold mb-2">Application</h3>
                        <p className="text-gray-600">
                            {product.application}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            className="flex-1 text-center bg-gradient-to-r from-[#3A8DFF] to-[#32D3C8] text-white py-3 rounded-lg"
                        >
                            WhatsApp Enquiry
                        </a>

                        <button
                            className="flex-1 border border-[#3A8DFF] text-[#3A8DFF] py-3 rounded-lg hover:bg-[#3A8DFF] hover:text-white transition"
                        >
                            Request Quote
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductModal;

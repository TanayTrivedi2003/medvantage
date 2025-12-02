// src/data/productsData.js

const codeBaseMap = {
    "hospital-beds": 100,
    "wheelchairs-walkers": 200,
    "emergency-trolleys": 300,
    "ot-instruments": 500,
};

export const categoriesData = [
    {
        title: "Hospital Beds",
        slug: "hospital-beds",

        products: [
            {
                slug: "icu-electric-bed",
                name: "ICU Electric Bed",
                img: "/bed1.jpg",
                desc: "Motorized ICU bed with CPR + safety rails",

                intro:
                    "Advanced ICU motorized bed designed for patient comfort and critical care safety.",

                features: [
                    "3 motor electric adjustment",
                    "Backrest & knee elevation",
                    "CPR emergency function",
                    "SS safety rails",
                    "Central locking wheels"
                ],

                specs: {
                    Frame: "CRCA steel",
                    Finish: "Powder coated",
                    Controls: "Remote handset",
                    Castors: "125 mm central locking",
                },

                application:
                    "Used in ICUs and high dependency units for critical care patients."
            },

            {
                slug: "fowler-bed",
                name: "Fowler Bed",
                img: "/fowler.jpg",
                desc: "Manual bed with knee & back elevation",

                intro: "Reliable manual fowler bed for hospital wards.",

                features: ["Backrest elevation", "Knee rest support", "Durable CRCA frame"],

                specs: {
                    Frame: "CRCA steel",
                    Operation: "Manual",
                },

                application:
                    "Hospital wards and recovery rooms."
            },

            {
                slug: "semi-fowler-bed",
                name: "Semi Fowler Bed",
                img: "/bed2.jpg",
                desc: "Comfort hospital ward bed",

                intro: "Affordable semi-fowler bed for general medical wards.",

                features: ["Backrest lift", "Lightweight design"],

                specs: {
                    Frame: "CRCA steel",
                    Operation: "Manual",
                },

                application:
                    "Used in normal wards and recovery patient areas."
            }
        ]
    },

    {
        title: "Wheelchairs & Walkers",
        slug: "wheelchairs-walkers",

        products: [
            {
                slug: "wheel-chair",
                name: "Wheel Chair",
                img: "/wheelchair.jpg",
                desc: "Foldable lightweight wheelchair",

                intro: "Easy mobility wheelchair designed for patient comfort.",

                features: [
                    "Foldable design",
                    "Removable footrest",
                    "Durable seating"
                ],

                specs: {
                    Frame: "Aluminum",
                    Capacity: "120 KG",
                },

                application:
                    "For patient mobility support."
            },

            {
                slug: "patient-walker",
                name: "Patient Walker",
                img: "/walker.jpg",
                desc: "Height adjustable walker",

                intro: "Support walker for assisted rehabilitation.",

                features: [
                    "Adjustable height",
                    "Lightweight aluminum frame",
                ],

                specs: {
                    Material: "Aluminum",
                },

                application:
                    "Used during physiotherapy and patient recovery."
            }
        ]
    },

    {
        title: "Emergency & Patient Trolleys",
        slug: "emergency-trolleys",

        products: [
            {
                slug: "emergency-crash-trolley",
                name: "Emergency Crash Trolley",
                img: "/benchChair.jpg",
                desc: "Drawer trolley for emergencies",

                intro:
                    "Fully equipped crash cart for medical emergency response.",

                features: [
                    "Multiple storage drawers",
                    "Smooth rubber castors",
                    "Sturdy construction"
                ],

                specs: {
                    Material: "Steel",
                    Drawers: "3 Tier",
                },

                application:
                    "Emergency rooms and ICUs."
            },

            {
                slug: "stretcher-trolley",
                name: "Stretcher Trolley",
                img: "/stretcher.jpg",
                desc: "Mobile patient transfer trolley",

                intro:
                    "Lightweight stretcher trolley designed for smooth patient transport.",

                features: [
                    "Height adjustable",
                    "Lockable wheels",
                ],

                specs: {
                    Frame: "Steel",
                },

                application:
                    "Patient movement within hospitals."
            }
        ]
    },

    {
        title: "OT Instruments & Accessories",
        slug: "ot-instruments",

        products: [
            {
                slug: "dressing-drum",
                name: "Dressing Drum",
                img: "/wheelchair.jpg",
                desc: "SS Drum - all sizes available",

                intro:
                    "High quality stainless steel sterilization drum.",

                features: ["Multiple size options"],

                specs: {
                    Material: "Stainless Steel",
                },

                application:
                    "Sterilizing dressings and surgical materials."
            },

            {
                slug: "kidney-tray",
                name: "Kidney Tray",
                desc: "SS tray - multiple sizes",

                intro:
                    "Medical grade kidney trays in multiple sizes.",

                features: ["Autoclavable", "Lightweight"],

                specs: {
                    Material: "Stainless Steel",
                },

                application:
                    "Hospitals and surgical departments."
            },

            {
                slug: "sputum-mug",
                name: "Sputum Mug",
                desc: "Stainless steel mug",

                intro:
                    "Sputum mug for patient bedside use.",

                features: ["Autoclavable", "Durable"],

                specs: {
                    Material: "Stainless Steel",
                },

                application:
                    "General ward use."
            }
        ]
    },
];

/* ✅ AUTO ASSIGN MHA CODES */
categoriesData.forEach((category) => {
    const base = codeBaseMap[category.slug] || 900;

    category.products.forEach((product, index) => {
        product.code = `MHA-${base + index + 1}`;
    });
});

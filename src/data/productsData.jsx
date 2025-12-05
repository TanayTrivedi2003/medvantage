// src/data/productsData.js

const codeBaseMap = {
    "hospital-beds": 100,
    "wheelchairs-walkers": 200,
    "saline-stands-walking-aids": 300,
    "examination-couches-tables": 400,
    "labour-delivery-beds-tables": 500,
    "emergency-patient-trolleys": 600,
    "hospital-stools-foot-steps-utility-stands": 700,
    "commode-chairs-toileting-aids": 800,
    "ot-instruments": 900,
};

export const categoriesData = [
    {
        title: "Hospital Beds",
        slug: "hospital-beds",

        products: [
            {
                slug: "icu-electric-bed",
                name: "ICU Electric Bed ",
                img: "/bed101.jpg",
                desc: "Motorized ICU bed with CPR + safety rails",

                intro:
                    "Advanced ICU Electric Bed-ABS Panel & Collapsible Railing.",

                features: [
                    "Framemade of 16 gauge CRCA pipe",
                    "Perforated Top made of 18gauge CRCA sheet",
                    "Bed Mounted on 125mm Castors",
                    "Mattress Guard on all four Corners",
                    "Provision for IV Rod on all four corners",
                    "Railing Collapsible",
                    "Pre-treated & Powder coated",
                    "Position obtained: Hi-Low, Backrest, Knee rest,Trendlenburg / Reverse Trendlenburg",

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
                // MCA Product Code: MHC-102
                slug: "icu-mechanical-bed",
                name: "ICU Mechanical Bed",
                img: "/bed102.jpg",
                desc: "ICU Bed Mechanical - ABS Panels & Collapsible Railing",

                intro:
                    "Robust mechanical ICU bed engineered for dependable patient positioning through manual controls, offering durable construction and essential safety functionality for critical care environments.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "ABS detachable head & leg bows",
                    "Collapsible railing",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Hi-Low, Backrest, Knee rest, Trendelenburg / Reverse Trendelenburg"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "ABS detachable head & leg bows",
                    Operation: "Manual mechanical",
                    Castors: "125 mm",
                    Finish: "Powder coated"
                },

                application:
                    "Used in ICUs and critical care units for patient monitoring and post-operative management."
            },

            {
                // MCA Product Code: MHC-103
                slug: "icu-mechanical-bed-abs-railing",
                name: "ICU Mechanical Bed - ABS Railing",
                img: "/bed103.webp",
                desc: "ICU Bed Mechanical - ABS Panels & ABS Collapsible Railing",

                intro:
                    "Mechanical ICU bed equipped with ABS panels and collapsible ABS railings, designed for dependable manual positioning and essential safety in critical care environments.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "ABS detachable head & leg bows",
                    "ABS collapsible railing",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Hi-Low, Backrest, Knee rest, Trendelenburg / Reverse Trendelenburg"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "ABS detachable head & leg bows",
                    Railing: "ABS collapsible",
                    Operation: "Manual mechanical",
                    Castors: "125 mm",
                    Finish: "Powder coated"
                },

                application:
                    "Used in ICUs and critical care units for patient monitoring and treatment."
            },
            {
                // MCA Product Code: MHC-104
                slug: "icu-electric-bed-abs-railing",
                name: "ICU Electric Bed - ABS Railing",
                img: "/bed104.jpg",
                desc: "ICU Bed Electric - ABS Panels & ABS Collapsible Railing",

                intro:
                    "Electric ICU bed with ABS panels and collapsible ABS railings, designed to provide smooth motorized positioning along with essential safety features for advanced critical care environments.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "ABS detachable head & leg bows",
                    "ABS collapsible railing",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Hi-Low, Backrest, Knee rest, Trendelenburg / Reverse Trendelenburg"
                ],

                optionalFeatures: [
                    "CPR function on backrest section",
                    "Central braking castors",
                    "ACP control",
                    "Manual override"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "ABS detachable head & leg bows",
                    Railing: "ABS collapsible",
                    Operation: "Electric motorized",
                    Castors: "125 mm",
                    Finish: "Powder coated"
                },

                application:
                    "Used in ICUs and critical care units requiring electrically controlled patient positioning and enhanced safety."
            },
            {
                // MCA Product Code: MHC-105
                slug: "icu-mechanical-bed-ss-pipe-laminate-panel",
                name: "ICU Mechanical Bed - SS Pipe Laminate Panel",
                img: "/bed105.jpeg",
                desc: "ICU Bed Mechanical - SS Pipe Laminate Panel & Collapsible Railing",

                intro:
                    "Mechanical ICU bed constructed with SS pipe laminate panels and collapsible railings, designed for reliable manual positioning and safe patient handling in intensive care settings.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "Collapsible railings",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Hi-Low, Backrest, Knee rest, Trendelenburg / Reverse Trendelenburg"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "SS pipe laminate panels",
                    Railing: "Collapsible",
                    Operation: "Manual mechanical",
                    Castors: "125 mm",
                    Finish: "Powder coated"
                },

                application:
                    "Used in ICUs and critical care units where manual patient positioning and durable bed construction are required."
            },
            {
                // MCA Product Code: MHC-106
                slug: "icu-mechanical-bed-abs-panels",
                name: "ICU Mechanical Bed - ABS Panels",
                img: "/ICUMechanicalBedABSPanel.jpg",
                desc: "ICU Bed Mechanical - ABS Panels & Collapsible Railing",

                intro:
                    "Mechanical ICU bed fitted with ABS panels and collapsible safety railings, designed to provide reliable manual positioning and patient support in critical care environments.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "ABS detachable head & leg bows",
                    "Collapsible railing",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Hi-Low, Backrest, Knee rest, Trendelenburg / Reverse Trendelenburg"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "ABS detachable head & leg bows",
                    Railing: "Collapsible",
                    Operation: "Manual mechanical",
                    Castors: "125 mm",
                    Finish: "Powder coated"
                },

                application:
                    "Used in ICUs and critical care units for manual patient positioning and continuous patient care."
            },
            {
                // MCA Product Code: MHC-107
                slug: "fowler-bed-mechanical-abs-panels",
                name: "Fowler Bed Mechanical - ABS Panels",
                img: "/bed107.jpg",
                desc: "Fowler Bed Mechanical - ABS Panels with Optional Railings",

                intro:
                    "Mechanical Fowler bed fitted with ABS panels and designed for smooth manual positioning of backrest and knee rest, suitable for routine patient care in hospital wards.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "ABS detachable head & leg bows",
                    "Railing optional: Collapsible / Drop-down / ABS railing",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Backrest, Knee rest"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "ABS detachable head & leg bows",
                    Railing: "Optional (Collapsible / Drop-down / ABS)",
                    Operation: "Manual mechanical",
                    Castors: "125 mm",
                    Finish: "Powder coated"
                },

                application:
                    "Used in hospital wards and nursing care units for patient positioning and recovery support."
            },
            {
                // MCA Product Code: MHC-108
                slug: "fowler-bed-mechanical-ss-pipe-laminate-panels",
                name: "Fowler Bed Mechanical - SS Pipe Laminate Panels",
                img: "/bed108.webp",
                desc: "Fowler Bed Mechanical - SS Pipe Laminate Panels with Optional Railings",

                intro:
                    "Mechanical Fowler bed constructed with SS pipe and laminated panels, designed for dependable manual positioning of backrest and knee rest for daily hospital ward use.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "SS pipe with laminated board detachable head & leg bows",
                    "Railing optional: Collapsible / Drop-down",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Backrest, Knee rest"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "SS pipe with laminated board detachable head & leg bows",
                    Railing: "Optional (Collapsible / Drop-down)",
                    Operation: "Manual mechanical",
                    Castors: "125 mm",
                    Finish: "Powder coated"
                },

                application:
                    "Used in hospital wards and nursing facilities for patient positioning and recovery care."
            },
            {
                // MCA Product Code: MHC-109
                slug: "fowler-bed-mechanical-crc-sheet-panels",
                name: "Fowler Bed Mechanical - CRC Sheet Panels",
                img: "/bed109.webp",
                desc: "Fowler Bed Mechanical - CRC Sheet Panels with Optional Railings",

                intro:
                    "Mechanical Fowler bed constructed with CRC sheet panels, designed to provide dependable manual positioning of backrest and knee rest for day-to-day hospital ward applications.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "CRC sheet detachable head & leg bows",
                    "Railing optional: Collapsible / Drop-down",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Backrest, Knee rest"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "CRC sheet detachable head & leg bows",
                    Railing: "Optional (Collapsible / Drop-down)",
                    Operation: "Manual mechanical",
                    Castors: "125 mm",
                    Finish: "Powder coated"
                },

                application:
                    "Used in hospital wards and nursing care units for patient positioning and general recovery support."
            }, {
                // MCA Product Code: MHC-110
                slug: "fowler-bed-mechanical-abs-panels-abs-railing",
                name: "Fowler Bed Mechanical - ABS Panels & ABS Railing",
                img: "/bed110.webp",
                desc: "Fowler Bed Mechanical - ABS Panels with ABS Swing Away Side Railing",

                intro:
                    "Mechanical Fowler bed with ABS panels and swing-away ABS side railings, designed for easy manual positioning of backrest and knee rest while ensuring patient safety in ward environments.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "ABS swing-away side railing",
                    "Two locations for IV rod",
                    "Bed mounted on 100 mm diameter castors – two with brakes",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Backrest, Knee rest"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "ABS panels",
                    Railing: "ABS swing-away side railings",
                    Operation: "Manual mechanical",
                    Castors: "125 mm & 100 mm (two with brakes)",
                    Finish: "Powder coated"
                },

                application:
                    "Used in hospital wards and patient recovery units for comfortable manual positioning and safe daily care."
            },
            {
                // MCA Product Code: MHC-111
                slug: "fowler-bed-electric-abs-panels-abs-railing",
                name: "Fowler Bed Electric - ABS Panels & ABS Railing",
                img: "/bed111.webp",
                desc: "Fowler Bed Electric - ABS Panels & Collapsible ABS Railing",

                intro:
                    "Electric Fowler bed with ABS panels and collapsible side railings, designed to provide smooth powered positioning of backrest and knee rest with secure patient support for hospital ward care.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated CRC sheet top in four sections",
                    "Backrest & knee rest positions operated by electric actuators through hand remote control",
                    "ABS moulded head & foot panels",
                    "Collapsible railings",
                    "Telescopic IV rod with four locations",
                    "Bed mounted on 125 mm diameter castors – two with brakes",
                    "Pre-treated & powder-coated finish"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "Perforated CRC sheet (four section)",
                    Panels: "ABS moulded head & foot panels",
                    Railing: "Collapsible",
                    Operation: "Electric actuator controlled by remote handset",
                    Castors: "125 mm (two with brakes)",
                    Finish: "Powder coated"
                },

                application:
                    "Used in hospital wards and patient recovery areas requiring electrically assisted positioning and enhanced comfort."
            },
            {
                // MCA Product Code: MHC-112
                slug: "fowler-bed-mechanical-standard",
                name: "Fowler Bed Mechanical (Standard)",
                img: "/bed112.webp",
                desc: "Standard Mechanical Fowler Bed",

                intro:
                    "Standard mechanical Fowler bed designed with sturdy steel construction and manual positioning for routine patient care in hospital wards.",

                features: [
                    "Framework of strong and precise steel tubes mounted on 10 cm diameter swiveling castors",
                    "Four-section top made of perforated CRCA sheet with rest sections maneuvered by two separate screws",
                    "Tubular head and foot bows of unequal height with vertical tube supports",
                    "Provision for four saline locations",
                    "Pre-treated & powder-coated finish",
                    "Position obtained: Backrest, Knee rest"
                ],

                specs: {
                    Frame: "Steel tube framework",
                    Platform: "Perforated CRCA sheet (four section)",
                    Panels: "Tubular head & foot bows",
                    Operation: "Manual mechanical (screw adjustment)",
                    Castors: "10 cm swiveling castors",
                    Finish: "Powder coated"
                },

                application:
                    "Used in general wards and nursing care units for routine patient positioning and recovery support."
            },
            {
                // MCA Product Code: MHC-113
                slug: "semi-fowler-bed-mechanical-abs-panels-railing",
                name: "Semi Fowler Bed Mechanical - ABS Panels & Railing",
                img: "/bed113.webp",
                desc: "Semi Fowler Bed Mechanical - ABS Panels with Collapsible / Drop-down Railing",

                intro:
                    "Mechanical Semi Fowler bed with ABS panels and optional collapsible or drop-down railings, designed for dependable backrest positioning and daily patient care in hospital wards.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on 125 mm castors",
                    "Mattress guard on all four corners",
                    "Provision for IV rod on all four corners",
                    "ABS detachable head & leg bows",
                    "Railing: Collapsible / Drop-down",
                    "Pre-treated & epoxy powder-coated finish",
                    "Position obtained: Backrest",
                    "Also available electrically operated"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Panels: "ABS detachable head & leg bows",
                    Railing: "Collapsible / Drop-down",
                    Operation: "Manual mechanical (Electric version available)",
                    Castors: "125 mm",
                    Finish: "Epoxy powder coated"
                },

                application:
                    "Used in hospital wards and nursing facilities for standard patient positioning and comfort care."
            },
            {
                // MCA Product Code: MHC-114
                slug: "semi-fowler-bed-mechanical-abs-panels",
                name: "Semi Fowler Bed Mechanical - ABS Panels",
                img: "/bed114.webp",
                desc: "Semi Fowler Bed Mechanical - ABS Panels",

                intro:
                    "Mechanical Semi Fowler bed with ABS panels, designed for smooth manual backrest positioning and reliable comfort for routine patient care in hospital wards.",

                features: [
                    "Framework made of 16 gauge CRCA pipe instead of rectangular M.S. tube",
                    "Two-section top made of perforated M.S. sheet",
                    "Backrest position maneuvered by separate screw from foot end",
                    "ABS detachable head & legrest",
                    "Four locations for IV rod",
                    "Pre-treated & epoxy powder-coated finish",
                    "Position obtained: Backrest",
                    "Also available electrically operated"
                ],

                specs: {
                    Frame: "CRCA pipe (16 gauge)",
                    Platform: "Two-section perforated M.S. sheet",
                    Panels: "ABS detachable head & legrest",
                    Operation: "Manual mechanical (Electric version available)",
                    Castors: "As standard hospital fitment",
                    Finish: "Epoxy powder coated"
                },

                application:
                    "Used in hospital wards and nursing homes for basic patient positioning and daily comfort care."
            },

            {
                // MCA Product Code: MHC-115
                slug: "semi-fowler-bed-mechanical-ss-pipe-laminate-panel",
                name: "Semi Fowler Bed Mechanical - SS Pipe Laminate Panel",
                img: "/bed115.webp",
                desc: "Semi Fowler Bed Mechanical - SS Pipe Laminate Panel",

                intro:
                    "Mechanical Semi Fowler bed constructed with SS pipe laminate panels and designed for smooth manual backrest positioning for routine patient care in hospital wards.",

                features: [
                    "Framework made of 16 gauge CRCA pipe instead of rectangular M.S. tube",
                    "Two-section top made of perforated M.S. sheet",
                    "Backrest position maneuvered by separate screw from foot end",
                    "Four locations for IV rod",
                    "Pre-treated & epoxy powder-coated finish",
                    "Position obtained: Backrest"
                ],

                specs: {
                    Frame: "CRCA pipe (16 gauge)",
                    Platform: "Two-section perforated M.S. sheet",
                    Panels: "SS pipe laminate panels",
                    Operation: "Manual mechanical",
                    Castors: "As standard hospital fitment",
                    Finish: "Epoxy powder coated"
                },

                application:
                    "Used in hospital wards and nursing facilities for basic patient positioning and recovery support."
            },

            {
                // MCA Product Code: MHC-116
                slug: "semi-fowler-bed-mechanical-standard",
                name: "Semi Fowler Bed Mechanical (Standard)",
                img: "/bed116.webp",
                desc: "Semi Fowler Bed Mechanical - Standard",

                intro:
                    "Standard mechanical Semi Fowler bed designed for basic patient positioning and reliable daily use in general hospital wards.",

                features: [
                    "Framework made of 16 gauge CRCA pipe instead of rectangular M.S. tube",
                    "Two-section top made of perforated M.S. sheet",
                    "Backrest position maneuvered by separate screw from foot end",
                    "Four locations for IV rod",
                    "Finish: Epoxy powder coated"
                ],

                specs: {
                    Frame: "CRCA pipe (16 gauge)",
                    Platform: "Two-section perforated M.S. sheet",
                    Operation: "Manual mechanical",
                    Finish: "Epoxy powder coated"
                },

                application:
                    "Used in general wards and nursing homes for routine patient positioning and daily care support."
            },
            {
                // MCA Product Code: MHC-117
                slug: "plain-hospital-bed",
                name: "Plain Hospital Bed",
                img: "/bed117.webp",
                desc: "Standard Plain Hospital Bed",

                intro:
                    "Plain hospital bed designed with a simple and durable structure for basic patient accommodation and routine ward care.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on PVC stumps",
                    "Mattress guard on all four corners",
                    "Pre-treated & powder-coated finish",
                    "Tubular head & foot bows of unequal height",
                    "Four locations for IV rod"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Support: "PVC stumps",
                    Panels: "Tubular head & foot bows",
                    Operation: "Fixed (non-adjustable)",
                    Finish: "Powder coated"
                },

                application:
                    "Used in general wards and healthcare facilities for standard patient resting and accommodation."
            },
            {
                // MCA Product Code: MHC-118
                slug: "attendant-bed-general",
                name: "Attendant Bed - General",
                img: "/bed118.webp",
                desc: "Standard Attendant Bed",

                intro:
                    "General attendant bed designed for simple resting support with a strong and durable structure for hospital environments.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "Perforated top made of 18 gauge CRCA sheet",
                    "Bed mounted on PVC stumps",
                    "Mattress guard on all four corners",
                    "CRC pipe head & leg bows",
                    "Pre-treated & powder-coated finish"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Platform: "18 gauge perforated CRCA sheet",
                    Support: "PVC stumps",
                    Panels: "CRC pipe head & leg bows",
                    Operation: "Fixed (non-adjustable)",
                    Finish: "Powder coated"
                },

                application:
                    "Used as an attendant resting bed in hospital wards and patient care areas."
            },
            {
                // MCA Product Code: MHC-119
                slug: "attendant-bed-foam-padded",
                name: "Attendant Bed - Foam Padded",
                img: "/bed119.webp",
                desc: "Foam Padded Attendant Bed",

                intro:
                    "Foam-padded attendant bed designed to provide basic resting comfort with a compact and durable frame suitable for hospital environments.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "5 cm foam padded top covered with rexine",
                    "Legs fitted with PVC stumps",
                    "Pre-treated & powder-coated finish"
                ],

                specs: {
                    Frame: "CRCA steel (16 gauge)",
                    Top: "5 cm foam padded rexine-covered surface",
                    Support: "PVC stumps",
                    Operation: "Fixed (non-adjustable)",
                    Finish: "Powder coated"
                },

                application:
                    "Used as an attendant resting bed in hospital wards and patient care areas."
            },
            {
                // MCA Product Code: MHC-120
                slug: "attendant-bed-ss",
                name: "Attendant Bed - SS",
                img: "/bed120.webp",
                desc: "Stainless Steel Attendant Bed",

                intro:
                    "Stainless steel attendant bed designed for durability and easy maintenance, suitable for basic resting requirements in hospital environments.",

                features: [
                    "Frame made of 16 gauge SS pipe",
                    "Perforated top made of 18 gauge SS sheet",
                    "Bed mounted on PVC stumps",
                    "Optional head & foot bows"
                ],

                specs: {
                    Frame: "Stainless steel pipe (16 gauge)",
                    Platform: "18 gauge perforated SS sheet",
                    Support: "PVC stumps",
                    Panels: "Optional head & foot bows",
                    Operation: "Fixed (non-adjustable)"
                },

                application:
                    "Used as an attendant resting bed in healthcare facilities and hospital wards."
            }















        ]
    },

    {
        title: "Wheelchairs & Walkers",
        slug: "wheelchairs-walkers",

        products: [
            // {
            //     slug: "wheel-chair",
            //     name: "Wheel Chair",
            //     img: "/wheelchair201.png",
            //     desc: "Foldable lightweight wheelchair",

            //     intro: "Easy mobility wheelchair designed for patient comfort.",

            //     features: [
            //         "Foldable design",
            //         "Removable footrest",
            //         "Durable seating"
            //     ],

            //     specs: {
            //         Frame: "Aluminum",
            //         Capacity: "120 KG",
            //     },

            //     application:
            //         "For patient mobility support."
            // },

            {
                // MCA Product Code: MHC-201
                slug: "invalid-wheel-chair-folding",
                name: "Invalid Wheel Chair - Folding",
                img: "/wheelchair201.png",
                desc: "Folding invalid wheelchair for patient mobility",

                intro:
                    "Reliable folding invalid wheelchair designed to provide comfortable and stable mobility support with solid caster and rear wheels for everyday patient transportation needs.",

                features: [
                    "16\" seat with fixed armrest",
                    "Front 4\" solid castors",
                    "Rear 26\" solid wheels with brakes",
                    "Foldable frame for easy storage and transport"
                ],

                specs: {
                    Seat: "16 inch",
                    FrontCastors: "4 inch solid",
                    RearWheels: "26 inch solid with brakes",
                    Dimensions: "39.5\"L x 28\"W x 34\"H (Approx)"
                },

                application:
                    "Used for assisted patient mobility in hospitals, clinics, nursing homes, and home care settings."
            },
            {
                // MCA Product Code: MHC-202
                slug: "invalid-wheel-chair-non-folding-special",
                name: "Invalid Wheel Chair - Non Folding (Special)",
                img: "/wheelchair202.webp",
                desc: "Heavy duty non-folding wheelchair for enhanced stability",

                intro:
                    "Special non-folding invalid wheelchair designed for superior stability and long-term patient mobility, featuring cushioned seating and solid wheels for safe and comfortable transportation.",

                features: [
                    "17\" cushioned seat and back support",
                    "Fixed armrests",
                    "Front 5\" solid castors",
                    "Rear 26\" solid wheels with brakes",
                    "Rigid non-folding structure for enhanced durability"
                ],

                specs: {
                    Seat: "17 inch cushioned seat & back",
                    FrontCastors: "5 inch solid",
                    RearWheels: "26 inch solid with brakes",
                    Dimensions: "41\"L x 28\"W x 33\"H (Approx)"
                },

                application:
                    "Used for reliable patient mobility support in hospitals, rehabilitation centers, nursing homes, and home care environments."
            },
            {
                // MCA Product Code: MHC-203
                slug: "patient-walker-front-wheel",
                name: "Patient Walker - Front Wheel Type",
                img: "/walker203.webp",
                desc: "Height adjustable patient walker with front wheels",

                intro:
                    "Lightweight and durable patient walker designed to provide stable walking support during rehabilitation and daily mobility, featuring smooth front wheels and adjustable height for user comfort.",

                features: [
                    "Lightweight aluminum frame",
                    "Dual front wheels for smooth movement",
                    "Anti-slip rubber grips on handles",
                    "Rear rubber stoppers for stability",
                    "Height adjustable design"
                ],

                specs: {
                    Frame: "Aluminum",
                    Wheels: "Front dual wheels",
                    Stoppers: "Rear rubber tips",
                    HeightAdjustment: "Yes"
                },

                application:
                    "Used for assisted walking support during physiotherapy, rehabilitation, elderly care, and post-surgery recovery."
            },
            {
                // MCA Product Code: MHC-204
                slug: "patient-walker-standard",
                name: "Patient Walker - Standard (Without Wheels)",
                img: "/walker204.jpg",
                desc: "Lightweight standard patient walker without wheels",

                intro:
                    "Classic lightweight patient walker designed to provide firm and stable walking support for elderly patients and individuals undergoing physiotherapy, featuring height adjustability and strong non-slip legs for safe indoor mobility.",

                features: [
                    "Lightweight aluminum frame",
                    "Height adjustable handles",
                    "Anti-slip rubber tips on all legs",
                    "Wide support base for enhanced stability",
                    "Foldable design for easy storage"
                ],

                specs: {
                    Frame: "Aluminum",
                    Wheels: "Without wheels",
                    HeightAdjustment: "Yes",
                    LegTips: "Anti-slip rubber tips"
                },

                application:
                    "Used for assisted walking support during rehabilitation therapy, elderly care, post-surgery recovery, and indoor mobility assistance."
            },





        ]
    },

    {
        title: "Saline Stands & Walking Aids",
        slug: "saline-stands-walking-aids",


        products: [
            {
                // MCA Product Code: MHC-901
                slug: "saline-stand-ark",
                name: "Saline Stand – Heavy Base Fixed Model",
                img: "/saline-stand901.jpg",
                desc: "Four-leg saline stand with heavy base",

                intro:
                    "Heavy-duty four-leg saline stand designed for stable hanging of IV bottles during bedside infusion in ward and clinical environments, ensuring reliable load support and smooth height adjustability.",

                features: [
                    "Four prong stainless steel hooks",
                    "Height adjustable telescopic pole",
                    "Four-leg heavy polymer base",
                    "Stable construction for bedside use"
                ],

                specs: {
                    Hooks: "4 hooks",
                    Pole: "Stainless steel telescopic",
                    Base: "4-leg heavy polymer base",
                    HeightAdjustment: "Yes"
                },

                application:
                    "Used for intravenous fluid infusion in hospitals, clinics, nursing homes, and patient bedside care."
            },
            {
                // MCA Product Code: MHC-902
                slug: "saline-stand",
                name: "Saline Stand – Powder Coated Heavy Base",
                img: "/saline-stand902.webp",
                desc: "Saline stand with coated heavy base",

                intro:
                    "Adjustable saline stand featuring a powder-coated heavy base designed for daily clinical IV usage, offering dependable balance, smooth height operation, and long service durability.",

                features: [
                    "Four stainless steel bottle hooks",
                    "Telescopic height adjustable pole",
                    "Powder coated heavy base",
                    "Durable corrosion-resistant finish"
                ],

                specs: {
                    Hooks: "4 hooks",
                    Pole: "Stainless steel telescopic",
                    Base: "Powder coated heavy base",
                    Finish: "Anti-corrosion coating",
                    HeightAdjustment: "Yes"
                },

                application:
                    "Used for IV fluid hangs in hospitals, clinics, and patient rooms."
            },
            {
                // MCA Product Code: MHC-903
                slug: "saline-stand",
                name: "Saline Stand – Castor Wheel Mobile Model",

                img: "/saline-stand904.jpg",
                desc: "Saline stand on castors for mobility",

                intro:
                    "Mobile saline stand fitted with smooth-rolling castor wheels for flexible bedside infusion support, enabling easy patient repositioning and controlled movement within treatment areas.",

                features: [
                    "Four stainless steel hooks",
                    "Height adjustable telescopic pole",
                    "Five-leg base with medical-grade castors",
                    "Smooth rolling mobility for bedside use"
                ],

                specs: {
                    Hooks: "4 hooks",
                    Pole: "Stainless steel telescopic",
                    Base: "5-leg base with castors",
                    Mobility: "Yes",
                    HeightAdjustment: "Yes"
                },

                application:
                    "Used in ICUs, wards, and emergency rooms requiring mobile IV fluid stands."
            },
            {
                // MCA Product Code: MHC-904
                slug: "saline-stand",
                name: "Saline Stand – Lightweight Mobile Model",

                img: "/slaine-stand903.webp",
                desc: "Lightweight mobile saline stand",

                intro:
                    "Compact lightweight saline stand with castor wheels designed for convenient bedside infusion support and easy repositioning, suitable for general wards and outpatient care areas.",

                features: [
                    "Four stainless steel IV bottle hooks",
                    "Adjustable telescopic pole",
                    "Lightweight wheeled base",
                    "Smooth and silent castors"
                ],

                specs: {
                    Hooks: "4 hooks",
                    Pole: "Stainless steel telescopic",
                    Base: "Lightweight wheeled base",
                    Mobility: "Yes",
                    HeightAdjustment: "Yes"
                },

                application:
                    "Used for IV fluid administration in hospitals, nursing homes, and outpatient facilities."
            },

            {
                // MCA Product Code: MHC-905
                slug: "elbow-stick-basic",
                name: "Elbow Stick – Basic Model",
                img: "/elbow-stick905.webp",
                desc: "Lightweight height adjustable elbow stick",

                intro:
                    "Ergonomically designed basic elbow stick providing dependable walking support and balancing assistance for elderly patients and individuals undergoing rehabilitation.",

                features: [
                    "Lightweight aluminum body",
                    "Comfortable ergonomic handle",
                    "Height adjustable shaft",
                    "Anti-slip rubber tip for stability",
                    "Easy to carry and use"
                ],

                specs: {
                    Material: "Aluminum",
                    HeightAdjustment: "Yes",
                    Tip: "Anti-slip rubber",
                    Grip: "Ergonomic molded handle"
                },

                application:
                    "Used for walking assistance during physiotherapy, elderly support, post-surgery mobility, and general balance aid."
            },
            {
                // MCA Product Code: MHC-906
                slug: "elbow-stick-forearm-support",
                name: "Elbow Stick – Forearm Support Model",
                img: "/elbow-stick906.webp",
                desc: "Forearm support elbow stick with cuff grip",

                intro:
                    "Advanced elbow stick with forearm support cuff designed to improve stability and control by distributing body weight evenly during assisted walking.",

                features: [
                    "Lightweight aluminum construction",
                    "Forearm support cuff with adjustable grip",
                    "Height adjustable shaft",
                    "Rubber tip for enhanced floor grip",
                    "Comfortable ergonomic handle"
                ],

                specs: {
                    Material: "Aluminum",
                    HeightAdjustment: "Yes",
                    Support: "Forearm cuff support",
                    Tip: "Anti-slip rubber"
                },

                application:
                    "Commonly used by patients requiring additional forearm stability during mobility rehabilitation and post-operative recovery."
            },
            {
                // MCA Product Code: MHC-907
                slug: "crutches-underarm",
                name: "Underarm Crutches – Adjustable Model",
                img: "/Crutches907.jpg",
                desc: "Height adjustable underarm crutches",

                intro:
                    "Strong and lightweight underarm crutches engineered to provide secure body weight support during assisted mobility for injury recovery and temporary walking assistance.",

                features: [
                    "Aluminum lightweight frame",
                    "Adjustable height settings",
                    "Padded underarm support for comfort",
                    "Anti-slip rubber tips",
                    "Ergonomic hand grips"
                ],

                specs: {
                    Frame: "Aluminum",
                    HeightAdjustment: "Yes",
                    ArmRest: "Padded underarm support",
                    Tips: "Rubber anti-slip tips"
                },

                application:
                    "Used by patients during fracture recovery, leg injury rehabilitation, post-surgical mobility assistance, and physiotherapy care."
            },
            {
                // MCA Product Code: MHC-908
                name: "Crutches – Heavy Four Base (Fixed)",
                slug: "crutches-heavy-four-base",

                img: "/crutches908.jpg",
                desc: "Non-adjustable four base walking stick for extra balance support",

                intro:
                    "Heavy-duty non-adjustable walking crutch designed with a wide four-base support system to deliver maximum stability and confident mobility for elderly users and rehabilitation patients.",

                features: [
                    "Wide four-base design with rubber tips",
                    "Strong non-adjustable metal shaft",
                    "Comfort ergonomic hand grip",
                    "Heavy base construction for superior balance",
                    "Anti-slip floor contact tips"
                ],

                specs: {
                    Material: "Metal",
                    Base: "Four base with rubber tips",
                    HeightAdjustment: "No (Fixed)",
                    Handle: "Ergonomic grip"
                },

                application:
                    "Used for stable walking support in elderly care, physiotherapy recovery, injury rehabilitation, and assisted mobility."
            },

            {
                // MCA Product Code: MHC-909
                name: "Crutches – Heavy Four Base",
                slug: "crutches-heavy-four-base",

                img: "/crutches909.jpg",
                desc: "Heavy base quad cane for superior stability",

                intro:
                    "Heavy-duty quad cane offering increased load stability through its reinforced base and four-point support system, ideal for users requiring strong balance assistance.",

                features: [
                    "Reinforced quad base",
                    "Lightweight metal construction",
                    "Comfortable contoured handle",
                    "Height adjustable shaft",
                    "Anti-slip rubber tips"
                ],

                specs: {
                    Material: "Metal",
                    Base: "Heavy reinforced quad base",
                    HeightAdjustment: "Yes",
                    Tips: "Rubber anti-slip tips"
                },

                application:
                    "Used by patients needing additional stability during walking rehabilitation and elderly mobility assistance."
            },
            {
                // MCA Product Code: MHC-910
                name: "Crutches – Offset Four Base",
                slug: "crutches-offset-four-base",

                img: "/crutches910.webp",
                desc: "Offset walking stick with quad base support",

                intro:
                    "Offset quad cane engineered to align body weight directly over the base for improved posture control and stable movement during assisted walking.",

                features: [
                    "Offset handle design for posture alignment",
                    "Four-tip quad base",
                    "Comfort molded hand grip",
                    "Height adjustable metal shaft",
                    "Anti-slip rubber tips"
                ],

                specs: {
                    Material: "Metal",
                    Handle: "Offset ergonomic grip",
                    Base: "Quad base",
                    HeightAdjustment: "Yes"
                },

                application:
                    "Ideal for gait training, recovery therapy, and balance support in elderly patients."
            },
            {
                // MCA Product Code: MHC-911
                slug: "crutches-walking-stick-adjustable",
                name: "Crutches – Walking Stick Adjustable",

                img: "/crutches911.jpg",
                desc: "Height adjustable lightweight walking stick",

                intro:
                    "Lightweight adjustable walking stick designed to provide comfortable daily mobility support and improved balance for elderly users and patients during rehabilitation.",

                features: [
                    "Lightweight aluminum body",
                    "Height adjustable shaft",
                    "Comfort grip handle",
                    "Anti-slip rubber base tip",
                    "Compact and easy to carry"
                ],

                specs: {
                    Material: "Aluminum",
                    HeightAdjustment: "Yes",
                    Handle: "Comfort grip handle",
                    Tip: "Anti-slip rubber"
                },

                application:
                    "Used for daily walking assistance, elderly support, balance improvement, and post-surgery rehabilitation."
            },
            {
                // MCA Product Code: MHC-912
                slug: "crutches-curved-handle-strap",
                name: "Crutches – Curved Handle with Strap",

                img: "/crutches912.jpg",
                desc: "Adjustable curved handle walking stick with wrist strap",

                intro:
                    "Curved-handle walking crutches fitted with a wrist safety strap, designed to provide comfortable grip, controlled balance support, and reliable daily mobility assistance for elderly users and patients in rehabilitation.",

                features: [
                    "Curved ergonomic handle for comfortable grip",
                    "Built-in wrist safety strap",
                    "Lightweight aluminum shaft",
                    "Height adjustable mechanism",
                    "Anti-slip rubber tip for floor grip"
                ],

                specs: {
                    Material: "Aluminum",
                    Handle: "Curved ergonomic handle",
                    Strap: "Wrist safety strap",
                    HeightAdjustment: "Yes",
                    Tip: "Rubber anti-slip tip"
                },

                application:
                    "Used for everyday assisted walking, balance support for elderly users, post-surgery mobility aid, and physiotherapy rehabilitation."
            }








        ]
    },
    {
        title: "Examination Couches & Tables",
        slug: "examination-couches-tables",


        products: [
            {
                // MCA Product Code: MHC-91
                slug: "examination-table-2-section",
                name: "Examination Table – 2 Section Adjustable",

                img: "/table401.jpg",
                desc: "Two-section examination couch with adjustable headrest",

                intro:
                    "Professional two-section examination table designed for comfortable patient assessment with adjustable backrest support, durable frame construction, and cushioned rexine top for daily clinical usage.",

                features: [
                    "Two-section cushioned top with adjustable headrest",
                    "Frame made of CRC steel tubes",
                    "5 cm foam mattress with rexine upholstery",
                    "PVC stumps fitted on legs for floor protection",
                    "Pre-treated and epoxy powder coated finish",
                    "Available in Stainless Steel option"
                ],

                specs: {
                    Length: "183 cm (Approx)",
                    Width: "60 cm",
                    Height: "81 cm",
                    Frame: "CRC steel tubes",
                    Cushion: "5 cm foam with rexine cover",
                    FootSupport: "PVC stumps",
                    Finish: "Epoxy powder coated",
                    Variant: "MS & SS options available"
                },

                application:
                    "Used in hospitals, clinics, nursing homes, diagnostic centers, and OPD examination rooms."
            },
            {
                // MCA Product Code: MHC-914
                slug: "examination-table-plain",
                name: "Examination Table – Plain Model",

                img: "/table402.webp",
                desc: "Fixed flat-top examination couch",

                intro:
                    "Sturdy plain examination table built for routine patient examinations, featuring a fixed cushioned surface, strong CRC steel frame, and easy-to-clean rexine upholstery for long-term clinical use.",

                features: [
                    "Fixed flat cushioned top",
                    "Frame constructed from CRC steel tubes",
                    "5 cm foam padding with rexine covering",
                    "PVC stumps fitted on legs",
                    "Pre-treated epoxy powder coated finish",
                    "Available in Stainless Steel option"
                ],

                specs: {
                    Length: "183 cm (Approx)",
                    Width: "60 cm",
                    Height: "81 cm",
                    Frame: "CRC steel tubes",
                    Cushion: "5 cm foam with rexine cover",
                    FootSupport: "PVC stumps",
                    Finish: "Epoxy powder coated",
                    Variant: "MS & SS options available"
                },

                application:
                    "Used in hospitals, private clinics, nursing homes, and OPD examination rooms for general patient check-ups."
            },

            {
                // MCA Product Code: MHC-915
                slug: "attendant-bed-cum-chair",
                name: "Attendant Bed Cum Chair",

                img: "/table403.webp",
                desc: "Convertible attendant bed cum chair unit",

                intro:
                    "Multi-purpose attendant bed cum chair designed to function both as a comfortable seating chair and an extended resting bed, making it ideal for patient attendants in hospital wards and recovery areas.",

                features: [
                    "Frame made of 16 gauge CRCA pipe",
                    "6 mm cushioned top mattress",
                    "Mounted on PVC stumps & castors",
                    "CRC pipe hand rest",
                    "Smooth conversion from chair to bed",
                    "Pre-treated & powder-coated finish"
                ],

                specs: {
                    Frame: "CRCA steel pipe (16 gauge)",
                    Mattress: "6 mm cushioned top",
                    Mobility: "PVC stumps & castors",
                    ArmRest: "CRC pipe hand rest",
                    Finish: "Powder coated"
                },

                application:
                    "Used by patient attendants in hospital wards, nursing care units and waiting zones for sitting and rest support."
            },
            {
                // MCA Product Code: MHC-916
                slug: "examination-couch-storage-model",
                name: "Examination Couch – Storage Cabinet Model",

                img: "/table405.jpeg",
                desc: "Storage examination couch with cabinets and drawers",

                intro:
                    "Heavy-duty examination couch integrated with storage cabinets and drawers, providing an efficient workspace for medical assessment while allowing organized storage of instruments and supplies.",

                features: [
                    "Frame made of 16 gauge CRCA pipe & body of 18 gauge sheet",
                    "6 mm cushioned top surface",
                    "Mounted on PVC stumps",
                    "Built-in drawers and storage cabinets",
                    "Foot step attachment for patient access",
                    "Pre-treated & powder-coated finish"
                ],

                specs: {
                    Frame: "CRCA steel pipe & sheet",
                    Mattress: "6 mm cushioned top",
                    Storage: "Multiple drawers & cabinets",
                    Support: "PVC stumps",
                    Accessories: "Attached foot step",
                    Finish: "Powder coated"
                },

                application:
                    "Used in hospitals, clinics and OPD rooms for medical examinations with integrated storage convenience."
            },
            {
                // MCA Product Code: MHC-917
                slug: "examination-couch-drawer-backrest-model",
                name: "Examination Couch – Drawer & Adjustable Backrest Model",

                img: "/table404.jpeg",
                desc: "Examination couch with drawers and adjustable backrest",

                intro:
                    "Versatile examination couch featuring multiple drawers, enclosed storage cabinet, swing tray and adjustable upholstered backrest for comfortable patient assessments and organized clinical workflow.",

                features: [
                    "Frame made of 16 gauge CRCA pipe and 18 gauge CRCA sheet",
                    "Upper cushioned section with adjustable upholstered backrest",
                    "Three integrated storage drawers",
                    "Lower section with lockable sliding door cabinet",
                    "Swing-out tray for blood pressure apparatus",
                    "Pre-treated & epoxy powder-coated finish"
                ],

                specs: {
                    Frame: "CRCA pipe & sheet construction",
                    Backrest: "Adjustable upholstered section",
                    Drawers: "3 built-in drawers",
                    Storage: "Lockable sliding cabinet",
                    Tray: "Swing tray for BP apparatus",
                    Finish: "Epoxy powder coated"
                },

                application:
                    "Used in OPD rooms, diagnostic centers, hospitals and clinics for detailed examination, BP monitoring and organized clinical operation."
            }



        ]
    },
    {
        title: "Labour Delivery  Beds & Tables",
        slug: "labour-delivery-beds-tables",

        products: [

            {
                // MCA Product Code: MHC-501
                slug: "labour-delivery-room-bed-electric",
                name: "Labour Delivery Room Bed (Electric)",
                img: "/labour-table.jpeg",
                desc: "Three-section electrically operated labour delivery bed",

                intro:
                    "Advanced electric labour delivery bed designed to provide maximum comfort, smooth positioning, and enhanced usability for safe childbirth procedures in hospitals and maternity centers.",

                features: [
                    "Tubular framework mounted on 125 mm diameter castors with brakes",
                    "Three-section top made of MS pipe with thick fixed cushioned mattress",
                    "Electric actuator operated height, backrest and Trendelenburg adjustments",
                    "Trendelenburg and Reverse Trendelenburg positions",
                    "Leg-end section slides under the main section",
                    "Lithotomy position supported for delivery procedures",
                    "Detachable SS telescopic IV rod with SS tray",
                    "Durable upholstery finish",
                    "Available in stainless steel variant"
                ],

                specs: {
                    Dimensions: "1800 mm (L) x 900 mm (W) x 600 – 800 mm (H) approx",
                    Sections: "3 Section",
                    Frame: "MS tubular construction",
                    Castors: "125 mm castors with brakes",
                    Operation: "Electric actuator system",
                    Finish: "Powder coated",
                    Variant: "MS & SS options available"
                },

                application:
                    "Used in labour rooms and maternity wards for childbirth procedures, patient positioning, and post-delivery care."
            },



            {
                // MCA Product Code: MHC-502
                slug: "obstetric-delivery-table-3-section",
                name: "Obstetric Delivery Table (3 Section)",
                img: "/labour-table2.jpeg",
                desc: "Three-section manual obstetric delivery table",

                intro:
                    "Durable obstetric delivery table designed for routine labour and delivery procedures, offering manual positional control with hand levers and stable rectangular tube construction.",

                features: [
                    "Rectangular and square tube MS framework",
                    "Three-section cushioned top surface",
                    "Manual backrest, seat and leg section adjustment by hand levers",
                    "Mounted on PVC stumps for floor stability",
                    "Height adjustable paired knee crutches",
                    "Complete with stainless steel bowls",
                    "Epoxy powder coated finish"
                ],

                specs: {
                    Dimensions: "72\" L x 24\" W x 30\" H (Approx)",
                    Sections: "3 Section",
                    Frame: "MS rectangular & square tubes",
                    Mounting: "PVC stumps",
                    Adjustment: "Manual hand levers",
                    Accessories: "Pair of knee crutches & SS bowls",
                    Finish: "Epoxy powder coated"
                },

                application:
                    "Used in hospitals and maternity centers for childbirth deliveries and gynecological procedures."
            },



            {
                // MCA Product Code: MHC-503
                slug: "labour-table-2-section",
                name: "Labour Table – Two Section",
                img: "/labour-table3.webp",
                desc: "Two-section cushioned labour table",

                intro:
                    "Simple and reliable two-section labour table designed for patient comfort and stability during preparation and routine delivery assistance.",

                features: [
                    "Sturdy MS tube framework",
                    "Two-section cushioned top",
                    "Backrest elevation adjustable by hand lever",
                    "Pair of stainless steel lithotomy rods",
                    "Epoxy powder coated finish",
                    "Available in stainless steel option"
                ],

                specs: {
                    Dimensions: "1830 mm (L) x 600 mm (W) x 760 mm (H) approx",
                    Sections: "2 Section",
                    Frame: "MS tubes",
                    Adjustment: "Manual hand lever",
                    Accessories: "Pair of SS lithotomy rods",
                    Finish: "Epoxy powder coated",
                    Variant: "MS & SS options available"
                },

                application:
                    "Used in labour rooms and clinics for basic delivery support and examination procedures."
            },



            {
                // MCA Product Code: MHC-504
                slug: "labour-table-3-section",
                name: "Labour Table – Three Section",
                img: "/labour-table4.webp",
                desc: "Three-section labour monitoring and delivery table",

                intro:
                    "Heavy-duty three-section labour table engineered for multi-position childbirth procedures with enhanced patient safety, removable safety rails, and adjustable components.",

                features: [
                    "Strong MS tube framework",
                    "Three-section stainless steel topped platform",
                    "Manual backrest adjustment via ratchet system",
                    "Sliding leg section beneath main section",
                    "Removable safety side railings on three sides",
                    "Height adjustable padded knee crutches",
                    "SS hand grips for patient bearing support",
                    "Collection SS bowl with SS bracket and IV rod",
                    "Pre-treated epoxy powder coated finish",
                    "Available in full SS construction"
                ],

                specs: {
                    Dimensions: "72\" L x 27\" W x 30\" H (Approx)",
                    Sections: "3 Section",
                    Frame: "MS steel tubes",
                    Platform: "SS sheet top",
                    Adjustment: "Manual ratchet mechanism",
                    Accessories:
                        "Knee crutches, safety railings, SS hand grips, collection bowl, IV rod",
                    Finish: "Epoxy powder coated",
                    Variant: "MS frame with SS top / Full SS available"
                },

                application:
                    "Used for childbirth deliveries, obstetric procedures, and maternal care in fully equipped labour rooms."
            },
            {
                // MCA Product Code: MHC-505
                slug: "obstetric-labour-table-telescopic",
                name: "Obstetric Labour Table – Telescopic Hydraulic",
                img: "/labour-table5.webp",
                desc: "Hydraulic telescopic obstetric labour table",

                intro:
                    "Advanced telescopic obstetric labour table designed for professional maternity care with pneumatic Trendelenburg positioning, hydraulic height adjustment, and three-section stainless steel top for maximum procedural comfort.",

                features: [
                    "Tubular frame mounted on swiveling castors",
                    "Three-section stainless steel top platform",
                    "Hydraulic height adjustment via foot paddle",
                    "Pneumatic gas-spring operated Trendelenburg positions",
                    "Manual backrest adjustment through ratchet",
                    "Sliding leg end section under the main frame",
                    "Pair of height adjustable padded knee crutches",
                    "Durable epoxy powder coated finish",
                    "Available in full stainless-steel variant with SS top"
                ],

                specs: {
                    Dimensions: "72\" L x 27\" W x 24\" – 32\" H (Approx)",
                    Sections: "3 Section",
                    Frame: "Tubular steel construction",
                    Platform: "Stainless steel sheet",
                    HeightAdjustment: "Hydraulic foot paddle operated",
                    Positioning: "Pneumatic Trendelenburg",
                    Castors: "Swiveling wheels",
                    Finish: "Epoxy powder coated",
                    Variant: "MS frame with SS top / Full SS available"
                },

                application:
                    "Used for advanced obstetric deliveries and labour procedures in maternity hospitals, operation theatres, and gynecology wards."
            },



            {
                // MCA Product Code: MHC-506
                slug: "obstetric-delivery-bed-two-section",
                name: "Obstetric Delivery Bed – Two Section",
                img: "/labour-table6.webp",
                desc: "Two-section obstetric delivery bed",

                intro:
                    "Reliable two-section obstetric delivery bed designed for routine childbirth procedures, offering cushioned patient comfort with sectional mobility and adjustable knee crutches support.",

                features: [
                    "Tubular steel two-section frame construction",
                    "Body portion fixed on PVC stumps",
                    "Leg end section mounted on swivel castors with brakes",
                    "Two-section cushioned top surface",
                    "Pair of height adjustable padded knee crutches",
                    "Durable epoxy powder coated finish"
                ],

                specs: {
                    Dimensions: "72\" L x 27\" W x 30\" H (Approx)",
                    Sections: "2 Section",
                    Frame: "Tubular steel frame",
                    BodySupport: "PVC stumps",
                    LegSection: "Swivel castors with brakes",
                    Mattress: "Cushioned top",
                    Finish: "Epoxy powder coated"
                },

                application:
                    "Used for standard delivery and labour procedures in maternity wards and healthcare clinics."
            },



            {
                // MCA Product Code: MHC-507
                slug: "gynae-examination-table-plain",
                name: "Gynae Examination Table – Plain Model",
                img: "/labour-table7.webp",
                desc: "Plain gynecological examination table",

                intro:
                    "Durable gynecology examination table designed for routine patient check-ups and examinations, featuring comfortable cushioned top with perineal cut and stable square-tube steel framework.",

                features: [
                    "Rectangular and square M.S. tube frame construction",
                    "Fixed cushioned top with rexine upholstery",
                    "Integrated perineal cut section",
                    "Adjustable lithotomy poles with safety straps",
                    "Legs fitted with PVC stumps",
                    "Pre-treated & epoxy powder coated finish"
                ],

                specs: {
                    Dimensions: "180 cm L x 60 cm W x 76 cm H (Approx)",
                    Frame: "Rectangular / square MS tubes",
                    Upholstery: "5 cm foam cushioned rexine top",
                    FootSupport: "PVC stumps",
                    Accessories: "Adjustable lithotomy poles with straps",
                    Finish: "Epoxy powder coated"
                },

                application:
                    "Used for gynecological examinations and routine patient assessment in clinics, diagnostic centers, and maternity hospitals."
            },


        ]
    },

    {
        title: "Emergency & Patient Trolleys",
        slug: "emergency-patient-trolleys",

        products: [

            {
                // MCA Product Code: MHC-927
                slug: "emergency-recovery-trolley-hydraulic",

                name: "Emergency & Recovery Trolley (Hydraulic)",
                img: "/trolly1.webp",
                desc: "Hydraulic height adjustable emergency recovery trolley",

                intro:
                    "Premium hydraulic emergency and recovery trolley featuring foot-operated height adjustment, two-section patient platform and smooth mobility for rapid patient transfer in emergency and critical care areas.",

                features: [
                    "Two-section patient top",
                    "Foot-operated hydraulic height adjustment (660 mm – 910 mm)",
                    "Synthetic rubber corner buffers for impact safety",
                    "Sliding X-ray cassette tray",
                    "Oxygen cylinder holder",
                    "Stainless steel IV rod and SS side rails",
                    "Four swivel castors, two with brakes",
                    "Pre-treated epoxy powder coating"
                ],

                specs: {
                    HeightRange: "660 mm – 910 mm",
                    Castors: "4 swivel (2 with brakes)",
                    Accessories: "X-ray tray, IV rod, oxygen cylinder holder",
                    Rails: "SS swing-away side rails",
                    Finish: "Epoxy powder coated",
                    Size: "84\"L x 24\"W x 26\"–38\"H (Approx)"
                },

                application:
                    "Used in emergency rooms, recovery wards, and critical care areas for patient shifting and emergency transport."
            },

            {
                // MCA Product Code: MHC-928
                slug: "patient-trolley-mechanical",

                name: "Patient Trolley – Mechanical Adjustable",
                img: "/trolly2.webp",
                desc: "Crank operated height adjustable patient trolley",

                intro:
                    "Mechanical patient trolley equipped with crank-operated height adjustment and adjustable head-rest, providing reliable mobility support for patient transfer across hospital departments.",

                features: [
                    "Two-section powder coated platform",
                    "Crank handle operated height adjustment",
                    "Adjustable head rest via ratchet system",
                    "SS safety side railings",
                    "IV rod provision",
                    "5 inch medical-grade castors (2 with brakes)",
                    "Strong MS / SS tube framework"
                ],

                specs: {
                    Operation: "Manual crank height adjustment",
                    Platform: "Two-section powder coated top",
                    Rails: "SS safety side rails",
                    IVRod: "Yes",
                    Castors: "5\" dia wheels (2 with brakes)",
                    Frame: "MS / SS tubes",
                    Size: "78\"L x 24\"W x 27\"–36\"H (Approx)"
                },

                application:
                    "Used for patient transportation in wards, ICUs, diagnostic departments and recovery units."
            },

            {
                // MCA Product Code: MHC-929
                slug: "stretcher-on-trolley-with-mattress",

                name: "Stretcher Trolley with Mattress",
                img: "/trolly3.jpeg",
                desc: "Patient stretcher mounted trolley with mattress",

                intro:
                    "Durable stretcher trolley featuring a padded mattress top with side railings and full-length patient transfer support for safe and comfortable intra-hospital movement.",

                features: [
                    "Framework made from durable MS / SS pipes",
                    "Swing-away SS safety side railings",
                    "Adjustable IV rod",
                    "Utility tray and oxygen cylinder cage",
                    "Mattress provided",
                    "5 inch medical castors (2 with brakes)",
                    "Durable powder coated finish"
                ],

                specs: {
                    Frame: "MS / SS pipes",
                    Mattress: "Included",
                    Rails: "Swing-away SS rails",
                    IVRod: "Yes",
                    Accessories: "Utility tray & cylinder cage",
                    Castors: "5\" dia wheels (2 with brakes)",
                    Size: "160 x 56 x 81 cm (Approx)"
                },

                application:
                    "Used for smooth patient shifting in wards, emergency areas, ICUs and diagnostic departments."
            },

            {
                // MCA Product Code: MHC-930
                slug: "stretcher-on-trolley-standard",

                name: "Stretcher Trolley – Standard",
                img: "/trolly4.jpeg",
                desc: "Standard stretcher mounted trolley",

                intro:
                    "Basic stretcher-on-trolley designed for fast and safe patient transport, featuring removable stretcher top and durable wheel-base support.",

                features: [
                    "Heavy-duty MS / SS tube framework",
                    "Removable stretcher top with SS handles",
                    "Stable fixed patient platform",
                    "6 inch medical castors (2 with brakes)",
                    "Epoxy powder coated surface"
                ],

                specs: {
                    Frame: "MS / SS tubes",
                    Top: "Removable stretcher top with SS handles",
                    Castors: "6\" dia wheels (2 with brakes)",
                    Finish: "Epoxy powder coated",
                    Size: "84\"L x 22\"W x 32\"H (Approx)"
                },

                application:
                    "Used for routine patient transportation in hospitals, clinics, and emergency care centers."
            },

            {
                // MCA Product Code: MHC-931
                slug: "ambulance-stretcher",

                name: "Ambulance Stretcher",
                img: "/trolly5.webp",
                desc: "Foldable ambulance stretcher for paramedical use",

                intro:
                    "Lightweight foldable ambulance stretcher manufactured using high-strength aluminum alloy, designed for easy handling, fast patient loading and reliable emergency medical transport.",

                features: [
                    "Lightweight aluminum alloy construction",
                    "High strength mechanical frame",
                    "Foldable design for easy loading",
                    "Smooth patient placement system",
                    "Antiseptic surface finish",
                    "Ergonomic side handles for lifting"
                ],

                specs: {
                    Material: "Aluminum alloy",
                    Folding: "Yes",
                    Finish: "Antiseptic coated",
                    PositionA: "1900 x 560 x 900 mm (High)",
                    PositionB: "1900 x 560 x 280 mm (Low)"
                },

                application:
                    "Used in ambulances, emergency rescue teams, disaster response units, and patient transportation services."
            },
            {
                // MCA Product Code: MHC-932
                slug: "patient-trolley-fixed-cushioned",

                name: "Patient Trolley – Fixed Cushioned",
                img: "/trolly6.webp",
                desc: "Height adjustable patient trolley with fixed cushioned top",

                intro:
                    "Durable patient trolley featuring a fixed cushioned top with adjustable backrest and strong MS/SS tube framework, designed to ensure safe, comfortable, and smooth patient transportation within hospital environments.",

                features: [
                    "Fixed cushioned patient top",
                    "Backrest adjustable mechanism",
                    "Safety side railings for patient protection",
                    "Provision for stainless steel IV rod",
                    "Smooth rolling 15 cm diameter castors",
                    "Strong framework of MS tubes / SS tubes",
                    "Pre-treated & epoxy powder coated finish",
                    "Also available in complete stainless steel (SS) model"
                ],

                specs: {
                    Size: "195 cm (L) x 65 cm (W) x 68–90 cm (H) Approx",
                    Frame: "MS tubes / SS tubes",
                    Top: "Fixed cushioned mattress",
                    Backrest: "Adjustable",
                    SafetyRails: "Side railings provided",
                    IVRod: "Yes",
                    Castors: "15 cm dia medical castors",
                    Finish: "Epoxy powder coated / SS optional"
                },

                application:
                    "Used for comfortable patient transfer in hospitals, ICUs, emergency wards, nursing homes and diagnostic centers."
            }



        ]
    },



    {
        title: "Hospital Stools, Foot Steps & Utility Stands",
        slug: "hospital-stools-foot-steps-utility-stands",

        products: [
            // MHC-915 onwards data here...

            /* ================= STOOLS ================= */

            {
                // MCA Product Code: MHC-915
                slug: "patients-revolving-stool-ss-top",
                name: "Patient Revolving Stool – SS Top",
                img: "/stool1.webp",
                desc: "Revolving stool with stainless steel seat",

                intro:
                    "Patient revolving stool with stainless steel top designed for comfortable seated support and easy height adjustment in hospitals, clinics, and OPD rooms.",

                features: [
                    "All stainless steel top seat",
                    "Smooth 360-degree revolving seat",
                    "Height adjustable mechanism",
                    "Stable four-leg base",
                    "Anti-slip rubber leg tips"
                ],

                specs: {
                    Seat: "Stainless steel",
                    Adjustment: "Manual height adjustment",
                    Base: "Four-leg support",
                    Finish: "Corrosion resistant"
                },

                application:
                    "Used for patient seating in clinics, OPDs, dressing rooms, and examination areas."
            },


            {
                // MCA Product Code: MHC-916
                slug: "revolving-stool-cushioned",
                name: "Revolving Stool – Cushioned Top",
                img: "/stool2.webp",
                desc: "Cushioned revolving stool",

                intro:
                    "Comfortable cushioned revolving stool designed for continuous seated working applications in laboratories, clinics, and nursing stations.",

                features: [
                    "Cushioned round top seat",
                    "360-degree smooth rotation",
                    "Height adjustable shaft",
                    "Strong tubular steel legs",
                    "Anti-skid rubber fittings"
                ],

                specs: {
                    Seat: "Foam cushioned with rexine cover",
                    Adjustment: "Manual height adjustment",
                    Base: "Four-leg tubular steel",
                    Finish: "Powder coated"
                },

                application:
                    "Used by doctors, nurses, and technicians in hospitals, labs, and OPD settings."
            },


            {
                // MCA Product Code: MHC-917
                slug: "attendant-revolving-stool",
                name: "Attendant Stool – Revolving",
                img: "/stool3.jpeg",
                desc: "Revolving stool for attendants",

                intro:
                    "Durable revolving stool designed for assisting attendants and nursing staff, offering easy height adjustment and long working comfort.",

                features: [
                    "Smooth rotating seat",
                    "Height adjustable shaft",
                    "Steel pipe frame",
                    "Non-slip rubber base tips"
                ],

                specs: {
                    Seat: "Metal",
                    Adjustment: "Manual height adjustment",
                    Base: "Steel tubular"
                },

                application:
                    "Used by attendants and nursing staff for support duties across hospital departments."
            },


            {
                // MCA Product Code: MHC-918
                slug: "lab-technician-stool",
                name: "Lab Technician Stool",
                img: "/stool4.jpeg",
                desc: "Stool for laboratory working",

                intro:
                    "Laboratory use stool designed for technicians to provide stable seating during testing and clinical procedures.",

                features: [
                    "Round cushioned seat",
                    "Durable steel frame",
                    "Height adjustable",
                    "Lightweight construction"
                ],

                specs: {
                    Seat: "Cushioned",
                    Adjustment: "Height adjustable",
                    Frame: "Steel tubing"
                },

                application:
                    "Used in pathology labs, diagnostic labs, and testing areas."
            },



            /* ================= FOOT STEPS ================= */

            {
                // MCA Product Code: MHC-919
                slug: "foot-step-single",
                name: "Foot Step – Single",

                img: "/footstep1.jpeg",
                desc: "Single-step patient foot stool",

                intro:
                    "Single step patient foot stool designed to assist patients safely access examination couches and hospital beds.",

                features: [
                    "Non-slip rubber mat top",
                    "Stable steel frame",
                    "Compact and lightweight"
                ],

                specs: {
                    Steps: "Single",
                    Frame: "Steel",
                    Surface: "Anti-slip rubber"
                },

                application:
                    "Used to assist patients getting on and off beds or examination tables."
            },
            {
                // MCA Product Code: MHC-XXX  // <- yahan apna running code daal dena
                slug: "foot-step-single-arkc-ss",
                name: "Foot Step – Single Step (MS / SS)",

                img: "/footstep2.jpeg",
                desc: "Single-step hospital foot stool in MS / SS construction",

                intro:
                    "Compact single-step hospital foot stool available in MS and SS options, designed to help patients safely climb onto examination couches and beds with a stable, non-slip platform.",

                features: [
                    "Single-step platform for easy access",
                    "Available in MS (ARKC) and SS construction",
                    "Anti-slip rubber mat on top surface",
                    "Strong welded frame for high load capacity",
                    "Rubber shoes at base for floor grip and protection",
                    "Compact, easy-to-move design for ward and OPD use"
                ],

                specs: {
                    Steps: "Single step",
                    Material: "Mild Steel (MS) / Stainless Steel (SS)",
                    TopSurface: "Anti-slip rubber mat",
                    BaseSupport: "Rubber shoes / PVC stumps",
                    Finish: "Epoxy powder coated (MS) / SS polish (SS)"
                },

                application:
                    "Used to help patients safely get on and off hospital beds, examination tables and couches in wards, OPD rooms and diagnostic areas."
            },



            {
                // MCA Product Code: MHC-920
                slug: "foot-step-double",
                name: "Foot Step – Double",

                img: "/footstep3.webp",
                desc: "Two-step patient foot stool",

                intro:
                    "Double-step hospital foot stool allowing easier elevation access for patients while ensuring stability and safety.",

                features: [
                    "Two step platform",
                    "Anti-skid rubber mat surface",
                    "Heavy steel construction"
                ],

                specs: {
                    Steps: "Double",
                    Frame: "Steel",
                    Surface: "Anti-slip top"
                },

                application:
                    "Used with examination couches, hospital beds, and OT tables."
            },
            {
                // MCA Product Code: MHC-XXX   // yahan apna next running code dal dena
                slug: "foot-step-double-arkc-ss",
                name: "Foot Step – Double Step (MS / SS)",

                img: "/basin1.jpeg",
                desc: "Two-step hospital foot stool in MS / SS construction",

                intro:
                    "Heavy-duty double-step hospital foot stool available in MS (ARKC) and SS variants, specially designed to provide additional height assistance and safer patient access to examination couches, delivery tables and hospital beds.",

                features: [
                    "Two-step platform design for extra height and ease of access",
                    "Available in MS (ARKC) and Stainless Steel (SS) models",
                    "Anti-slip rubber mat on both step surfaces",
                    "Strong welded frame for enhanced weight-bearing capacity",
                    "Rubber shoes / PVC stumps at base for floor grip and safety",
                    "Compact and portable design suitable for wards & OPDs"
                ],

                specs: {
                    Steps: "Double step",
                    Material: "Mild Steel (MS – ARKC) / Stainless Steel (SS)",
                    TopSurface: "Anti-slip rubber mat on both steps",
                    BaseSupport: "Rubber shoes / PVC stumps",
                    Finish: "Epoxy powder coated (MS) / SS polish (SS)"
                },

                application:
                    "Used to assist patients in climbing onto higher-height hospital beds, examination couches and delivery tables safely in wards, OPD rooms, nursing homes and diagnostic centers."
            },



            /* ================= BASIN STANDS & BUCKETS ================= */

            {
                // MCA Product Code: MHC-921
                slug: "wash-basin-stand",

                name: "Wash Basin Stand (Single) ",
                img: "/basin2.jpeg",
                desc: "SS wash basin stand",

                intro:
                    "Stainless steel wash basin stand available in single or double bowl variants, designed for efficient hygienic cleaning in hospitals and clinics.",

                features: [
                    "Stainless steel frame",
                    "Single or double bowl options",
                    "High corrosion resistance",
                    "Easy mobility design"
                ],

                specs: {
                    Material: "Stainless steel",
                    Config: "Single or Double basin",
                    Finish: "SS polish"
                },

                application:
                    "Used for hand washing and cleaning in OPD rooms, wards, and treatment areas."
            },


            {
                // MCA Product Code: MHC-922
                slug: "kick-bowl",

                name: " Bowl Stand",
                img: "/bowl1.jpeg",
                desc: "Mobile kick bowl stand",

                intro:
                    "Mobile stainless steel kick bucket and bowl stand designed for easy disposal of waste materials during clinical procedures.",

                features: [
                    "SS bowl ",
                    "Kick-operated base",
                    "Smooth castor wheels for mobility",
                    "Sturdy stainless steel construction"
                ],

                specs: {
                    Frame: "Stainless steel",
                    Movement: "Kick operated",
                    Mobility: "Castor wheels"
                },

                application:
                    "Used in operation theatres, dressing rooms, and procedure areas."
            },
            {
                // MCA Product Code: MHC-922
                slug: "kick-bucket-stand",

                name: "Kick Bucket Stand",
                img: "/bucket1.jpeg",
                desc: "Mobile kick-operated bucket stand for medical waste disposal",

                intro:
                    "Stainless steel kick bucket stand designed for hands-free, hygienic disposal of medical waste during clinical procedures, offering smooth mobility and stable support in operation rooms and dressing areas.",

                features: [
                    "Stainless steel bucket holder",
                    "Foot-operated kick mechanism for hands-free use",
                    "Medical-grade smooth castor wheels",
                    "Strong stainless steel tubular frame",
                    "Corrosion-resistant and easy-to-clean surface"
                ],

                specs: {
                    BucketHolder: "Stainless steel",
                    Frame: "Stainless steel tubular",
                    Operation: "Foot-operated kick mechanism",
                    Mobility: "Castor wheels",
                    Finish: "SS polished"
                },

                application:
                    "Used in operation theatres, dressing rooms, procedure areas, clinics, and hospital wards for hygienic medical waste collection."
            },


        ]
    },


    {
        title: "Commode Chairs & Toileting Aids",
        slug: "commode-chairs-toileting-aids",

        products: [
            {
                // MCA Product Code: MHC-923
                slug: "folding-commode-stool",

                name: "Folding Commode Stool",
                img: "/commode2.webp",
                desc: "Compact folding bedside commode stool",

                intro:
                    "Folding commode stool designed for basic toileting support, featuring a lightweight foldable frame with a removable bucket for easy hygiene management in home and clinical care environments.",

                features: [
                    "Foldable steel frame",
                    "Removable plastic bucket with lid",
                    "Anti-slip rubber leg tips",
                    "Lightweight and portable design",
                    "Easy-to-clean surface"
                ],

                specs: {
                    Frame: "Steel",
                    Bucket: "Removable plastic bucket",
                    Legs: "Rubber anti-slip tips",
                    Folding: "Yes"
                },

                application:
                    "Used for bedside toileting in elderly care, home care, nursing homes, and patient recovery settings."
            },

            {
                // MCA Product Code: MHC-924
                slug: "folding-commode-chair",

                name: "Folding Commode Chair",
                img: "/commode3.webp",
                desc: "Foldable commode chair with arm support",

                intro:
                    "Foldable commode chair featuring a supportive seated design with armrests, offering enhanced comfort and stability for patients requiring assisted toileting.",

                features: [
                    "Foldable steel frame",
                    "PU cushioned seat with removable bucket",
                    "Supportive armrests",
                    "Anti-slip rubber leg tips",
                    "Portable and easy storage"
                ],

                specs: {
                    Frame: "Steel",
                    Seat: "Cushioned PU seat",
                    Bucket: "Removable plastic bucket",
                    Armrests: "Yes",
                    Folding: "Yes"
                },

                application:
                    "Used for patient bedside toileting in hospitals, home care, rehabilitation centers, and senior care facilities."
            },

            {
                // MCA Product Code: MHC-925
                slug: "commode-stool-chair",

                name: "Commode Stool Chair",
                img: "/commode1.webp",
                desc: "Stainless steel commode stool chair",

                intro:
                    "Strong and stable commode stool chair constructed with stainless steel frame and integrated seat support, ideal for daily patient use requiring sitting toileting assistance.",

                features: [
                    "Stainless steel tubular frame",
                    "PU molded seat with commode opening",
                    "Removable plastic waste bucket",
                    "Strong fixed structure",
                    "Non-slip rubber leg tips"
                ],

                specs: {
                    Frame: "Stainless steel",
                    Seat: "PU molded seat",
                    Bucket: "Removable plastic bucket",
                    Legs: "Rubber anti-slip tips",
                    Folding: "No"
                },

                application:
                    "Used for daily bedside toileting support in hospitals, nursing homes, and home patient care."
            },

            {
                // MCA Product Code: MHC-926
                slug: "folding-commode-chair-armrest",

                name: "Folding Commode Chair with Armrest",
                img: "/commode4.webp",
                desc: "Folding commode chair with armrests",

                intro:
                    "Adjustable folding commode chair designed with fixed armrests for comfortable support, featuring a durable steel frame and removable bucket for hygienic patient toileting.",

                features: [
                    "Foldable steel frame",
                    "Cushioned molded seat",
                    "Strong fixed armrests",
                    "Removable plastic bucket",
                    "Non-slip rubber foot tips"
                ],

                specs: {
                    Frame: "Steel",
                    Seat: "Molded cushioned seat",
                    Bucket: "Removable plastic bucket",
                    Armrests: "Yes",
                    Folding: "Yes"
                },

                application:
                    "Used for assisted toileting for elderly patients, rehabilitation therapy, hospital bedside use, and home care support."
            },

        ]
    },


    {
        title: "Hospital Bed Accessories",
        slug: "hospital-bed-accessories",

        products: [
            {
                // MCA Product Code: MHC-941
                slug: "mattress-fowler-icu-bed",

                name: "Mattress – Fowler / ICU Bed",
                img: "/mattress1.webp",
                desc: "Four-section mattress for Fowler & ICU beds",

                intro:
                    "Multi-section foam mattress designed specifically for Fowler and ICU beds, allowing flexible adjustment along bed movements while ensuring optimal patient comfort and pressure support.",

                features: [
                    "Four-section mattress for Fowler and ICU beds",
                    "Supports backrest and leg-rest movements",
                    "High-density foam cushioning",
                    "Durable rexine covered surface",
                    "Easy to clean and disinfect"
                ],

                specs: {
                    Type: "Four section mattress",
                    Foam: "High density foam",
                    Cover: "Rexine coated waterproof cover",
                    Compatibility: "ICU & Fowler beds"
                },

                application:
                    "Used on ICU and Fowler beds for patient comfort during treatment and prolonged hospitalization."
            },
            {
                // MCA Product Code: MHC-942
                slug: "mattress-plain-bed",

                name: "Mattress – Plain Hospital Bed",
                img: "/accessory-mattress-plain.jpg",
                desc: "Standard foam mattress for plain hospital beds",

                intro:
                    "Comfortable hospital mattress made of high-density foam covered with rexine, specially designed for regular plain hospital beds ensuring hygienic and durable patient support.",

                features: [
                    "10 cm thick high density foam",
                    "Rexine closed cover with end ZIP",
                    "Water-resistant and easy to wipe clean",
                    "Uniform cushioning support",
                    "Long lasting durability"
                ],

                specs: {
                    Thickness: "10 cm",
                    Density: "32/40 foam density",
                    Cover: "Rexine close cover with ZIP",
                    Compatibility: "Plain hospital beds"
                },

                application:
                    "Used for patient comfort on plain hospital beds in wards, nursing homes, and clinics."
            },
            {
                // MCA Product Code: MHC-943
                slug: "patient-case-sheet-holder",

                name: "Patient Case Sheet Holder",
                img: "/case-sheet-holder.jpg",
                desc: "Aluminium patient file holder",

                intro:
                    "Lightweight aluminum patient case sheet holder designed to securely store medical files at patient bedside for easy monitoring and documentation.",

                features: [
                    "Made from aluminum / ABS sheet",
                    "Single clip chrome plated holder",
                    "Wall or bed mountable",
                    "Lightweight yet durable design"
                ],

                specs: {
                    Material: "Aluminium / ABS sheet",
                    Clip: "Chrome plated single clip",
                    Mounting: "Bedside / wall mount"
                },

                application:
                    "Used in hospital wards to hold patient case files and medical records."
            },


            {
                // MCA Product Code: MHC-944
                slug: "protective-bed-railing-aluminium",

                name: "Protective Bed Railing – Aluminium",
                img: "/protective-railing.jpg",
                desc: "Aluminium safety side railing",

                intro:
                    "Lightweight aluminium protective railing engineered to prevent accidental falls from hospital beds while providing strong patient side support.",

                features: [
                    "Manufactured from aluminium tubes",
                    "Lightweight and durable build",
                    "Simple bed mounting design",
                    "High strength patient side protection"
                ],

                specs: {
                    Material: "Aluminium tubes",
                    PackingWeight: "Approx 2.02 kg",
                    NetWeight: "6.4 kg",
                    GrossWeight: "7.0 kg"
                },

                application:
                    "Installed on hospital beds to ensure patient safety and fall prevention."
            },
            {
                // MCA Product Code: MHC-945
                slug: "iv-rod-hospital-bed",

                name: "IV Rod for Hospital Bed",
                img: "/iv-rod.jpg",
                desc: "Telescopic IV stand for bed mounting",

                intro:
                    "Adjustable telescopic IV rod designed for mounting onto hospital beds to support saline bottles and infusion fluids safely.",

                features: [
                    "Stainless steel telescopic pole",
                    "Height adjustable design",
                    "Secure bed mounting clamp",
                    "Strong bottle hanging hooks"
                ],

                specs: {
                    Material: "Stainless steel",
                    Adjustment: "Telescopic height adjustable",
                    MountType: "Bed clamp mounting"
                },

                application:
                    "Used for hanging IV saline bottles during treatment in ICU and ward beds."
            },

            {
                // MCA Product Code: MHC-946
                slug: "abs-tuck-away-railing-4pcs",

                name: "ABS Tuck Away Railing – Set of 4",
                img: "/abs-railing-4pcs.jpg",
                desc: "ABS foldable side railing set",

                intro:
                    "Premium ABS tuck-away railings providing complete foldable safety coverage on ICU and Fowler beds, offering easy access and enhanced patient protection.",

                features: [
                    "ABS heavy-duty plastic material",
                    "Foldable tuck-away mechanism",
                    "Complete 4-piece railing set",
                    "Smooth hinge movement",
                    "Strong side odorless noise-free operation"
                ],

                specs: {
                    Material: "ABS plastic",
                    Pieces: "4 pcs full set",
                    Operation: "Foldable tuck-away"
                },

                application:
                    "Used on ICU beds and Fowler beds to provide full side safety protection."
            },
            {
                // MCA Product Code: MHC-947
                slug: "abs-head-foot-panel-deluxe",

                name: "ABS Head & Foot Panel – Deluxe",
                img: "/abs-panel-deluxe.jpg",
                desc: "ABS head foot panels with safety buffer",

                intro:
                    "Deluxe ABS head and foot panels equipped with integrated buffers to enhance impact resistance while improving bed styling and patient comfort.",

                features: [
                    "Heavy duty ABS construction",
                    "Integrated shock buffers",
                    "Smooth rounded finishing",
                    "Easy attachment to bed frame"
                ],

                specs: {
                    Material: "ABS plastic",
                    Type: "Head & Foot panel set",
                    Buffer: "Built-in safety buffers"
                },

                application:
                    "Used as aesthetic and safety head/foot panels on ICU and Fowler hospital beds."
            },
            {
                // MCA Product Code: MHC-948
                slug: "abs-tuck-away-railing-2pcs",

                name: "ABS Tuck Away Railing – Set of 2",
                img: "/abs-railing-2pcs.jpg",
                desc: "ABS foldable railing pair",

                intro:
                    "Set of two ABS tuck-away railings designed for partial bed safety coverage while ensuring quick fold access to patients.",

                features: [
                    "ABS molded railing",
                    "Foldable tuck-away system",
                    "Compact two railing set",
                    "Noise-free smooth movement"
                ],

                specs: {
                    Material: "ABS plastic",
                    Pieces: "2 pcs",
                    Operation: "Foldable tuck-away"
                },

                application:
                    "Used on Fowler and ICU beds for side safety support."
            },


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
        product.code = `MHC-${base + index + 1}`;
    });
});

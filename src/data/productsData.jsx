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
        product.code = `MHC-${base + index + 1}`;
    });
});

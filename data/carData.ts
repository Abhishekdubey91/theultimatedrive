export interface Spec {
    label: string;
    value: string;
}

export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface CarData {
    hero: {
        title: string;
        subtitle: string;
        price: string;
        cta: string;
    };
    design: {
        title: string;
        description: string;
        highlights: string[];
    };
    engine: {
        title: string;
        specs: Spec[];
    };
    technicalSpecs: Spec[];
    features: Feature[];
}

export const bmwMSeriesData: CarData = {
    hero: {
        title: "BMW M Series",
        subtitle: "The Ultimate Driving Machine",
        price: "€120,000",
        cta: "Inquire Now",
    },
    design: {
        title: "Design",
        description: "Carbon Fiber Aerodynamics",
        highlights: [
            "Lightweight carbon fiber reinforced polymer (CFRP) construction",
            "Active aerodynamics with adaptive rear spoiler",
            "M-specific kidney grille with signature lighting",
            "19\" forged M light alloy wheels",
        ],
    },
    engine: {
        title: "Engine",
        specs: [
            { label: "Engine", value: "Twin-Turbo V8" },
            { label: "Power", value: "625 HP" },
            { label: "Torque", value: "750 Nm" },
            { label: "0-60 mph", value: "3.2 sec" },
            { label: "Top Speed", value: "190 mph" },
        ],
    },
    technicalSpecs: [
        { label: "Engine Type", value: "4.4L V8 Twin-Turbocharged" },
        { label: "Transmission", value: "8-Speed M Steptronic" },
        { label: "Drive Type", value: "M xDrive All-Wheel Drive" },
        { label: "Fuel Economy", value: "18 MPG City / 25 MPG Highway" },
        { label: "Weight", value: "1,845 kg" },
        { label: "Length", value: "4,855 mm" },
        { label: "Width", value: "1,903 mm" },
        { label: "Height", value: "1,467 mm" },
    ],
    features: [
        {
            title: "M TwinPower Turbo",
            description: "Two mono-scroll turbochargers positioned in the V-space deliver instant response and unrelenting power.",
            icon: "⚡",
        },
        {
            title: "Adaptive M Suspension",
            description: "Electronically controlled dampers adjust in milliseconds for supreme comfort or razor-sharp handling.",
            icon: "🏎️",
        },
        {
            title: "Carbon Ceramic Brakes",
            description: "M Carbon Ceramic Brakes provide fade-resistant stopping power from any speed.",
            icon: "🛑",
        },
        {
            title: "M Competition Package",
            description: "Exclusive tuning, upgraded exhaust, and enhanced aerodynamics for track-ready performance.",
            icon: "🏆",
        },
        {
            title: "Head-Up Display",
            description: "Critical driving information projected directly onto the windshield for eyes-on-the-road focus.",
            icon: "📊",
        },
        {
            title: "Harman Kardon Audio",
            description: "16-speaker surround sound system delivers concert-hall acoustics in every seat.",
            icon: "🔊",
        },
    ],
};

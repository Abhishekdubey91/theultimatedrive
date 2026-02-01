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

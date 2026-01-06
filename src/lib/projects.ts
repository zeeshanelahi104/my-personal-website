// export interface Project {
//     id: string;
//     title: string;
//     subtitle: string;
//     description: string;
//     tech: string[];
//     type: "video" | "live" | "private" | "demo";
//     videoUrl?: string;
//     link?: string;
//     category: "Full-Stack" | "Admin Panel" | "Utility" | "Integration" | "Frontend";
// }
export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    type: "video" | "live" | "private" | "demo";
    videoUrl?: string;
    link?: string;
    credentials?: {
        email: string;
        password: string;
    };
    category: "Full-Stack" | "Admin Panel" | "Utility" | "Integration" | "Frontend";
}
export const projects: Project[] = [
    {
        id: "yarnwise",
        title: "YarnWise",
        subtitle: "Final Year Project",
        description:
            "MERN stack inventory system for yarn stock management with role-based access control, analytics reporting, and real-time updates.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Chakra UI", "Tailwind CSS"],
        type: "video",
        category: "Full-Stack",
    },
    {
        id: "saferides",
        title: "Saferides Ecosystem",
        subtitle: "USA Client Project",
        description:
            "Suite of 3 interconnected MERN apps (Customer, Driver, Admin) featuring ride scheduling, JWT authentication, and real-time notifications.",
        tech: ["React", "Node.js", "MongoDB", "JWT", "Socket.io", "Tailwind CSS"],
        link: "https://saferides.vercel.app",
        type: "live",
        category: "Full-Stack",
    },
    {
        id: "driversnow",
        title: "DriversNow",
        subtitle: "USA Client Project",
        description:
            "Driver-focused MERN app for ride management, real-time trip updates, and user interaction.",
        tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
        link: "https://driversnow.vercel.app",
        type: "live",
        category: "Full-Stack",
    },
    {
        id: "saferides-admin",
        title: "Saferides Admin Panel",
        subtitle: "Confidential",
        description:
            "Admin panel for managing customers, drivers, rides, and analytics. Confidential access for client only.",
        tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
        type: "private",
        category: "Admin Panel",
    },
    // {
    //     id: "chaudhary-enterprises",
    //     title: "Chaudhary Enterprises",
    //     subtitle: "Agricultural Inventory",
    //     description:
    //         "Next.js inventory system for agricultural products with Redux state management, bilingual support (English/Urdu), and transaction reports.",
    //     tech: ["Next.js", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
    //     type: "video",
    //     category: "Full-Stack",
    // },
    {
        id: "chaudhary-enterprises",
        title: "Chaudhary Enterprises",
        subtitle: "Agricultural Inventory",
        description:
            "Next.js inventory system for agricultural products with Redux state management, bilingual support (English/Urdu), and transaction reports.",
        tech: ["Next.js", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
        type: "live", // Changed from "video" to "live" since you now have a link
        link: "https://chaudhary-enterprises.vercel.app/en", // Added deployed link
        credentials: { // Added credentials object
            email: "test123@gmail.com",
            password: "12345678"
        },
        category: "Full-Stack",
    },
    {
        id: "musk-inventory",
        title: "MUSK Inventory System",
        subtitle: "Cosmetic Stock Management",
        description:
            "Next.js cosmetic stock management with barcode scanning and automated expiry alerts.",
        tech: ["Next.js", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
        type: "video",
        category: "Full-Stack",
    },
    {
        id: "utility-tools",
        title: "Custom Utility Tools",
        subtitle: "MERN Stack Tools",
        description:
            "Modular tools including Image Editor, QR Generator, Shareable Links, Deep Links, and VCard with reusable components.",
        tech: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
        type: "demo",
        category: "Utility",
    },
    {
        id: "real-estate",
        title: "Real Estate Integrations",
        subtitle: "Property Listings",
        description:
            "Custom pages for Real Estate API and Zillow property listings with dynamic data fetching and responsive displays.",
        tech: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
        type: "demo",
        category: "Integration",
    },
    {
        id: "centrix-global",
        title: "Centrix Global",
        subtitle: "IT Services Website",
        description:
            "Next.js static website for IT services with SEO optimization and contact form analytics.",
        tech: ["Next.js", "Tailwind CSS", "SEO"],
        link: "https://centrixglobal.co.uk/",
        type: "live",
        category: "Frontend",
    },
];

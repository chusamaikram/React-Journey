import { Build, Discovery, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function Webflow() {
    const StrategyListing = [
        { id: 1, title: "SEO and site speed optimization" },
        { id: 2, title: "CMS and dynamic content structure" },
        { id: 3, title: "Design-to-Webflow implementation" },
        { id: 4, title: "Custom responsive Webflow websites" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Plan",
            desc: "Analyze project goals, content flow, and design structure for flawless conversion.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Build",
            desc: "Develop pixel-perfect, CMS-powered layouts ensuring adaptability across devices globally.",
            img: <Build />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Design",
            desc: "Test SEO, accessibility, and performance metrics for maximum impact and speed.",
            img: <Validation />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Launch",
            desc: "Deliver a polished, live-ready site with smooth interactions and scalability ensured.",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Build High-Performance Sites With Design Accuracy", desc: "Every pixel reflects your original design vision — ensuring perfect execution and unmatched brand consistency across devices." },
        { title: "We Optimize Functionality for Growth and Conversion" },
        { title: "We Deliver Launch-Ready Systems That Empower Teams" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Webflow Development"
                hero_desc="Build pixel-perfect, responsive websites powered by Webflow — combining design precision with seamless, no-code performance."
                sec_heading=" Scalable Design Meets Reliable Webflow Execution"
                sec_desc="Our Webflow Development service transforms creative designs into responsive, high-performance websites. We focus on precision, maintainability, and conversion-driven performance — giving your brand a scalable and visually consistent digital foundation."
                processHeading="A Strategic Process That Builds Strong Foundations"
                whyHeading="Why Are Our Webflow Development Services the Right Choice for You?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}
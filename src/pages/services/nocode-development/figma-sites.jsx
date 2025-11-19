import { Analyze, Build, Deliver, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function FigmaSites() {
    const StrategyListing = [
        { id: 1, title: "Responsive design implementation" },
        { id: 2, title: "Figma-to-Webflow/Framer conversion" },
        { id: 3, title: "Visual and interaction consistency" },
        { id: 4, title: "Speed and accessibility optimization" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Analyze",
            desc: "Review your Figma design and identify development-ready sections clearly.",
            img: <Analyze />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Optimize",
            desc: "Boost responsiveness, performance, and interactivity for enhanced UX.",
            img: <Build />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Design",
            desc: "Finalize, test, and hand over editable systems for management..",
            img: <Deliver />,
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
        { title: "We Maintain Design Accuracy Across Every Pixel and Device", desc: "Your design vision stays intact — we convert without compromise, ensuring seamless alignment between Figma and final output." },
        { title: "We Enhance Designs for Performance and Scalability" },
        { title: "We Deliver Editable, Maintainable Websites for Non-Tech Teams" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Figma Sites"
                hero_desc="Transform your Figma designs into live, responsive websites with structured development, pixel accuracy, and full design integrity."
                sec_heading="From Design to Fully Functional Reality"
                sec_desc="We bring your Figma designs to life using modern no-code tools. Our approach ensures pixel perfection, responsive design, and consistent brand execution across devices."
                processHeading="A Strategic Process That Builds Strong Foundations"
                whyHeading="Why Are Our Figma Sites Services the Right Choice for You?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}

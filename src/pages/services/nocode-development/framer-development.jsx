import { Design, Develop, Discovery, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function FramerDevelopment() {
    const StrategyListing = [
        { id: 1, title: "SEO and analytics setup" },
        { id: 2, title: "Framer website design & development" },
        { id: 3, title: "Integration and hosting optimization" },
        { id: 4, title: "Custom motion and interaction design" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Plan",
            desc: "Define brand goals, motion intent, and functional priorities for creative alignment.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Design",
            desc: "Implement smooth animations, transitions, and page structures that reinforce storytelling.",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Develop",
            desc: "Build responsive Framer sites optimized for speed, engagement, and accessibility throughout.",
            img: <Develop />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Deliver",
            desc: "Test, refine, and launch high-performing websites with integrated analytics tracking.",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Design and Build With Creative Fluidity and Speed", desc: "Our Framer expertise ensures designs translate into immersive, animated experiences that captivate instantly and perform efficiently." },
        { title: "We Combine Design Precision With Engineering Performance" },
        { title: "We Deliver Responsive Sites That Feel Effortlessly Dynamic" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Framer Development"
                hero_desc="Craft interactive, high-performing websites using Framer — blending motion, speed, and real-time collaboration for modern web experiences"
                sec_heading=" Designing Websites That Move and Engage"
                sec_desc="Our Framer Development service helps brands create immersive, motion-rich websites that feel alive. We bring designs to life with fast performance, fluid animations, and frictionless collaboration."
                processHeading="A Strategic Process That Builds Strong Foundations"
                whyHeading="Why Are Our Framer Development Services the Right Choice for You?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}
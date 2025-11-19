import { Define, Discovery, Guide, Test } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function CreativeDirection() {
    const StrategyListing = [
        { id: 1, title: "Art direction and style guidance" },
        { id: 2, title: "Visual storytelling consistency" },
        { id: 3, title: "Brand tone and creative supervision" },
        { id: 4, title: "Cross-channel creative coordination" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discover",
            desc: "Analyze brand objectives, audience, and existing creative language comprehensively.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Define",
            desc: "Establish a creative tone and visual direction that fits the brand essence perfectly.",
            img: <Define />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Guide",
            desc: "Supervise design execution to ensure aesthetic alignment and message clarity always.",
            img: <Guide />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Refine",
            desc: "Review, test, and evolve creative outputs for performance and visual consistency.",
            img: < Test />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Align Every Creative Element With Brand Strategy", desc: " We ensure every color, image, and tone expresses your brand purpose while maintaining aesthetic precision and strategic alignment." },
        { title: "We Drive Creative Cohesion Across Every Platform" },
        { title: "We Transform Ideas Into Emotionally Resonant Visual Stories" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Creative Direction"
                hero_desc="Turn ideas into impactful visuals guided by creative precision. We lead your brand’s design direction with vision, strategy, and purpose."
                sec_heading=" Aligning Creativity With Strategy"
                sec_desc="We provide creative direction that ensures all brand visuals and messaging work harmoniously. Our process unites design, tone, and storytelling for consistent, high-quality output."
                processHeading="A Strategic Process That Builds Strong FoundationsA Strategic Process That Builds Strong Foundations"
                whyHeading="Why Are Our Creative Direction Services the Right Choice for You?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}

import { Discovery, Integrate, Validation, Design } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function Interaction() {
    const StrategyListing = [
        { id: 1, title: "Microinteractions & feedback" },
        { id: 2, title: "Animation systems" },
        { id: 3, title: "Motion principles" },
        { id: 4, title: "Interactive flow guidance" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Plan",
            desc: "Define animation goals, purpose, and timing details for better impact.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Design",
            desc: "Create motion concepts aligned with brand tone and product identity.",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Integrate",
            desc: "Implement motion seamlessly across screens and transitions efficiently.",
            img: <Integrate />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Validate",
            desc: "Test animations for usability, performance, & accessibility.",
            img: <Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Design Motion That Improves User Understanding", desc: "Each animation is purposeful, reinforcing clarity, flow, and engagement through natural motion that enhances user experience intuitively." },
        { title: "We Build Dynamic Systems That Strengthen Brand Identity" },
        { title: "We Optimize Every Animation for Speed and Accessibility" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Interaction & Motion Design"
                hero_desc="Motion that guides, interaction that delights. We craft movement that enhances clarity and builds emotional connection."
                sec_heading="Adding Life to Every Digital Experience"
                sec_desc="We bring your interface to life through subtle motion, transitions, and animations that add depth, meaning, and user delight."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Why Are Our Interaction & Motion Services the Right Choice for You?"
                WhyListing={WhyListing}

            />
        </>
    )
}
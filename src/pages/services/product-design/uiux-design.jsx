
import { Discovery, Validation, Design, Prototype } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function UiUxDesign() {
    const StrategyListing = [
        { id: 1, title: "UI aesthetics" },
        { id: 2, title: "Visual hierarchy" },
        { id: 3, title: "Interaction logic" },
        { id: 4, title: "Accessibility consistency" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discover",
            desc: "Define design vision, audience expectations, and success clearly.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Design",
            desc: "Create elegant, structured layouts with clear usability throughout..",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Prototype",
            desc: "Build interactive experiences that demonstrate flow and engagement.",
            img: <Prototype />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Refine",
            desc: "Review, validate, and enhance every detail for flawless visual experience..",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Balance Aesthetic Appeal With Functional Clarity", desc: "We combine beauty and usability to design interfaces that captivate, perform, and deliver long-term user engagement." },
        { title: "We Design Experiences That Convert and Retain Users" },
        { title: "We Create Design Systems That Scale With Growth" }
    ]
    return (
        <>
            <ServicePage
                main_heading="UI/UX Design"
                hero_desc="Beautiful, functional, and conversion-focused interfaces. We design experiences that engage, perform, and retain users."
                sec_heading="Designing for Clarity and Emotion"
                sec_desc="We create stunning and usable interfaces that delight users while achieving measurable results for your business."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Why Are Our UI/UX Design Services the Right Choice for You?"
                WhyListing={WhyListing}

            />
        </>
    )
}
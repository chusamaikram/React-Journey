

import { Plan, Deliver, Discovery, Validation } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function RoadMapping() {
    const StrategyListing = [
        { id: 1, title: "Vision alignment" },
        { id: 2, title: "Feature prioritization" },
        { id: 3, title: "Execution milestones" },
        { id: 4, title: "Resource planning" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discover",
            desc: "Understand your goals, market context, and user needs.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Plan",
            desc: "Structure features, releases, timelines, and dependencies.",
            img: <Plan />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Validate",
            desc: "Ensure feasibility across design, dev, and strategy.",
            img: <Validation />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Deliver",
            desc: "Finalize a detailed, ready-to-execute roadmap.",
            img: < Deliver />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Align Teams Around a Common Vision", desc: "Everyone moves with clarity, design, dev, and strategy in sync." },
        { title: "We Help You Prioritize What Matters Most" },
        { title: "We Deliver Clear, Visual, and Actionable Roadmaps" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Product Strategy & Roadmapping"
                hero_desc="Plan with clarity and move with confidence. We design roadmaps that turn ideas into successful products."
                sec_heading="A Clear Path to Product Success"
                sec_desc="We align goals, prioritize features, and create structured plans that make delivery predictable and efficient."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Why Are Our Product Roadmapping Services the Right Choice for You?"
                WhyListing={WhyListing}

            />
        </>
    )
}
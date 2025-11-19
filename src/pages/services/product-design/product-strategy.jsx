import ServicePage from "../../../components/services/service-page/servicePage";

import { Discovery, Analysis, Strategy, Validation } from "../../../assets/svg/index";

export default function ProductStrategy() {
    const StrategyListing = [
        { id: 1, title: "Defining product vision and goals" },
        { id: 2, title: "Identifying audience needs and" },
        { id: 3, title: "Setting clear, actionable strategies" },
        { id: 4, title: "Mapping the business and design" },
        { id: 5, title: "Feature & Outcome Prioritization" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discovery",
            desc: "Understand business goals, target audience, and market potential.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Analysis",
            desc: "Evaluate data, trends, and competitors for key opportunities.",
            img: <Analysis />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Strategy",
            desc: "Define roadmap, positioning, and value proposition.",
            img: <Strategy />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Validation",
            desc: "Refine through feedback and finalize the execution plan.",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Align Product Goals With Market Reality", desc: "We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why." },
        { title: "We Turn Vision Into Actionable Roadmaps" },
        { title: "We Build Scalable Systems for Future Growth" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Product Strategy Consulting"
                hero_desc="We help you design with purpose and direction.Through data-driven strategy, we turn your vision into a roadmap for lasting success."
                sec_heading="Transform Vision into Measurable Product Success"
                sec_desc="Our Product Strategy Consulting bridges the gap between design, business, and technology. We define clear goals, align user needs with business outcomes, and guide your product from concept to market success."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Why Are Our Product Strategy Consulting Services the Right Choice for You?"
                WhyListing={WhyListing}

            />
        </>
    )
}
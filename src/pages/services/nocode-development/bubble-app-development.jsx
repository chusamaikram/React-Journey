import { Build, Deliver, Discovery, Integrate,} from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function BubbleApp() {
    const StrategyListing = [
        { id: 1, title: "Custom app development" },
        { id: 2, title: "Database design and workflow automation" },
        { id: 3, title: "API integrations" },
        { id: 4, title: "Dashboard and user management systems" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Plan",
            desc: "Define app goals, workflows, and logic with clear use-case mapping.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Build",
            desc: "Develop custom features and database flows for scalability.",
            img: <Build />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Integrate",
            desc: "Connect APIs, automations, and third-party tools for functionality expansion.",
            img: <Integrate />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Launch",
            desc: "Test, refine, and deploy production-ready web apps built for growth.",
            img: < Deliver />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Transform Ideas Into Complete, Ready-to-Launch Applications", desc: "We build, test, and deploy custom apps designed to solve your business challenges without lengthy development cycles." },
        { title: "We Focus on Scalability and Workflow Efficiency From Day One" },
        { title: "We Empower Teams With Tools They Can Manage Easily" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Bubble App Development"
                hero_desc="Develop dynamic, scalable web applications using Bubble — turning complex ideas into fully functional products without traditional coding."
                sec_heading=" From Prototype to Production, Without Code"
                sec_desc="Our Bubble App Development service helps startups and businesses build powerful, custom web applications quickly and efficiently. We focus on usability, performance, and seamless scalability to bring your ideas to market faster."
                processHeading="A Strategic Process That Builds Strong Foundations"
                whyHeading="Why Are Our Bubble App Development Services the Right Choice for You?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}

import {
    RoadmapingIcon, ResearchIcon,
    ConsultingIcon, UiUxIcon, ArchitectureIcon, GuidelinesIcon, PrototypingIcon, InteractionIcon,
    OptimizationIcon,
} from "../../../assets/svg/service-dropdown-icons"
import CommonCard from "./service-card-style"

export default function ProductDesign() {
    const DesignCards = [
        {
            id: 1,
            heading: "Product Strategy Consulting",
            desc: "Shape your product vision with insights, market analysis, and growth strategies.",
            path: "/services/product-strategy-consulting",
            icon: <ConsultingIcon />
        },
        {
            id: 2,
            heading: "UX Research & Insights",
            desc: "Uncover user needs and behaviors through research that drives design decisions.",
            path: "/services/ux-research-insights",
            icon: <ResearchIcon />
        },
        {
            id: 3,
            heading: "Product Strategy & Roadmapping",
            desc: "Align goals and deliverables into a strategic roadmap for market success.",
            path: "/services/product-strategy-roadmapping",
            icon: <RoadmapingIcon />
        },
        {
            id: 4,
            heading: "Experience Architecture",
            desc: "Design intuitive structures and user flows that make products effortless.",
            path: "/services/experience-architecture",
            icon: <ArchitectureIcon />
        },
        {
            id: 5,
            heading: "UI/UX Design",
            desc: "Shape your product vision with insights, market analysis, and growth strategies.",
            path: "/services/ui-ux-design",
            icon: <UiUxIcon />
        },
        {
            id: 6,
            heading: "Design Systems & Guidelines",
            desc: "Develop scalable ecosystems that ensure brand consistency across platforms.",
            path: "/services/design-system-guidelines",
            icon: <GuidelinesIcon />
        },
        {
            id: 7,
            heading: "Prototyping & User Testing",
            desc: "Turn ideas into prototypes, validate with users, and refine before launch.",
            path: "/services/prototyping-user-testing",
            icon: <PrototypingIcon />
        },
        {
            id: 8,
            heading: "Interaction & Motion Design",
            desc: "Enrich experiences with animations that bring interfaces to life.",
            path: "/services/interaction-motion-design",
            icon: <InteractionIcon />
        },
        {
            id: 9,
            heading: "UX Audit & Product Optimization",
            desc: "Identify usability challenges and unlock opportunities through evaluations.",
            path: "/services/ux-audit-product-optimization",
            icon: <OptimizationIcon />
        },
    ]
    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {DesignCards.map(card => (
                    <li key={card.id} >
                        <CommonCard
                            path={card.path}
                            heading={card.heading}
                            desc={card.desc}
                            icon={card.icon}
                        />

                    </li>
                ))}
            </ul>
        </>
    )
}
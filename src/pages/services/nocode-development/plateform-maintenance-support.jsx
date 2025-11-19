import {  Discovery, Maintain, Support, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function PlateformMaintenance() {
    const StrategyListing = [
        { id: 1, title: "Regular maintenance and backups" },
        { id: 2, title: "Bug fixes and performance monitoring" },
        { id: 3, title: "Security Optimization & Uptime Support" },
        { id: 4, title: "Feature updates and scalability checks" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Monitor",
            desc: "Track performance metrics, uptime, and system health 24/7 for reliability.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Maintain",
            desc: "Execute regular updates, patch fixes, and version control consistency.",
            img: <Maintain />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Optimize",
            desc: "Improve loading times, performance, and user experience through insights.",
            img: <Validation />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Support",
            desc: "Provide ongoing support and performance reports for clarity.",
            img: < Support />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Keep Your Platforms Running Smoothly and Securely", desc: "From security patches to uptime monitoring, we ensure your platforms perform flawlessly with no interruptions." },
        { title: "We Anticipate Issues Before They Affect Performance" },
        { title: "We Provide Transparent Reporting and Continuous Improvement" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Platform Maintenance & Support"
                hero_desc="Ensure long-term stability with continuous updates, backups, and performance optimization for all your no-code platforms and websites."
                sec_heading=" Sustaining Growth Through Reliable Support"
                sec_desc="Our Platform Maintenance & Support service keeps your no-code solutions secure, fast, and updated. We manage updates, monitor uptime, and ensure your systems stay optimized for user performance."
                processHeading="A Strategic Process That Builds Strong Foundations"
                whyHeading="Why Are Our Maintenance & Support Services the Right Choice for You?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}
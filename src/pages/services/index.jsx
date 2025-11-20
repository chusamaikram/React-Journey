
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DevelopmentIcon, BrandingIcon, DesignIcon, } from "../../assets/svg/service-dropdown-icons";
import ProductDesign from "../../components/services/service-tabs/product-design";
import BrandingSolutions from "../../components/services/service-tabs/branding-solution";
import NoCodeDevelopment from "../../components/services/service-tabs/no-code";

export default function Services() {
    const location = useLocation();
    const currentPath = location.pathname;


    const Sidebar = [
        {
            id: 1,
            title: "Product Design",
            icon: <DesignIcon />,
            keywords: [
                "/services/product-strategy-consulting",
                "/services/ux-research-insights",
                "/services/product-strategy-roadmapping",
                "/services/experience-architecture",
                "/services/ui-ux-design",
                "/services/design-system-guidelines",
                "/services/prototyping-user-testing",
                "/services/interaction-motion-design",
                "/services/ux-audit-product-optimization",
            ],
        },
        {
            id: 2,
            title: "Branding Solutions",
            icon: <BrandingIcon />,
            keywords: [
                "/services/brand-identity-solution",
                "/services/brand-strategy-positioning",
                "/services/creative-direction",
                "/services/visual-communication-design",
                "/services/rebranding-evolution",
            ],
        },
        {
            id: 3,
            title: "No-Code Development",
            icon: <DevelopmentIcon />,
            keywords: [
                "/services/webflow-development",
                "/services/framer-development",
                "/services/bubble-app-development",
                "/services/figma-sites",
                "/services/plateform-maintenance-support",
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {

        const matchedCategory = Sidebar.find((cat) =>
            cat.keywords?.some((kw) => currentPath.includes(kw))
        );

        if (matchedCategory) {
            setActiveTab(matchedCategory.id);
        } else {

            setActiveTab(Sidebar[0].id);
        }
    }, [currentPath]);

    return (
        <section className="pt-10 pb-25 bg-transparent md:bg-[#090909]">
            <div className="container">
                <div className=" grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-6 items-start">


                    <aside className="w-full sm:w-[279px] sm:sticky top-[40px] flex flex-col items-start bg-transparent md:bg-[#090909]">
                        {Sidebar.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full p-4 rounded-[8px] flex items-center gap-3 transition-all
                                             ${activeTab === item.id
                                             ? "bg-[#F3FE0014] text-white"
                                             : "text-white hover:bg-[#F3FE0014]"
                                          }`}
                                        aria-label="service tab"
                            >
                                <span>{item.icon}</span>
                                <p className="text-base leading-[24px] font-semibold font-[Inter]">
                                    {item.title}
                                </p>
                            </button>
                        ))}
                    </aside>

                    {activeTab === 1 && <ProductDesign />}
                    {activeTab === 2 && <BrandingSolutions />}
                    {activeTab === 3 && <NoCodeDevelopment />}
                </div>
            </div>
        </section>
    );
}


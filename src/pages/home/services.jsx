import Heading from '../../components/common/headings'
import ServiceCard from './service-cards'



export default function Services() {
    const ServiceCards = [
        {
            id: 1,
            heading: "FOR DIGITAL EXPERIENCES",
            title: "UX UI Design",
            path: "#",
        },
        {
            id: 2,
            heading: "For Startups & Existing Companies",
            title: "Product Revamp",
            path: "#",
        },
        {
            id: 3,
            heading: "FOR VISUAL STORYTELLERS",
            title: "Brand Design",
            path: "#",
        },
        {
            id: 4,
            heading: "FOR RAPID APP BUILDERS",
            title: "Low Code Development",
            path: "#",
        },
    ]

    return (
        <>
            <section className="above-glow py-8 sm:py-[80px]">
                <div className="container">
                    <div className='pt-0 sm:pt-[80px]'>
                        <Heading title="WE are great at" secHeading="OUR SERVICES" desc="Designs with Exceptional User Experiences" />
                    </div>
                    <div className="card-wrapper  grid grid-cols-1 lg:grid-cols-2 gap-x-8 mt-[64px]">
                        {ServiceCards.map((item) => (
                            <ServiceCard key={item.id} {...item} />
                        ))}

                    </div>

                </div>

            </section>
        </>
    )
}
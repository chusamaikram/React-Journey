import image from "../../assets/images/about-photo.png"
import { ClientIcon, TeamIcon, TestimonialIcon } from "../../assets/images/svg"
import Heading from "../../components/common/headings"
export default function AboutSection() {

    const AboutCards = [
        {
            icon: < TeamIcon />,
            title: "Our Team",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",

        },
        {
            icon: < ClientIcon />,
            title: "Client-Centric Design",
            desc: "At ZeeFrames, our unique design approach focuses on understanding client needs and collaborating to create exceptional, goal-driven digital products.",

        },
        {
            icon: < TestimonialIcon />,
            title: "Testimonials Showcase",
            desc: "Don't just take our word for it—see what satisfied clients say. Explore testimonials and case studies showcasing how our design solutions help businesses achieve their goals.",
        }
    ]
    return (
        <>
            <section className="bg-[#141414] py-8 sm:py-[80px]">
                <div className="container">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-[80px]">
                        <div className=" max-w-[390px]">
                            <img className="object-cover w-full h-auto" src={image} alt="about thumbnail" width={390} height={392} />
                        </div>
                        <div className="">
                            <div className="max-w-[570px]">
                                <Heading className="text-left items-start"
                                    title="About"
                                    secHeading="Who We Are"
                                    desc="ZeeFrames is a specialized UI UX design agency with a focus on creating exceptional digital experiences. ZeeFrames is committed to delivering the best user experience possible for your business."
                                />
                            </div>

                            <div className="mt-12 flex flex-wrap flex-col sm:flex-row items-start justify-between gap-6">
                                {AboutCards.map((card, index) => (
                                    <div key={index} className="border border-[#292929] rounded-[12px] p-4 h-[252px] w-[241px] flex flex-col flex-grow-1 items-start gap-6">
                                        {card.icon}
                                        <div>
                                            <h3 className="text-lg leading-[30px] font-[Geologica]">{card.title}</h3>
                                            <p className= "mt-2 text-sm leading-[21px] font-[Plus Jakarta Sans] text-[#DEDEDE] text-start ">{card.desc}</p>
                                        </div>

                                    </div>
                                ))}


                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

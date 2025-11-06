import Heading from "../../components/common/headings";
import member1 from "../../assets/images/member1.png";
import member2 from "../../assets/images/member2.png";
import member3 from "../../assets/images/member3.png";
import member4 from "../../assets/images/member4.png";
import member5 from "../../assets/images/member5.png";



export default function CultureSection() {

    const Team = [
        {
            img: member1,
            name: "team1",

        },
        {
            img: member2,
            name: "team2",
        },
        {
            img: member3,
            name: "team3",
        },
        {
            img: member4,
            name: "team4",
        },
        {
            img: member5,
            name: "team5",
        },
        {
            img: member1,
            name: "team1",

        },
        {
            img: member2,
            name: "team2",
        },

        {
            img: member3,
            name: "team3",
        },
        {
            img: member4,
            name: "team4",
        },
        {
            img: member5,
            name: "team5",
        },


    ]

    const ValueCards = [
        {
            id: "01",
            title: "Crafted, not copied",
            desc: "No two problems are exactly alike, that’s why we believe every project deserves a specific tailored solution, including yours.",

        },
        {
            id: "02",
            title: "Seamless collaboration",
            desc: "We ensure all the deliverables are met timely because we love smooth-sailing projects. Our project managers are always ready to discuss and provide updates for you.",
        },
        {
            id: "03",
            title: "Stay flexible",
            desc: "Just like cats, we are flexible. We remain adaptable to any urgent needs or changes as your project evolves.",
        },
        {
            id: "04",
            title: "Transparent pricing",
            desc: "We provide a clear breakdown of invoices, so no hidden fees! Whether you do project-based or recurring partnership, you can cancel anytime.",
        },
    ]
    return (
        <>
            <section className=" bg-[#141414] py-8 sm:py-[80px]">
                <div className="container">
                    <Heading
                        title="Our culture"
                        secHeading="Behind The Scenes"
                        desc="We believe in clear communication, proactive problem solving, and full transparency."

                    />
                </div>
                <div className="overflow-hidden">
                    <div className="team-slider mt-16 flex items-center justify-between gap-2">
                        {Team.map((item, index) => (
                            <div key={index} className="grow shrink-0">
                                <img className="w-full h-auto object-cover grayscale" src={item.img} alt={item.name} width={282} height={360} />

                            </div>
                        ))}


                    </div>
                </div>
            </section>

            <section className=" bg-[#141414] py-8 sm:py-[80px]">
                <div className="container">
                    <div className="flex flex-col items-start gap-8 sm:gap-20 justify-between">
                        <div>
                            <span className="text-sm text-[#F3FE00] font-[Geologica] uppercase">our value</span>
                            <p className="mt-6 text-start text-[28px] sm:text-[32px] font-[300] leading-[42px] sm:leading-[46px] font-[Geologica]" >Together, we make perfect partners. We offer worry-free partnerships and deliver your vis<span className="text-[#A3A3A3]">ion into reality with our top-tier creativity. No fluff, just the good stuff. </span></p>
                        </div>
                        <div className="flex flex-col items-start justify-between">
                            {ValueCards.map((item) => (
                                <div key={item.id} className="mt-6 sm:mt-0  h-[120px] w-[1180px] py-8 px-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 justify-between ">
                                    <div className="flex items-center gap-3 sm:gap-20 font-[Inter] ">
                                        <span className="w-[24px] text-lg ">{item.id}</span>
                                        <h2 className="text-[28px] sm:text-[32px] font-[200] font-[Geologica] leading-normal" >{item.title}</h2>
                                    </div>
                                    <div>
                                        <p className=" w-[295px] sm:w-[424px] text-sm leading-[21px]"> {item.desc}</p>
                                    </div>

                                </div>

                            ))}


                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
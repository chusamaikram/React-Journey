import Button from "../../components/common/button";
import { ClutchLogo, MiniStar, HalfStar, PlusIcon, MinusIcon } from "../../assets/images/svg"
import { Link } from "react-router-dom";
import { useState } from "react";


export default function FaqSection() {
    const Star = [
        {
            id: 1,
            img: <MiniStar />,
        },
        {
            id: 2,
            img: <MiniStar />,
        },
        {
            id: 3,
            img: <MiniStar />,
        },
        {
            id: 4,
            img: <MiniStar />,
        },
        {
            id: 5,
            img: <HalfStar />,
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0);

    const handletogle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    };


    const FaqCards = [
        {
            question: "What is UI UX design, and why is it important?",
            answer:
                "UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.",
        },
        {
            question: "What is the UX design process, and how long does it take?",
            answer:
                "The UX design process typically involves research, wireframing, prototyping, testing, and refinement. The time varies depending on project scope and complexity.",
        },
        {
            question: "What types of UX design services do you offer?",
            answer:
                "We offer user research, interface design, usability testing, and complete end-to-end UX strategy services.",
        },
        {
            question: "How does ZeeFrames UI UX Design differ from other design solutions?",
            answer:
                "At ZeeFrames, we believe in the power of Human-Computer Interaction and leverage it to make informed, data-driven design decisions that set us apart from the competition. As a leading UI UX design studio in Pakistan, we follow a design strategy that begins with discovering the needs and pain points of users and ends with real user testing for direct feedback. This approach enables us to create user-centric designs that enhance usability, accessibility, and overall user satisfaction. Our design philosophy is simple: put users at the center of everything we do.Whether it's UX research or designing User Flows, Wireframing or Prototyping our team of expert UI UX designers ensure that your users are considered in every phase of designing to deliver outstanding results that meet the unique needs of your business.",
        },
        {
            question:
                "Are there any customer reviews or case studies available for ZeeFrames UI UX Design?",
            answer:
                "At ZeeFrames, we take pride in our customer reviews and case studies that showcase our expertise in the UI UX design industry. You can easily access them on our website to get a glimpse of our work and the impact it has had on our clients' businesses. As a top-class UI UX design firm, we have worked with a diverse range of clients worldwide, helping them create engaging and intuitive digital experiences for their customers. With our expertise and user-centered design approach, you can be rest assured as we will take your website design to the next level.",
        },
    ]

    return (
        <>
            <section className="hidden sm:block py-[80px]">
                <div className="container">
                    <div className="flex items-start justify-between gap-12 ">
                        <div className="max-w-[409px] flex flex-col items-start gap-8 font-[Geologica] ">
                            <span className="text-[#F3FE00] text-sm uppercase">FAQs</span>
                            <div className="flex flex-col items-start gap-3">
                                <h2 className="text-[40px] leading-[40px] font-bold uppercase ">Got Question?</h2>
                                <p className="text-[#BDBDBD] text-sm leading-[21px] ">We begin with meaningful conversations that drive design decisions.</p>
                            </div>

                            <div className="flex items-start justify-between gap-8">
                                <div className="w-[210px]">
                                    <Button
                                        className="w-full text-black bg-white hover:bg-transparent hover:text-[#F3FE00] border border-white hover:border-[#F3FE00]"
                                        path='#'
                                        hovertext="Let's Talk "
                                        defaulttext="Book a free call"
                                        showicon={true}

                                    />
                                </div>

                                <Link to="#" className="flex items-start gap-4">
                                    <ClutchLogo />
                                    <div className="flex flex-col items-start gap-1.5">
                                        <ul className="flex items-center justify-between">
                                            {Star.map(item => (
                                                <li key={item.id}>
                                                    {item.img}
                                                </li>
                                            ))}

                                        </ul>
                                        <p className="text-sm leading-[21px] text-[#D3D3D3]">Rating 5,20 reviews</p>


                                    </div>

                                </Link>
                            </div>
                        </div>
                        <div className=" w-full flex-grow flex flex-col items-start justify-center gap-4">
                            {FaqCards.map((item, index) => (
                                <div key={index} className={` w-full p-5  bg-[rgba(255, 255, 255, 0.04)] border  transition-all duration-500 ${activeIndex === index ? "border-[#F3FE00]" : "border-[#3C3C3C]"}  rounded-[12px]`}>
                                    <button className=" w-full bg-transparent border-none cursor-pointer flex items-center justify-between" onClick={() => handletogle(index)}>
                                        <span className="flex-grow text-base font-medium text-white text-start"> {item.question}</span>
                                        <span className={`w-[24px] h-[24px] border  rounded-[6px]  ${activeIndex === index ? "border-[#F3FE00] bg-[#F3FE00]" : "border-[#3C3C3C] bg-[#3C3C3C]"}  p-1`}>
                                            {activeIndex === index ?
                                                <PlusIcon /> : <MinusIcon />
                                            }

                                        </span>
                                    </button>
                                    {activeIndex === index &&
                                        <div
                                            className={`overflow-hidden mt-2`}>
                                            <p className="text-base leading-[24px] text-[#E7E7E7] opacity-[0.6]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    }



                                </div>

                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
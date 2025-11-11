import Heading from "../../components/common/headings";

import Discovery from "../../assets/images/svg/discovery.svg";
import Digit1 from "../../assets/images/svg/digit1.svg";
import Analysis from "../../assets/images/svg/analysis.svg";
import Digit2 from "../../assets/images/svg/digit2.svg";
import Strategy from "../../assets/images/svg/strategy.svg";
import Digit3 from "../../assets/images/svg/digit3.svg";
import Validation from "../../assets/images/svg/validation.svg";
import Digit4 from "../../assets/images/svg/digit4.svg";

export default function Process() {
    const ProcessCards = [
        {
            id: 1,
            title: "Discovery",
            desc: "Understand business goals, target audience, and market potential.",
            img: Discovery,
            digit: Digit1,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Analysis",
            desc: "Evaluate data, trends, and competitors for key opportunities.",
            img: Analysis,
            digit: Digit2,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Strategy",
            desc: "Define roadmap, positioning, and value proposition.",
            img: Strategy,
            digit: Digit3,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Validation",
            desc: "Refine through feedback and finalize the execution plan.",
            img: Validation,
            digit: Digit4,
            digit_width: 46,
        },
    ]
    return (
        <>
            <section className="py-8 sm:py-20 bg-[#090909] ">
                <div className="container">
                    <div className=" mb-16 flex items-center justify-center">
                        < Heading
                            title="Process"
                            title_mb="mb-8"
                            secHeading="A Strategic Process That Builds Strong Foundations"
                            className="max-w-[327px] sm:max-w-[677px] "
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {ProcessCards.map(item => (
                            <div key={item.id} className="w-full  sm:max-w-[301px] group p-6 bg-[#121212] hover:bg-[#F3FE00] rounded-[16px] flex flex-col items-start">
                                <div className="w-full flex items-start justify-between">
                                    <img src={item.img} alt="icon" width={40} height={40} />
                                    <img src={item.digit} alt="digit" width={item.digit_width} height={73}  />

                                </div>
                                <div>
                                    <h3 className="text-lg leading-[21px] font-medium text-white group-hover:text-black">{item.title}</h3>
                                    <p className="mt-4 line-clamp-2 text-sm leading-[21px] text-[#BDBDBD] group-hover:text-black">{item.desc}</p>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>

            </section>
        </>
    )
}
import Heading from "../../common/Sec-headings";
import { Digit1, Digit2, Digit3, Digit4 } from "../../../assets/svg/index"

export default function ProcessSection({ heading, ProcessCards }) {
    const CardNumbers=[<Digit1/>, <Digit2/>, <Digit3/>, <Digit4/>]
    return (
        <>
            <section className="py-8 sm:py-20 bg-[#090909] ">
                <div className="container">
                    <div className=" mb-16 flex items-center justify-center">
                        < Heading
                            title="Process"
                            title_mb="mb-8"
                            secHeading={heading}
                            className="max-w-[327px] sm:max-w-[677px] "
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {ProcessCards.map((item, index) => (
                            <div key={item.id} className="w-full  sm:max-w-[301px] group p-6 bg-[#121212] hover:bg-[#F3FE00] rounded-[16px] flex flex-col items-start">
                                <div className="w-full flex items-start justify-between">
                                    {item.img}
                                    {CardNumbers[index]}

                                </div>
                                <div>
                                    <h3 className="text-lg leading-[21px] font-[Geologica] font-medium text-white group-hover:text-black">{item.title}</h3>
                                    <p className="mt-4  text-sm leading-[21px] text-[#BDBDBD] group-hover:text-black">{item.desc}</p>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>

            </section>
        </>
    )
}
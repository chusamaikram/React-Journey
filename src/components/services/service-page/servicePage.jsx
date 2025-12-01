import Button from "../../common/button";
import Heading from "../../common/Sec-headings"
import Mainheading from "../../common/mainheading";

import Icon from "../../../assets/svg/strategy-icon.svg"
import Star from "../../../assets/svg/hero-star.svg"

import strategyThumbnail from "../../../assets/images/strategy-img.png"
import ProcessSection from "./processSection";

import ContactUs from "../../../pages/home/contact-us";
import WhySection from "./whySection";

export default function ServicePage({
    main_heading,
    hero_desc,
    sec_heading,
    sec_desc,
    StrategyListing,
    processHeading,
    processCards,
    WhyListing,
    whyHeading


}) {
    return (
        <>
            <section className="bg-[#030303] py-12 sm:py-[80px] ">

                <div className="container">
                    <div className="relative z-[10] max-w-[797px mx-auto]">
                        <img className="absolute top-[53px] lg:top-40 left-0 md:left-25  z-[2]" src={Star} alt="star" width={46} height={46} />
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <Mainheading className="max-w-[774px]" text={main_heading} />
                            <p
                                className=' text-base sm:text-lg text-center leading-[27px] max-w-[679px] text-center font-[Inter] capitalize'>
                                {hero_desc}</p>

                            <div className='mt-5'>
                                <Button
                                    path="/contact"
                                    defaulttext="Book a Free Call"
                                    disableHover={true}
                                    showicon={false}
                                />

                            </div>



                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#030303]py-8 sm:py-[80px] ">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(100px,502px)_minmax(100px,660px)] items-center gap-20">
                        <div className="overflow-hidden rounded-[12px]">
                            <img className="w-full h-auto object-cover" src={strategyThumbnail} alt="thumbnail" width={502} height={361} />
                        </div>
                        <div>
                            <Heading
                                className="items-start text-left w-full"
                                title_mb="mb-[16px]"
                                title="impact"
                                secHeading={sec_heading}
                                desc={sec_desc}
                            />
                            <ul className="mt-8 grid grid-cols-1 sm:[grid-template-columns:minmax(100px,270px)_minmax(100px,328px)] gap-4  ">
                                {StrategyListing.map((item) => (

                                    <li key={item.id} className={`flex items-start gap-3 `}>
                                        <div className="w-[24px] h-[24px] p-[5px] flex items-center justify-center ">
                                            <img className="w-full h-full" src={Icon} alt="strategy icon" width={14} />
                                        </div>
                                        <p className="text-[12px] leading-[21px] font-medium">{item.title}</p>
                                    </li>
                                ))}


                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <ProcessSection
                heading={processHeading}
                ProcessCards={processCards}
            />
            <WhySection
                heading={whyHeading}
                StrategyListing={WhyListing}
            />
            <ContactUs />
        </>
    )

}
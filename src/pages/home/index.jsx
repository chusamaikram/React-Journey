import gradientbg from "../../assets/images/gradient-bg.png"
import SpinningStar from "../../assets/images/spining-star.gif"
import Button from "../../components/common/button";
import ContactUs from "./contact-us";
import FaqSection from "./faq-section";
import HeroSection from "./hero";
import InsightsSection from "./insights";
import ProcessSection from "./process";
import Services from "./services";
import Showcase from "./showcase";
export default function Home() {
    return (
        <>
            <HeroSection />
            <Services />
            <ProcessSection />
            <Showcase />

            <section className=" bg-cover bg-center p-8 sm:pt-[100px] pb-none sm:pb-[110px]"
                style={{ backgroundImage: `url(${gradientbg})` }}>
                <div className="container">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between  ">
                        <div className=" max-w-[717px] flex flex-col items-start  justify-between gap-4">
                            <h2 className="text-[28px] sm:text-[70px] font-bold leading-[42px] sm:leading-[96px] font-[Geologica]">Design That Thinks. Interfaces That Feel.</h2>
                            <p className="max-w-[665px] text-base sn:text-lg leading-[25px] sm:leading-[30px] font-[Inter]">At ZeeFrames, we craft AI-ready design systems for modern software responsive, scalable, and human-centered.</p>
                            <Button
                                path="#"
                                className="mt-5 bg-[#F3FE00] text-[#000] hover:bg-transparent hover:text-[#F3FE00] border border-[#F3FE00] "
                                hovertext="Let's Talk"
                                defaulttext="See AI in Action"
                                showIcon={true}
                            />
                        </div>
                        <div className="">
                            <img className="h-auto object-contain" src={SpinningStar} alt="Spinning star"
                                width={430}
                                height={430} />
                        </div>
                    </div>
                </div>

            </section>

            <FaqSection />
            <InsightsSection />
            <ContactUs />




        </>
    )
}
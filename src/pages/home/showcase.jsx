
import Headings from "../../components/common/Sec-headings"
import Button from "../../components/common/button"
import { Link } from "react-router-dom"
import ShowcaseCard from "./showcase-card"
import ExternalLink from "../../components/common/External-link"
export default function Showcase() {


    return (
        <>
            <section className="above-glow py-8 sm:py-[80px]">
                <div className="container">
                    <div className="mb-8 sm:mb-[64px]">
                        <Headings
                            title="how we helped others succeed"
                            secHeading="Our Creative Showcase"
                            desc="We have become experts in creating top-notch digital products. We design beautifully and
develop excellently. And we care deeply about what we do."
                        />

                    </div>
                    <ShowcaseCard />
                    <div className="  mt-15 py-10 px-8 border border-dashed border-[#343434] rounded-[20px] flex flex-col items-center justify-center gap-6">
                        <div className="flex flex-col items-center gap-4" >
                            <h3 className="text-[24px] font-semibold font-[Inter Tight]"> Your project here</h3>
                            <p className="max-w-[494px] leading-[normal] text-[15px] text_gray_495 text-center font-[Inter Tight ] ">The proof is in our work. Check out <span>
                                <Link to="/work" className="  text-[#F3FE00] underline ">our case studies </Link> </span> to learn how our product development services can transform your business.</p>
                        </div>
                        <ExternalLink
                            path="https://calendly.com/contact-zeeframes/30min?month=2025-12"
                            className="bg-[#F3FE00] text-[#000] hover:bg-[#000] hover:text-[#F3FE00] border border-[#F3FE00] "
                            hovertext="Let's talk"
                            defaulttext="Book a discovery call"
                            showicon={true}
                        />
                    </div>
                </div>

            </section>
        </>
    )
}
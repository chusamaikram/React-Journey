import ShowcaseCard from "./showcase-card"
import { SmartMoney, forecast, effortless, ConnectBryond, style, SmartShipping } from "../../assets/images"
import Headings from "../../components/common/headings"
import Button from "../../components/common/button"
import { Link } from "react-router-dom"
export default function Showcase() {
    const Card = [
        {
            id: 1,
            img: SmartMoney,
            title: "Smart Money Solutions",
            desc: "Our finance app makes money management simple and secure. It helps users stay in control of their spending with clear, intuitive features."
        },
        {
            id: 2,
            img: forecast,
            title: "Forecast Made Clear",
            desc: "The weather app delivers real-time forecasts with accuracy you can trust. Clean visuals ensure updates are quick to read anytime, anywhere."
        },
        {
            id: 3,
            img: effortless,
            title: "Effortless Shopping Flow",
            desc: "This ecommerce platform creates a smooth shopping journey for every user. From browsing to checkout, every step feels seamless and reliable."
        },
        {
            id: 4,
            img: ConnectBryond,
            title: "Connect Beyond Boundaries",
            desc: "Neowallet is an innovative and user-friendly e-wallet application designed to streamline digital transactions and enhance the overall financial management."
        },
        {
            id: 5,
            img: style,
            title: "Style Made Simple",
            desc: "Our clothing ecommerce site makes fashion accessible and easy to explore. Customers can browse collections and shop confidently with just a few clicks."
        },
        {
            id: 6,
            img: SmartShipping,
            title: "Smart Shipping Made",
            desc: "Explore how Orbix Studio redesigned Fastgo’s scooter rental app to drive adoption among urban commuters. Optimized UX for micromobility, safety, and speed."
        },
    ]

    return (
        <>
            <section className="py-8 sm:py-[80px]">
                <div className="container">
                    <div className="mb-8 sm:mb-[64px]">
                        <Headings
                            title="how we helped others succeed"
                            secHeading="Our Creative Showcase"
                            desc="We have become experts in creating top-notch digital products. We design beautifully and
develop excellently. And we care deeply about what we do."
                        />

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 row-gap-12">
                        {Card.map(item => (
                            <div key={item.id} className={`${item.id % 2 === 0 ? 'sm:mt-[120px]' : 'mt-0'}`}>
                                <ShowcaseCard
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-15 py-10 px-8 border border-dashed border-[#343434] rounded-[20px] flex flex-col items-center justify-center gap-6">
                        <div className="flex flex-col items-center gap-4" >
                            <h3 className="text-[24px] font-semibold font-[Inter Tight]"> Your project here</h3>
                            <p className="max-w-[494px] leading-normal text-[15px] text-[#F1F1F1] text-center font-[Inter Tight ] ">The proof is in our work. Check out <span>
                                <Link to="#" className="  text-[#F3FE00] underline ">our case studies </Link> </span> to learn how our product development services can transform your business.</p>
                        </div>
                        <Button
                            path="#"
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
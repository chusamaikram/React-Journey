import { Link } from "react-router-dom"
import { SmartMoney, forecast, effortless, ConnectBryond, style, SmartShipping } from "../../assets/images"


export default function ShowcaseCard() {

    const CardsData = [
        {
            id: 1,
            img: SmartMoney,
            title: "Smart Money Solutions",
            desc: "Our finance app makes money management simple and secure. It helps users stay in control of their spending with clear, intuitive features.",
            path: "/work"
        },
        {
            id: 2,
            img: forecast,
            title: "Forecast Made Clear",
            desc: "The weather app delivers real-time forecasts with accuracy you can trust. Clean visuals ensure updates are quick to read anytime, anywhere.",
            path: "/work"
        },
        {
            id: 3,
            img: effortless,
            title: "Effortless Shopping Flow",
            desc: "This ecommerce platform creates a smooth shopping journey for every user. From browsing to checkout, every step feels seamless and reliable.",
            path: "/work"
        },
        {
            id: 4,
            img: ConnectBryond,
            title: "Connect Beyond Boundaries",
            desc: "Neowallet is an innovative and user-friendly e-wallet application designed to streamline digital transactions and enhance the overall financial management.",
            path: "/work"
        },
        {
            id: 5,
            img: style,
            title: "Style Made Simple",
            desc: "Our clothing ecommerce site makes fashion accessible and easy to explore. Customers can browse collections and shop confidently with just a few clicks.",
            path: "/work"
        },
        {
            id: 6,
            img: SmartShipping,
            title: "Smart Shipping Made",
            desc: "Explore how Orbix Studio redesigned Fastgo’s scooter rental app to drive adoption among urban commuters. Optimized UX for micromobility, safety, and speed.",
            path: "/work"
        },
    ]
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 row-gap-12">
                {CardsData.map(item => (
                    <Link to={item.path} key={item.id} className={`${item.id % 2 === 0 ? 'sm:mt-[120px]' : 'mt-0'}`}>
                        <div className="w-full flex flex-col items-start justify-center gap-8">
                            <img className="max-w-full h-full rounded-6" src={item.img} alt={item.title} loading="lazy"
                                width={600}
                                height={685}
                            />
                            <div className="flex flex-col items-start gap-2.5 font-['Inter_Tight'] ">
                                <h3 className="text-[28px] font-semibold ">{item.title}</h3>
                                <p className="text-base leading-[25px] " >{item.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>


        </>
    )
}
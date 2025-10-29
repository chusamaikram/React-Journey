import Button from "../../components/common/button";
import { ClutchLogo, MiniStar, HalfStar } from "../../assets/images/svg"
import { Link } from "react-router-dom";


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

    return (
        <>
            <section className="py-[80px]">
                <div className="container">
                    <div className="flex items-start justify-between gap-12">
                        <div className="flex flex-col items-start gap-8 font-[Geologica] ">
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
                        <div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
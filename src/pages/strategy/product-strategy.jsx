import StrategyThumbnail from "../../assets/images/product-strategy-thumbnail.png"
export default function ProducrStrategy() {
    const StrategyListing = [
        { title: "We Align Product Goals With Market Reality", desc: "We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why." },
        { title: "We Turn Vision Into Actionable Roadmaps" },
        { title: "We Build Scalable Systems for Future Growth" }
    ]

    return (
        <>
            <section className="py-8 sm:py-20 bg-[#0B0B0B] ">
                <div className="container">
                    <div className=" grid grid-cols-1 md:[grid-template-columns:minmax(100px,659px)_minmax(100px,502px)] gap-20">
                        <div className="flex flex-col items-start gap-6">
                            <h2 className=" hidden sm:block text-[40px]  leading-[48px] font-bold font-[Geologica]">Why Are Our Product Strategy Consulting Services the Right Choice for You?</h2>
                            <h2 className="block sm:hidden text-[28px] leading-[40px]  font-bold font-[Geologica]" >Transform Vision into Measurable Product Success</h2>
                            <ul className="flex flex-col items-start gap-3">
                                {StrategyListing.map((item, index) => (

                                    <li key={index} className="p-3">
                                        <div className={`flex ${index === 0 ? "items-start" : "items-center"}  gap-3`}>
                                            <div className="w-[36px] h-[36px] rounded-full bg-[#F3FE00] flex items-center justify-center p-2">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.16406 10.0003C4.16406 7.65949 4.16406 6.48949 4.72573 5.64866C4.96899 5.28454 5.28161 4.97192 5.64573 4.72866C6.48656 4.16699 7.65573 4.16699 9.9974 4.16699C12.3391 4.16699 13.5082 4.16699 14.3491 4.72866C14.7132 4.97192 15.0258 5.28454 15.2691 5.64866C15.8307 6.48949 15.8307 7.65866 15.8307 10.0003C15.8307 12.342 15.8307 13.5112 15.2691 14.352C15.0258 14.7161 14.7132 15.0287 14.3491 15.272C13.5082 15.8337 12.3391 15.8337 9.9974 15.8337C7.65573 15.8337 6.48656 15.8337 5.64573 15.272C5.28161 15.0287 4.96899 14.7161 4.72573 14.352C4.16406 13.5112 4.16406 12.342 4.16406 10.0003Z" stroke="black" stroke-width="1.5" />
                                                    <path d="M10.709 7.5L8.32812 10H11.6615L9.28062 12.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-start gap-2">
                                                <h3 className="text-base leading-[21px] font-semibold">{item.title}</h3>
                                                <p className="text-sm leading-[20px] text-[#DCDCDC]"> {item.desc}</p>
                                            </div>


                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="max-w-[502px] overflow-hidden rounded-[24px]">
                            <img className="w-full h-auto object-cover" src={StrategyThumbnail} alt="strategy thumbnail" width={502} height={405} />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
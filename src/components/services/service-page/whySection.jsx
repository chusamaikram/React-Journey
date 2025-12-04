import StrategyThumbnail from "../../../assets/images/product-strategy-thumbnail.png"

export default function WhySection({ heading, StrategyListing }) {
    return (
        <>
            <section className="py-8 sm:py-20 bg-[#0B0B0B] ">
                <div className="container">
                    <div className=" grid grid-cols-1 md:[grid-template-columns:minmax(100px,659px)_minmax(100px,502px)] gap-20">
                        <div className="flex flex-col items-start gap-6">
                            <h2 className="text-[28px] sm:text-[40px] leading-[40px] sm:leading-[40px] font-bold font-[Geologica]">{heading}</h2>
                            <ul className="flex flex-col items-start gap-3">
                                {StrategyListing.map((item, index) => (

                                    <li key={index} className="p-3 bg-[#121212] w-full rounded-[8px]">
                                        <div className={`flex ${index === 0 ? "items-start" : "items-center"}  gap-3`}>
                                            <div className="w-[36px] h-[36px] rounded-full bg-[#F3FE00] flex items-center justify-center p-2">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.16406 10.0003C4.16406 7.65949 4.16406 6.48949 4.72573 5.64866C4.96899 5.28454 5.28161 4.97192 5.64573 4.72866C6.48656 4.16699 7.65573 4.16699 9.9974 4.16699C12.3391 4.16699 13.5082 4.16699 14.3491 4.72866C14.7132 4.97192 15.0258 5.28454 15.2691 5.64866C15.8307 6.48949 15.8307 7.65866 15.8307 10.0003C15.8307 12.342 15.8307 13.5112 15.2691 14.352C15.0258 14.7161 14.7132 15.0287 14.3491 15.272C13.5082 15.8337 12.3391 15.8337 9.9974 15.8337C7.65573 15.8337 6.48656 15.8337 5.64573 15.272C5.28161 15.0287 4.96899 14.7161 4.72573 14.352C4.16406 13.5112 4.16406 12.342 4.16406 10.0003Z" stroke="black" strokeWidth="1.5" />
                                                    <path d="M10.709 7.5L8.32812 10H11.6615L9.28062 12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-start gap-2">
                                                <h3 className="text-base leading-[21px] font-[Geologica] font-semibold">{item.title}</h3>
                                                <p className="text-sm leading-[20px] text_gray_495"> {item.desc}</p>
                                            </div>


                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="max-w-[502px] rounded-[24px]">
                            <div className=" h-auto relative overflow-hidden">
                                <img className="w-full h-auto object-cover" src={StrategyThumbnail} alt="strategy thumbnail" loading="lazy" width={502} height={405} />
                                <a href="#" target="blank" aria-label="Ratings" className="p-3 absolute left-[34px] bottom-[49px] max-w-[222px] bg-white rounded-[12px] flex items-center gap-3">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#121212" />
                                        <path d="M16 8L17.7961 13.5279H23.6085L18.9062 16.9443L20.7023 22.4721L16 19.0557L11.2977 22.4721L13.0938 16.9443L8.39155 13.5279H14.2039L16 8Z" fill="#F3FE00" />
                                    </svg>
                                    <p className="text-base leading-[21px] text-black font-semibold">4.9 Rated Company</p>

                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
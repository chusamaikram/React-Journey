
export default function Heading({ title, secHeading, desc, className, title_mb=""}) {
    return (
        <>
            <div className={`flex flex-col items-center justify-center gap-1.6 sm:gap-[16px] ${className}`}>
                <span className={`text-[#F3FE00] text-[14px] font-[Inter] text-center uppercase ${title_mb} `}>{title}</span>
                <h2 className={`text-[28px] sm:text-[40px]  text-white font-[Geologica] font-bold leading-[40px] text-center ${className}
     `}>{secHeading}</h2>
                <p className={` max-w-[596px] text-[#d5d5d5] text-[14px] leading-[21px] text-center font-[Inter] ${className} `}>{desc}</p>

            </div>


        </>
    )
}

export default function Heading({ title, secHeading, desc, className }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-1.6 sm:gap-[16px]">
                <span className={`text-[#F3FE00] text-[14px] font-[Geologica] text-center uppercase ${className} `}>{title}</span>
                <h2 className={`text-[28px] sm:text-[40px]  text-white font-[Geologica] text-center font-bold leading-[40px]text-center ${className}
     `}>{secHeading}</h2>
                <p className={` max-w-[596px] text-[#BDBDBD] text-[14px] leading-[21px] text-center font-[Plus Jakarta Sans] ${className}`}>{desc}</p>

            </div>


        </>
    )
}

import projects from "../../assets/images/projects.svg"
import clients from "../../assets/images/clients.svg"
import user from "../../assets/images/user-circle.svg"
import smile from "../../assets/images/smile.svg"

export default function Mission() {
const MissionCard=[
    {
        img:projects,
        count:"1200+",
        title:"Successful Projects",
        width:"86",
        height:"121"
    },
    {
        img:clients,
        count:"200+",
        title:"Repeated Clients",
        width:"117",
        height:"118"
    },
    {
        img:user,
        count:"30+",
        title:"UX Experts",
        width:"121",
        height:"121"
    },
    {
        img:smile,
        count:"4.8+",
        title:"Stars On Google",
        width:"121",
        height:"121"
    },

]

    return (
        <>
            <section className="bg-[#141414] py-8 sm:py-[80px]">
                <div className="container">
                    <div className="max-w-[981px]">
                        <span className="text-sm text-[#F3FE00] font-[Geologica] uppercase">Our Mission</span>
                        <p className="mt-4 sm:mt-6 text-[28px] sm:text-[32px] font-[300] leading-[46px] font-[Geologica] text-start">ZeeFrames strives to be a leading UI/UX design agency known for innovative solutions that deliver exceptional user experiences and drive busi<span className="text-[#A3A3A3]">ness growth.
                            We blend creativity and user-centered design to craft intuitive, standout products and partner with clients to achieve lasting impact.</span></p>
                    </div>
                    <div className="mt-8 sm:mt-20 flex flex-col sm:flex-row items-start justify-between">
                        <p className="text-sm uppercase font-[Geologica]">Since 2020, what we get...</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto sm:mx-0 items-start gap-12 sm:gap-18 ">
                            {MissionCard.map((item, index) => (
                                <div key={index} className="w-[220px] h-[147px] flex flex-col justify-end relative">
                                    <img className="absolute top-0 right-[26px] z-1" src={item.img} alt="" width={item.width} height={item.height} />
                                    <h2 className=" z-2 text-[60px] font-[Inter] font-bold text-[#F3FE00] w-full">{item.count}</h2>
                                    <p className=" z-2 text-[24px] text-[#C2C2C2] font-[Inter]">{item.title}</p>
                                </div>

                            ))}


                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
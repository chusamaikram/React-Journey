import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/svg";
import { insight1, insight2, insight3 } from "../../assets/images";

export default function InsightsSection() {
    const InsightCards = [
        {
            id: 1,
            img: insight1,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI experiences...",
            timerequire: "7 min read",
            date: "Jan 23, 2025",
            path: "/insights/insight-details",
        },
        {
            id: 2,
            img: insight2,
            title: "Skipping Figma, human after all, Figma grid, accessibility as an afterthought",
            desc: "Weekly curated resources for designers — thinkers and makers.",
            timerequire: "7 min read",
            date: "Jan 23, 2025",
            path: "/insights/insight-details",
        },
        {
            id: 3,
            img: insight3,
            title: "Is your creative character being sacrificed to Algorithm, Inc.?",
            desc: "AI is changing how we work. Here’s why and how we must preserve the human spirit that drives...",
            timerequire: "7 min read",
            date: "Jan 23, 2025",
            path: "/insights/insight-details",
        },
    ]
    return (
        <>
            <section className="above-glow py-8 sm:py-[80px]">
                <div className="container">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-auto">
                        <div className="max-w-[510px] flex flex-col items-center sm:items-start justify-start gap-4 sm:gap-8">
                            <span className="text-sm text-[#F3FE00] font-[Geologica] uppercase">Our Insights</span>
                            <h2 className="text-[28px] sm:text-[40px] text-center sm:text-start font-bold leading-[40px] sm:leading-[44px] font-[Geologica]">Insights That Inspire Vision Forward</h2>
                        </div>
                        <div>
                            <Link to="/insights" className="h-[48px] flex items-center justify-between p-5 rounded-full bg-white text-black text-base font-semibold leading-[24px] font-[Inter]" >
                                Explore More
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>
                    <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
                        {InsightCards.map(item => (
                            <Link to={item.path} key={item.id} className=" bg-[#121212] border border-[#2D2D2D] rounded-[12px] overflow-hidden flex flex-col items-center justify-center" >
                                <div className="h-[227px] overflow-hidden">
                                    <img className="h-full w-full object-cover" src={item.img} alt={item.title} width={392} height={227} />
                                </div>

                                <div className="h-full p-6 flex flex-col items-start">
                                    <span className="hidden sm:block text-[12px] font-[Inter] text-white">ZeeFrames</span>
                                    <div className="flex flex-col items-start gap-2 py-5">
                                        <h3 className="text-[20px] sm:text-[24px] line-clamp-3 font-medium font-[Poppins] text-white"> {item.title}</h3>
                                        <p className="text-base line-clamp-2 leading-[24px]">{item.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-[12px] font-[Inter]">
                                        <span >{item.timerequire}</span>
                                        <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
                                        <time dateTime={item.date}>{item.date}</time>
                                    </div>
                                </div>
                            </Link>

                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}
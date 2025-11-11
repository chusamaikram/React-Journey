
import { Link } from "react-router-dom"
import Insight from "../../../assets/images/insight-detail.png"
import Insight2 from "../../../assets/images/insight-detail2.png"
import ShareIcon from "../../../assets/svg/share-icon.svg"
import TrendingArticleImg from "../../../assets/images/trending-article.png"
import RecentArticles from "../recent-articles"
import ContactUs from "../../home/contact-us"

export default function InsightDetail() {
    const Trending = [
        {
            id: 1,
            img: TrendingArticleImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            timerequire: "7",
            date: "Jan 23, 2025"
        },
        {
            id: 2,
            img: TrendingArticleImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            timerequire: "7",
            date: "Jan 23, 2025"
        },
        {
            id: 3,
            img: TrendingArticleImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            timerequire: "7",
            date: "Jan 23, 2025"
        },
        {
            id: 4,
            img: TrendingArticleImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            timerequire: "7",
            date: "Jan 23, 2025"
        },
        {
            id: 5,
            img: TrendingArticleImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            timerequire: "7",
            date: "Jan 23, 2025"
        },

    ]

    return (
        <>
            <article>
                <section className="py-8 sm:py-25">
                    <div className="container">
                        <div className="flex flex-col items-start gap-10 ">
                            <div className="text-[#CDCDCD]">
                                <p className=" text-base sm:text-lg font-[Inter] leading-[24px] mb-6">posted by: Admin</p>
                                <h1 className="w-full text-white text-[32px] sm:text-[48px] leading-[44px] sm:leading-[58px] font-semibold font-[Geologica]">How Thinking Like a Product Designer Changed My Design Handoffs</h1>
                                <p className=" text-[20px] mt-5 leading-[24px] font-[Inter] text-[#CDCDCD]">Five lessons I've learned about deliverables that Junior Designer Me could’ve never imagined.</p>
                            </div>
                            <div className="py-5 flex items-center justify-between w-full ">
                                <div className=" flex items-center justify-start gap-2 text-[#CDCDCD] text-lg font-[Inter] leading-[normal] ">
                                    <span >7 min read</span>
                                    <div className="w-[6px] h-[6px] bg-[#4D4C4C] rounded-full"></div>
                                    <time datetime="Jan 23, 2025">Jan 23, 2025</time>
                                </div>
                                <button className="w-[83px] cursor-pointer h-[32px] rounded-[29px] py-1.5 px-3 border border-[#252525] font-[Inter] flex items-center justify-center gap-1.5 text-[#CDCDCD]">
                                    <img src={ShareIcon} alt="icon" width={20} />
                                    <span>Share</span>
                                </button>


                            </div>
                        </div>
                        <div className=" mt-15 w-full overflow-hidden">
                            <img className="max-w-full h-auto object-contain" src={Insight} alt="insight thumbnail" width={1210} height={539} />
                        </div>
                    </div>

                </section>
                <section className="py-8 sm:py-20">
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_341px] gap-y-8 gap-x-10 items-start ">
                            <div className="flex flex-col items-start gap-2 font-[Plus_Jakarta_Sans] text-[#ECECEC]">
                                <h3 className="text-lg font-medium font-[Poppins] ">Let me paint you a picture of Junior Me.</h3>
                                <p className="text-base text-left leading-[24px]">I'd whip up a design, slap together a shiny mockup, and send it off to the developers, feeling pretty damn proud of myself. I'd whip up a design, slap together a shiny mockup, and send it off to the developers, feeling pretty damn proud of myself.</p>
                                <p className="text-base text-left leading-[24px] font-medium ">Junior Me thought, “Hey, if it looks good, we're good, right?</p>
                                <h3 className="text-[22px] font-medium font-[Poppins] ">Wrong. So very wrong.</h3>
                                <p className="text-base text-left leading-[24px]"> Fast-forward to now, and my deliverables are unrecognizable compared to those plain mockups of the past. I've learned — sometimes the hard way — that the job doesn't stop at making things look pretty.
                                    <br />
                                    <br />
                                    As a product designer and now product manager, I've realized that great deliverables anticipate problems, answer questions, and make the dev team's life a whole lot easier.
                                    <br />
                                    <br /> Here are five lessons I've learned about deliverables that Junior Me could've never imagined.
                                </p>
                                <p> Fast-forward to now, and my deliverables are unrecognizable compared to those plain mockups of the past. I've learned — sometimes the hard way — that the job doesn't stop at making things look pretty.
                                    <br />
                                    <br />
                                    As a product designer and now product manager, I've realized that great deliverables anticipate problems, answer questions, and make the dev team's life a whole lot easier.
                                    <br />
                                    <br />
                                    Here are five lessons I've learned about deliverables that Junior Me could've never imagined.
                                </p>
                                <div className=" my-8 overflow-hidden">
                                    <img className="w-full h-auto object-cover" src={Insight2} alt="" width={900} height={448} />

                                </div>
                                <h3 className="text-lg font-medium font-[Poppins] ">Best practices for working with big data tables</h3>
                                <p className="text-base text-left leading-[24px]">Designing tables for large datasets is a whole different story. Big data tables need optimized designs and smart interactions to make sure users can navigate and analyze data efficiently. Here are some best practices to keep in mind when working with big data tables:</p>
                                <h3 className="text-lg font-medium font-[Poppins] mt-3 ">1. Enable advanced sorting and filtering</h3>
                                <p className="text-base text-left leading-[24px] -mt-2 mb-3">When you’re working with big data sets, it’s important to have effective ways to sift through all that information. Sorting and filtering are key tools for helping users find relevant data quickly.</p>
                                <ul className="flex flex-col items-start list-disc ml-4">
                                    <li className="text-base text-left leading-[24px]"> <span className="font-semibold">Multi-level sorting:</span> Let users sort by multiple columns at the same time. For instance, users might want to sort first by department, then by revenue and then by date.
                                    </li>
                                    <li className="text-base text-left leading-[24px]"> <span className="font-semibold">Dynamic filters:</span>  give users the option to filter as they type or select options. Filters should be simple to understand, easy to use and flexible, so users can easily customize their views of the data
                                    </li>

                                </ul>
                            </div>
                            <aside className="sticky top-[100px]">
                                <h2 className="text-[24px] font-semibold font-[Poppins]">Trending Blogs</h2>
                                <div className="mt-6 flex flex-col gap-5">
                                    {Trending.map(card => (
                                        <Link key={card.id} to="/insights/insight-details" className="grid grid-cols-[104px_1fr] rounded-[16px] border border-white/20 bg-white/8 p-1.5 max-w-[341px] gap-3 backdrop-blur">
                                            <div className="overflow-hidden rounded-[12px]">
                                                <img className="w-full h-full object-cover" src={card.img} alt="thumbnail" width={295} height={218} />
                                            </div>
                                            <div className="flex flex-col items-start gap-3">
                                                <span className="text-[12px] font-[Inter] leading-[normal]">ZeeFrames</span>
                                                <h1 className="text-sm font-medium font-[Geologica] overflow-hidden line-clamp-2">{card.title}</h1>
                                                <div className="text-[12px] leading-[normal] flex items-center gap-2 font-[Inter]">
                                                    <span >{card.timerequire} min read</span>
                                                    <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                                                    <time datetime={card.date}>{card.date}</time>
                                                </div>

                                            </div>

                                        </Link>
                                    ))}


                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
                <RecentArticles />
                <ContactUs />
            </article>
        </>
    )
}
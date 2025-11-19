import { ZeeFramesLogo, FooterMobile, America, Europe, SaudiArabia, Pakistan } from "../../assets/images/index";
import { Link } from "react-router-dom";
import { BeIcon, FbIcon, InstaIcon, LinkedlnIcon, WebIcon, Xicon } from "../../assets/svg";

export default function Footer() {
    const FooterLinks = [
        {
            id: 1,
            title: "Company",
            links: [{ title: 'Home', path: "/" }, { title: 'About', path: "/about" }, { title: 'Services', path: "/services" }, { title: 'Work', path: "/work" }, { title: 'Insights', path: "/insights" }],
        },
        {
            id: 2,
            title: "Services",
            links: [{ title: 'UX UI Design', path: "/services/ui-ux-design" }, { title: 'UX Research', path: "/services/ux-research-insights" }, { title: 'Design System', path: "/services/design-system-guidelines" }, { title: 'Webflow Development', path: "/services/webflow-development" }, { title: 'Bubble App Development', path: "/services/bubble-app-development" }],
        },
        {
            id: 3,
            title: "Reviews",
            links: [{ title: 'Clutch (4.8)' }, { title: 'Good Firms (4.9)' }, { title: 'Webflow (4.7)' }, { title: 'Dribbble (4.8)' }],
        },

    ]

    const Address = [
        {
            id: 1,
            img: America,
            title: "North America",
            address: "1832 Norfolk st Houston Texas 77098",
            addresslink: "https://maps.app.goo.gl/8JdPWNZbrTrKF6CS9",
            phone: "+1 (480) 920-1123",
        },
        {
            id: 2,
            img: Europe,
            title: "Europe",
            address: "West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom",
            addresslink: "https://maps.app.goo.gl/rR152PDacVVtZGeUA",
            phone: "+44 (746) 0766-922",
        },
        {
            id: 3,
            img: SaudiArabia,
            title: "Middle East",
            address: "8640 Umat Al Karim, 4006, Al Majd District, Yanbu Al Bahr 46431",
            addresslink: "https://maps.app.goo.gl/C5Y4imyDQ1CxQT4o6",
            phone: "+966 (56) 592-3840",
        },
        {
            id: 4,
            img: Pakistan,
            title: "Asia",
            address: "144/2, Block B, Bankers Society Near DHA Phase 4, Lahore, 54792",
            addresslink: "https://maps.app.goo.gl/3VoEGcgHfa4vcCDy5",
            phone: "042-37888403",
        },
    ]

    const SocialLinks = [
        {
            id: 1,
            title: "Behance",
            img: <BeIcon />,
            path: "https://www.behance.net/zeeframes",
        },
        {
            id: 2,
            title: "Website",
            img: <WebIcon />,
            path: "https://www.zeeframes.com",
        },
        {
            id: 3,
            title: "LinkedIn",
            img: <LinkedlnIcon />,
            path: "https://www.linkedin.com/company/zeeframes/",
        },
        {
            id: 4,
            title: "Instagram",
            img: <InstaIcon />,
            path: "https://www.instagram.com/zeeframes/",
        },
        {
            id: 5,
            title: "Facebook",
            img: <FbIcon />,
            path: "https://www.facebook.com/zeeframes",
        },
        {
            id: 6,
            title: "Twitter",
            img: <Xicon />,
            path: "https://twitter.com/zeeframes",
        },
    ]
    return (
        <>
            <footer className="relative z-20  py-8 border-t border-[#2A2A2A]">
                <div className="container">
                    <img src={ZeeFramesLogo} alt="ZeeFrames Logo"
                        className=" hidden sm:block max-w-full h-auto"
                        width={1240}
                        height={180}
                    />
                    <img src={FooterMobile} alt="Footer Mobile"
                        className=" block sm:hidden max-w-full h-auto"
                        width={328}
                        height={47} />
                    <div className="pt-8 pb-8.5 grid grid-cols-2 md:grid-cols-[minmax(200px,1fr)_minmax(110px,216px)_minmax(110px,216px)_minmax(110px,216px)] items-start gap-12">
                        <div className="col-span-2 md:col-span-1" >
                            <p className="text-lg leading-[27px] text-left text-[#BDBDBD] font-[Inter]">We transform ideas into user-centered digital experiences for businesses worldwide, from Fortune 500s to startups, using Figma, Webflow, and no-code solutions.</p>
                        </div>
                        {FooterLinks.map(item => (
                            <div id={item.id}
                                className=" flex flex-col items-start gap-5 font-['Inter_Tight']">
                                <h2 className="text-base font-semibold leading-[20px] text-[#FFFFFF]">{item.title}</h2>
                                <ul className="flex flex-col items-start gap-3.5">
                                    {item.links.map((link, i) => (
                                        <li id={i} className="" >
                                            <Link
                                                className="text-[15px] leading-[20px] text-[#8F8F8F] hover:text-[#FFFFFF] font-[Inter Tight]"
                                                to={link.path}>
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        ))}
                    </div>
                    <div className="grid sm:grid-cols-4 items-start gap-4 p-6 bg-[#1A1A1A]">
                        {Address.map(item => (
                            <div id={item.id}
                                className="flex flex-col items-start gap-[6px] p-5 font-['Inter_Tight'] " >
                                <img src={item.img} alt={item.title}
                                    width={32}
                                    height={24}
                                />
                                <h3 className="mt-[6px] text-[24px] font-medium font-[Inter Tight] text-[#FFFFFF]">{item.title}</h3>
                                <a href={item.addresslink} className="text-[14px] leading-[22px] font-[Inter Tight] text-[#8E8E8E]" aria-label="address link" target="_blank">{item.address}</a>
                                <a href={`tel:${item.phone}`} className="text-sm leading-[20px] font-medium font-[Inter Tight] text-[#E1E1E1]" aria-label="contact number">{item.phone}</a>
                            </div>
                        ))}


                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
                        <p className="text-white/70 text-xs">© ZeeFrames (Private) Limited. All Rights Reserved.</p>
                        <ul className="flex items-center gap-[16px]">
                            {SocialLinks.map(item => (
                                <li key={item.id}>
                                    <a href={item.path} aria-label="social links" target="_blank">
                                        {item.img}
                                    </a>
                                </li>

                            ))}

                        </ul>
                    </div>
                </div>

            </footer>

        </>
    )
}
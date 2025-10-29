import { ZeeFramesLogo, FooterMobile, America, Europe, SaudiArabia, Pakistan } from "../../assets/images/index";
import { Link } from "react-router-dom";
import { BeIcon, FbIcon, InstaIcon, LinkedlnIcon, WebIcon, Xicon } from "../../assets/images/svg";
export default function Footer() {
    const FooterLinks = [
        {
            id: 1,
            title: "Company",
            links: ['Home', 'About', 'Services', 'Work', 'Insights'],
        },
        {
            id: 2,
            title: "Services",
            links: ['UX UI Design', 'UX Research', 'Design System', 'Web App Design', 'Mobile App Design'],
        },
        {
            id: 3,
            title: "Reviews",
            links: ['Clutch (4.8)', 'Good Firms (4.9)', 'Webflow (4.7)', 'Dribbble (4.8)'],
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
            <footer className="py-8 ">
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
                    <div className="pt-8 pb-8.5 flex flex-col sm:flex-row items-start gap-8 sm:gap-[101px]">
                        <p className="w-auto sm:w-[393px] text-lg leading-[27px] text-left text-[#BDBDBD] font-[Inter]">We transform ideas into user-centered digital experiences for businesses worldwide, from Fortune 500s to startups, using Figma, Webflow, and no-code solutions.</p>
                        <div className="flex flex-wrap items-start gap-6 sm:gap-[48px]">
                            {FooterLinks.map(item => (
                                <div id={item.id}
                                    className="w-[140px] sm:w-[160px] flex flex-col items-start gap-5">
                                    <h2 className="text-base font-semibold leading-[20px] text-[#FFFFFF]">{item.title}</h2>
                                    <ul className="flex flex-col items-start gap-3.5">
                                        {item.links.map((link, i) => (
                                            <li id={i} >
                                                <Link
                                                    className="text-[15px] leading-[20px] text-[#BDBDBD] hover:text-[#FFFFFF] font-[Inter Tight]"
                                                    to="#">{link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            ))}

                        </div>
                    </div>
                    <div className="grid sm:grid-cols-4 items-start gap-4 p-6 bg-[#1A1A1A]">
                        {Address.map(item => (
                            <div id={item.id}
                                className="flex flex-col items-start gap-[6px] p-5" >
                                <img src={item.img} alt={item.title}
                                    width={32}
                                    height={24}
                                />
                                <h3 className="mt-[6px] text-lg font-medium font-[Inter Tight] text-[#FFFFFF]">{item.title}</h3>
                                <a href={item.addresslink} className="text-[14px] leading-[22px] font-[Inter Tight] text-[#8E8E8E]" target="_blank">{item.address}</a>
                                <a href={`tel:${item.phone}`} className="text-base leading-[22px] font-medium font-[Inter Tight] text-[#E1E1E1]">{item.phone}</a>
                            </div>
                        ))}


                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
                        <p className="text-[rgba(255, 255, 255, 0.70)] text-xs">© ZeeFrames (Private) Limited. All Rights Reserved.</p>
                        <ul className="flex items-center gap-[16px]">
                            {SocialLinks.map(item => (
                                <li key={item.id}>
                                    <a href={item.path} target="_blank">
                                        {item.img}
                                    </a>
                                </li>

                            ))}

                        </ul>
                    </div>
                </div>

            </footer>
            <div className="floating_btn">
                <a target="_blank" href="https://wa.me/">
                    <div className="contact_icon">
                        <i className="fa fa-whatsapp my-float"></i>
                    </div>
                </a>
            </div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
        </>
    )
}
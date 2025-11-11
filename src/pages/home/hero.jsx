import bg1 from "../../assets/images/bg1.png"
import bg2 from "../../assets/images/bg2.png"
import bg3 from "../../assets/images/bg3.png"
import industrylogo from "../../assets/images/industry-logo.png"
import { adiqat, cisco, nissan, repurpose, trafilea, walmart, yallamotor } from "../../assets/images";
import Button from "../../components/common/button";

import { Bdot, Diamond, FigmaIcon, StarIcon, Wicon, XD } from "../../assets/svg";
import Mainheading from "../../components/common/mainheading";

export default function HeroSection() {
    const Startups = [
        {
            id: 1,
            icon: <FigmaIcon />
        },
        {
            id: 2,
            icon: <Diamond />
        },
        {
            id: 3,
            icon: <XD />
        },
        {
            id: 4,
            icon: <FigmaIcon />
        },
        {
            id: 5,
            icon: <Wicon />
        },
        {
            id: 6,
            icon: <Bdot />
        },
    ]

    const companies = [
        {
            name: 'walmart',
            image: walmart,
            width: "135",
            height: "33"
        },
        {
            name: 'cisco',
            image: cisco,
            width: "61",
            height: "33"
        },
        {
            name: 'repurpose',
            image: repurpose,
            width: "198",
            height: "33"
        },
        {
            name: 'trafilea',
            image: trafilea,
            width: "137",
            height: "33"
        },
        {
            name: 'adiqat',
            image: adiqat,
            width: "56",
            height: "33"
        },
        {
            name: 'yallamotor',
            image: yallamotor,
            width: "152",
            height: "33"
        },
        {
            name: 'nissan',
            image: nissan,
            width: "142",
            height: "33"
        },
        {
            name: 'walmart',
            image: walmart,
            width: "135",
            height: "33"
        },
        {
            name: 'nissan',
            image: nissan,
            width: "142",
            height: "33"
        },
        {
            name: 'walmart',
            image: walmart,
            width: "135",
            height: "33"
        },
        {
            name: 'nissan',
            image: nissan,
            width: "142",
            height: "33"
        },
        {
            name: 'walmart',
            image: walmart,
            width: "135",
            height: "33"
        },
         {
            name: 'yallamotor',
            image: yallamotor,
            width: "152",
            height: "33"
        },
        {
            name: 'nissan',
            image: nissan,
            width: "142",
            height: "33"
        },
       
      
       
    ]

    return (
        <>
            <section className="hero-section h-[750px]">

                <div className="container">
                    <div className="relative ">

                        <img className="absolute z-0 top-0 left-[20px] hidden sm:block blur-[30px] opacity-[0.8]" src={bg1} alt="" />
                        <img className="absolute z-0 top-[150px] sm:top-0 -left-[20px] sm:left-[130px] " src={bg2} alt="" />
                        <img className="absolute z-0 top-0 right-0 blur-[30px] hidden sm:block opacity-[0.8]" src={bg3} alt="" />
                        <StarIcon />

                        <div className="absolute z-10 top-0 left-0">
                            <div className="above-glow  w-[327px] sm:w-[600px] mt-8 sm:mt-12 mx-auto bg-[#0D0D0C] rounded-[8px] border border-[#303030] flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5 p-2">
                                <div className="flex items-center gap-3">
                                    <img src={industrylogo} alt="" />
                                    <p>Trusted by startups to craft $100M+ designs with</p>
                                </div>

                                <ul className="flex items-center">
                                    {Startups.map(item => (
                                        <li key={item.id}
                                            className="-ms-[7px] w-[32px] h-[32px] rounded-full bg-[#303030] border border-[#0D0D0C] flex items-center justify-center ">
                                            {item.icon}
                                        </li>

                                    ))}


                                </ul>
                            </div>
                            <div className="relative  flex flex-col items-center justify-center gap-3 py-12">
                               < Mainheading  text="Creative Intelligence in Every Pixel" />
                                <p className="text-[20px] text-center capitalize text-[#FFFFFF] font-[Inter]"> We craft <span className="text-[#F3FE00] font-[Plus Jakarta Sans]"> stunning</span> designs for businesses worldwide.</p>
                                <span className="absolute hidden lg:block  origin-right rotate-7 top-[60px] right-[45px] bg-[#F3FE00] py-[6px] px-2 rounded-[8px] text-[#0B0B0B] text-[12px] font-bold uppercase font-[Geologica]"> NO CODE</span>
                            </div>
                            <div className=" above-glow flex items-center justify-center gap-[20px]">
                                <Button
                                    path="/contact" hovertext={" Let's talk 🤙"} defaulttext={"Schedule Call"}
                                    className="w-[170px] h-[48px] bg-white border border-white text-[#0B0B0B]  font-[Plus Jakarta Sans] leading-none "
                                    showicon={false}
                                />
                                <Button
                                    path="https://www.figma.com" target="_blank" hovertext={" Open "} defaulttext={"©2025 Work"}
                                    className="w-[149px] h-[48px] bg-black border border-white font-[Inter] hover:border-[#F3FE00] "
                                    showicon={false}
                                />
                            </div>
                            <p className="mt-8 sm:mt-[88px] text-center text-[14px] font-[500] uppercase font-[Plus Jakarta Sans] text-[#E7E7E7]">Trusted by Industry Leaders & Fast-Growing Startups</p>
                            <div className="py-5 mt-6 hidden sm:flex  overflow-hidden">
                                <div className=" slide-track relative py-1 flex flex-shrink-0  items-center justify-between gap-[48px]">
                                    {companies.map(item => (
                                        <div key={item.name} className=" ">
                                            <img className="w-full h-full"
                                                src={item.image} alt={item.name}
                                                width={item.width}
                                                height={item.height}
                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    )
}
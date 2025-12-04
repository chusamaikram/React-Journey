import Heading from "../../components/common/Sec-headings";
import ali from "../../assets/images/ali.webp"
import nasir from "../../assets/images/nasir.webp"
import babar from "../../assets/images/babar.webp"
import umar from "../../assets/images/umar.webp"
import nashra from "../../assets/images/nashra.webp"
import gohar from "../../assets/images/gohar.webp"
import abdullah from "../../assets/images/abdullah.webp"
import maryam from "../../assets/images/maryam.webp"
import mubashir from "../../assets/images/mubashir.webp"
import mustafa from "../../assets/images/mustafa.webp"
import bilal from "../../assets/images/bilal.webp"
import yousaf from "../../assets/images/yousaf.webp"


export default function TeamSection() {

    const TeamGroup1 = [
        { id: 1, name: "Nasir Ali", position: "CEO & Founder", image: nasir, },
        { id: 2, name: "Mohammad Ali", position: "Sales Director", image: ali, },
    ]
    const TeamGroup2 = [
        { id: 3, name: "Muhammad Babar", position: "Design Director", image: babar, },
        { id: 4, name: "Umar Islam", position: "UX UI Design Lead", image: umar, },

    ]
    const TeamGroup3 = [
        { id: 5, name: "Nashra Maqsood", position: "UX UI Designer", image: nashra, },
        { id: 6, name: "Goher Ayub", position: "UX UI Designer", image: gohar, },
    ]
    const TeamGroup4 = [
        { id: 7, name: "Rao Abdullah", position: "UX UI Designer", image: abdullah, },
        { id: 8, name: "Mariam Hashmi", position: "UX UI Designer", image: maryam, },
        { id: 9, name: "Rana Mubashir", position: "UX UI Designer", image: mubashir, },
    ]
    const TeamGroup5 = [
        { id: 10, name: "Muhammad Yousaf", position: "UX UI Designer", image: yousaf, },
        { id: 11, name: "Mustafa Afridi", position: "UX UI Designer", image: mustafa, },
        { id: 12, name: "Bilal Younas", position: "UX UI Designer", image: bilal, },
    ]

    return (
        <>
            <section className="team-member ">
                <div className=" bg-[#141414] sm:sticky sm:top-[15px] py-8 sm:py-[80px] z-1">
                    <div className=" max-w-[470px] mx-auto">
                        <Heading
                            className="text-center"
                            title="Our team"
                            secHeading="Meet the people behind the magic"
                            desc="Rest assured. Your project is in good hands."
                        />
                    </div>

                </div>
                <div className="relative z-2 pb-[80px]">
                    <div className="container">

                        <div className=" flex flex-col gap-6 sm:gap-14">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-none justify-between md:w-[930px] sm:ml-auto">
                                {TeamGroup1.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 1 ? '' : 'sm:mt-25'} `}>
                                        <img className="w-full h-full object-cover grayscale hover:grayscale-0 rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center w-full justify-between">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-none justify-between md:w-[930px] sm:mr-auto">
                                {TeamGroup2.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 4 ? 'sm:mt-25 md:mr-25' : ''} `}>
                                        <img className="w-full h-full object-cover grayscale hover:grayscale-0 rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center w-full justify-between">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-none justify-between md:w-[930px] sm:mx-auto">
                                {TeamGroup3.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 6 ? 'sm:mt-25 ' : ''} `}>
                                        <img className="w-full h-full object-cover grayscale hover:grayscale-0 rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center w-full justify-between">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-none sm:items-start justify-between">
                                {TeamGroup4.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 8 ? 'sm:mt-[300px] md:mr-[50px] ' : ''}  ${team.id === 9 ? 'sm:mt-25 ' : ''}`}>
                                        <img className="w-full h-full object-cover grayscale hover:grayscale-0 rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center w-full justify-between">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-none justify-between">
                                {TeamGroup5.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 10 ? 'sm:mt-50  ' : ''}  ${team.id === 11 ? 'sm:mt-25 ' : ''}`}>
                                        <img className="w-full h-full object-cover grayscale hover:grayscale-0 rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center w-full justify-between">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
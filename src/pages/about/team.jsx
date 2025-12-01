import Heading from "../../components/common/Sec-headings";
import team1 from "../../assets/images/team1.png"

export default function TeamSection() {

    const TeamGroup1 = [
        { id: 1, name: "Muhammad Babar", position: "Design Director", image: team1, },
        { id: 2, name: "Muhammad Babar", position: "Design Director", image: team1, },
    ]
    const TeamGroup2 = [
        { id: 3, name: "Muhammad Babar", position: "Design Director", image: team1, },
        { id: 4, name: "Muhammad Babar", position: "Design Director", image: team1, },

    ]
    const TeamGroup3 = [
        { id: 5, name: "Muhammad Babar", position: "Design Director", image: team1, },
        { id: 6, name: "Muhammad Babar", position: "Design Director", image: team1, },
    ]
    const TeamGroup4 = [
        { id: 7, name: "Muhammad Babar", position: "Design Director", image: team1, },
        { id: 8, name: "Muhammad Babar", position: "Design Director", image: team1, },
        { id: 9, name: "Muhammad Babar", position: "Design Director", image: team1, },
    ]
    const TeamGroup5 = [
        { id: 10, name: "Muhammad Babar", position: "Design Director", image: team1, },
        { id: 11, name: "Muhammad Babar", position: "Design Director", image: team1, },
        { id: 12, name: "Muhammad Babar", position: "Design Director", image: team1, },
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
                                        <img className="w-full h-full object-cover rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center gap-12.5">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-none justify-between md:w-[930px] sm:mr-auto">
                                {TeamGroup2.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 4 ? 'sm:mt-25 md:mr-25' : ''} `}>
                                        <img className="w-full h-full object-cover rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center gap-12.5">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-none justify-between md:w-[930px] sm:mx-auto">
                                {TeamGroup3.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 6 ? 'sm:mt-25 ' : ''} `}>
                                        <img className="w-full h-full object-cover rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center gap-12.5">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-none sm:items-start justify-between">
                                {TeamGroup4.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 8 ? 'sm:mt-[300px] md:mr-[50px] ' : ''}  ${team.id === 9 ? 'sm:mt-25 ' : ''}`}>
                                        <img className="w-full h-full object-cover rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center gap-12.5">
                                            <p className="text-base leading-[21px] font-[Inter]">{team.name}</p>
                                            <p className="text-[#EFEFEF] text-base leading-[21px] font-[Inter]">{team.position}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-none justify-between">
                                {TeamGroup5.map(team => (
                                    <div key={team.id} className={`max-w-[310px] flex flex-col items-start gap-4 ${team.id === 10 ? 'sm:mt-50  ' : ''}  ${team.id === 11 ? 'sm:mt-25 ' : ''}`}>
                                        <img className="w-full h-full object-cover rounded-[12px]" src={team.image} alt={team.name}
                                            width={310}
                                            height={360} />
                                        <div className="flex items-center gap-12.5">
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
import { motion } from "framer-motion"
export default function ProcessCard(props) {
    return (
        <>
            <div className="flex flex-col items-start">
                <h3 className=" flex items-center gap-2 font-[Poppins]" >
                    <span className="text-base font-medium text-white ">{props.id}</span>
                    <motion.span
                        initial={{ opacity: 0.5 }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        className="text-[19px] font-semibold "
                    >{props.heading} </motion.span>
                </h3>
                <span className="text-lg text-white/60 font-bold font-['Plus_Jakarta_Sans'] " >{props.category}</span>
                <motion.p
                    initial={{ opacity: 0.5 }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className="max-w-[553px] mt-2.5 text-base leading-[24px] text-white font-['Plus_Jakarta_Sans'] text-start ">{props.desc}</motion.p>
            </div>

        </>
    )
}
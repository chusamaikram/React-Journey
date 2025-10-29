
export default function ShowcaseCard({ img, title, desc }) {
    return (
        <>
            <div className="w-full flex flex-col items-start justify-center gap-8">
                <img className="max-w-full h-full rounded-6" src={img} alt={title}
                    width={600}
                    height={685}
                />
                <div className="flex flex-col items-start gap-2.5 ">
                    <h3 className="text-[28px] font-semibold font-[Inter Tight]">{title}</h3>
                    <p className="text-base leading-[25px] font-[Inter Tight]" >{desc}</p>
                </div>
            </div>

        </>
    )
}
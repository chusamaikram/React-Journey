
export default function InputField(props) {
    return (
        <>
            <input className="w-full px-4 h-[44px]  bg-[#171717] border border-[#373737] focus:border-[#F3FE00] rounded-[8px] text-[#B9B9B9] text-sm font-medium font-['Inter_Tight'] outline-none " type={props.type} name={props.name} placeholder={props.placeholder} />
        </>
    )
}
import { SearchIcon } from "../../assets/svg"
export default function SearchInput({ placeholder, ShowIcon = true, Ff='font-[Plus_Jakarta_Sans]' }) {
    return (
        <>
            <div className="max-w-[364px] sm:w-[364px] h-[48px] text-base p-1.5 ps-4.5 bg-white/10 border border-[#2D2D2D] rounded-full flex items-center justify-between relative ">
                <input type="search" placeholder={placeholder} className={`outline-none text-sm ${Ff} bg-transparent grow text-white `} />
                {ShowIcon &&
                    <button className="w-[36px] cursor-pointer h-[36px] px-[2px] rounded-[100px] flex items-center justify-center shrink-0 bg-white/10 "><SearchIcon /> </button>
                }

            </div>
        </>
    )
}
import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import logo from "../../assets/images/logo.svg"
export default function Header() {
    const location = useLocation();
    const pathname = location.pathname;

    const Navlinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Work",
            path: "/work",
        },
        {
            name: "Insights",
            path: "/insights",
        }
    ]


    return (
        <>
            <header className="sticky top-0 z-9999 py-[22px] bg-black">
                <div className="container">
                    <nav className="flex items-center justify-between">
                        <Link to="/">
                            <img src={logo} alt="logo" />

                        </Link>
                        <ul className="hidden md:flex items-center">
                            {Navlinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className={`relative px-4 py-2 font-[Poppins] text-[18px] leading-[27px] ${pathname === link.path ? "text-[#F3FE00] " : "text-[#FFFFFF]"}`} >
                                        {link.name}
                                        <span className={`absolute left-1/2 bottom-0 h-[1px] transform -translate-x-1/2 transition-all duration-500 ease-in-out bg-[#F3FE00] ${pathname === link.path ? "w-6 opacity-100" : "w-0 opacity-0 "}`}>

                                        </span>

                                    </Link>

                                </li>
                            ))}

                        </ul>
                        <div className="flex items-center gap-3">
                            <Button

                                path="/contact" hovertext={" Let's talk"} defaulttext={"Work with us"}
                                className=" hidden sm:flex w-[190px] border border-[#f3fe00] bg-[#f3fe00] transition-[background-color,border-color] duration-500 ease-in-out hover:bg-black text-black hover:text-[#f3fe00] "
                            />
                            <button className="block md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10 5H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M4 19H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>

                        </div>




                    </nav>
                </div>
            </header>
        </>
    )
}
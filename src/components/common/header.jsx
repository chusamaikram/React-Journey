import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import logo from "../../assets/images/logo.svg"
import { useState } from "react";
export default function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <ul className={` py-12 lg:py-0 px-6 lg:px-0  flex flex-col gap-2 lg:gap-none lg:flex-row items-center absolute lg:static left-0 top-[80px] w-full lg:w-auto h-screen lg:h-auto bg-black lg:bg-transparent ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible lg:visible lg:opacity-100"}`}>
                            {Navlinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className={`relative px-3 py-2 font-[Poppins] text-[18px] leading-[27px] ${pathname === link.path ? "text-[#F3FE00] " : "text-[#FFFFFF]"}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >

                                        {link.name}

                                        <span className={`absolute left-1/2 bottom-0 h-[1px] transform -translate-x-1/2 transition-all duration-500 ease-in-out bg-[#F3FE00] ${pathname === link.path ? "w-6 opacity-100" : "w-0 opacity-0 "}`}>

                                        </span>

                                    </Link>

                                </li>
                            ))}

                            <Button

                                path="/contact" hovertext={" Let's talk"} defaulttext={"Work with us"}
                                className="flex sm:hidden w-full  border border-[#f3fe00] bg-[#f3fe00] transition-[background-color,border-color] duration-500 ease-in-out hover:bg-black text-black hover:text-[#f3fe00] "
                            />


                        </ul>
                        <div className="flex items-center gap-3">
                            <button className="p-1 bg-white rounded-[12px] sm:rounded-[16px] w-[38px] sm:w-[52px] h-[24px] sm:h-[32px] cursor-pointer relative">
                                <div className="w-[20px] sm:w-[26px] h-[20px] sm:h-[26px] bg-black rounded-full absolute left-[3px] top-[3px] flex items-center justify-center">
                                    <svg className="w-[12px] sm:w-[16px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M10.0192 1.65965C9.43727 1.47632 8.93987 2.11231 9.24834 2.63898C9.73567 3.46964 9.99834 4.40698 9.99834 5.34698C9.99834 8.29231 7.61054 10.6803 4.665 10.6803C4.1104 10.6803 3.54947 10.5903 3.04 10.4303C2.45807 10.247 1.9398 10.883 2.24834 11.4096C3.43334 13.431 5.59914 14.6803 7.99834 14.6803C11.6802 14.6803 14.665 11.6956 14.665 8.01364C14.665 5.07965 12.7713 2.52498 10.0192 1.65965ZM11.0817 3.65965C12.4577 4.63231 13.3317 6.23565 13.3317 8.01364C13.3317 10.959 10.9439 13.347 7.99834 13.347C6.64627 13.347 5.4104 12.827 4.45667 11.9723C4.5278 11.9743 4.59414 12.0136 4.665 12.0136C8.34694 12.0136 11.3317 9.02897 11.3317 5.34698C11.3317 4.77565 11.2303 4.21031 11.0817 3.65965Z" fill="white"></path>
                                    </svg>
                                </div>


                            </button>
                            <Button

                                path="/contact" hovertext={" Let's talk"} defaulttext={"Work with us"}
                                className="header-btn  w-[190px] border border-[#f3fe00] bg-[#f3fe00] transition-[background-color,border-color] duration-500 ease-in-out hover:bg-black text-black hover:text-[#f3fe00] "
                            />
                            <button className="block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
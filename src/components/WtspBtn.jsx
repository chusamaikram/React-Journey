import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";

export default function WtspBtn() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const phoneNumber = "923098525906";

    const sendMessage = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-12 right-12 z-9999 flex flex-col items-end">

            {/* INPUT BOX */}
            <div
                className={`flex items-center w-[280px] h-[55px] rounded-full bg-[#2b2b2b]/90 backdrop-blur-md px-4 shadow-xl 
                    transition-all duration-300 
                    ${open ? "opacity-100 translate-y-0 mb-3" : "opacity-0 translate-y-5 pointer-events-none"}`}
            >
                <input
                    type="text"
                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button onClick={sendMessage} className="p-2 cursor-pointer " aria-label="social button">
                    <IoSend size={20} className="text-white" />
                </button>
            </div>
            {!open && <span className="whatsapp-glow"></span>}
            <button
                onClick={() => setOpen(!open)}
                className={`relative w-[60px] cursor-pointer h-[60px] rounded-full shadow-xl flex items-center justify-center 
                   text-white transition-all duration-300
                   ${open ? "bg-gray-700" : "bg-[#2e3000]"}`}
                   aria-label="social btn"
            >
                {open ? (
                    <IoClose size={32} className="text-white" />
                ) : (
                    <FaWhatsapp size={28} className="text-[#42db87]" />
                )}
            </button>
        </div>
    );
}

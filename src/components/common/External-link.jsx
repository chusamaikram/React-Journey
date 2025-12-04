
import { ArrowIcon } from "../../assets/svg";

export default function ExternalLink({
    path,
    className = "",
    hovertext,
    defaulttext,
    showicon = true,
    disableHover = false, // new prop
}) {
    return (
        <a
            href={path}
            target="_blank"
            className={` group relative inline-flex flex-nowrap items-center justify-center px-6 py-3 border rounded-full text-base leading-6 font-semibold transition-all duration-300 ease-in-out ${className}`}
        >
            {/* Default text */}
            <span
                className={`flex flex-nowrap items-start gap-3 transition-all duration-300 ease-in-out ${!disableHover ? "group-hover:opacity-0 group-hover:-translate-y-1" : ""
                    }`}
            >
                {defaulttext}
                {showicon && <ArrowIcon />}
            </span>

            {/* Hover text */}
            {!disableHover && (
                <span className="absolute transition-all duration-300 ease-in-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
                    {hovertext}
                </span>
            )}

        </a>
    );
}

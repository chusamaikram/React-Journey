
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/images/svg";

export default function Button({
  path,
  className = "",
  hovertext,
  defaulttext,
  showicon = true,
}) {
  return (
    <Link
      to={path}
      className={`group relative inline-flex items-center justify-center px-6 py-3 border rounded-full text-[16px] leading-6 font-semibold transition-all duration-300 ease-in-out ${className}`}
    >
      <span className="flex items-center gap-3 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-1">
        {defaulttext}
        {showicon && <ArrowIcon />}
      </span>
      <span className="absolute transition-all duration-300 ease-in-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
        {hovertext}
      </span>
    </Link>
  );
}
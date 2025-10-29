
import { Link } from 'react-router-dom'
import { useState } from "react";
import { ArrowIcon } from "../../assets/images/svg";

export default function Button({ path, className, hovertext, defaulttext, showicon = true }) {
  const [hovered, setHovered] = useState(false);
  return (

    <>
      <Link to={path}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={` px-6 py-3 border flex items-center justify-center rounded-full gap-3 text-[16px] leading-6 font-semibold ${className}`}
      >
        {hovered ? hovertext
          :
          <>
            <span >{defaulttext}</span>
            {showicon && (
              <ArrowIcon />
            )}

          </>
        }
      </Link>
    </>
  )
}

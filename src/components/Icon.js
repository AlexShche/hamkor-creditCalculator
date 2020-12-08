import React from "react"

export const Icon = ({path}) => {
    return(
        <svg>
            <use href={`#${path}`} xlinkHref={`#${path}`} />
        </svg>
    )
}
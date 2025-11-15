import React from 'react'

export default function SectionHeading({ heading, colorHeading, description }) {
    return (
        <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold">
                {heading}
                <span className="text-[#5CAF90]"> {colorHeading}</span>
            </h3>
            <p className="text-[#4B5966] text-sm sm:text-base md:text-lg mt-1">
                {description}
            </p>
        </div>
    )
}

"use client";
import React from "react";

// --------------------------------------------------------------

const EllipsisText = ({
    text,
    maxLength = 60,
    className
}: {
    text: string;
    maxLength?: number;
    className?: string;
}) => {
    const displayText =
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return <span className={className}>{displayText}</span>;
}

export default EllipsisText;

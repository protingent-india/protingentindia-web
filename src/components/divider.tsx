"use client"

// --------------------------------------------------------------

const Divider = ({
    className
}: {
    className?: string
}) => {
    return (
        <span
            style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 100% 100%, 0% 100%)' }}
            className={`h-2.5 w-[280px] bg-secondry block ${className}`}
        />
    )
}

export default Divider;
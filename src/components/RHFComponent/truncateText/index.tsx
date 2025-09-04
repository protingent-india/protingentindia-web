'use client'
import Link from "next/link";

// ------------------------------------------------------

const TruncateText = ({
    text, className, limit, link, onClick, readMore = true
}: {
    text?: any, className?: any, limit?: any, link?: any, onClick?: any, readMore?: any
}) => {
    return (
        <p className={className} >
            {limit === 'full' ? text :
                <>{text?.slice(0, limit || 30)}...
                    {readMore && <Link href={link || ''} onClick={onClick} className="text-sm lowercase text-white" >
                        read more
                    </Link>}
                </>
            }
        </p>
    )
}

export default TruncateText;
import { Divider } from '@/components';

// --------------------------------------------------------------

const CommonHeading = ({ title, desc, className }: { title: string, desc: string, className?: string }) => {
    return (
        <div className={`text-primary flex flex-col items-center gap-3 md:gap-4 w-full ${className}`} >
            <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight' >
                {title}
            </p>
            <span className='text-center text-base md:text-lg lg:text-[22px] max-w-[1060px] w-full md:w-4/5 leading-relaxed px-4 md:px-0' >
                {desc}
            </span>
            <Divider />
        </div>
    )
}

export default CommonHeading;
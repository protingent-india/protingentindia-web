import { Divider } from '@/components';

// --------------------------------------------------------------

const CommonHeading = ({ title, desc, className }: { title: string, desc: string, className?: string }) => {
    return (
        <div className={`text-primary flex flex-col items-center gap-4 w-full ${className}`} >
            <p className='text-4xl font-bold' >
                {title}
            </p>
            <span className='text-center text-[22px] max-w-[1060px] w-4/5' >
                {desc}
            </span>
            <Divider />
        </div>
    )
}

export default CommonHeading;
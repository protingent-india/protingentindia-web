import { Divider } from '@/components';

// --------------------------------------------------------------

const CommonHeading = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div className='text-primary flex flex-col items-center gap-4' >
            <p className='text-4xl font-bold' >
                {title}
            </p>
            <p className='text-center text-[22px] textpri max-w-[1050px] w-4/5' >
                {desc}
            </p>
            <Divider />
        </div>
    )
}

export default CommonHeading;
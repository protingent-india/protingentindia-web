'use client'
import moment from 'moment';
import { TruncateText } from '@/components';

// -------------------------------------------------------------

const NewsFlashCard = ({ title, img, date, link, onClick }: {
    title?: any, img?: any, date?: any, link?: any, onClick?: any
}) => {
    return (
        <div
            id='news-flash-card'
            style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            className='newsFlashslide h-[250px] 3xl:h-[375px] w-full min-w-[300px] sm:min-w-[400px] sm:w-[400px] 3xl:w-[500px] overflow-hidden snap-end relative from-black bg-gradient-to-t'
        >
            <div className='h-[50%] absolute bottom-0 w-full from-[#000010ba] bg-gradient-to-t' >
                <div className='p-4 flex flex-col justify-center gap-3 3xl:min-h-[160px] absolute bottom-0' >
                    <div className='flex items-center justify-start gap-2' >
                        <p className='text-sm text-white font-semibold' >{moment(date, 'YYYY-MM-DDTHH:mm:ssz').format('MMM DD, YYYY')}</p>
                    </div>
                    <TruncateText
                        className={'text-xl sm:text-2xl font-semibold leading-7 text-white '}
                        text={title}
                        limit={50}
                        link={link}
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default NewsFlashCard;
const VideoPlayer = () => {
    return (
        <div className='w-full overflow-hidden'>
            <video
                autoPlay
                muted
                loop
                playsInline
                controlsList="nodownload nofullscreen"
                className='w-full h-auto max-h-[650px] object-cover'
            >
                <source src="/videos/homeVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;

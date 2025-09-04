'use client'
import { HomeContent, HomeDescription, NewsFlash, VideoPlayer } from "@/components";

// ---------------------------------------------

const Home = () => {
    return (
        <div className="[ min-h-screen w-full ] [ flex flex-col items-center ] bg-white z-0 relative" >
            <VideoPlayer />
            <HomeDescription />
            <HomeContent />
            <NewsFlash />
        </div>
    )
}

export default Home;
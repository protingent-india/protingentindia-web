"use client"
import {
    useEffect,
    useRef,
    useState
} from "react";
import { ModernServiceSliderData } from "@/staticData";

// ----------------------------------------------------------------

// Modern Case Study Style Slider Component
const ModernServiceSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % ModernServiceSliderData.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + ModernServiceSliderData.length) % ModernServiceSliderData.length);
        setProgress(0);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        nextSlide();
                        return 0;
                    }
                    return prev + 2; // 2% every 100ms = 5 seconds total
                });
            }, 100);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying, currentSlide]);

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Our Core RPO Services Offering
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We outsource the talent you need on time with our pre-vetted candidates. Reliable hiring experts offering tailored RPO services align with your business goals:
                    </p>
                </div>

                <div
                    className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}
                >
                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                        {/* Left side - Image */}
                        <div className="lg:w-3/5 relative overflow-hidden">
                            <div className="relative h-64 lg:h-full">
                                <img
                                    src={ModernServiceSliderData[currentSlide].image}
                                    alt={ModernServiceSliderData[currentSlide].title}
                                    className="w-full h-full object-cover transition-transform duration-700 scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondry/70"></div>

                                {/* Floating elements */}
                                <div className="absolute top-8 left-8">
                                    <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-white font-bold text-xl">{ModernServiceSliderData[currentSlide].number}</span>
                                    </div>
                                </div>

                                {/* Navigation arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                                >
                                    <div className="w-0 h-0 border-r-[8px] border-r-white border-y-[6px] border-y-transparent group-hover:-translate-x-1 transition-transform duration-300"></div>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                                >
                                    <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent group-hover:translate-x-1 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-6xl font-bold text-primary/20">{ModernServiceSliderData[currentSlide].number}</span>
                                    <div className="h-1 flex-1 bg-gradient-to-r from-primary to-secondry rounded-full relative">
                                        <div
                                            className="h-full bg-primary-green-color rounded-full transition-all duration-100"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
                                    {ModernServiceSliderData[currentSlide].title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                    {ModernServiceSliderData[currentSlide].description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {ModernServiceSliderData[currentSlide].features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-primary-green-color/10 text-primary rounded-full text-sm font-medium border border-primary-green-color/20"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <button className="modern-btn group">
                                    <span className="relative z-10">Learn More</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-green-color to-secondry opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                        {ModernServiceSliderData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-primary-green-color w-8'
                                    : 'bg-white/50 hover:bg-white/70'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernServiceSlider;
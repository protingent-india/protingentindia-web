import React from 'react';

interface GeometricBackgroundProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    intensity?: 'light' | 'medium' | 'strong';
}

const GeometricBackground: React.FC<GeometricBackgroundProps> = ({ 
    variant = 'primary', 
    intensity = 'medium' 
}) => {
    const getOpacity = () => {
        switch (intensity) {
            case 'light': return 'opacity-30';
            case 'medium': return 'opacity-50';
            case 'strong': return 'opacity-70';
            default: return 'opacity-50';
        }
    };

    const baseOpacity = getOpacity();

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background Gradient Mesh */}
            <div className={`absolute inset-0 bg-gradient-to-br from-lime-50 via-teal-50 to-navy-50 ${baseOpacity}`}></div>
            
            {/* Geometric Shapes Inspired by Logo */}
            {variant === 'primary' && (
                <>
                    {/* Angular geometric shapes inspired by the logo */}
                    <div className="absolute top-10 right-10 w-40 h-40 transform rotate-12">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-teal-500/15 transform skew-x-12 skew-y-6 animate-float"></div>
                            <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-teal-500/15 to-navy-600/10 transform -skew-x-6 rotate-45 animate-pulse"></div>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-20 left-16 w-32 h-32 transform -rotate-45">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-navy-400/20 to-lime-400/15 transform skew-y-12 animate-bounce"></div>
                            <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-bl from-teal-400/20 to-navy-500/15 transform rotate-90 animate-float"></div>
                        </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/3 w-20 h-20 transform rotate-30">
                        <div className="w-full h-full bg-gradient-to-r from-lime-300/15 to-teal-400/10 transform skew-x-45 animate-pulse"></div>
                    </div>
                    
                    <div className="absolute top-1/4 right-1/4 w-28 h-28 transform -rotate-12">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-bl from-teal-400/20 to-navy-500/15 transform skew-x-30 animate-float"></div>
                        </div>
                    </div>
                </>
            )}

            {variant === 'secondary' && (
                <>
                    <div className="absolute top-16 left-12 w-36 h-36 transform rotate-45">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 to-lime-500/15 transform skew-y-15 animate-pulse"></div>
                            <div className="absolute bottom-3 right-3 w-20 h-20 bg-gradient-to-br from-navy-400/15 to-teal-500/10 transform -rotate-30 animate-float"></div>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-16 right-12 w-44 h-44 transform -rotate-30">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-bl from-lime-500/20 to-navy-600/15 transform skew-x-20 animate-bounce"></div>
                            <div className="absolute top-6 left-6 w-24 h-24 bg-gradient-to-tr from-teal-400/15 to-lime-500/10 transform rotate-60 animate-pulse"></div>
                        </div>
                    </div>
                    
                    <div className="absolute top-2/3 left-1/4 w-24 h-24 transform rotate-75">
                        <div className="w-full h-full bg-gradient-to-r from-navy-400/15 to-teal-400/10 transform skew-y-30 animate-float"></div>
                    </div>
                </>
            )}

            {variant === 'tertiary' && (
                <>
                    <div className="absolute top-8 right-16 w-48 h-48 transform rotate-15">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-500/20 to-lime-400/15 transform skew-x-15 skew-y-10 animate-float"></div>
                            <div className="absolute top-8 left-8 w-28 h-28 bg-gradient-to-tr from-teal-500/15 to-navy-600/10 transform -skew-y-20 rotate-30 animate-pulse"></div>
                            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-bl from-lime-400/20 to-teal-500/15 transform rotate-90 animate-bounce"></div>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-12 left-20 w-40 h-40 transform -rotate-60">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-tl from-teal-400/20 to-navy-500/15 transform skew-y-25 animate-pulse"></div>
                            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-lime-500/15 to-teal-400/10 transform -rotate-45 animate-float"></div>
                        </div>
                    </div>
                    
                    <div className="absolute top-1/3 left-1/2 w-32 h-32 transform rotate-120">
                        <div className="w-full h-full bg-gradient-to-r from-lime-400/15 to-navy-500/10 transform skew-x-40 animate-bounce"></div>
                    </div>
                </>
            )}

            {variant === 'quaternary' && (
                <>
                    <div className="absolute top-12 left-8 w-52 h-52 transform rotate-25">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-teal-600/15 transform skew-x-25 skew-y-15 animate-float"></div>
                            <div className="absolute top-12 right-12 w-32 h-32 bg-gradient-to-tl from-navy-500/15 to-lime-400/10 transform -skew-x-30 rotate-75 animate-pulse"></div>
                            <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-tr from-teal-500/20 to-navy-600/15 transform rotate-135 animate-bounce"></div>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-8 right-24 w-36 h-36 transform -rotate-40">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-bl from-navy-600/20 to-teal-500/15 transform skew-y-35 animate-pulse"></div>
                            <div className="absolute top-6 left-6 w-24 h-24 bg-gradient-to-br from-lime-400/15 to-navy-500/10 transform -rotate-60 animate-float"></div>
                        </div>
                    </div>
                    
                    <div className="absolute top-3/4 right-1/3 w-28 h-28 transform rotate-105">
                        <div className="w-full h-full bg-gradient-to-r from-teal-500/15 to-lime-400/10 transform skew-x-50 animate-bounce"></div>
                    </div>
                </>
            )}

            {/* Additional floating elements */}
            <div className="absolute top-1/4 left-1/6 w-8 h-8 bg-lime-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 right-1/6 w-6 h-6 bg-teal-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-3/4 left-3/4 w-10 h-10 bg-navy-600/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/6 right-1/2 w-4 h-4 bg-lime-500/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
    );
};

export default GeometricBackground;
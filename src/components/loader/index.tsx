'use client';

import Loader from 'react-js-loader';
import './index.css';
import 'react-js-loader/Heart/style.css';

// --------------------------------------------------------

interface LoaderProps {
    size?: number;
    loading?: boolean;
    className?: string;
    color?: string;
    bgColor?: string;
}

const LoaderComponent = ({
    size = 40,
    loading = false,
    className = '',
    color = 'black',
    bgColor = '#615a5a',
}: LoaderProps) => {
    return (
        <div
            id="loader-spinner"
            className={`${loading ? 'h-fit' : 'h-0'} ${className}`}
        >
            {loading && (
                <div
                    className=''
                />
            )}
        </div>
    );
};

export default LoaderComponent;

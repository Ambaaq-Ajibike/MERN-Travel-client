import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(next, 2000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition ease-out duration-400" >
                <div className="w-full">
                    <div className="carousel-item bg-white bg-opacity-50 rounded-lg shadow-md p-4">
                        <div className="carousel-content">
                        <h1 className="text-2xl font-bold">{slides[current].content}</h1>
                            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                {slides[current].btn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    );
}

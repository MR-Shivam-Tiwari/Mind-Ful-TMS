import React, { useState } from 'react';
import './img.css'; // Ensure your CSS file path is correct

const images = [
    "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?t=st=1719296255~exp=1719299855~hmac=ea40b24c47ddd39262106073743b5dc82f4491c3aca7836ecb9895391ce775fc&w=1380",
    "https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478116.jpg?t=st=1719296263~exp=1719299863~hmac=3015ba02fc3a7bd28dbbffb027c5b6934ed9133afa5f630521cd26dd4eb2a3d1&w=1380",
    "https://img.freepik.com/free-photo/mushroom-forest-with-little-boy-standing-it_1340-30441.jpg?t=st=1719296265~exp=1719299865~hmac=7ea261b55ab3be6ff329415e837495af8110c39699e5dd40b8998c359e59e197&w=740",
    "https://img.freepik.com/free-photo/mushroom-with-glowing-face-is-lit-up-dark_1340-30433.jpg?t=st=1719296270~exp=1719299870~hmac=597211343f294db98c76de0882a8250517a7dfb9964fde288b727027224a6926&w=740",
    "https://img.freepik.com/free-photo/planet-with-moon-planet-background_1340-23591.jpg?t=st=1719296310~exp=1719299910~hmac=de30427a678673376ced28bed6614c2043699d3f753f28b3cf7a9b7641ae11c5&w=1380"
];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="w-full max-w-4xl mx-auto px-4 md:px-0 overflow-hidden relative">
            <div>
                <h1 className='font-bold text-[30px] text-center lg:mb-10'>Clients Speak</h1>
            </div>
            <div className="relative slider-container">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <div className="relative flex-none slider-image-container" key={index}
                            style={{
                                transform: `scale(${index === currentIndex ? 1 : 0.8})`,
                                opacity: index === currentIndex ? 1 : 0.5,
                                zIndex: index === currentIndex ? 10 : 1,
                            }}>
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="slider-image rounded-lg"
                            />
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button
                        className="slider-button left-button"
                        onClick={prevImage}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // className="w-6 h-6"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        className="slider-button right-button"
                        onClick={nextImage}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // className="w-6 h-6"
                        >
                            <path d="M9 6l6 6-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="navigation-dots">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default ImageSlider;

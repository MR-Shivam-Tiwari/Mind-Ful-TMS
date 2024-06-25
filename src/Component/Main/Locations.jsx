import React, { useState } from 'react';
import './img.css'
import locat from '../Images/Rectangle 38.png'
const locations = [
    {
        city: 'Bangalore North',
        clinic: 'MindfulTMS @ Aster CMI',
    },
    {
        city: 'Bangalore East',
        clinic: 'MindfulTMS @ Whitefield',
    },
    {
        city: 'Delhi',
        clinic: 'MindfulTMS @ Greater Kailash',
    },
];

const Locations = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const toggleLocation = (index) => {
        if (selectedLocation === index) {
            setSelectedLocation(null);
        } else {
            setSelectedLocation(index);
        }
    };

    return (
        <div className="flex flex-col items-center p-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Our Locations</h1>
                <p className="text-lg mb-6 px-10">We have 3 centers in India and 8 clinics in USA.</p>
            </div>
            {locations.map((location, index) => (
                <div key={index} className="w-full max-w-sm mb-4">
                    {index === 0 && (
                        <div className="flex items-center mb-4">
                            <div className="flex-grow border-t border-gray-400 relative">
                                <div className="absolute left-0 -translate-x-1/2 bg-black h-1 w-1 mt-[-2.7px] rounded-full"></div>
                            </div>
                            <span className="mx-2 text-center text-gray-600">Bangalore</span>
                            <div className="flex-grow border-t border-gray-400 relative">
                                <div className="absolute right-[-5px] -translate-x-1/2 bg-black h-1 w-1 mt-[-2.7px] rounded-full"></div>
                            </div>
                        </div>
                    )}
                    {index === 2 && (
                        <div className="flex items-center mb-4">
                            <div className="flex-grow border-t border-gray-400 relative">
                                <div className="absolute left-0 -translate-x-1/2 bg-black h-1 w-1 mt-[-2.7px] rounded-full"></div>
                            </div>
                            <span className="mx-2 text-center text-gray-600">Delhi</span>
                            <div className="flex-grow border-t border-gray-400 relative">
                                <div className="absolute right-[-5px] -translate-x-1/2 bg-black h-1 w-1 mt-[-2.7px] rounded-full"></div>
                            </div>
                        </div>
                    )}
                    <div
                        className="flex justify-between items-center bg-[#D9D9D9] p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleLocation(index)}
                    >
                        <div>
                            <span className="block text-xl font-bold">{location.city.toUpperCase()}</span>
                            <small className="block mt-1 text-[16px] text-gray-900 font-semibold">{location.clinic}</small>
                        </div>
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </div>
                    {selectedLocation === index && (
                        <div className="overflow-hidden transition-max-height duration-500 ease-in-out max-h-screen">
                            <div className="  bg-gray-100 rounded-lg ">

                                <div>
                                    <img src={locat} alt="" className='w-full' />
                                </div>
                                <div  class="border-t-2   flex bg-[#D9D9D9] rounded-b-[7px] text-black font-bold text-[18px] items-center justify-center h-10">
                                    Get Directions
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Locations;

import React from 'react'
import { useNavigate } from 'react-router-dom';

function Appointment() {
    const navigate = useNavigate();
    return (
        <divc className='select-none'>
            <div class="p-7 pt-0 max-w-sm lg:container mx-auto  space-y-4">
                <div class="flex items-center py-6  ">
                    <div className='' onClick={() => navigate('/expert')}>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
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
                    </div>
                    <div>
                        <h1 class="text-center text-2xl  font-semibold ">Appointment Booking</h1>

                    </div>

                </div>
                <div class="flex items-center space-x-4">
                    <img src="/home/doctor.png" alt="Doctor's profile image" class="w-24 h-24 rounded-full bg-zinc-300" />
                    <div>
                        <h2 class="text-xl font-semibold">Dr. David Samson</h2>
                        <p class="text-[#EF6623]">Psychologist</p>
                    </div>
                </div>
                <div class="flex justify-between border-[1.5px]   border-[#EF6623] p-2  px-5 rounded-md">
                    <div class="text-center px-6">
                        <p class="text-lg text-[#EF6623] font-bold">500</p>
                        <p class="text-[12px] text-gray-500">Patients</p>
                    </div>
                    <div className=' border-[.8px] border-[#EF6623]'></div>
                    <div class="text-center px-6">
                        <p class="text-lg text-[#EF6623] font-bold">30+ years</p>

                        <p class="text-[12px] text-gray-500">Experience</p>

                    </div>
                </div>
                <div className='py-3'>
                    <h3 class="font-bold text-[#EF6623]">About</h3>
                    <p class="text-zinc-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className='py-3'>
                    <h3 class="font-bold text-primary-orange">Specialization:</h3>
                    <p class="text-zinc-700">didunt ut labore et dolore magna</p>
                </div>
                <div className='py-3'>
                    <h3 class="font-bold text-primary-orange">Consultation Fees:</h3>
                    <p class="text-zinc-700">didunt ut labore et dolore magna</p>
                </div>
                <button class="w-full py-4  bg-primary-orange text-white rounded-lg font-bold" onClick={() => navigate('/details')}>BOOK APPOINTMENT</button>
                
            </div>
        </divc>
    )
}

export default Appointment

import React from 'react'
import { useNavigate } from 'react-router-dom';

function Appointment() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="p-7 pt-0 max-w-sm lg:container mx-auto bg-white rounded-xl shadow-md space-y-4">
                <div class="flex items-center py-6  ">
                    <div className=''>
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

                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <img src="https://placehold.co/100x100" alt="Doctor's profile image" class="w-24 h-24 rounded-full bg-zinc-300" />
                    <div>
                        <h2 class="text-xl font-bold">Dr. David Samson</h2>
                        <p class="text-zinc-500">Psychologist</p>
                    </div>
                </div>
                <div class="flex justify-between border   border-gray-900 p-2 px-5 rounded-md">
                    <div class="text-center px-6">
                        <p class="text-sm font-bold">500</p>
                        <p class="text-zinc-500">Patients</p>
                    </div>
                    <div className='border'></div>
                    <div class="text-center px-6">
                        <p class="text-sm font-bold">30+ years</p>
                        <p class="text-zinc-500">Experience</p>
                    </div>
                </div>
                <div>
                    <h3 class="font-bold">About</h3>
                    <p class="text-zinc-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div>
                    <h3 class="font-bold">Specialization:</h3>
                    <p class="text-zinc-700">didunt ut labore et dolore magna</p>
                </div>
                <div>
                    <h3 class="font-bold">Consultation Fees:</h3>
                    <p class="text-zinc-700">didunt ut labore et dolore magna</p>
                </div>
                <button class="w-full h-10 bg-zinc-300 text-black-700 rounded-lg font-bold" onClick={() => navigate('/details')}>BOOK APPOINTMENT</button>
                <div class="p-4 bg-[#7BDBFF] rounded-lg">
                    <h3 class="font-bold">Doctors information</h3>
                    <ul class="list-disc list-inside">
                        <li>Name</li>
                        <li>About</li>
                        <li>Specialization</li>
                        <li>Consultation fees</li>
                        <li>Timings</li>
                        <li>Any other important details</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Appointment

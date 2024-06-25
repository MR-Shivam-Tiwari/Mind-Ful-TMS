import React from 'react'
import { useNavigate } from 'react-router-dom'

function Summary() {
    const navigate = useNavigate();
    return (
        <div>
            <div className=' p-5 lg:container mx-auto'>
                <div className='' onClick={() => navigate('/appointment')}>

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
            <div class="max-w-md mx-auto p-3 px-5">

                <h1 class="text-2xl font-bold text-center mb-4">Booking Summary</h1>
                <div class="bg-[#D9D9D9] p-4 rounded-lg mb-4 flex justify-between items-center">
                    <div>
                        <p class="font-semibold">Aster CMI, Hebbal Bangalore</p>
                        <p class="text-sm text-muted-foreground">1hr | One on One</p>
                    </div>
                    <button class="bg-[#B2B2B2] text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-xs  rounded">Change</button>
                </div>
                <div class="bg-[#D9D9D9] p-4 py-6 rounded-lg mb-4">
                    <p class="font-semibold text-lg">Dr. David Samson</p>
                    <p class="text-muted-foreground">20 June 2024</p>
                    <p class="text-muted-foreground">11:25 am - 12:25 pm</p>
                </div>
                <p class="font-semibold mb-2">Please Enter Your Details</p>
                <form>
                    <label class="block mb-2">
                        <span class="text-muted-foreground">Name *</span>
                        <input type="text" class="mt-1 block w-full border border-zinc-300 rounded p-2" required />
                    </label>
                    <label class="block mb-2">
                        <span class="text-muted-foreground">Email *</span>
                        <input type="email" class="mt-1 block w-full border border-zinc-300 rounded p-2" required />
                    </label>

                    <label class="block mb-4">
                        <span class="text-muted-foreground">Contact Number *</span>
                        <input type="tel" class="mt-1 block w-full border border-zinc-300 rounded p-2" placeholder="+91" required />
                    </label>
                    <div className='flex items-center justify-center'>

                        <button onClick={() => navigate("/confirmation")} type="submit" class=" font-bold px-10 bg-[#D9D9D9] text-secondary-foreground hover:bg-secondary/80 py-2 rounded-lg">SCHEDULE APPOINTMENT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Summary

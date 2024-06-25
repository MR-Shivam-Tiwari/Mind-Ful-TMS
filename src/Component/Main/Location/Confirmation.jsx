import React from 'react'
import { useNavigate } from 'react-router-dom'

function Confirmation() {
    const navigate = useNavigate();
    return (
        <div>
            <div className=' p-5 lg:container mx-auto'>
                <div className='' onClick={() => navigate('/summary')}>

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
            <div class=" flex flex-col items-center justify-center bg-background text-foreground px-4">
                <div class="w-full max-w-md bg-card p-6 rounded-lg ">

                    <h1 class="text-2xl font-bold mb-2">Appointment Confirmed</h1>
                    <p class="text-muted-foreground text-center mb-4">With Dr. David Samson</p>
                    <div class="bg-card p-4 rounded-md border border-border mb-4">
                        <div class="flex items-center justify-between px-4 mb-2">
                            <div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="26" color="gray" height="26" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold">20 June 2024 | 11:25</p>
                                <p class="text-muted-foreground text-sm">1hr | One on One</p>
                                <p class="text-muted-foreground text-sm">Asia/Kolkata - IST (+05:30)</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between  mb-2">
                            <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="26" height="26" color='gray' fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                            <div className='ml-7'>
                                <p class="font-semibold">Bangalore North</p>
                                <p class="text-muted-foreground">MindfulTMS @ Aster CMI</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>

                        <p class="text-center text-muted-foreground mb-4 text-sm inline-block  underline border-gray-400">
                            Add to Calendar | Download as ICS
                        </p>
                    </div>

                    <button class="w-full bg-gray-300  text-secondary-foreground py-3 rounded-lg mb-4 hover:bg-secondary/80">BOOK ANOTHER APPOINTMENT</button>
                    <button class="w-full text-destructive-foreground text-muted-foreground text-sm inline-block  rounded-lg underline">Cancel Appointment</button>
                </div>

            </div>
        </div>
    )
}

export default Confirmation

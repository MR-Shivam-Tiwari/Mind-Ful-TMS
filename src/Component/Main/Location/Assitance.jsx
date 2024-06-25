import React from 'react'
import { useNavigate } from 'react-router-dom';

function Assitance() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="min-h-screen bg-background text-foreground flex flex-col items-center p-4">
                <div class="w-full max-w-md lg:container">
                    <div className='mb-6'>
                        <div className='p-2' onClick={() => navigate('/location')}>

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
                    <h1 class="text-center text-2xl mt-5 font-semibold mb-6">Choose Assistance</h1>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        <div class="bg-gray-300  p-4 rounded-lg flex items-center" onClick={()=> navigate("/expert")}>
                            <div>
                                <h2 class="font-bold">PSYCHIATRY</h2>
                                <p class="text-muted-foreground">15 Minute Session</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                        <div class="bg-gray-300 p-4 rounded-lg flex items-center"  onClick={()=> navigate("/expert")}>
                            <div>
                                <h2 class="font-bold">THERAPY</h2>
                                <p class="text-muted-foreground">45 Minute Session</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                        <div class="bg-gray-300 p-4 py-6 rounded-lg flex items-center"  onClick={()=> navigate("/expert")}>
                            <div>
                                <h2 class="font-bold">TMS CONSULTATION</h2>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Assitance

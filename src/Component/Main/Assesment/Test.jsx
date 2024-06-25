import React from 'react'
import { useNavigate } from 'react-router-dom'

function Test() {
    const navigate = useNavigate();
    return (
        <div>
            <div className=' container mx-auto p-5' onClick={() => navigate('/assesment')}>

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
            <div class=" flex  items-center justify-center bg-background text-foreground ">
                <div class="w-full max-w-md bg-card p-6 rounded-lg ">

                    <h1 class="text-2xl font-bold mb-2 text-center">TEST FOR DEPRESSION</h1>
                    <h2 class="text-lg font-semibold mb-4 text-center">PHQ-9 Depression Screening Test</h2>
                    <p class="text-muted-foreground mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <p class="text-muted-foreground mb-6 text-center">We understand that you are feeling sad. Do not worry, we are here to help you.</p>
                    <div className='flex justify-center items-center'>

                        <button onClick={()=> navigate('/assement-page')} class=" bg-gray-300 px-14 py-3 text-muted-foreground  rounded-lg hover:bg-muted/80 mb-6">START TEST</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Test

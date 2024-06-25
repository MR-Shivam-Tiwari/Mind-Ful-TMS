import React from 'react'
import { useNavigate } from 'react-router-dom'

function SelfAssement() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='p-5'>
                <div className=' container mx-auto' onClick={() => navigate('/')}>

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
            <div class=" flex  items-center justify-center bg-background text-foreground p-4">
                <div class="w-full max-w-sm">

                    <h1 class="text-2xl font-semibold mb-6 text-center">What are you feeling?</h1>
                    <div class="space-y-6">
                        <div class="text-center">
                            <p class="mb-2">I am feeling depressed</p>
                            <div className='flex items-center justify-center'>

                                <button onClick={() => navigate('/test')} class="bg-gray-300 text-muted-foreground py-2 w-[250px] rounded-md ">PHQ-9 Test for Depression</button>
                            </div>
                        </div>

                        <div class="text-center">
                            <p class="mb-2">I am feeling anxious</p>
                            <div className='flex items-center justify-center'>

                                <button onClick={() => navigate('/test')} class="bg-gray-300 text-muted-foreground py-2 w-[250px] rounded-md ">GAD-7 test for Anxiety</button>
                            </div>
                        </div>

                        <div class="text-center " style={{marginBottom:"10px"}}>
                            <p class="mb-2">I am feeling irritated</p>
                            <div className='flex items-center justify-center'>

                                <button onClick={() => navigate('/test')} class="bg-gray-300 text-muted-foreground py-2 w-[250px] rounded-md ">PSS-10 test for Stress</button>
                            </div>
                        </div>

                        <div class="text-center">
                            <p class="mb-2 mt-6">I dont know, help me find out</p>
                            <div className='flex items-center justify-center'>

                                <button onClick={() => navigate('/test')} class="bg-gray-300 text-muted-foreground py-2 w-[250px] rounded-md ">K10 General Test</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelfAssement

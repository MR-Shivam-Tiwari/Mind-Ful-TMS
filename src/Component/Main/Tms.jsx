import React from 'react'
import { useNavigate } from 'react-router-dom'

function Tms() {
    const navigate = useNavigate();
    return (
        <div >
            <div className=' p-5 container mx-auto' onClick={() => navigate('/')}>

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
            <div class="bg-background lg:container  text-foreground p-4 max-w-md mx-auto">
                <div class="flex items-center justify-center mb-1">
                    <h1 class="text-xl font-bold">TMS Treatment</h1>
                </div>
                <p class="text-muted-foreground text-center mb-6">Transcranial magnetic stimulation</p>
                <h2 class="text-lg font-bold mb-2">What is TMS ?</h2>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                </p>
                <h2 class="text-lg font-bold mb-2">How does TMS work?</h2>
                <p class="mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut ullamcorper. Dolor morbi non arcu risus. Praesent semper feugiat nibh sed pulvinar
                    proin gravida hendrerit lectus. Euismod quis viverra nibh cras pulvinar.
                    <p className='text-xs text-[#4689D8] '>
                        Science of TMS Therapy
                    </p>
                    <p className='text-xs text-[#4689D8] '>
                        What can i expect while receiving TMS Therapy?
                    </p>
                </p>

                <h2 class="text-lg font-bold mb-2">What does TMS therapy treat?</h2>
                <div class="flex justify-center space-x-3    mb-4">
                    <button class="bg-gray-300 text-secondary-foreground py-6  w-40 rounded-lg">Depression</button>
                    <button class="bg-gray-300 text-secondary-foreground py-6  w-40 rounded-lg">OCD</button>
                    <button class="bg-gray-300 text-secondary-foreground py-6  w-40 rounded-lg">Others</button>
                </div>
                <h2 class="text-lg font-bold mb-2">TMS can also be used to treat:</h2>
                <ul class="list-disc list-inside mb-4">
                    <li>Addiction Remission</li>
                    <li>ADHD</li>
                    <li>Anxiety</li>
                    <li>Bipolar Depression</li>
                    <li>Chronic Pain</li>
                    <li>Eating Disorders</li>
                    <li>Insomnia</li>
                    <li>Multiple Sclerosis</li>
                    <li>Parkinson’s</li>
                    <li>Postpartum Depression</li>
                    <li>Post-Stroke Recovery</li>
                    <li>Smoking Cessation</li>
                    <li>Tinnitus</li>
                    <li>Tourettes</li>
                </ul>

            </div>
            <div class="bg-[#D9D9D9] container mx-auto text-muted-foreground p-4 rounded">
                <h2 class="text-lg font-bold ">Have any other questions?</h2>
                <h2 class="text-lg font-bold mb-4">Feel free to get in touch</h2>
                <button class="bg-white text-primary-foreground py-2 px-4 rounded-lg">Contact Us</button>
            </div>
        </div>
    )
}

export default Tms

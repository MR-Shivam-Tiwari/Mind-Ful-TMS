import React from 'react'

function Result() {
    return (
        <div>
            <div class="flex flex-col items-center p-4 space-y-4 max-w-md mx-auto bg-card text-card-foreground rounded-lg shadow-md">
                <div class="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                    <span class="text-muted-foreground">ILLUSTRATION</span>
                </div>
                <div class="text-center">
                    <p class="text-muted-foreground mt-4">Your score is</p>
                    <p class="text-6xl font-bold ">03</p>
                    <p class="font-semibold mb-6">Minimal Depression</p>
                    <div class="bg-[#7BDBFF] p-2 rounded-lg mt-2">
                        <p>Keep up with healthy habits and check in with your healthcare provider if needed</p>
                    </div>
                </div>
                <p class="font-semibold">Get a detailed report</p>
                <input type="text" placeholder="Enter your WhatsApp Number" class="border-2 border-gray-700  p-2 rounded-lg px-6  text-center" />
                <div className='flex justify-center'>

                <button class="bg-[#D9D9D9]  text-muted-foreground py-2 px-14 rounded-lg w-full">SUBMIT</button>
                </div>
                <p class="text-center text-sm text-muted-foreground">You'll receive a message on WhatsApp shortly. If you haven't received it yet, <a href="#" class="font-bold">click here</a></p>
                <button class="bg-[#D9D9D9] text-muted-foreground py-2  rounded-lg px-7">BOOK A CONSULTATION</button>
            </div>
        </div>
    )
}

export default Result

import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dummycontact() {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className='p-7 container mx-auto' onClick={() => navigate('/')}>

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
                <div class="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">

                    <div class="w-full max-w-md">
                        <div class="text-center items-center justify-center mb-4">

                            <h1 class="text-3xl mb-5 font-semibold">TMS Treatment Services</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                            </p>
                            <p className='mt-2'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.     </p>
                        </div>
                        <div class="flex justify-around border-b-[4px] mb-4">
                            <button class="py-2 px-4 text-muted-foreground">Hebbal</button>
                            <button class="py-3 px-4 bg-gray-200  text-secondary-foreground rounded-t-lg">Whitefield</button>
                            <button class="py-2 px-4 text-muted-foreground">Delhi</button>
                        </div>
                        <form class="space-y-4">
                            <div>
                                <label for="fullname" class="block text-sm font-medium">Full Name</label>
                                <input type="text" id="fullname" class="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Full Name" />
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium">Phone Number</label>
                                <input type="tel" id="phone" class="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Phone Number" />
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium">Email</label>
                                <input type="email" id="email" class="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Email" />
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium">Message</label>
                                <textarea id="message" rows="4" class="mt-1 block w-full p-2 border border-input rounded-md" placeholder="Message"></textarea>
                            </div>
                            <div className='flex items-center justify-center'>

                                <button type="submit" class=" py-2 font-semibold px-10  bg-[#D9D9D9] text-muted-foreground rounded-md hover:bg-muted/80">SUBMIT & RECEIVE CALLBACK</button>
                            </div>
                        </form>
                        <div class="my-4 text-center">
                            <p>Or directly call us at</p>
                            <p class="font-semibold">+91 1234567890</p>
                            <p>Timings: 9:00 am - 2:00 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dummycontact

import React from 'react';
import img1 from "../Images/Group 17.png";
import img2 from "../Images/Group 16.png";

function Home() {
    return (
        <div className=" ">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto grid items-center gap-8 px-4  md:px-6 lg:gap-12">
                    <div className=''>

                        <img
                            src={img1}
                            width="600"
                            height="365"
                            alt="Consultation"
                            className="aspect-video overflow-hidden rounded-xl object-cover w-full "
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2 ">
                            <h2 className="text-3xl px-12 lg:mb-12 text-center font-bold tracking-tighter sm:text-3xl md:text-5xl">
                                You Deserve to
                                Feel Better
                            </h2>
                            <p className="text-gray-600 px-6   text-center md:text-xl lg:text-base xl:text-xl">
                                Get the best care from our experienced psychologists, TMS experts and
                                psychiatrists for help with
                                depression,OCD and more.
                            </p>
                        </div>
                        <p className="text-gray-600 text-center px-12  md:text-xl lg:text-base xl:text-xl">
                            With empathy and confidence,
                            our professionals will guide you
                            through every challenge.
                        </p>
                        <div className="flex  justify-center gap-2">
                            <button className="bg-gray-200   w-[300px] h-[50px] text-black font-bold mt-3 px-2 py-2 rounded-md text-center">
                                SCHEDULE CONSULTATION
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-[1fr_1fr] md:px-6 lg:gap-12">

                    <div className="space-y-4">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                TMS Treatment
                            </h2>
                            <p className="text-gray-600 md:text-xl lg:text-base xl:text-xl">
                                A new approach to treat <br />
                                depression, anxiety, OCD and more.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center h-full  gap-7 border p-3 bg-gray-100 rounded'>

                        <img
                            src={img2}
                            width="600"
                            // height="665"
                            alt="Consultation"
                            className="aspect-video h-[180px] lg:h-[400px]  overflow-hidden rounded-xl object-cover w-full"
                        />
                        <div className='w-[70%] flex flex-col gap-4 text-sm lg:gap-12 font-bold '>
                            <p>NON-INVASIVE</p>
                            <p>NO MEDICATION</p>
                            <p>SAFE</p>
                            <p> US FDA Approved</p>
                        </div>
                    </div>
                </div>
                <div className=' py-10 '>
                    <div className='text-center mb-4 px-12'>
                        At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in
                        India and USA.
                    </div>
                    <div className='text-center px-11 '>
                        <strong>Is TMS for me?</strong>  Learn how it works and
                        if it is the right option for you.
                    </div>
                    <div className='flex items-center justify-center py-6 '>

                        <button className='border p-3 px-10 rounded-lg bg-gray-300 font-bold ' >
                            MORE ABOUT TMS
                        </button>
                    </div>

                </div>
            </section>

            <section>
                <div class="bg-gray-300 w-full">
                    <div class="container mx-auto py-12 px-4 text-center text-black  md:px-6">
                        <p class="text-lg  mb-8 font-bold ">How are you feeling today?</p>
                        <div class="flex  justify-center gap-5 lg:gap-20 ">
                            <div className='text-xs lg:text-lg'>

                                <div class="bg-white  mb-2 rounded-lg shadow-md flex items-center justify-center p-6 w-[70px] h-[100px] lg:w-[140px] lg:h-[200px]">
                                    <div class="w-full h-full flex items-center justify-center"></div>
                                </div>
                                Depressed
                            </div>
                            <div className='text-xs lg:text-lg'>

                                <div class="bg-white  mb-2 rounded-lg shadow-md flex items-center justify-center p-6 w-[70px] h-[100px] lg:w-[140px] lg:h-[200px]">
                                    <div class="w-full h-full flex items-center justify-center"></div>

                                </div>
                                Anxious
                            </div>
                            <div className='text-xs lg:text-lg'>

                                <div class="bg-white  mb-2 rounded-lg shadow-md flex items-center justify-center p-6 w-[70px] h-[100px] lg:w-[140px] lg:h-[200px]">
                                    <div class="w-full h-full flex items-center justify-center"></div>
                                </div>
                                Stressed
                            </div>
                            <div className='text-xs lg:text-lg'>

                                <div class="bg-white mb-2 rounded-lg shadow-md flex items-center justify-center p-6 w-[70px] h-[100px] lg:w-[140px] lg:h-[200px]">
                                    <div class="w-full h-full flex items-center justify-center"></div>
                                </div>Not sure
                            </div>
                        </div>
                        <p class="text-[30px]  mt-8 mb-4">Take a <strong>FREE TEST</strong>  to identify your symptoms</p>
                        <a
                            href="#"
                            class="inline-flex px-20  h-11 mt-2  items-center justify-center px-4 py-2 bg-white text-gray-800 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >FREE TEST</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

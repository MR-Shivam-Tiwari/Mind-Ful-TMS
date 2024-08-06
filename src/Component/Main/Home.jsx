import React from 'react';
import img1 from "../Images/Group 17.png";
import img2 from "../Images/Group 16.png";
import img3 from "../Images/Rectangle 9.png";
import ImageSlider from './ImageSlider';
import Locations from './Locations';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div className=" ">
            <Navbar />
            <section className='mb-5'>
                <div className='flex justify-center mb-4'>
                    <img src='/home/banner01.png' />
                </div>
                <div className='flex flex-col justify-center px-8'>
                    <h1 className=' text-3xl mb-5 font-[30px] text-center font-sans font-semibold '>


                        You Deserve to Feel Better
                    </h1>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A] '>
                        Get the best care from our experienced psychologists, TMS experts and
                        psychiatrists for help with
                        depression,OCD and more.
                    </p>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A] '>
                        With empathy and confidence,
                        our professionals will guide you
                        through every challenge.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#EF6623] rounded-lg px-8 py-3 text-white text-sm font-semibold'>
                        SCHEDULE CONSULTATION
                    </button>
                </div>
            </section>
            <section className='section-gradient-home py-10'>


                <div className='flex flex-col justify-center mb-5 px-8 bg-[rgba(239, 102, 35, 0.3)]'>
                    <h1 className=' text-lg mb-3 font-semibold text-black text-center'> Not sure what you need?</h1>

                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>These tests can help identify
                        what you may have and need</p>

                    <h1 className='text-2xl text-center text-gray-800'>
                        Take a <span className="font-semibold">FREE TEST</span> to identify your symptoms
                    </h1>

                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#EF6623] rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                        FREE TEST
                    </button>
                </div>
            </section>

            <section className=' py-10 px-4'>
                <div>
                    <h1 className='text-3xl font-[30px] text-center font-sans font-semibold'>
                        TMS Treatment
                    </h1>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>A new approach to treat
                        depression, anxiety, OCD and more.</p>
                </div>

                <div className='flex justify-between mb-5 items-center py-6 px-2 rounded-lg gap-6  section-gradient-home'>
                    <div className='h-[150px] w-[167px]'>
                        <img className='w-full h-full' src="/home/doctor.png" />
                    </div>
                    <div>
                        <p className='font-bold mb-3 text-gray-700 text-md'>NON-INVASIVE</p>
                        <p className='font-bold mb-3 text-gray-700 text-md'>NO MEDICATION</p>
                        <p className='font-bold mb-3 text-gray-700 text-md'>SAFE</p>
                        <p className='font-bold mb-3 text-gray-700 text-md'>US FDA Approved</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center mb-5 px-8 bg-[rgba(239, 102, 35, 0.3)]'>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>
                        At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in
                        India and USA.
                    </p>
                    <p className='text-center mb-5 font-[15px] text-[#3A3A3A]'>
                        <span className='font-semibold'>Is TMS for me? </span>Learn how it works and
                        if it is the right option for you.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#EF6623] rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                        MORE ABOUT TMS
                    </button>
                </div>
            </section>

            <section className='py-8 px-4'>
                <div className='mb-8'>
                    <h1 className='text-2xl font-[30px] text-center '>
                        Why choose <span className='font-semibold'>MindfulTMS?</span>
                    </h1>

                    <p className='text-center'>
                        Your well being is our mission.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-5 text-center  justify-center'>
                    <div className='flex flex-col justify-center  items-center'>
                        <img className='w-[64px] h-[64px] text-center' src='/home/medical.png' />
                        <p className='text-md font-semibold mt-3'>Personalized care</p>
                    </div>
                    <div className='flex flex-col justify-center  items-center'>
                        <img className='w-[64px] h-[64px]' src='/home/handshake.png' />
                        <p className='text-md font-semibold mt-3'>Trust</p>
                    </div>
                    <div className='flex flex-col justify-center  items-center'>
                        <img className='w-[64px] h-[64px]' src='/home/group.png' />
                        <p className='text-md font-semibold mt-3'>Safe</p>
                    </div><div className='flex flex-col justify-center  items-center'>
                        <img className='w-[64px] h-[64px]' src='/home/heart.png' />
                        <p className='text-md font-semibold mt-3'>Holistic</p>
                    </div>

                </div>
            </section>

            <section className='py-8 px-4 section-gradient-home'>
                <div className='mb-8'>
                    <div className='mb-8'>
                        <h1 className='text-3xl  font-semibold text-gray-800  text-center'>Services we offer</h1>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-5 text-center'>Psychology/Therapy</h1>
                        <div className='grid grid-cols-3 items-center mb-8 justify-center'>
                            <div className='flex flex-col justify-center  items-center text-center '>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                        </div>
                        <div className='flex justify-center '>
                            <button className='bg-[#F8A51C] rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-xl font-semibold mb-5 text-center'>Psychiatry</h1>
                        <div className='grid grid-cols-3 items-center mb-8 justify-center'>
                            <div className='flex flex-col justify-center  items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p  className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='w-[64px] h-[64px] rounded-full bg-[#EF6623]'></div>
                                <p className='text-sm font-semibold'>Lorem Ipsum
                                    dolor qioe </p>
                            </div>
                        </div>
                        <div className='flex justify-center '>
                            <button className='bg-[#F8A51C] rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-8 px-4'>

            </section>

            {/* <Footer /> */}
        </div>
    );
}

export default Home;

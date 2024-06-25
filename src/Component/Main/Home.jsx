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
            <section class="w-full py-12 md:py-24 lg:py-32">
                <div class="container mx-auto grid items-center gap-8 px-4 md:grid-cols-[1fr_1fr] md:px-6 lg:gap-12">
                    <img
                        src="https://img.freepik.com/free-photo/female-with-raised-hands-standing-rock_23-2148137868.jpg?t=st=1719300992~exp=1719304592~hmac=0af38f8baa0742fc43e1c93130c8f706cbebd16b57c458d80290d2d6fd1f73d3&w=1380"
                        width="650"
                        height="365"
                        alt="Consultation"
                        class="aspect-video overflow-hidden rounded-xl object-cover w-full"
                    />
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
                            <button onClick={() => navigate("/location")} className="bg-gray-200   w-[300px] h-[50px] text-black font-bold mt-3 px-2 py-2 rounded-md text-center">
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
                            src="https://img.freepik.com/premium-vector/hospital-medical-billing-services-illustration_2175-4568.jpg?w=1060"
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

                        <button className='border p-3 px-10 rounded-lg bg-gray-300 font-bold ' onClick={()=> navigate("/tms")} >
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

                                <div class="bg-white  mb-2 rounded-lg shadow-md flex items-center justify-center  w-[70px] h-[100px] lg:w-[140px] lg:h-[200px]">
                                    <img class="w-full h-full flex items-center rounded-lg justify-center" src='https://img.freepik.com/free-photo/depressed-man-standing-stairs_23-2150761412.jpg?t=st=1719301103~exp=1719304703~hmac=67c9673f8c58b37bb347864dbd2ec8acef4f930e0cac54101c3419c3c252c859&w=740' />
                                </div>
                                Depressed
                            </div>
                            <div className='text-xs lg:text-lg'>

                                <div class="bg-white  mb-2 rounded-lg shadow-md flex items-center justify-center  w-[70px] h-[100px] lg:w-[140px] lg:h-[200px]">
                                    <img class="w-full h-full flex items-center rounded-lg justify-center" src='https://img.freepik.com/free-photo/young-woman-with-serious-sinusitis_329181-3860.jpg?t=st=1719301231~exp=1719304831~hmac=e8da693863a61a2f94e8571d5f552707e9adf866245cf5da6eed3ae49d0cddbb&w=740' />
                                </div>
                                Anxious
                            </div>
                            <div className='text-xs lg:text-lg'>

                                <div class="bg-white  mb-2 rounded-lg shadow-md flex items-center justify-center  w-[70px] h-[100px] lg:w-[140px] lg:h-[200px]">
                                    <img class="w-full h-full flex items-center rounded-lg justify-center" src='https://img.freepik.com/free-photo/young-asian-woman-having-migraine-headache-while-trying-work-from-home-tired-female-couch-covering-forehead-exhausted-red-eyes-unhappy-sick-upset-ill-fever-depresion_482257-47233.jpg?t=st=1719301262~exp=1719304862~hmac=4e6a61e60741e3aff5bb90c9df734ea7f4c33c9d0f610e2c73ccff794d15bf7a&w=740' />
                                </div>
                                Stressed
                            </div>
                            <div className='text-xs lg:text-lg'>

                                <div class="bg-white  mb-2 rounded-lg shadow-md flex items-center justify-center  w-[70px] h-[100px] lg:w-[140px] lg:h-[200px]">
                                    <img class="w-full h-full flex items-center rounded-lg justify-center" src='https://img.freepik.com/premium-photo/portrait-business-man-with-no-sign-accountant-company-review-with-warning-symbol-with-hand-gesture-face-employee-entrepreneur-with-board-deny-with-reject-paper-feedback_590464-292993.jpg?w=740' />
                                </div>Not sure
                            </div>
                        </div>
                        <p class="text-[30px]  mt-8 mb-4">Take a <strong>FREE TEST</strong>  to identify your symptoms</p>
                        <a
                            href="/assesment"
                            class="inline-flex px-20 w-60 h-11 mt-2  items-center justify-center px-4 py-2 bg-white text-gray-800 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >FREE TEST</a>
                    </div>
                </div>
            </section>

            <section className='mt-10'>
                <div class="flex flex-col items-center justify-center gap-8 p-4 md:p-8 lg:p-12">
                    <div class="space-y-2 text-center">
                        <h2 class="text-2xl  md:text-4xl lg:text-5xl">Why choose <strong>MindfulTMS?</strong></h2>
                        <p class="max-w-md text-center lg:ml-20 text-muted-foreground md:text-lg lg:text-xl">
                            Your well being is our mission.
                        </p>
                    </div>
                    <div class="grid w-full max-w-md grid-cols-2 gap-4 lg:gap-10  md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:grid-cols-4">
                        <img
                            src="https://img.freepik.com/free-photo/businessman-selecting-gray-square_1232-897.jpg?t=st=1719301474~exp=1719305074~hmac=ca8a535505b172c2d9591f6f72621bbcf3048165128e72594c2895b61b2ddb01&w=1380"
                            alt="Image 1"
                            width="300"
                            height="200"
                            class="  w-full overflow-hidden rounded-lg object-cover"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/businessman-selecting-gray-square_1232-897.jpg?t=st=1719301474~exp=1719305074~hmac=ca8a535505b172c2d9591f6f72621bbcf3048165128e72594c2895b61b2ddb01&w=1380"
                            alt="Image 1"
                            width="300"
                            height="200"
                            class="  w-full overflow-hidden rounded-lg object-cover"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/businessman-selecting-gray-square_1232-897.jpg?t=st=1719301474~exp=1719305074~hmac=ca8a535505b172c2d9591f6f72621bbcf3048165128e72594c2895b61b2ddb01&w=1380"
                            alt="Image 1"
                            width="300"
                            height="200"
                            class="  w-full overflow-hidden rounded-lg object-cover"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/businessman-selecting-gray-square_1232-897.jpg?t=st=1719301474~exp=1719305074~hmac=ca8a535505b172c2d9591f6f72621bbcf3048165128e72594c2895b61b2ddb01&w=1380"
                            alt="Image 1"
                            width="300"
                            height="200"
                            class="  w-full overflow-hidden rounded-lg object-cover"
                        />

                    </div>
                </div>
            </section>

            <section className='py-20'>
                <div>
                    <h3 className='text-[30px] text-center font-semibold'>Services</h3>
                </div>
                <div class="grid grid-cols-1  container mx-auto gap-6 lg:gap-20 p-5 md:grid-cols-2 md:p-6">
                    <div class="rounded-[10px] border-gray-900 border-2  bg-card text-card-foreground shadow-sm" >
                        <div class="border-b-2 border-gray-900 h-10 text-center flex items-center justify-center text-[18px] rounded-t-[10px] bg-[#BFBDBD]">
                            Therapy
                        </div>
                        <div className="flex   items-center p-12 gap-4 ">
                            <ul className="list-disc">
                                <li>Cognitive Behavioral Therapy for Depression and Anxiety </li>
                                <li>Couples Counselling</li>
                            </ul>
                        </div>
                        <div onClick={()=> navigate('/sample-1')} class="border-t-2 lg:mt-[21px]  border-gray-900  flex bg-[#5B5B5B] rounded-b-[7px] text-white font-bold text-[18px] items-center justify-center h-10">
                            Learn more
                        </div>
                    </div>
                    <div class="rounded-[10px] border-gray-900 border-2  bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div class="border-b-2 border-gray-900 h-10 text-center flex items-center justify-center text-[18px] rounded-t-[10px] bg-[#BFBDBD]">
                            TMS
                        </div>
                        <div className="flex   items-center p-12 gap-4 ">
                            <ul className="list-disc">
                                <li>TMS for Depression </li>
                                <li>TMS for OCD </li>
                                <li>TMS for Anxiety  </li>
                            </ul>
                        </div>
                        <div onClick={()=> navigate('/sample-2')} class="border-t-2 border-gray-900  flex bg-[#5B5B5B] rounded-b-[7px] text-white font-bold text-[18px] items-center justify-center h-10">
                            Learn more
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <ImageSlider />
            </section>

            <section>
                <Locations />
            </section>

            <section className='py-10'>
                <div className="flex flex-col items-center space-y-8">
                    <h2 className="text-2xl font-semibold text-foreground lg:mb-10">Our Experts</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 p-3 gap-8 lg:gap-40">
                        <div className="flex flex-col items-center space-y-2">
                            <img className="w-24 lg:w-60 lg:h-60 h-24 rounded-full bg-muted" src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1719301637~exp=1719305237~hmac=ffcae05ad3e96edbdb45d88a8d63e04ee547f1a85de34a35fba32a56548991b9&w=1380" alt="Profile Picture" />
                            <div className="text-center">
                                <p className="font-semibold text-foreground">Navya Sree</p>
                                <p className="text-muted-foreground text-sm">Clinical Psychologist</p>
                                <p className="text-muted-foreground text-sm">Whitefield</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img className="w-24 h-24 lg:w-60 lg:h-60  rounded-full bg-muted" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1719298570~exp=1719302170~hmac=9d698de4fb081308e154c84270f087995604f91d4a0a12e7be4ed155b8cea9b8&w=1380" alt="Profile Picture" />
                            <div className="text-center">
                                <p className="font-semibold text-foreground">Ayana Sunil Vundefinedr</p>
                                <p className="text-muted-foreground text-sm">Clinical Psychologist</p>
                                <p className="text-muted-foreground text-sm">Whitefield</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img className="w-24 h-24 lg:w-60 lg:h-60 rounded-full bg-muted" src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20598.jpg?t=st=1719301641~exp=1719305241~hmac=28eef7b5daf23e3c015d3d90808bc9af268234ff07e32b30c0cbbe9de04bfdea&w=1380" alt="Profile Picture" />
                            <div className="text-center">
                                <p className="font-semibold text-foreground">Kavya</p>
                                <p className="text-muted-foreground text-sm">Clinical Psychologist</p>
                                <p className="text-muted-foreground text-sm">Whitefield</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img className="w-24 h-24 lg:w-60 lg:h-60 rounded-full bg-muted" src="https://img.freepik.com/premium-photo/portrait-young-man_102671-6562.jpg?w=740" />
                            <div className="text-center">
                                <p className="font-semibold text-foreground">Sradha P</p>
                                <p className="text-muted-foreground text-sm">Clinical Psychologist</p>
                                <p className="text-muted-foreground text-sm">Hebbal</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img className="w-24 h-24 lg:w-60 lg:h-60 rounded-full bg-muted" src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1719301498~exp=1719305098~hmac=4dbaf64a64666457d65e281d08468a2370c2159efb019f0fd659f128218f397a&w=1380" alt="Profile Picture" />
                            <div className="text-center">
                                <p className="font-semibold text-foreground">Shilpi Sharma</p>
                                <p className="text-muted-foreground text-sm">Clinical Psychologist</p>
                                <p className="text-muted-foreground text-sm">Delhi</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img className="w-24 h-24 lg:w-60 lg:h-60 rounded-full bg-muted" src="https://img.freepik.com/premium-photo/portrait-confident-young-man-casual-clothing_1235790-845.jpg?w=740" alt="Profile Picture" />
                            <div className="text-center">
                                <p className="font-semibold text-foreground">Sandeep Govil</p>
                                <p className="text-muted-foreground text-sm">Psychiatrist</p>
                                <p className="text-muted-foreground text-sm">Delhi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;

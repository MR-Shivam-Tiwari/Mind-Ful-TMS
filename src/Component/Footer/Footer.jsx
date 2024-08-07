import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../Images/image 1.png"
import Insta from "../Images/Rectangle72.png"
import Facebook from "../Images/Rectangle71.png"
function Footer() {
    const navigate = useNavigate();
    return (


        <footer class="py-6 footer-gradient">
            <div className="flex justify-center">
                <img
                    className="h-[129px] w-[185px]"
                    alt=""
                    src="/home/logo01.png"
                />

            </div>
            <div className='flex items-center px-4 gap-5 overflow-x-scroll text-center mb-5'>
                <div className='bg-[#EF6623] w-[150px] p-5 rounded-lg'>
                    <div className='flex items-center justify-center mb-3'>
                        <img src='/home/wassup.png'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white text-sm'>Aster CMI</p>
                        <h2 className=' text-white text-sm font-semibold'>Bangalore North</h2>
                    </div>
                </div>
                <div className='bg-[#F8A51C] w-[150px] p-5 rounded-lg'>
                    <div className='flex items-center justify-center mb-3'>
                        <img src='/home/wassup.png'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white text-sm'>Whitefield</p>
                        <h2 className=' text-white text-sm font-semibold'>Bangalore North</h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-col px-5 items-center py-4'>
                <p className=' mb-2 font-bold'>Follow Us on our Social Media handles:</p>
                <div className='flex items-center gap-4'>
                    <img src='/home/fb.png' />
                    <img src='/home/ig.png' />
                    <img src='/home/x.png' />
                    <img src='/home/yt2.png' />
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;

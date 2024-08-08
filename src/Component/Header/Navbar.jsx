import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import logo from '../Images/image 1.png'
function Navbar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showslidebar, setslidebarl] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    navigate("/contact-us")
  };
  const togglesidebar = () => {
    setslidebarl(!showslidebar);
  };
  const toggleDrawer = (open) => (event) => {
   
    setOpen(open);
  };

  const [activePage, setActivePage] = useState("");

  const handleNavigate = (path) => {
    setActivePage(path);
    navigate(path);
  };

  return (
    <div className="select-none">
      <header className="flex items-center justify-between px-6 py-0">
        <div onClick={()=>setOpen(true)} className="cursor-pointer">
          <img src="/nav/menu.png" />
        </div>
        <div className="cursor-pointer w-[129px] h-[90px]">
          <img className="cursor-pointer w-full h-full" src="/home/logo01.png" />
        </div>
    
      </header>
      <Drawer open={open} onClose={toggleDrawer(false)} className="">
        <div className="w-[261px] px-2 py-6 select-none">
          <div className="flex justify-end">
            <img
              onClick={() => setOpen(false)}
              className="w-[30px] h-[30px] cursor-pointer"
              src="/home/close.png"
            />
          </div>
          <div className="py-4 ">
            <div className="flex justify-between font-bold bg-[#F8A51C] rounded-lg px-8 py-4 mb-2 text-white">
              <p>Home</p><p>{">"}</p>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p>TMS</p>
            </div>
            <div className="  px-8 py-3 mb-2 ">
              <p className="mb-4">Services</p>
              <div className="ml-5 ">
                <p className="mb-2"><span className="text-[#EF6623]">-- </span>Therapy</p>
                <p><span className="text-[#EF6623]">-- </span>Psychiatry</p>
              </div>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p> Self Assessment</p>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p>Our Clinic Locations</p>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p>Our Experts</p>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p>Health Library</p>
            </div>
          </div>

          <div>
            <div className=" mb-4">
              <button className="bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg w-full py-3 mb-4 text-white text-sm font-semibold">
              SCHEDULE CONSULTATION
              </button>
              <button className="bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg w-full py-3 text-white text-sm font-semibold">
              CONTACT US
              </button>
            </div>
              
          </div>
        </div>
      </Drawer>
      
    </div>
  );
}

export default Navbar;

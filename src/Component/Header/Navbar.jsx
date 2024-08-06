import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../Images/image 1.png'
function Navbar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showslidebar, setslidebarl] = useState(false);

  const toggleModal = () => {
    navigate("/contact-us")
  };
  const togglesidebar = () => {
    setslidebarl(!showslidebar);
  };

  const [activePage, setActivePage] = useState("");

  const handleNavigate = (path) => {
    setActivePage(path);
    navigate(path);
  };

  return (
    <div>
      <header className="flex items-center justify-between px-6">
        <div className="cursor-pointer">
          <img src="/nav/menu.png" />
        </div>
        <div className="cursor-pointer w-[129px] h-[90px]">
          <img className="cursor-pointer w-full h-full" src="/home/logo01.png" />
        </div>
    
      </header>
      
    </div>
  );
}

export default Navbar;

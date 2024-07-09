import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import ProfileImage from "../assets/profileImg.jpeg"; 
import { useDarkMode } from '../DarkModeContext';
import { MdOutlineNightsStay, MdOutlineLightMode } from 'react-icons/md';

const NavBar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const { isDarkMode, toggleTheme } = useDarkMode();

  const toggleDarkMode = () => {
    toggleTheme();
    setNav(false); // Close the mobile menu after toggling
  }

  const toggleMobileNav = () => {
    setNav(!nav);
  }

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'project' },
    { id: 4, link: 'contact' },
  ];

  return (
    <div className={`flex justify-between z-50 items-center w-full h-20 fixed px-4 ${isDarkMode ? 'bg-[#0F0A1E] text-[#F0F0F0]' : 'bg-[#F0F0F0] text-[#0F0A1E]'}`}>
      <div className='flex items-center'>
        <img src={ProfileImage} className='h-12 w-12 rounded-full mr-2' alt="Profile" />
        <h1 className='cursor-pointer font-bold text-2xl'>Optimistic</h1>
      </div>
      {/* Dark mode toggle */}
      <div className="ml-2">
        {isDarkMode ? (
          <MdOutlineLightMode size={25} onClick={toggleDarkMode} className="cursor-pointer" />
        ) : (
          <MdOutlineNightsStay size={25} onClick={toggleDarkMode} className="cursor-pointer" />
        )}
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={toggleMobileNav} className={`cursor-pointer z-10 md:hidden ${isDarkMode ? 'bg-[#150E28]' : 'bg-[#F0F0F0]'} text-${isDarkMode ? 'white' : '#150E28'}`}>
        {nav ? <FaTimes size={25} className={`border rounded ${isDarkMode ? 'border-[#F0F0F0]' : 'border-[#150E28]'}`} /> : <FaBars size={25} className={`border rounded ${isDarkMode ? 'border-[#F0F0F0]' : 'border-[#150E28]'}`} />}
      </div>
      {nav && (
        <ul className={`flex flex-col justify-center items-start border rounded-md md:hidden py-3 my-10 ml-60 absolute top-10 left-0 w-full ${isDarkMode ? 'border-[#F0F0F0]' : 'border-[#150E28]'} h-60 ${isDarkMode ? 'bg-[#150E28]' : 'bg-[#F0F0F0]'} text-${isDarkMode ? '#F0F0F0' : '#150E28'}`}>
          {links.map(({ id, link }) => (
            <li key={id} className={`px-3 cursor-pointer capitalize py-3 text-lg font-medium rounded ${isDarkMode ? 'border-[#F0F0F0]' : 'border-[#150E28]'}`}>
              <Link onClick={toggleMobileNav} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

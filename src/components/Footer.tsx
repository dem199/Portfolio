import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useDarkMode } from '../DarkModeContext'; 

// Defined the type for the link objects
interface Link {
  id: number;
  child: React.ReactNode;
  href: string;
}

const Footer: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  
  // Array of social media links
  const links: Link[] = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163',
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: 'https://github.com/dem199',
    },
    {
      id: 3,
      child: <FaXTwitter size={30} />,
      href: 'https://twitter.com/olatunb67146838',
    },
    {
      id: 4,
      child: <FaYoutube size={30} />,
      href: 'https://youtube.com/channel/UCBPv5Vn3QJrvfR89kOUhFzQ',
    },
    {
      id: 5,
      child: <FaInstagram size={30} />,
      href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163',
    },
  ];

  return (
    <footer className={`pt-10 ${isDarkMode ? 'bg-[#0F0A1E] text-[#F0F0F0]' : 'bg-[#F0F0F0] text-[#0F0A1E]'} py-10 text-center`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center px-5 items-center mb-8">
          {/* Hidden on small screens, shown on medium and larger screens */}
          <div className="md:hidden mb-4">
            <p className="text-xl font-bold mb-2">Let's connect</p>
            <ul className="flex">
              {links.map(({ id, child, href }) => (
                <li key={id} className="mr-4">
                  <a href={href} className={isDarkMode ? 'text-white' : 'text-[#150E28]'} target="_blank" rel="noreferrer">
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-center">
            <p className="mb-4">
              Coding dreams into reality, one line at a time.
            </p>
            <p className='text-sm'>&copy; Opeyemi Olatunbosun. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


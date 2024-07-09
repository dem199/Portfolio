import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useDarkMode } from '../DarkModeContext'; // Import the custom hook

interface SocialLink {
  id: number;
  child: JSX.Element;
  href: string;
  download?: boolean;
}

const SocialLinks: React.FC = () => {
  const { isDarkMode } = useDarkMode(); // Access the isDarkMode state

  const links: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/dem199',
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FaXTwitter size={30} />
        </>
      ),
      href: 'https://twitter.com/olatunb67146838',
    },
    {
      id: 4,
      child: (
        <>
          YouTube <FaYoutube size={30} />
        </>
      ),
      href: 'https://youtube.com/channel/UCBPv5Vn3QJrvfR89kOUhFzQ',
    },
    {
      id: 5,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: 'https://instagram.com/opeyemi-olatunbosun-85b30b163',
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      download: true,
    }
  ];

  return (
    <div className={`hidden lg:flex flex-col top-[35%] left-0 fixed`}>
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${isDarkMode ? 'bg-[#0F0A1E] text-white' : 'bg-[#F0F0F0] text-[#0F0A1E]'}`}>
            <a href={href} className={`flex justify-between items-center w-full ${isDarkMode ? 'bg-[#0F0A1E] text-white' : 'bg-[#F0F0F0] text-[#0F0A1E]'}`} download={download} target='_blank' rel='noreferrer'>
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;

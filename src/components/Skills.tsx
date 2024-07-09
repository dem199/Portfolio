import React from 'react';
import { FaReact, FaCss3, FaHtml5, FaBootstrap, FaStackOverflow, FaGitAlt, FaSass, FaFigma } from "react-icons/fa";
import { TbBrandJavascript, TbBrandVscode, TbBrandTailwind, TbBrandFirebase, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { BiLogoNetlify } from "react-icons/bi";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useDarkMode } from '../DarkModeContext';

interface Skill {
  id: number;
  icon: JSX.Element;
  name: string;
}

const Skills: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  // Array of skill items with their corresponding icons and names
  const links: Skill[] = [
    { id: 1, icon: <TbBrandJavascript className='w-20 mx-auto mt-2' />, name: "Javascript" },
    { id: 2, icon: <FaReact className='w-20 mx-auto mt-2' />, name: "React" },
    { id: 3, icon: <FaCss3 className='w-20 mx-auto mt-2' />, name: "CSS3" },
    { id: 4, icon: <FaHtml5 className='w-20 mx-auto mt-2' />, name: "HTML5" },
    { id: 5, icon: <FaBootstrap className='w-20 mx-auto mt-2' />, name: "Bootstrap" },
    { id: 6, icon: <TbBrandTailwind className='w-20 mx-auto mt-2' />, name: "Tailwind CSS" },
    { id: 7, icon: <TbBrandFirebase className='w-20 mx-auto mt-2' />, name: "Firebase" },
    { id: 8, icon: <BiLogoNetlify className='w-20 mx-auto mt-2' />, name: "Netlify" },
    { id: 9, icon: <TbBrandNextjs className='w-20 mx-auto mt-2' />, name: "Next.js" },
    { id: 10, icon: <TbBrandTypescript className='w-20 mx-auto mt-2' />, name: "Typescript" },
    { id: 11, icon: <FaStackOverflow className='w-20 mx-auto mt-2' />, name: "Stack Overflow" },
    { id: 12, icon: <FaGitAlt className='w-20 mx-auto mt-2' />, name: "Git" },
    { id: 13, icon: <FaSass className='w-20 mx-auto mt-2' />, name: "SASS" },
    { id: 14, icon: <FaFigma className='w-20 mx-auto mt-2' />, name: "Figma" },
    { id: 15, icon: <TbBrandVscode className='w-20 mx-auto mt-2' />, name: "VSCode" },
  ];

  return (
    <section className={`w-full pt-20 ${isDarkMode ? 'bg-[#150E28] text-white' : 'bg-[#F0F0F0] text-[#150E28]'}`}>
      <div className='max-w-[1000px] p-4 mx-auto md:pl-20 flex flex-col justify-center w-full h-full'>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__backInUp" : ""}>
              <h3 className={`text-4xl border-b-4 border-[#D434FE] font-bold inline`}>Skills and Tools</h3>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {links.map(({ id, icon, name }) => (
                  <div key={id} className={`shadow-md shadow-[#D434FE] hover:scale-110 duration-500`}>
                    {icon}
                    <p className='my-4'>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
}

export default Skills;

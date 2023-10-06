import React from 'react'
import { TbBrandJavascript, TbBrandVscode, TbBrandTailwind, TbBrandFirebase, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { FaReact, FaCss3, FaHtml5, FaBootstrap, FaStackOverflow, FaGitAlt, FaSass, FaFigma} from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi"
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { useDarkMode } from '../DarkModeContext'; // Import the custom hook




const Skills = () => {
    const { isDarkMode } = useDarkMode(); // Access the isDarkMode state
// Array of skill items with their corresponding icons and names

    const links = [
      {
        id: 1,
        child: (
            <>
            <TbBrandJavascript  className='w-20 mx-auto mt-2'/>
            <p className='my-4'>Javascript</p>
            </>
        )
    },
    {
        id: 2,
        child: (
            <>
             <FaReact  className='w-20 mx-auto mt-2' />
            <p className='my-4'>React</p>
            </>
        )
    },
    {
        id: 3,
        child: (
            <>
            <FaCss3  className='w-20 mx-auto mt-2'/>
            <p className='my-4'>CSS3</p>
            </>
        )
    },
    {
        id: 4,
        child: (
            <>
            <FaHtml5  className='w-20 mx-auto mt-2' />
            <p className='my-4'>HTML5</p>
            </>
        )
    },
    {
        id: 5,
        child: (
            <>
            <FaBootstrap size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Bootstrap</p>
            </>
        )
    },
    {
        id: 6,
        child: (
            <>
            <TbBrandTailwind size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Tailwind CSS</p>
            </>
        )
     
        
    },

    {
        id: 7,
        child: (
            <>
             <TbBrandFirebase size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Firebase</p>
            </>
        )
    },
    {
        id: 8,
        child: (
            <>
            <BiLogoNetlify size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Netlify</p>
            </>
        )
    },
    {
        id: 9,
        child: (
            <>
            <TbBrandNextjs size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Nextjs</p>
            </>
        )
    },
    {
        id: 10,
        child: (
            <>
            <TbBrandTypescript size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Typescript</p>
            </>
        )
    },
    {
        id: 11,
        child: (
            <>
            <FaStackOverflow size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Stackoverflow</p>
            </>
        )
    },
    {
        id: 12,
        child: (
            <>
            <FaGitAlt size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Git</p>
            </>
        )
     
        
    },

    {
        id: 13,
        child: (
            <>
           <FaSass size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>SASS</p>
            </>
        )
    },
    {
        id: 14,
        child: (
            <>
            <FaFigma size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>Figma</p>
            </>
        )
    },
    {
        id: 15,
        child: (
            <>
          <TbBrandVscode size={30} className='w-20 mx-auto mt-2' />
            <p className='my-4'>VSCode</p>
            </>
        )
    }
  
    ];
    

    return (
        <section className={` w-full pt-20 ${isDarkMode ? 'bg-[#150E28] text-white' : 'bg-[#F0F0F0] text-[#150E28]'}`}>
        <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
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
                                {links.map(({ id, child }) => (
                                    <p key={id} className={`shadow-md shadow-[#D434FE] hover:scale-110 duration-500`}>
                                        {child}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </TrackVisibility>
            </div>
        </div>
    </section>
        
    )
}

export default Skills;



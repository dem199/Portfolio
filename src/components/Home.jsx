import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import HeaderImg from "../assets/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useDarkMode } from '../DarkModeContext'; // Import the custom hook

function Home() {
  const { isDarkMode } = useDarkMode(); // Access the isDarkMode state

  return (
    <section name="home" className={`w-full min-h-screen ${isDarkMode ? 'bg-[#150E28]' : 'bg-[#F0F0F0]'} text-${isDarkMode ? 'white' : '#150E28'}`}>
      <div className="min-h-screen sm:flex pt-48 items-center justify-center md:justify-between">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center sm:flex-row'>
          <div className='justify-center text-center sm:text-left'>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__backInDown" : ""}>
                  <h1 className={`text-4xl sm:text-5xl font-bold text-${isDarkMode ? '#D434FE' : '#1A237E'}`}>
                    <span className={`text-${isDarkMode ? '#D434FE' : '#1A237E'}`}>Hi, I'm{" "}</span>
                    <br />
                    <TypeAnimation
                      sequence={[
                        'Opeyemi Olatunbosun',
                        1000,
                        'a Frontend Developer',
                        1000,
                        'a ReactJs Developer',
                        1000,
                        'a Software Engineer',
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </h1>
                  <p className={`py-6 max-w-sm px-1 text-${isDarkMode ? '#D434FE' : '#1A237E'} font-medium`}>
                    Based in Lagos, Nigeria, I love building apps that are delightful to use.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                    <Link
                      to="project"
                      smooth
                      duration={500}
                      className={`group text-${isDarkMode ? '#150E28' : '#F0F0F0'} px-6 py-3 flex items-center text-sm hover:bg-${isDarkMode ? 'white' : '#333333'} bg-gradient-to-b from-[#D434FE] to-[#903AFF] rounded-md cursor-pointer`}
                    >
                      Portfolio
                      <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={20} className='ml-1' />
                      </span>
                    </Link>
                  </div>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                    <a
                      href="mailto:olatunbosunopeyemi186035@gmail.com?subject=Feedback&body=Message"
                      target="_blank"
                      className={`group text-${isDarkMode ? '#150E28' : '#F0F0F0'} px-6 py-3 flex items-center text-sm bg-gradient-to-b from-[#D434FE] to-[#903AFF] rounded-md cursor-pointer`}
                    >
                      Hire me
                      <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={20} className='ml-1' />
                      </span>
                    </a>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={HeaderImg} className='mt-6 sm:mt-0' alt="" />
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  )
}

export default Home;

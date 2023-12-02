import React from 'react';
import HomeImg from "../assets/About-Image.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useDarkMode } from '../DarkModeContext'; // Import the custom hook

const About = () => {
  const { isDarkMode } = useDarkMode(); // Access the isDarkMode state

  return (
    <div name="about" className={`w-full pt-20 ${isDarkMode ? 'bg-[#150E28] text-white' : 'bg-[#F0F0F0] text-[#150E28]'} `}>
      <div className='flex flex-col  md:pl-20 justify-center items-center w-full h-full'>

        <div className='max-w-[1000px] grid grid-cols-2  w-full'>
          <div className='pb-8 pl-4 sm:items-center'>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                  <h2 className={`text-4xl font-bold inline border-b-4 border-[#D434FE] whitespace-nowrap`}>
                    About Me
                  </h2>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div></div> {/* Placeholder */}
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                  <p>
                    I am a driven frontend/reactjs developer, I utilize modern coding
                    practices to create exceptional user interfaces. My expertise of
                    core technologies is consistently reflected in my work.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                  <p>
                    I have a keen interest in fintech and blockchain, complemented
                    by my background in teaching. I hold a bachelor's degree in
                    Microbiology from the prestigious University of Ibadan. When I'm
                    not engrossed in coding, I enjoy sharing my knowledge and
                    expertise by teaching Chemistry, Physics and Biology.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                  <a
                    href="/portfolio/resume.pdf"
                    target="_blank"
                    className={`group text-${isDarkMode ? '#150E28' : '#F0F0F0'} focus:text-[#F0F0F0] hover:scale-110 w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-b from-[#D434FE] to-[#903AFF] rounded-md cursor-pointer`}
                  >
                    Resume
                  </a>
                </div>
              )}
            </TrackVisibility>
          </div>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img
                  src={HomeImg}
                  className='mt-6 sm:mt-0 bg-[#D434FE] rounded-full'
                  alt=""
                />
              </div>
            )}
          </TrackVisibility>
        </div>

      </div>
    </div>
  )
}

export default About;

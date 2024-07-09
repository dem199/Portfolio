import React from 'react';
import TenziesGame from '../assets/tenzies-game.png';
import VanLife from '../assets/vanlife.png';
import MovieWatchlist from '../assets/movie-watchlist.png';
import SpeedTypingGame from '../assets/speed-typing-game.png';
import TindogApp from '../assets/Tindog-app.png';
import MovieSearchApp from '../assets/movie-searchapp-react.png';
import MemeGenerator from '../assets/meme-generator.png';
import AddPicsCapstone from '../assets/add-pics-capstone.png';
import RegalCravings from '../assets/regal-cravings.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useDarkMode } from '../DarkModeContext';

interface ProjectData {
    id: number;
    name: string;
    image: string;
    github: string;
    live: string;
    description: string;
}

const Project: React.FC = () => {
    const { isDarkMode } = useDarkMode();

    // Data for my projects
    const data: ProjectData[] = [
        {
            id: 1,
            name: "Food Ordering App",
            image: RegalCravings,
            github: "https://github.com/dem199/Regal-Cravings",
            live: "https://regal-cravings.netlify.app/",
            description: "This is an ordering app designed to satisfy your cravings with just a few taps. Whether you're seeking a quick bite or planning a lavish feast, it makes it effortless to explore a world of culinary delights and have them delivered right to your doorstep."
        },
        {
            id: 2,
            name: "Photo Cart",
            image: AddPicsCapstone,
            github: "https://github.com/dem199/Capstone-project",
            live: "https://dem199.github.io/Capstone-project",
            description: "Photo cart is a web application that focuses on adding photos to a cart and placing orders. it aims to provide users with a seamless and intuitive experience for browsing and selecting photos for purchase. This cart capstone project offers users a way to browse and select photos, view the selected photos with their prices in the cart, and complete the order."
        },
        {
            id: 3,
            name: "Meme Generator",
            image: MemeGenerator,
            github: "https://github.com/dem199/Meme-generator",
            live: "https://dem199.github.io/Meme-generator",
            description: "This meme generator app provides a simple and intuitive way for users to input custom text for the top and bottom sections of the meme. It generates a real-time preview of the meme based on the entered text, allowing users to see how their input transforms into a visual meme."
        },
        {
            id: 4,
            name: "Movie Search App",
            image: MovieSearchApp,
            github: "https://github.com/dem199/Movie-search-app",
            live: "https://dem199.github.io/Movie-search-app",
            description: "This Movie Search App is a powerful tool for movie enthusiasts to discover, explore, and get information about their favorite films. With its intuitive interface, real-time search functionality, and comprehensive movie database integration, the app offers a seamless experience for movie lovers."
        },
        {
            id: 5,
            name: "Tindog App",
            image: TindogApp,
            github: "https://github.com/dem199/My-Tindog",
            live: "https://my-tindogapp.netlify.app",
            description: "This Tindog App is a fun and interactive platform for dog lovers to discover and connect with their furry friends. With its sleek design, engaging animations, and a wide variety of adorable dogs, Tindog offers an enjoyable and intuitive experience."
        },
        {
            id: 6,
            name: "Speed Typing App",
            image: SpeedTypingGame,
            github: "https://github.com/dem199/Speed-typing-game",
            live: "https://dem199.github.io/Speed-typing-game",
            description: "The Speed Typing Game is an exciting and challenging game that tests your typing skills and speed. The objective is to type as many words as possible within a specified time limit. With a countdown timer, real-time word tracking, and a final word count announcement, the game provides an engaging and competitive experience for users."
        },
        {
            id: 7,
            name: "Movie Watchlist",
            image: MovieWatchlist,
            github: "https://github.com/dem199/Movie-watchlist",
            live: "https://my-movie-search-watchlist.netlify.app",
            description: "The Movie Search App is a user-friendly application that allows users to search for movies based on their titles. With its intuitive interface and seamless integration with a movie database API, users can easily find detailed information about their favorite films. The app displays movie titles, photos, release dates, overviews, and star ratings, providing users with a comprehensive view of each movie."
        },
        {
            id: 8,
            name: "Tenzies Game",
            image: TenziesGame,
            github: "https://github.com/dem199/Tenzies-game",
            live: "https://tenzies-game-optimistic.netlify.app",
            description: "Tenzies is a simple dice game where you try to get all 10 dice to show the same number. Roll the dice, hold onto the dice that are showing the same number, and roll the other dice again. The first player to get all 10 dice to show the same number wins! This game was created using React. It is a fun and challenging game that is perfect for a quick break or a long gaming session."
        },
        {
            id: 9,
            name: "Vanlife",
            image: VanLife,
            github: "https://github.com/dem199/vanlife-app",
            live: "https://dem199.github.io/vanlife-app/",
            description: "VanLife is an Airbnb-style web app that allows users to rent out travel vans for their next big road trips. With VanLife, you can find vans that are fully equipped with everything you need for a comfortable and enjoyable trip, including beds, kitchens, and bathrooms. You can also find vans that are customized to fit your specific needs, such as vans with off-road capabilities or vans that are pet-friendly."
        },
    ];

    return (
        <section name="project" className={`w-full pt-20 ${isDarkMode ? 'bg-[#150E28] text-white' : 'bg-[#F0F0F0] text-[#150E28]'}`}>
            <div className='max-w-[1000px] mx-auto p-4 md:pl-20 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                                <p className="text-4xl font-bold inline border-b-4 border-[#D434FE]">My Projects</p>
                                <p className='py-6'>
                                    All my projects include links to the code and live version.
                                </p>
                            </div>
                        )}
                    </TrackVisibility>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0'>
                    {data.map((item) => (
                        <div key={item.id} className={`shadow-md shadow-[#D434FE] px-2 rounded-lg`}>
                            <h1 className={`text-3xl font-bold my-5 text-${isDarkMode ? '#D434FE' : '#1A237E'}`}>{item.name}</h1>
                            <img src={item.image} alt={`${item.name} image`} className={`rounded-md my-5 duration-200 hover:scale-105`} />
                            <p className={`text-${isDarkMode ? '#D434FE' : '#1A237E'}`}>{item.description}</p>
                            <div className="flex items-center justify-center flex-wrap">
                                <a href={item.live} target="_blank" rel="noopener noreferrer">
                                    <button className={`w-full md:w-1/2 px-6 py-3 m-2 md:m-4 duration-200 hover:scale-110 focus:text-[#D434FE]`}>
                                        Demo
                                    </button>
                                </a>
                                <a href={item.github} target="_blank" rel="noopener noreferrer">
                                    <button className={`w-full md:w-1/2 px-6 py-3 m-2 md:m-4 duration-200 hover:scale-110 focus:text-[#D434FE]`}>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;


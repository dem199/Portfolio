import React from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { DarkModeProvider } from './DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      
        <NavBar />
        <Home />
        <SocialLinks />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      
    </DarkModeProvider>
  );
}

export default App;



import { useState } from "react";
import { useEffect } from "react";
import { motion } from "motion/react";

import Background from "./Background";
import Navbar from "./Navbar";
import HeroSection from "./Herosection";
import ClubHighlights from "./Clubhighlights";
import AboutClub from "./Aboutclub";
import Achievements from "./Achievements";
import TeamMembers from "./Teammembers";
import Gallery from "./Gallery";
import Sponsors from "./Sponsors";
import Footer from "./Footer";
import Contact from "./Contact";
import Herobackground from "./Herobackground";
import FloatingCricket from "./FloatingCricket";


export default function Home() {

 useEffect(() => {
    // Wait until the page is rendered, then scroll to top
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

    

  return (
    <>
  

        <Background />
    <div  className="relative z-10">

  
  


      
     <Navbar />
    <HeroSection />
    <ClubHighlights/>
    <AboutClub/>
    <Achievements/>
     <TeamMembers/>
     <Gallery/>
      <Contact />
     <Sponsors/>
  

   
    <Footer/>
    </div>
    
    </>
  );
}
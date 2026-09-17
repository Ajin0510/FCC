import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Background from "./Components/Background";
import IntroLoader from "./Components/IntroLoader";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Herosection";
import Clubhighlights from "./Components/Clubhighlights";
import AboutClub from "./Components/Aboutclub";
import Achievements from "./Components/Achievements";
import TeamMembers from "./Components/Teammembers";
import Gallery from "./Components/Gallery";
import Sponsors from "./Components/Sponsors";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Aboutpage from "./Components/Aboutpage";
import Team from "./Components/Team";
import Gallerypage from "./Components/Gallerypage";
import Contact from "./Components/Contact";
import ScoreMagic from "./Components/ScoreMagic";
import MatchList from "./Components/MatchList";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <BrowserRouter>
      <Background />

      {/* =====================================================
          INTRO LOADER
      ====================================================== */}

      {showIntro && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      <div className="relative z-10">
        <Routes>

          {/* HOME */}

          <Route path="/home" element={<Home />} />

          {/* OTHER PAGES */}

          <Route path="/navbar" element={<Navbar />} />

          <Route path="/hero" element={<Hero />} />

          <Route path="/club" element={<Clubhighlights />} />

          <Route path="/aboutclub" element={<AboutClub />} />

          <Route path="/achievements" element={<Achievements />} />

          <Route path="/teammembers" element={<TeamMembers />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/sponsors" element={<Sponsors />} />

          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="/footer" element={<Footer />} />

          <Route path="/aboutpage" element={<Aboutpage />} />

          <Route path="/team" element={<Team />} />

          <Route path="/gallerypage" element={<Gallerypage />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/scoremagic" element={<ScoreMagic />} />

          <Route path="/matches" element={<MatchList />} />

          {/* UNKNOWN URL → HOME */}

          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
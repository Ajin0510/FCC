import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

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

function RootLayout() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      <Background />

      {showIntro && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      <div className="relative z-10">
        <Outlet />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/navbar", element: <Navbar /> },
      { path: "/hero", element: <Hero /> },
      { path: "/club", element: <Clubhighlights /> },
      { path: "/aboutclub", element: <AboutClub /> },
      { path: "/achievements", element: <Achievements /> },
      { path: "/teammembers", element: <TeamMembers /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/sponsors", element: <Sponsors /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/footer", element: <Footer /> },
      { path: "/aboutpage", element: <Aboutpage /> },
      { path: "/team", element: <Team /> },
      { path: "/gallerypage", element: <Gallerypage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/scoremagic", element: <ScoreMagic /> },
      { path: "/matches", element: <MatchList /> },
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

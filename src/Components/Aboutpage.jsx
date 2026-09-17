import { motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaBullseye,
  FaEye,
  FaHistory,
  FaHandsHelping,
  FaCheckCircle,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

export default function Aboutpage() {
  return (
    <>
    <Navbar/>
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}

      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('/about-banner.jpg')",
        }}
      >
        <div className="text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold">
            About <span className="text-amber-400">FCC</span>
          </h1>

          <p className="text-gray-300 mt-5 text-lg">
            Building Champions Since 2018
          </p>

        </div>
      </section>

      {/* ================= CLUB INTRODUCTION ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <img
                src="/team.jpg"
                className="rounded-3xl shadow-2xl"
              />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <span className="text-amber-400 uppercase tracking-[4px]">
                Club Introduction
              </span>

              <h2 className="text-4xl font-bold mt-3">
                Friends Cricket Club
              </h2>

              <p className="text-gray-400 mt-6 leading-8">
                Friends Cricket Club (FCC) was established in 2018 with the aim
                of bringing together cricket lovers under one family. The club
                encourages sportsmanship, discipline, teamwork and social
                responsibility while creating opportunities for young cricketers.
              </p>

              <p className="text-gray-400 mt-5 leading-8">
                Over the years, FCC has participated in numerous tournaments,
                organized cricket events, and actively contributed to community
                welfare through charity and social service programs.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= OUR STORY ================= */}

      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Our Story
            </h2>

            <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 rounded-3xl p-8">

              <FaHistory className="text-5xl text-amber-400 mb-5"/>

              <h3 className="text-2xl font-bold">
                Started in 2018
              </h3>

              <p className="text-gray-400 mt-4">
                FCC began with a small group of passionate cricket lovers.
              </p>

            </div>

            <div className="bg-white/5 rounded-3xl p-8">

              <FaUsers className="text-5xl text-amber-400 mb-5"/>

              <h3 className="text-2xl font-bold">
                Growing Family
              </h3>

              <p className="text-gray-400 mt-4">
                Today FCC has more than 50 active members.
              </p>

            </div>

            <div className="bg-white/5 rounded-3xl p-8">

              <FaTrophy className="text-5xl text-amber-400 mb-5"/>

              <h3 className="text-2xl font-bold">
                Success
              </h3>

              <p className="text-gray-400 mt-4">
                Winners and runners-up in several local tournaments.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= VISION & MISSION ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/5 rounded-3xl p-10">

              <FaEye className="text-5xl text-amber-400 mb-6"/>

              <h3 className="text-3xl font-bold">
                Vision
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                To become one of the most respected cricket clubs by inspiring
                young players and promoting sportsmanship in society.
              </p>

            </div>

            <div className="bg-white/5 rounded-3xl p-10">

              <FaBullseye className="text-5xl text-amber-400 mb-6"/>

              <h3 className="text-3xl font-bold">
                Mission
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                Develop talented cricketers through professional training,
                teamwork, discipline and community involvement.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= OBJECTIVES ================= */}

      <section className="bg-zinc-950 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Objectives
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Promote cricket among youth",
              "Conduct tournaments",
              "Develop leadership",
              "Improve physical fitness",
              "Encourage teamwork",
              "Support local community",
            ].map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4 bg-white/5 rounded-xl p-5"
              >

                <FaCheckCircle className="text-amber-400 text-xl"/>

                <p>{item}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SOCIAL ACTIVITIES ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="text-amber-400 uppercase">
                Social Activities
              </span>

              <h2 className="text-5xl font-bold mt-4">
                Serving Society
              </h2>

              <p className="text-gray-400 mt-6 leading-8">
                FCC believes that sports and social responsibility go hand in
                hand. The club regularly organizes charity activities,
                distributes food, supports poor families, and participates in
                awareness programs.
              </p>

            </div>

            <img
              src="/social.jpg"
              className="rounded-3xl"
            />

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE FCC ================= */}

      <section className="bg-zinc-950 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Why Choose FCC?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Professional Coaching",
              "Friendly Environment",
              "Tournament Experience",
              "Community Activities",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/5 rounded-3xl p-8 text-center hover:border hover:border-amber-400 transition"
              >

                <FaHandsHelping className="text-5xl text-amber-400 mx-auto mb-5"/>

                <h3 className="text-xl font-bold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
            <Footer/>
    </div>
    </>
  );
}
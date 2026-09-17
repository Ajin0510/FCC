import { motion } from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Team() {
  const executiveTeam = [
    {
      name: "Ajin B.K",
      role: "President",
      image: "/president.jpg",
    },
    {
      name: "Jerin D.R",
      role: "Secretary",
      image: "/secretary.jpg",
    },
    {
      name: "Berlin Joy",
      role: "Treasurer",
      image: "/treasurer.jpg",
    },
  ];
  const chairMembers = [
  {
    name: "Andrew Simon",
    role: "Chair Member",
    image: "/chair1.jpg",
  },
  {
    name: "Nithin Sathya",
    role: "Chair Member",
    image: "/chair2.jpg",
  },
  {
    name: "Sundar Singh S.B.",
    role: "Chair Member",
    image: "/chair3.jpg",
  },
  {
    name: "John Cross",
    role: "Chair Member",
    image: "/chair4.jpg",
  },
  {
    name: "Elgin",
    role: "Chair Member",
    image: "/chair5.jpg",
  },
  {
    name: "Prem Sundar",
    role: "Chair Member",
    image: "/chair6.jpg",
  },
];
const captains = [
  {
    name: "Captain Name",
    role: "Captain",
    image: "/eee.jpg",
  },
  {
    name: "Vice Captain Name",
    role: "Vice Captain",
    image: "/eee.jpg",
  },
];
const playerCategories = [
  {
    title: "Batsmen",
    players: [
      { name: "Player 1", image: "/player1.jpg" },
      { name: "Player 2", image: "/player2.jpg" },
      { name: "Player 3", image: "/player3.jpg" },
      { name: "Player 4", image: "/player4.jpg" },
    ],
  },
  {
    title: "Bowlers",
    players: [
      { name: "Player 5", image: "/player5.jpg" },
      { name: "Player 6", image: "/player6.jpg" },
      { name: "Player 7", image: "/player7.jpg" },
      { name: "Player 8", image: "/player8.jpg" },
    ],
  },
  {
    title: "All Rounders",
    players: [
      { name: "Player 9", image: "/player9.jpg" },
      { name: "Player 10", image: "/player10.jpg" },
      { name: "Player 11", image: "/player11.jpg" },
      { name: "Player 12", image: "/player12.jpg" },
    ],
  },
  {
    title: "Wicket Keeper",
    players: [
      { name: "Player 13", image: "/player13.jpg" },
      { name: "Player 14", image: "/player14.jpg" },
    ],
  },
];


  return (
    <>
      <Navbar />

      <div className=" text-white">

        {/* =====================================
                HERO SECTION
        ====================================== */}

        <section
          className="relative h-[65vh] flex items-center justify-center  "
         
        >
          <div className="text-center px-6">

            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-amber-400 uppercase tracking-[6px] font-semibold"
            >
              Friends Cricket Club
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold mt-5"
            >
              Meet Our Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto"
            >
              Passionate leaders dedicated to inspiring players,
              promoting teamwork, and building a strong cricket family.
            </motion.p>

          </div>
        </section>

        {/* =====================================
           EXECUTIVE COMMITTEE
        ====================================== */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <span className="text-amber-400 uppercase tracking-[5px]">
                Leadership
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Executive Committee
              </h2>

              <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-5"></div>

              <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                Our executive committee works tirelessly to manage
                club activities, organize tournaments, and guide
                Friends Cricket Club toward success.
              </p>

            </div> 

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {executiveTeam.map((member, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .2,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                  bg-white/5
                  backdrop-blur-xl
                  rounded-3xl
                  border
                  border-white/10
                  hover:border-amber-400
                  transition-all
                  duration-500
                  p-8
                  text-center
                  "
                >

                  {/* Profile Image */}

                  <div className="relative w-40 h-40 mx-auto">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="
                      w-full
                      h-full
                      rounded-full
                      object-cover
                      border-4
                      border-amber-400
                      "
                    />

                  </div>

                  {/* Name */}

                  <h3 className="text-2xl font-bold mt-6">
                    {member.name}
                  </h3>

                  {/* Role */}

                  <p className="text-amber-400 font-semibold mt-2">
                    {member.role}
                  </p>

                  {/* Divider */}

                  <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto my-5"></div>

                  {/* Description */}

                  <p className="text-gray-400 leading-7">
                    Leading Friends Cricket Club with dedication,
                    commitment, and a passion for developing young
                    cricket talent.
                  </p>

                  {/* Social Icons */}

                  <div className="flex justify-center gap-4 mt-8">

                    <a
                      href="#"
                      className="
                      w-11
                      h-11
                      rounded-full
                      bg-white/10
                      hover:bg-amber-400
                      hover:text-black
                      flex
                      items-center
                      justify-center
                      transition
                      "
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="#"
                      className="
                      w-11
                      h-11
                      rounded-full
                      bg-white/10
                      hover:bg-amber-400
                      hover:text-black
                      flex
                      items-center
                      justify-center
                      transition
                      "
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="#"
                      className="
                      w-11
                      h-11
                      rounded-full
                      bg-white/10
                      hover:bg-amber-400
                      hover:text-black
                      flex
                      items-center
                      justify-center
                      transition
                      "
                    >
                      <FaPhoneAlt />
                    </a>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================
        CHAIR MEMBERS
===================================== */}

<section className="py-24 bg-zinc-950">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center mb-16">

      <span className="text-amber-400 uppercase tracking-[5px]">
        Leadership Team
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Chair Members
      </h2>

      <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-5"></div>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
        Our chair members provide valuable guidance, leadership,
        and support to strengthen Friends Cricket Club on and off
        the field.
      </p>

    </div>

    {/* Grid */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {chairMembers.map((member, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
            delay: index * .15,
          }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="
          group
          bg-white/5
          backdrop-blur-xl
          rounded-3xl
          border
          border-white/10
          hover:border-amber-400
          transition-all
          duration-500
          p-8
          text-center
          "
        >

          {/* Image */}

          <div className="relative w-36 h-36 mx-auto">

            <img
              src={member.image}
              alt={member.name}
              className="
              w-full
              h-full
              rounded-full
              object-cover
              border-4
              border-amber-400
              transition
              duration-500
              group-hover:scale-105
              "
            />

          </div>

          {/* Name */}

          <h3 className="text-2xl font-bold mt-6">
            {member.name}
          </h3>

          {/* Role */}

          <p className="text-amber-400 mt-2 font-semibold">
            {member.role}
          </p>

          {/* Divider */}

          <div className="w-14 h-1 bg-amber-400 rounded-full mx-auto my-5"></div>

          {/* Description */}

          <p className="text-gray-400 leading-7">
            Supporting FCC through leadership,
            planning, teamwork and commitment
            towards cricket excellence.
          </p>

          {/* Social Icons */}

          <div className="flex justify-center gap-4 mt-8">

            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              hover:bg-amber-400
              hover:text-black
              flex
              items-center
              justify-center
              transition
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              hover:bg-amber-400
              hover:text-black
              flex
              items-center
              justify-center
              transition
              "
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              hover:bg-amber-400
              hover:text-black
              flex
              items-center
              justify-center
              transition
              "
            >
              <FaPhoneAlt />
            </a>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* =====================================
      CAPTAIN & VICE CAPTAIN
====================================== */}

{/* =====================================
      CAPTAIN & VICE CAPTAIN
===================================== */}

<section className="py-24">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center mb-16">

      <span className="text-amber-400 uppercase tracking-[5px]">
        Team Leadership
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Captain & Vice Captain
      </h2>

      <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-5"></div>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
        The backbone of our playing squad, leading with confidence,
        teamwork and dedication on every match day.
      </p>

    </div>

    {/* Cards */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {captains.map((member, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-400 transition-all duration-500 p-8 text-center"
        >

          <div className="w-44 h-44 mx-auto">

            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full rounded-full object-cover border-4 border-amber-400"
            />

          </div>

          <h3 className="text-3xl font-bold mt-6">
            {member.name}
          </h3>

          <p className="text-amber-400 font-semibold mt-2">
            {member.role}
          </p>

          <div className="w-20 h-1 bg-amber-400 rounded-full mx-auto my-5"></div>

          <p className="text-gray-400 leading-7">
            Providing leadership, motivating teammates,
            and representing Friends Cricket Club with pride.
          </p>

          <div className="flex justify-center gap-4 mt-8">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
            >
              <FaPhoneAlt />
            </a>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* =====================================
      PLAYERS SECTION
===================================== */}

<section className="py-24 bg-black">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <span className="text-amber-400 uppercase tracking-[5px]">
        Playing Squad
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Our Players
      </h2>

      <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-5"></div>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
        Meet the talented players representing Friends Cricket Club
        with passion, dedication and sportsmanship.
      </p>

    </div>

    {playerCategories.map((category, categoryIndex) => (

      <div key={categoryIndex} className="mb-20">

        <h3 className="text-3xl font-bold text-amber-400 mb-10 text-center">
          {category.title}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {category.players.map((player, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-400 p-6 text-center transition-all duration-500"
            >

              <div className="w-32 h-32 mx-auto">

                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full rounded-full object-cover border-4 border-amber-400"
                />

              </div>

              <h4 className="text-xl font-semibold mt-5">
                {player.name}
              </h4>

              <p className="text-gray-400 mt-2">
                {category.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    ))}

  </div>

</section>

{/* =====================================
      JOIN OUR TEAM CTA
===================================== */}

<section className="relative py-28 overflow-hidden">

  {/* Background Image */}

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,.82), rgba(0,0,0,.82)), url('/join-team.jpg')",
    }}
  ></div>

  {/* Content */}

  <div className="relative max-w-6xl mx-auto px-6 text-center">

    <motion.span
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-amber-400 uppercase tracking-[6px] font-semibold"
    >
      Become a Member
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-extrabold mt-6"
    >
      Join Friends Cricket Club
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="text-gray-300 text-lg max-w-3xl mx-auto mt-8 leading-8"
    >
      We are always looking for passionate cricketers and dedicated
      members to become part of our growing cricket family.
      Whether you're a batsman, bowler, all-rounder or wicket keeper,
      there's a place for you at Friends Cricket Club.
    </motion.p>

    {/* Buttons */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
    >

      <a
        href="/registration"
        className="
        px-10
        py-4
        bg-amber-400
        text-black
        rounded-full
        font-bold
        hover:bg-white
        transition-all
        duration-300
        shadow-lg
        hover:scale-105
        "
      >
        Join Now
      </a>

      <a
        href="/contact"
        className="
        px-10
        py-4
        border-2
        border-amber-400
        rounded-full
        text-white
        font-bold
        hover:bg-amber-400
        hover:text-black
        transition-all
        duration-300
        hover:scale-105
        "
      >
        Contact Us
      </a>

    </motion.div>

  </div>

</section>



        

      </div>

      <Footer/>
    </>
  );
}
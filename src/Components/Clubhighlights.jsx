import { motion } from "motion/react";

import {
  FaTrophy,
  FaUsers,
  FaHandsHelping,
  FaBaseballBall,
  FaMoon,
  FaCalendarAlt,
  FaAward
} from "react-icons/fa";

export default function ClubHighlights() {
  const highlights = [
    {
      icon: <FaTrophy className="text-4xl text-amber-400" />,
      title: "Championship Success" ,
      description:
        "Proud winners of local tournaments and consistent performers in competitive cricket.",
    },
    {
      icon: <FaUsers className="text-4xl text-amber-400" />,
      title: "50+ Active Members",
      description:
        "A passionate cricket family committed to teamwork, discipline, and sportsmanship.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-amber-400" />,
      title: "Community Service",
      description:
        "Conducting charity initiatives and supporting people in need through social activities.",
    },
    {
      icon: <FaBaseballBall className="text-4xl text-amber-400" />,
      title: "Regular Practice",
      description:
        "Weekly practice sessions to improve fitness, teamwork, and cricket skills.",
    },
    {
     icon: <FaAward className="text-4xl text-yellow-500" />,
      title: "My Bharat Activities",
      description:
        " our club actively participates in social service activities that create a  impact on society.",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-amber-400" />,
      title: "Established 2018",
      description:
        "Building a strong cricket culture and inspiring young talent since 2018.",
    },
  ];
  const text = "Club Highlights";

  return (
    <section className="relative overflow-hidden  py-20">

    


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">


        {/* =====================================================
            STATIC HEADING
            No animation
        ====================================================== */}

        <div className="mb-14 text-center ">

          {/* TITLE */}


 <motion.h2
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center text-3xl md:text-5xl font-extrabold uppercase font-['Bebas Neue'] tracking-wider "
>
  <motion.span
    className="inline-block font-['Space Grotesk '] bg-[linear-gradient(90deg,#FFD700,#FFF,#FFD700)] bg-[length:200%_100%] bg-clip-text text-transparent"
    animate={{
      backgroundPosition: ["0% 50%", "200% 50%"],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    CLUB HIGHLIGHTS
  </motion.span>
</motion.h2>

          {/* UNDERLINE */}

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-amber-400"></div>


          {/* DESCRIPTION */}

          <p className="mt-6 text-gray-200 font-['Poppins'] font-Regular">
            Discover what makes Friends Cricket Club special
          </p>

        </div>


        {/* =====================================================
            CARDS
            Scroll animation + hover effects
        ====================================================== */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {highlights.map((item, index) => (

            <motion.div
              key={index}

              /* =========================
                 SCROLL ANIMATION
              ========================== */

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}


              /* =========================
                 CARD HOVER
              ========================== */

              whileHover={{
                y: -10,
                scale: 1.03,
              }}


              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                p-8
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-amber-400
                hover:bg-white/20
              "
            >


              {/* =================================================
                  HOVER GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-amber-400/20
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />


              {/* =================================================
                  SHINE EFFECT
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[-100%]
                  top-0
                  h-full
                  w-1/2
                  skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[150%]
                "
              />


              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="relative z-10">


                {/* =========================
                    ICON
                ========================== */}

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="mb-6 origin-left"
                >
                  {item.icon}
                </motion.div>


                {/* =========================
                    CARD TITLE
                ========================== */}

                <h3
                  className="
                    mb-3
                    text-2xl
                    font-bold
                    text-white
                    transition-colors
                    duration-500
                    group-hover:text-amber-400
                    font-['Bebas Neue'] 
                  "
                >
                  {item.title}
                </h3>


                {/* =========================
                    DESCRIPTION
                ========================== */}

                <p
                  className="
                    leading-7
                    text-gray-200
                    transition-colors
                    duration-500
                    group-hover:text-white
                    font-['Poppins'] 
                    font-Regular
                  "
                >
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
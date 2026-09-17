import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaImage,
  FaPhone,
  FaTrophy,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/home" },
    { name: "About Club", icon: <FaUsers />, path: "/about" },
    { name: "Team Members", icon: <FaUsers />, path: "/team" },
    { name: "Gallery", icon: <FaImage />, path: "/gallery" },
    { name: "Contact", icon: <FaPhone />, path: "/contact" },
  ];

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-white/10
          bg-black/20
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-5
            md:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link to="/home" className="flex items-center gap-3">
            <motion.img
              src="/eee.png"
              alt="Friends Cricket Club"
              whileHover={{
                rotate: 5,
                scale: 1.08,
              }}
              transition={{ duration: 0.3 }}
              className="
                h-12
                w-12
                rounded-full
                object-cover
                md:h-14
                md:w-14
              "
            />

            <div className="hidden sm:block">
              <h1
                className="
                  font-['Bebas_Neue']
                  text-xl
                  tracking-wider
                  text-white
                  md:text-2xl
                "
              >
                FRIENDS CRICKET CLUB
              </h1>

              <p
                className="
                  font-['Poppins']
                  text-[19px]
                  uppercase
                  tracking-[4px]
                  text-amber-400
                  md:text-[10px]
                "
              >
                Play With Passion
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-8 lg:flex">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <Link
                  to={item.path}
                  className="
                    group
                    relative
                    font-['Poppins']
                    text-sm
                    font-medium
                    text-gray-200
                    transition-colors
                    duration-300
                    hover:text-amber-400
                  "
                >
                  {item.name}

                  {/* underline */}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-amber-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              SCORE MAGIC
          ================================================== */}

          <div className="hidden lg:block">
            <Link to="/ScoreMagic">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-amber-400
                  px-5
                  py-3
                  font-['Poppins']
                  text-sm
                  font-bold
                  text-black
                  shadow-lg
                  shadow-amber-400/20
                  transition
                  hover:bg-amber-500
                "
              >
                <FaTrophy />

                SCORE MAGIC
              </motion.div>
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(true)}
            className="
              rounded-xl
              bg-amber-400
              p-3
              text-black
              transition
              hover:bg-amber-500
              lg:hidden
            "
          >
            <FaBars className="text-xl" />
          </motion.button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[999]
              overflow-hidden
              bg-black/95
              backdrop-blur-2xl
            "
          >
            {/* =================================================
                BACKGROUND GLOW
            ================================================== */}

            <motion.div
              className="
                pointer-events-none
                absolute
                -left-40
                -top-40
                h-[500px]
                w-[500px]
                rounded-full
                bg-amber-400/20
                blur-[150px]
              "
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="
                pointer-events-none
                absolute
                -bottom-40
                -right-40
                h-[500px]
                w-[500px]
                rounded-full
                bg-orange-500/10
                blur-[150px]
              "
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            />

            {/* =================================================
                CLOSE BUTTON
            ================================================== */}

            <button
              onClick={() => setMenuOpen(false)}
              className="
                absolute
                right-6
                top-6
                z-50
                rounded-full
                bg-amber-400
                p-4
                text-black
              "
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* =================================================
                MENU
            ================================================== */}

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  w-full
                  max-w-xl
                "
              >
                <p
                  className="
                    mb-3
                    text-center
                    font-['Poppins']
                    text-xl
                    uppercase
                    tracking-[5px]
                    text-amber-400
                  "
                >
                  Friends Cricket Club
                </p>

                <h2
                  className="
                    mb-10
                    text-center
                    font-['Bebas_Neue']
                    text-6xl
                    tracking-wider
                    text-white
                  "
                >
                  
                </h2>

                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-white/10
                          py-5
                          font-['Poppins']
                          text-xl
                          font-medium
                          text-white
                          transition
                          hover:text-amber-400
                        "
                      >
                        <div className="flex items-center gap-5">
                          <span className="text-amber-400">
                            {item.icon}
                          </span>

                          {item.name}
                        </div>

                        <span
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-2
                          "
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* SCORE MAGIC */}

                <Link
                  to="/ScoreMagic"
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="
                      mt-10
                      flex
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-amber-400
                      px-6
                      py-4
                      font-['Poppins']
                      font-bold
                      text-black
                    "
                  >
                    <FaTrophy />

                    OPEN SCORE MAGIC
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* FOOTER */}

            <div
              className="
                absolute
                bottom-5
                left-0
                w-full
                text-center
                font-['Poppins']
                text-xs
                tracking-widest
                text-gray-500
              "
            >
              FRIENDS CRICKET CLUB © {new Date().getFullYear()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
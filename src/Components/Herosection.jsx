import { motion } from "motion/react";

export default function Herosection() {
  const statistics = [
    {
      number: "50+",
      label: "Members",
    },
    {
      number: "120+",
      label: "Matches",
    },
    {
      number: "8+",
      label: "Tournaments",
    },
    {
      number: "2",
      label: "Championships",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        min-h-[560px]
        overflow-hidden
        bg-black

        sm:min-h-[600px]

        md:min-h-screen

        lg:min-h-screen

        xl:min-h-screen

        2xl:min-h-screen
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden bg-black">

        {/* =================================================
            BLURRED BACKGROUND
        ================================================== */}

        <motion.img
          src="/herofinal.png"
          alt=""
          initial={{
            scale: 1.08,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: [1.08, 1.15, 1.08],
            x: [-10, 10, -10],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-50
            blur-xl
          "
        />

        {/* =================================================
            MAIN HERO IMAGE

            ALL SCREEN SIZES:
            - Zoom animation enabled
            - Mobile/tablet: object-contain
            - Desktop: object-cover
        ================================================== */}

        <motion.img
          src="/herofinal.png"
          alt="Friends Cricket Club players"
          initial={{
            scale: 1.01,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: [1.01, 1.035, 1.01],
            x: [0, -2, 0, 2, 0],
            y: [0, -1, 0, 1, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-contain
            object-center

            min-[1280px]:object-cover
          "
        />

        {/* =================================================
            DESKTOP ZOOM

            Stronger zoom for large screens.
        ================================================== */}

        <motion.img
          src="/herofinal.png"
          alt=""
          initial={{
            scale: 1.04,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: [1.04, 1.08, 1.04],
            x: [0, -4, 0, 4, 0],
            y: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
            hidden
            h-full
            w-full
            object-cover

            min-[1280px]:block
          "
        />

        {/* =================================================
            DARK OVERLAY
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-black/20
          "
        />

        {/* =================================================
            TOP GRADIENT
        ================================================== */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[55%]
            bg-gradient-to-b
            from-black/80
            via-black/30
            to-transparent
          "
        />

        {/* =================================================
            BOTTOM GRADIENT
        ================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[45%]
            bg-gradient-to-t
            from-black
            via-black/50
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          AMBER GLOW
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-amber-400/10
          blur-[130px]
        "
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          min-h-[560px]
          w-full

          sm:min-h-[600px]

          md:min-h-screen
        "
      >

        {/* =================================================
            TITLE
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-24
            w-full
            -translate-x-1/2
            px-3
            text-center

            sm:top-28
            sm:px-4

            md:top-32

            lg:top-32
          "
        >

          {/* ESTABLISHED 2018 */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex
              items-center
              justify-center
              gap-2

              sm:gap-3

              md:gap-5
            "
          >
            {/* LEFT LINE */}

            <div
              className="
                h-[2px]
                w-6
                shrink-0
                bg-amber-400

                sm:w-8

                md:w-16
              "
            />

            {/* TEXT */}

            <p
              className="
                whitespace-nowrap
                font-['Poppins']
                text-[8px]
                font-semibold
                uppercase
                tracking-[2px]
                text-amber-400

                sm:text-[10px]
                sm:tracking-[3px]

                md:text-sm
                md:tracking-[5px]
              "
            >
              Established 2018
            </p>

            {/* RIGHT LINE */}

            <div
              className="
                h-[2px]
                w-6
                shrink-0
                bg-amber-400

                sm:w-8

                md:w-16
              "
            />
          </motion.div>

          {/* =================================================
              MAIN TITLE
          ================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              mt-3
              whitespace-nowrap
              font-['Bebas_Neue']
              text-[37px]
              uppercase
              leading-none
              tracking-wider
              text-white

              sm:text-4xl

              md:text-6xl

              lg:text-7xl

              xl:text-8xl
            "
          >
            FRIENDS{" "}
            <span className="text-amber-400">
              CRICKET
            </span>{" "}
            CLUB
          </motion.h1>

          {/* GOLD UNDERLINE */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 100,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="
              mx-auto
              mt-3
              h-[3px]
              rounded-full
              bg-amber-400
              shadow-lg
              shadow-amber-400/30

              sm:mt-4
            "
          />
        </div>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-0
            z-20
            w-full
            px-2

            sm:bottom-7
            sm:px-4

            md:bottom-10
            md:px-8
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="
              mx-auto
              grid
              w-full
              max-w-5xl
              grid-cols-4
              gap-0
            "
          >

            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.1 + index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  flex
                  min-w-0
                  flex-col
                  items-center
                  border-r
                  border-white/20
                  px-1
                  text-center
                  last:border-r-0
                "
              >

                {/* NUMBER */}

                <h2
                  className="
                    font-['Bebas_Neue']
                    text-xl
                    leading-none
                    tracking-wider
                    text-white

                    sm:text-2xl

                    md:text-4xl

                    lg:text-5xl
                  "
                >
                  {stat.number}
                </h2>

                {/* LABEL */}

                <p
                  className="
                    mt-1
                    whitespace-nowrap
                    font-['Poppins']
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.5px]
                    text-gray-300

                    sm:text-[8px]
                    sm:tracking-[1px]

                    md:text-[10px]
                    md:tracking-[2px]
                  "
                >
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GOLD LINE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-amber-400
          to-transparent
        "
      />
    </section>
  );
}
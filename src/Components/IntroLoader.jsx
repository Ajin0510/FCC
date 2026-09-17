import { useEffect } from "react";
import { motion } from "motion/react";

export default function IntroLoader({ onComplete }) {
  useEffect(() => {
    const audio = new Audio("/sounds/fcc-intro.mp3");

    audio.volume = 0.45;

    // Play intro sound automatically
    audio.play().catch(() => {
      // Browser may block autoplay.
      // Intro will still continue normally.
    });

    // Finish intro after 3.5 seconds
    const timer = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;

      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
      "
    >
      {/* Background glow */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-amber-400/10
          blur-[150px]
        "
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* FCC LOGO */}

        <motion.img
          src="/eee.png"
          alt="Friends Cricket Club"
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            h-24
            w-24
            rounded-full
            object-cover
            md:h-32
            md:w-32
          "
        />

        {/* ESTABLISHED */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className="
            mt-6
            font-['Poppins']
            text-[10px]
            font-semibold
            uppercase
            tracking-[5px]
            text-amber-400
            md:text-xs
          "
        >
          Established 2018
        </motion.p>

        {/* CLUB NAME */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.9,
          }}
          className="
            mt-3
            px-5
            font-['Bebas_Neue']
            text-4xl
            uppercase
            leading-none
            tracking-[0.12em]
            text-white
            sm:text-5xl
            md:text-7xl
          "
        >
          FRIENDS CRICKET CLUB
        </motion.h1>

        {/* GOLD LINE */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: 110,
          }}
          transition={{
            delay: 1.4,
            duration: 0.7,
          }}
          className="
            mt-5
            h-[2px]
            rounded-full
            bg-amber-400
          "
        />

        {/* ENTERING */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.6,
          }}
          className="
            mt-6
            font-['Poppins']
            text-[9px]
            uppercase
            tracking-[4px]
            text-gray-500
          "
        >
          Entering The Club
        </motion.p>

        {/* LOADING BAR */}

        <div
          className="
            mt-4
            h-[2px]
            w-32
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              duration: 3.2,
              ease: "linear",
            }}
            className="
              h-full
              w-full
              bg-amber-400
            "
          />
        </div>

      </div>
    </motion.div>
  );
}
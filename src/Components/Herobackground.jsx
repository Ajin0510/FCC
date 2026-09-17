import { motion } from "motion/react";

export default function Herobackground() {
  return (
    <>
      {/* Stadium Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/plain.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Aurora Glow */}
      <motion.div
        className="absolute -left-60 top-20 w-[700px] h-[700px] rounded-full bg-amber-400/10 blur-[180px]"
        animate={{
          x: [-100, 200, -100],
          y: [-30, 60, -30],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-60 bottom-10 w-[650px] h-[650px] rounded-full bg-orange-500/10 blur-[180px]"
        animate={{
          x: [100, -200, 100],
          y: [50, -80, 50],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left Floodlight */}
      <motion.div
        className="
          absolute
          top-[-400px]
          left-[-250px]
          w-[900px]
          h-[900px]
          bg-gradient-to-b
          from-amber-300/20
          via-transparent
          to-transparent
          rotate-[25deg]
          blur-3xl
        "
        animate={{
          rotate: [18, 35, 18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Floodlight */}
      <motion.div
        className="
          absolute
          top-[-400px]
          right-[-250px]
          w-[900px]
          h-[900px]
          bg-gradient-to-b
          from-white/15
          via-transparent
          to-transparent
          -rotate-[25deg]
          blur-3xl
        "
        animate={{
          rotate: [-18, -35, -18],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving Spotlight */}
      <motion.div
        className="
          absolute
          top-0
          left-[-30%]
          w-[45%]
          h-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          blur-2xl
          skew-x-[-25deg]
        "
        animate={{
          x: ["0%", "260%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dust Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30"
          style={{
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, -180],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Bottom Stadium Glow */}
      <motion.div
        className="
          absolute
          bottom-[-250px]
          left-1/2
          -translate-x-1/2
          w-[1400px]
          h-[500px]
          rounded-full
          bg-amber-400/10
          blur-[170px]
        "
        animate={{
          opacity: [.2, .45, .2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </>
  );
}
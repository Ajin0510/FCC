import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">

      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0b0b0b] to-[#050505]" />

      {/* Beam 1 */}
      <motion.div
        className="
          absolute
          -top-[500px]
          left-[-250px]
          h-[2200px]
          w-[220px]
          bg-amber-300/15
          blur-[80px]
          rotate-[25deg]
        "
        animate={{
          x: [-300, 1900, -300],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Beam 2 */}
      <motion.div
        className="
          absolute
          -top-[500px]
          right-[-250px]
          h-[2200px]
          w-[220px]
          bg-orange-400/15
          blur-[90px]
          -rotate-[25deg]
        "
        animate={{
          x: [300, -1900, 300],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Beam 3 */}
      <motion.div
        className="
          absolute
          -top-[500px]
          left-[45%]
          h-[2200px]
          w-[180px]
          bg-white/8
          blur-[100px]
          rotate-[10deg]
        "
        animate={{
          x: [-800, 800, -800],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stadium Glow Left */}
      <motion.div
        className="
          absolute
          left-[-200px]
          top-[20%]
          w-[500px]
          h-[500px]
          rounded-full
          bg-amber-400/10
          blur-[180px]
        "
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      {/* Stadium Glow Right */}
      <motion.div
        className="
          absolute
          right-[-200px]
          bottom-[10%]
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-500/10
          blur-[180px]
        "
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      />

      {/* Dust Particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-amber-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";


export default function AboutClub() {
  return (
  <section className="relative  py-20 overflow-hidden">



      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-white uppercase tracking-widest tracking-[5px] font-['Poppins'] font-SemiBold">
            About Us
          </span>

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
    FRIENDS CRICKET CLUB
  </motion.span>
</motion.h2>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto font-['Poppins'] 
                    font-Regular">
            A passionate cricket club dedicated to teamwork,sportsmanship,
            community service since 2018
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
        <motion.div
 initial={{
    opacity:0,
    x:-100,
    rotate:-3,
    scale:.9
}}

whileInView={{
    opacity:1,
    x:0,
    rotate:0,
    scale:1
}}
>
  <img
    src="/333.png"
    alt="Friends Cricket Club"
    className="w-full rounded-3xl object-cover bg-transparent"
  />
</motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-3xl font-bold text-white mb-6 font-['Bebas Neue'] 
                    ">
              Building Champions On and Off the Field
            </h3>

            <p className="text-gray-400 leading-8 mb-8 text-justify font-['Poppins'] font-Regular">
              Friends Cricket Club was established in 2018 with a vision to
              promote cricket, teamwork, discipline, and friendship. The club
              actively participates in tournaments, organizes practice sessions,
              and contributes to community welfare through social activities.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-amber-400 text-xl" />
                <span className="text-white">Established in 2018</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-amber-400 text-xl" />
                <span className="text-white">50+ Active Members</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-amber-400 text-xl" />
                <span className="text-white">Tournament Winners</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-amber-400 text-xl" />
                <span className="text-white">Community Service Activities</span>
              </div>

            </div>

            <button className="mt-10 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition">
              Learn More
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
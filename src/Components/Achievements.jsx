import { motion } from "motion/react";
import {
  FaTrophy,
  FaMedal,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-5xl text-amber-400" />,
      title: "Tournament Champions",
      year: "2023",
      description:
        "Won the Manali Team 6 Over Cricket Tournament with an outstanding team performance.",
    },
    {
      icon: <FaMedal className="text-5xl text-amber-400" />,
      title: "Runner-Up",
      year: "2022",
      description:
        "Finished as runners-up in the 8 Team Test Cricket Tournament .",
    },
    {
      icon: <FaUsers className="text-5xl text-amber-400" />,
      title: "Tournament Organizers",
      year: "2024",
      description:
        "Successfully organized 8-team and 16-team cricket tournaments and My Bharat Sports Activities.",
    },
    {
      icon: <FaHandsHelping className="text-5xl text-amber-400" />,
      title: "Social Activities",
      year: "Since 2018",
      description:
        "Conducted charity programs, food distribution, and community service activities.",
    },
  ];

  return (
   <section className="relative  py-20 overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-white uppercase tracking-[5px] font-['Poppins']  font-SemiBold">
            Achievements
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
    OUR PROUD MOMENTS
  </motion.span>
</motion.h2>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto font-['Poppins'] font-Regular">
            Every trophy, tournament, and community initiative reflects our passion
            for cricket and commitment to excellence
          </p>
        </div>


        

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">




          {achievements.map((item, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: index * 0.15,
  }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-amber-400 hover:bg-white/20"
>
  {/* Hover Glow */}
  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

  {/* Shine Effect */}
  <div className="pointer-events-none absolute left-[-100%] top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[150%]" />

  <div className="relative z-10">
    <div className="mb-6">{item.icon}</div>

    <span className="text-amber-400 font-semibold">
      {item.year}
    </span>

    <h3 className="text-2xl text-white font-bold mt-2  font-['Bebas Neue'] ">
      {item.title}
    </h3>

    <p className="text-gray-400 mt-4 leading-7 font-['Poppins'] font-Regular">
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
import { motion } from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

export default function TeamMembers() {
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

  const MemberCard = ({ member, index }) => (
    <motion.div
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
      className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-amber-400 hover:bg-white/10 transition-all duration-500"
    >
      {/* Profile */}
      <div className="relative w-36 h-36 mx-auto">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-full object-cover border-4 border-amber-400 shadow-xl"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold text-white mt-6">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-amber-400 mt-2 font-semibold">
        {member.role}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
        >
          <FaPhoneAlt />
        </a>

      </div>
    </motion.div>
  );

  return (
    <section className="relative  py-20 overflow-hidden">

      {/* Animated Glow */}
      <motion.div
        className="
          absolute
          z-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-amber-400/10
          blur-[150px]
        "
        animate={{
          x: [-200, 200, -100, -200],
          y: [-100, 150, 300, -100],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Second Animated Glow */}
      <motion.div
        className="
          absolute
          right-[-150px]
          bottom-[-150px]
          z-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-orange-500/10
          blur-[150px]
        "
        animate={{
          x: [100, -150, 100],
          y: [100, -200, 100],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-white uppercase tracking-[5px] font-['Poppins']  font-SemiBold">
            Leadership 
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
    MEET OUR TEAM
  </motion.span>
</motion.h2>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto font-['Poppins'] font-Regular">
            Meet the passionate leaders behind Friends Cricket Club,
            working together to inspire players, organize tournaments,
            and build a stronger cricket community
          </p>

        </div>

        {/* Executive Committee */}
        <h3 className="text-3xl font-ExtraBold text-center text-white mb-12 font-['Bebas Neue'] ">
          Executive Committee
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          {executiveTeam.map((member, index) => (
            <MemberCard
              key={index}
              member={member}
              index={index}
            />
          ))}

        </div>

        {/* Chair Members */}
        <h3 className="text-3xl font-Bold text-center text-white mb-12 font-['Bebas Neue'] ">
          Chair Members
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {chairMembers.map((member, index) => (
            <MemberCard
              key={index}
              member={member}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
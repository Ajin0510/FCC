import { motion } from "motion/react";

export default function Sponsors() {
  const sponsors = [
    { name: "Canara Bank", logo: "/sponsor1.png" },
    { name: "Sports Hub", logo: "/sponsor2.png" },
    { name: "ABC Builders", logo: "/sponsor3.png" },
    { name: "Fitness Arena", logo: "/sponsor4.png" },
    { name: "Cricket World", logo: "/sponsor5.png" },
    { name: "Friends Bakery", logo: "/sponsor6.png" },
  ];

  return (
    <section className="relative  py-20 overflow-hidden">

     
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 px-6">

          <span className="text-white font-['Poppins']  uppercase tracking-[5px] font-SemiBold">
            Sponsors
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
    OUR PROUD SPONSORS
  </motion.span>
</motion.h2>

          <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We sincerely thank our sponsors for supporting Friends Cricket Club
            and helping us build a stronger cricket community.
          </p>

        </div>

        {/* Auto Scroll */}
        <div className="overflow-hidden">

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {[...sponsors, ...sponsors].map((item, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg flex flex-col items-center hover:border-amber-400 transition"
              >

                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-20 object-contain grayscale hover:grayscale-0 transition duration-500"
                />

                <h3 className="text-white mt-6 font-semibold">
                  {item.name}
                </h3>

              </div>
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}
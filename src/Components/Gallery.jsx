import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const galleryImages = [
    {
      image: "/gallery1.png",
      title: "Tournament Champions",
    },
    {
      image: "/gallery2.jpg",
      title: "Team Celebration",
    },
    {
      image: "/gallery3.jpg",
      title: "Practice Session",
    },
    {
      image: "/gallery4.jpg",
      title: "Night Match",
    },
    {
      image: "/gallery5.jpg",
      title: "Award Ceremony",
    },
    {
      image: "/gallery6.jpg",
      title: "Community Service",
    },
    {
      image: "/gallery7.jpg",
      title: "Training Camp",
    },
    {
      image: "/gallery8.jpg",
      title: "Team Spirit",
    },
  ];

  return (
   <section className="relative  py-20 overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-white font-['Poppins'] uppercase tracking-[5px] font-SemiBold">
            Gallery
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
    CLUB MEMORIES
  </motion.span>
</motion.h2>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Explore unforgettable moments from tournaments, practice sessions,
            celebrations, and community activities of Friends Cricket Club.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <div className="text-center px-4">
                  <h3 className="text-white text-xl font-bold">
                    {item.title}
                  </h3>
                </div>

              </div>

            </motion.div>
          ))}

          

        </div>


        <div className="w-full flex justify-center mt-14">

  <Link
    to="/Gallerypage"
    className="
      px-8
      py-4
      rounded-full
      bg-amber-400
      text-black
      font-bold
      hover:bg-amber-500
      transition
      duration-300
      hover:scale-105
    "
  >
    View Full Gallery
  </Link>

</div>

      </div>

    </section>
  );
}
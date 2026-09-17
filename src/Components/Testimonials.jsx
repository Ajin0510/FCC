import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ajin B.K",
      role: "President",
      image: "/president.jpg",
      review:
        "Friends Cricket Club is more than a team—it's a family. We strive to inspire young players through discipline, teamwork, and sportsmanship.",
    },
    {
      name: "Jerin D.R",
      role: "Secretary",
      image: "/secretary.jpg",
      review:
        "Every tournament teaches us something new. Our goal is to provide opportunities for every passionate cricketer.",
    },
    {
      name: "Berlin Joy",
      role: "Treasurer",
      image: "/treasurer.jpg",
      review:
        "We are proud of our achievements and thankful to every member and sponsor who supports our journey.",
    },
    {
      name: "Andrew Simon",
      role: "Chair Member",
      image: "/chair1.jpg",
      review:
        "Cricket builds character. Friends Cricket Club continues to create unforgettable memories on and off the field.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[500px] h-[500px] bg-amber-400/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-amber-400 uppercase tracking-[5px] font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            What Our Members Say
          </h2>

          <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mt-5"></div>

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center"
          >

            <FaQuoteLeft className="text-amber-400 text-5xl mx-auto mb-6" />

            <p className="text-gray-300 text-lg leading-8 italic">
              "{testimonials[current].review}"
            </p>

            <div className="flex justify-center mt-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-amber-400 mx-1" />
              ))}
            </div>

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full border-4 border-amber-400 object-cover mx-auto mt-8"
            />

            <h3 className="text-white text-2xl font-bold mt-5">
              {testimonials[current].name}
            </h3>

            <p className="text-amber-400 font-semibold">
              {testimonials[current].role}
            </p>

          </motion.div>

        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">

          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index
                  ? "bg-amber-400 w-8"
                  : "bg-gray-600"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
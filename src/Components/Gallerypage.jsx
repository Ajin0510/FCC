import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "./Navbar";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallerypage() {

  const galleryImages = [

    {
      id: 1,
      category: "Matches",
      image: "/public/plain.png",
      title: "Match Day"
    },

    {
      id: 2,
      category: "Matches",
      image: "/gallery/match2.jpg",
      title: "Batting Time"
    },

    {
      id: 3,
      category: "Matches",
      image: "/gallery/match3.jpg",
      title: "Bowling Action"
    },

    {
      id: 4,
      category: "Tournaments",
      image: "/gallery/tournament1.jpg",
      title: "Champion Trophy"
    },

    {
      id: 5,
      category: "Tournaments",
      image: "/gallery/tournament2.jpg",
      title: "Prize Distribution"
    },

    {
      id: 6,
      category: "Celebrations",
      image: "/gallery/celebration1.jpg",
      title: "Victory Celebration"
    },

    {
      id: 7,
      category: "Celebrations",
      image: "/gallery/celebration2.jpg",
      title: "Team Celebration"
    },

    {
      id: 8,
      category: "Social Activities",
      image: "/gallery/social1.jpg",
      title: "Food Distribution"
    },

    {
      id: 9,
      category: "Social Activities",
      image: "/gallery/social2.jpg",
      title: "Helping Community"
    },

  ];

  const categories = [
    "All",
    "Matches",
    "Tournaments",
    "Celebrations",
    "Social Activities"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const [open, setOpen] = useState(false);
const [index, setIndex] = useState(0);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-screen">

        {/* ================= HERO ================= */}

        <section
          className="relative h-[65vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('/gallery/gallery-banner.jpg')",
          }}
        >

          <div className="text-center px-6">

            <motion.span
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className="uppercase tracking-[6px] text-amber-400 font-semibold"
            >
              Friends Cricket Club
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="text-5xl md:text-7xl font-extrabold mt-6"
            >
              Gallery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg"
            >
              Relive our unforgettable cricket moments,
              championship victories, celebrations,
              and social activities through our gallery.
            </motion.p>

          </div>

        </section>

        {/* ================= FILTER BUTTONS ================= */}

        <section className="py-20">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold"
              >
                Explore Our Moments
              </motion.h2>

              <p className="text-gray-400 mt-4">
                Browse our memories by category.
              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300

                  ${
                    activeCategory === category
                      ? "bg-amber-400 text-black"
                      : "bg-zinc-900 hover:bg-amber-400 hover:text-black"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

        </section>

        {/* Masonry Gallery Coming in Part 2 */}

        {/* ================= MASONRY GALLERY ================= */}

<section className="pb-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">

      {filteredImages.map((item, index) => (

       <motion.div
  onClick={() => {
    setIndex(index);
    setOpen(true);
  }}
          whileHover={{ scale: 1.02 }}
          className="mb-6 break-inside-avoid overflow-hidden rounded-3xl group relative cursor-pointer"
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-full rounded-3xl object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">

            <span className="text-amber-400 text-sm uppercase tracking-widest">
              {item.category}
            </span>

            <h3 className="text-2xl font-bold mt-2">
              {item.title}
            </h3>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>


<Lightbox
  open={open}
  close={() => setOpen(false)}
  index={index}
  animation={{
    fade: 300,
    swipe: 400,
  }}
  plugins={[
    Zoom,
    Fullscreen,
    Download,
    Thumbnails,
  ]}
  slides={filteredImages.map((item) => ({
    src: item.image,
    download: item.image,
  }))}
/>

      </div>

    </>
  );
}
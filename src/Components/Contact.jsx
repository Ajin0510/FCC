import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SEND EMAIL
  // =========================
const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSending(true);

  try {
    const response = await emailjs.send(
      "service_avu3m1a",
      "template_mv9avah",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      {
        publicKey: "JytXk8Oy8st1qEYaJ",
      }
    );

    console.log("SUCCESS:", response);

    alert("Message sent successfully! 🎉");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("EMAILJS ERROR:", error);

    alert(
      `Message failed: ${
        error.text || error.message || "Unknown error"
      }`
    );
  } finally {
    setIsSending(false);
  }
};

  return (
    <section className="relative py-20 overflow-hidden">

     


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">


        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <span className="text-white font-['Poppins']  uppercase tracking-[5px] font-SemiBold">
            Contact Us
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
    GET IN TOUCH
  </motion.span>
</motion.h2>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're interested in joining
            the club, sponsoring us, or simply saying hello, feel free to
            contact us.
          </p>

        </motion.div>


        {/* ================= TWO COLUMNS ================= */}

        <div className="grid lg:grid-cols-2 gap-12">


          {/* ================= CONTACT INFORMATION ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>


            {/* ADDRESS */}

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-amber-400 flex items-center justify-center text-black">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">
                    Address
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Friends Cricket Club
                    <br />
                    Urambu, Tamilnadu
                  </p>

                </div>

              </div>


              {/* PHONE */}

              <div className="flex gap-5">

                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-amber-400 flex items-center justify-center text-black">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">
                    Phone
                  </h4>

                  <p className="text-gray-400 mt-2">
                    +91 98765 43210
                  </p>

                </div>

              </div>


              {/* EMAIL */}

              <div className="flex gap-5">

                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-amber-400 flex items-center justify-center text-black">
                  <FaEnvelope />
                </div>

                <div>

                  <h4 className="text-white font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-400 mt-2">
                    friendscricketclub@gmail.com
                  </p>

                </div>

              </div>

            </div>


            {/* ================= SOCIAL ICONS ================= */}

            <div className="flex gap-4 mt-10">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>


          {/* ================= CONTACT FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Send a Message
            </h3>


            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >


              {/* NAME */}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition"
              />


              {/* EMAIL */}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition"
              />


              {/* SUBJECT */}

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition"
              />


              {/* MESSAGE */}

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition resize-none"
              ></textarea>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-amber-400 hover:bg-amber-500 disabled:bg-gray-500 text-black font-bold py-4 rounded-xl transition duration-300"
              >

                {isSending ? "Sending..." : "Send Message"}

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
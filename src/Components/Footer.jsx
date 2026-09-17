import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
<footer className="relative  text-white">      {/* Background Glow */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Club Info */}
          <div>

            <img
              src="/eee.png"
              alt="Friends Cricket Club"
              className="w-24 mb-2"
            />

            <h2 className="text-2xl font-bold">
              Friends Cricket Club
            </h2>

            <p className="text-gray-400 mt-4 leading-7 text-justify">
              Established in 2018, Friends Cricket Club promotes cricket,
              teamwork, discipline, and community service while inspiring
              young talent.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="/" className="hover:text-amber-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/aboutclub" className="hover:text-amber-400 transition">
                  About Club
                </a>
              </li>

              <li>
                <a href="/gallery" className="hover:text-amber-400 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="/team" className="hover:text-amber-400 transition">
                  Team
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-amber-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-400" />
                <span className="text-gray-400">
                  Urambu, Tamilnadu
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-400" />
                <span className="text-gray-400">
                  xxxxxx
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400" />
                <span className="text-gray-400">
                  friendscricketclub@gmail.com
                </span>
              </div>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-amber-400">
              Follow Us
            </h3>

            <p className="text-gray-400 mb-6">
              Stay connected with Friends Cricket Club on social media.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Friends Cricket Club. Developed by AJIN
          </p>

          <button
            onClick={scrollTop}
            className="mt-6 md:mt-0 bg-amber-400 hover:bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}
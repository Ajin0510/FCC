import { motion } from "motion/react";
import {
  FaBaseballBall,
  FaTrophy,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const items = [
  {
    Icon: GiCricketBat,
    left: "8%",
    top: "18%",
    delay: 0,
  },
  {
    Icon: FaBaseballBall,
    left: "85%",
    top: "22%",
    delay: 2,
  },
 
  {
    Icon: FaTrophy,
    left: "82%",
    top: "70%",
    delay: 3,
  },
];

export default function FloatingCricket() {
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-amber-400/30 text-5xl pointer-events-none"
          style={{
            left: item.left,
            top: item.top,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [-10, 10, -10],
            opacity: [.2, .6, .2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          <item.Icon />
        </motion.div>
      ))}
    </>
  );
}
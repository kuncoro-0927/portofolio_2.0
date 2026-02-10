import { motion as Motion } from "framer-motion";
import { PiMouseSimpleDuotone } from "react-icons/pi";

export default function FloatingIcon() {
  return (
    <Motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="relative flex justify-center"
    >
      <PiMouseSimpleDuotone size={30} />
    </Motion.div>
  );
}

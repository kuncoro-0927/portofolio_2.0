/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "./Reactbits/ShinyText";
import Background from "./Background";
import Light from "./Light";

export default function PageLoader({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // simulasi tunggu asset
    const timer = setTimeout(() => {
      setShow(false);
      onFinish(); // kasih tahu App kalau loader selesai
    }, 2000); // durasi loader 2 detik, bisa kamu atur

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background dan Light tetap hidup */}
          <div className="fixed inset-0 -z-20">
            <Background />
          </div>
          <div className="absolute inset-0 z-10">
            <Light />
          </div>

          {/* Logo / Text */}
          <ShinyText
            text="K"
            disabled={false}
            speed={3}
            className="font-bold text-7xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

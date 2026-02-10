import { motion as Motion } from "framer-motion";
export default function FlipButton({
  children,
  href = "#",
  className = "",
  selfHover = true,
  animate, // 🔑 DEFAULT: bisa hover sendiri
}) {
  return (
    <Motion.a
      href={href}
      className={`flip-btn ${className}`}
      initial="rest"
      animate={animate ?? "rest"}
      whileHover={selfHover ? "hover" : undefined}
      whileTap={{ scale: 0.96 }}
      variants={{
        rest: {},
        hover: {},
      }}
    >
      {/* DEPAN */}
      <Motion.span
        className="label label-front"
        variants={{
          rest: { opacity: 1, y: 0, rotateX: 0 },
          hover: { opacity: 0.001, y: -12, rotateX: 60 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </Motion.span>

      {/* BELAKANG */}
      <Motion.span
        className="label label-back"
        variants={{
          rest: { opacity: 0.001, y: 12, rotateX: -60 },
          hover: { opacity: 1, y: 0, rotateX: 0 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </Motion.span>
    </Motion.a>
  );
}

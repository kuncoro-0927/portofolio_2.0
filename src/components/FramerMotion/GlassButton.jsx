import { motion as Motion } from "framer-motion";

export default function FlipGlassButton({
  children,
  href = "#",
  className = "",
  selfHover = true,
  animate,
  onClick,
}) {
  return (
   
      <Motion.button
        onClick={onClick}
        href={href}
        initial="rest"
        animate={animate ?? "rest"}
        whileHover={selfHover ? "hover" : undefined}
        whileTap={{ scale: 0.96 }}
        /* Wrapper Border: 
           Gradasi 135deg membuat Kiri-Atas dan Kanan-Bawah menyala 
        */
        className={`relative group p-[1px] rounded-xl overflow-hidden inline-block ${className}`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.6) 100%)",
        }}
      >
        {/* Glow Effects (Outer) di sudut kanan atas dan kiri bawah */}
        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div
          /* Background Inner: 
             Semakin ke kanan bawah semakin gelap sesuai permintaan 
          */
          className="relative px-8 py-3 rounded-[11px] flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #000 100%)",
            perspective: "1000px", // Penting untuk efek rotateX
          }}
        >
          {/* Container Teks - h-6 menjaga button tetap stabil saat flip */}
          <div className="relative h-6 flex items-center justify-center">
            {/* DEPAN - Menggunakan spek animasi persis milikmu */}
            <Motion.span
              className="text-white font-medium text-lg whitespace-nowrap block"
              variants={{
                rest: { opacity: 1, y: 0, rotateX: 0 },
                hover: { opacity: 0.001, y: -12, rotateX: 60 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {children}
            </Motion.span>

            {/* BELAKANG - Menggunakan spek animasi persis milikmu */}
            <Motion.span
              className="absolute text-white font-medium text-lg whitespace-nowrap block"
              variants={{
                rest: { opacity: 0.001, y: 12, rotateX: -60 },
                hover: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {children}
            </Motion.span>
          </div>

          {/* Shimmer Effect saat Hover */}
          <Motion.div
            variants={{
              rest: { x: "-100%" },
              hover: { x: "100%" },
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
          />
        </div>
      </Motion.button>
 
  );
}

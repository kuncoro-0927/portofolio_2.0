import { motion, useAnimation } from "framer-motion";
import StarBorder from "./Reactbits/StarBorder";
import FlipButton from "./FramerMotion/FlipButton";

export default function FlipSocialButton({ icon, label }) {
  const controls = useAnimation();
const Icon = icon;
  return (
    <StarBorder
      as={motion.button}
      color="white"
      speed="3s"
      onMouseEnter={() => controls.start("hover")}
      onMouseLeave={() => controls.start("rest")}
      className="
        flex items-center gap-2
        rounded-full
        w-[150px] md:w-[130px] xl:w-[150px] 2xl:w-[200px]
        px-5 py-2
        cursor-pointer
        hover:shadow-[0_0_20px_rgba(255,255,255,0.20)]
      "
    >
      <FlipButton
        selfHover={false}
        animate={controls}
        className="flex items-center gap-2"
      >
        <Icon className="xl:text-xl 2xl:text-2xl" />
        <span className="developer ml-2 text-[#a6a6a6] text-sm xl:text-sm 2xl:text-lg">
          {label}
        </span>
      </FlipButton>
    </StarBorder>
  );
}

const GlassCard = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className="inline-flex p-[1px] rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_60%)]">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#232323] to-black backdrop-blur-md">
          <div className="relative flex items-center justify-center w-[10px] h-[10px]">
            <span className="absolute w-[8px] h-[8px] bg-white/40 rounded-full blur-[4px] animate-ping" />
            <span className="w-[8px] h-[8px] bg-white rounded-full shadow-[0_0_10px_white]" />
          </div>

          <span className="text-[14px] md:text-[15px] text-white/90 whitespace-nowrap">
            Building Beautiful Modern Web Apps
          </span>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;

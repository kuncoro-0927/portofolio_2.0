import { motion as Motion} from "framer-motion";

const GlassCard = () => {
 return (
    <div style={containerStyle}>
      <div style={badgeWrapper}>
        <Motion.div 
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          style={badgeStyle}
        >
          {/* Titik yang "Menyala" */}
          <div style={dotContainer}>
            <Motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={dotGlow}
            />
            <span style={dotSolid}></span>
          </div>
          
          <span className="text-base" style={textStyle}>Frontend Developer</span>
        </Motion.div>
      </div>
    </div>
  );
};

// --- STYLING ---

const containerStyle = {
  backgroundColor: '#000',
  
  display: 'flex',
  justifyContent: 'center',
};

const badgeWrapper = {
  position: 'relative',
  borderRadius: '999px',
  padding: '1px', // Ketebalan border
  // Efek Gradasi Border: Kiri terang (glass), Kanan transparan/gelap
  background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)',
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '10px 20px',
  gap: '12px',
  borderRadius: '999px',
  backgroundColor: '#0a0a0a', // Hitam pekat di bagian dalam
  backdropFilter: 'blur(10px)',
background: 'linear-gradient(90deg, rgba(35,35,35,1) 0%, rgba(0,0,0,1) 100%)',
};

const dotContainer = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '10px',
  height: '10px',
};

const dotSolid = {
  width: '8px',
  height: '8px',
  backgroundColor: '#fff', // Titik putih menyala
  borderRadius: '50%',
  zIndex: 2,
  boxShadow: '0 0 10px #fff',
};

const dotGlow = {
  position: 'absolute',
  width: '8px',
  height: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  borderRadius: '50%',
  filter: 'blur(4px)',
  zIndex: 1,
};

const textStyle = {
  color: 'rgba(255, 255, 255, 0.9)',

  fontWeight: '400',
  fontFamily: 'Inter, sans-serif',
};
export default GlassCard;
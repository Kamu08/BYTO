import { motion } from 'framer-motion';

// Animation variants for different parts of the truck
const truckVariants = {
  shake: {
    rotate: [0, 2, -2, 2, 0],
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
  }
};

const warningSignVariants = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
  }
};

const brokenPartVariants = {
  draw: (i) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeInOut" }
  })
};

const wheelVariants = {
  bounce: {
    y: [0, -10, 0],
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }
  }
};

const BrokenTruckIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[400px]">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Artboard" transform="translate(-100.000000, -50.000000)">
        <g id="Truck" transform="translate(100.000000, 50.000000)">
          {/* Truck Body with Shake Animation */}
          <motion.g
            id="Body"
            fill="#FF914D"
            variants={truckVariants}
            animate="shake"
          >
            <path id="Rectangle" d="M30 150H370V270H30V150Z" />
            <path id="Rectangle-Copy" d="M110 120H370V150H110V120Z" />
            <path id="Rectangle-Copy-2" d="M0 210H30V270H0V210Z" />
            <path id="Rectangle-Copy-3" d="M370 210H400V270H370V210Z" />
          </motion.g>
          {/* Wheels with Bounce Animation */}
          <g id="Wheels" fill="#333333">
            <motion.circle
              id="Oval"
              cx="80"
              cy="270"
              r="30"
              variants={wheelVariants}
              animate="bounce"
            />
            <motion.circle
              id="Oval-Copy"
              cx="320"
              cy="270"
              r="30"
              variants={wheelVariants}
              animate="bounce"
            />
          </g>
          <g id="Details" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <path id="Line" d="M140 135H260" />
            <path id="Line-Copy" d="M50 240H110" />
            <path id="Line-Copy-2" d="M290 240H350" />
          </g>
          {/* Broken Parts with Draw Animation */}
          <g id="Broken-Parts" stroke="#DAECE9" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              id="Line-3"
              d="M60 190L90 170"
              variants={brokenPartVariants}
              animate="draw"
              custom={0}
              initial={{ pathLength: 0, opacity: 0 }}
            />
            <motion.path
              id="Line-4"
              d="M310 170L340 190"
              variants={brokenPartVariants}
              animate="draw"
              custom={1}
              initial={{ pathLength: 0, opacity: 0 }}
            />
            <motion.path
              id="Line-5"
              d="M180 230L220 230"
              variants={brokenPartVariants}
              animate="draw"
              custom={2}
              initial={{ pathLength: 0, opacity: 0 }}
            />
          </g>
          {/* Warning Sign with Pulse Animation */}
          <motion.g
            id="Warning-Sign"
            transform="translate(170.000000, 30.000000)"
            fill="#FF914D"
            variants={warningSignVariants}
            animate="pulse"
          >
            <path id="Triangle" d="M0 50L86.6025404 0L-86.6025404 0L0 50Z" />
            <path
              id="Exclamation"
              fill="#FFFFFF"
              d="M0 15C-2.76142375e-16 8.954305 5.3722583 3.5819717 12 3.5819717C18.6277417 3.5819717 24 8.954305 24 15C24 21.045695 18.6277417 26.4180283 12 26.4180283C5.3722583 26.4180283 2.76142375e-16 21.045695 0 15ZM0 35H24V50H0V35Z"
            />
          </motion.g>
        </g>
      </g>
    </g>
  </svg>
);

export default BrokenTruckIllustration;
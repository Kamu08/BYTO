import { motion } from 'framer-motion';
import Button from '../common/Button';

const HeroSection = ({ onStartRegistration }) => (
  <section className="py-12 px-6 bg-gradient-to-b from-[#FFF5EB] to-[#FFEFD5]">
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#333333] mb-4"
        >
          Join BYTO's Logistics Network
        </motion.h1>
        <p className="text-lg text-[#666666] mb-8">
          Earn more with flexible hours and trusted support
        </p>
        <Button onClick={onStartRegistration}>
          Start Registration
        </Button>
      </div>
      <div className="md:w-1/2">
        <img
          src="/assets/images/tata-ace.png"
          alt="Tata Ace Truck"
          className="rounded-lg shadow-lg w-full max-w-[400px] mx-auto"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
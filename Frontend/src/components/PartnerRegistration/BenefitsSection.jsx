import { motion } from 'framer-motion';
import { Clock, TrendingUp, ShieldCheck } from 'lucide-react';

const BenefitsSection = () => (
  <section className="py-12 px-6 bg-[#f5f5f5]">
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">Why Partner with BYTO?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
        >
          <Clock className="h-12 w-12 text-[#ff914d] mb-4" />
          <h3 className="text-xl font-bold text-[#333333] mb-2">Flexible Hours</h3>
          <p className="text-[#666666] text-center">Set your own schedule and work on your terms.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
        >
          <TrendingUp className="h-12 w-12 text-[#ff914d] mb-4" />
          <h3 className="text-xl font-bold text-[#333333] mb-2">Steady Earnings</h3>
          <p className="text-[#666666] text-center">Get competitive rates and timely payments.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
        >
          <ShieldCheck className="h-12 w-12 text-[#ff914d] mb-4" />
          <h3 className="text-xl font-bold text-[#333333] mb-2">Tech Support</h3>
          <p className="text-[#666666] text-center">Get 24/7 assistance from our support team.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
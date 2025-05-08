import { motion } from 'framer-motion';
import Button from '../common/Button';
import { ArrowLeft, LifeBuoy } from 'lucide-react';
import BrokenTruckIllustration from './BrokenTruckIllustration';

const ErrorSection = ({ onTryAgain, onContactSupport, loading, handleGoBack }) => {
  return (
    <section className="py-12 px-6 flex-grow flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #ff914d 0, #ff914d 1px, transparent 1px, transparent 10px)',
      }}></div>

      <div className="container mx-auto flex flex-col items-center justify-center gap-10 z-10">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <BrokenTruckIllustration />
        </motion.div>

        {/* Error Card */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-8 text-center relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-[#333333] mb-4 relative"
          >
            Oops, Something Broke!
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-20 bg-gradient-to-r from-[#ff914d] to-[#ffa94d] rounded-full"></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-['Poppins',sans-serif] text-lg md:text-xl text-[#666666] mb-6"
          >
            Don’t worry, we’re on it. Let’s get you back on track!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="font-['Poppins',sans-serif] text-sm text-[#ff914d] mb-8 font-medium"
          >
            Error 500
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 145, 77, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                className="px-8 py-3 bg-gradient-to-r from-[#ff914d] to-[#ffa94d] text-white shadow-lg"
                onClick={onTryAgain}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  'Try Again'
                )}
              </Button>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                variant="secondary"
                className="px-8 py-3 border-2 border-[#ff914d] text-[#ff914d] hover:bg-[#fff5eb] relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff914d] to-[#ffa94d] opacity-0 hover:opacity-10 transition-opacity"></span>
                <LifeBuoy className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
            </motion.button>
          </div>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                variant="secondary"
                className="text-[#ff914d] hover:text-[#ffa94d]"
                onClick={handleGoBack}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Last Page
              </Button>
            </motion.button>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-['Poppins',sans-serif] text-xs text-[#666666] mt-4"
          >
            Reference ID: {Math.random().toString(36).substring(7).toUpperCase()}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
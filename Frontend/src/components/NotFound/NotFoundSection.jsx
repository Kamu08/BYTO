import { motion } from 'framer-motion';
import Button from '../common/Button';
import Input from '../common/Input';
import { Home, Search, MapPin } from 'lucide-react';
import LostTruckIllustration from './LostTruckIllustration';

const NotFoundSection = ({ onSearch, searchTerm, setSearchTerm, loading, searchInputRef }) => {
  return (
    <section className="bg-[#FFF5EB] py-12 px-6 flex-grow flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <LostTruckIllustration />
        </motion.div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="font-['Poppins',sans-serif] font-bold text-3xl md:text-4xl text-[#333333] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Page Not Found
          </motion.h1>
          <motion.p
            className="font-['Poppins',sans-serif] text-lg md:text-xl text-[#666666] mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The page you're looking for doesn't exist. Try searching or go home.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <form onSubmit={onSearch} className="flex items-center w-full max-w-md mx-auto md:mx-0 relative">
              <Input
                type="text"
                placeholder="Search site"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchInputRef}
              />
              <Button
                type="submit"
                className="absolute right-0 bg-[#ff914d] text-white rounded-r-lg px-4 h-12 hover:bg-[#ffa94d] transition-all duration-200"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5"
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
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </Button>
            </form>
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                className="px-8 py-3"
                onClick={() => {
                  alert('Redirecting to Home Page');
                }}
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                variant="secondary"
                className="px-8 py-3"
                onClick={() => {
                  alert('Redirecting to Services Page');
                }}
              >
                Explore Services
              </Button>
            </motion.button>
          </div>

          {/* Suggested Links */}
          <div className="mt-8">
            <p className="font-['Poppins',sans-serif] text-md text-[#666666] mb-2">
              Here are some popular pages:
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-[#ff914d] hover:underline flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Redirecting to Tracking Page');
                }}
              >
                <MapPin className="h-4 w-4" />
                Tracking
              </a>
              <a
                href="#"
                className="text-[#ff914d] hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Redirecting to Services Page');
                }}
              >
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundSection;
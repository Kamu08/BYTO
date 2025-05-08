import { useState } from 'react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { Menu, User, LogOut, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state

  return (
    <header className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0 z-[100]">
      <div className="flex justify-between items-center px-5 py-4 max-w-[1200px] mx-auto">
        <Logo />
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-[#333333] no-underline text-base font-medium transition-colors duration-200 hover:text-[#ff914d]">Tracking</a>
          <a href="#" className="text-[#333333] no-underline text-base font-medium transition-colors duration-200 hover:text-[#ff914d]">History</a>
          <a href="#" className="text-[#ff914d] no-underline text-base font-medium transition-colors duration-200 border-b-2 border-[#ff914d]">For Partners</a>
          <a href="#" className="text-[#333333] no-underline text-base font-medium transition-colors duration-200 hover:text-[#ff914d]">Contact</a>
        </nav>
        {isLoggedIn ? (
          <div className="hidden md:flex items-center gap-4 relative group">
            <img src="https://via.placeholder.com/40x40/cccccc/FFFFFF" alt="User Avatar" className="rounded-full" />
            <span className="text-[#333333] font-medium">User Name</span>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <div className="py-1">
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">
                  <User className="w-4 h-4" /> Profile
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">
                  <Settings className="w-4 h-4" /> Settings
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">
                  <LogOut className="w-4 h-4" /> Logout
                </a>
              </div>
            </div>
          </div>
        ) : (
          <Button className="max-md:hidden">Download App</Button>
        )}
        <div className="md:hidden text-[#ff914d] text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 px-5 pb-4"
          >
            <div className="w-48 bg-white rounded-md shadow-lg border border-gray-200">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">Tracking</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">History</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#ff914d] font-medium hover:bg-gray-100">For Partners</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">Contact</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">Download App</a>
                {isLoggedIn && (
                  <>
                    <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100">Logout</a>
                  </>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <div className="bg-[#fafafa] px-5 py-2.5 text-sm text-[#666666] max-w-[1200px] mx-auto">
        <a href="#" className="text-[#666666] no-underline hover:text-[#ff914d]">Home</a>`{'>'}` <span className="text-[#ff914d] no-underline">For Partners</span>
      </div>
    </header>
  );
};

export default Header;
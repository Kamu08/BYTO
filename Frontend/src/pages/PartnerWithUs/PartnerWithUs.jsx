import { useState, useEffect, useRef } from 'react';
import Header from '../../components/layout/Header';
import Breadcrumb from '../../components/layout/Breadcrumb';
import HeroSection from '../../components/PartnerRegistration/HeroSection';
import BenefitsSection from '../../components/PartnerRegistration/BenefitsSection';
import RegistrationForm from '../../components/PartnerRegistration/RegistrationForm'; // Updated import
import VerificationStatus from '../../components/PartnerRegistration/VerificationStatus';
import SupportShortcut from '../../components/PartnerRegistration/SupportShortcut';
import TestimonialCarousel from '../../components/PartnerRegistration/TestimonialCarousel';
import VideoGuide from '../../components/PartnerRegistration/VideoGuiide';

const PartnerRegistrationPage = () => {
  const [verificationStatus, setVerificationStatus] = useState('Submitted');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Mobile menu close logic would be handled in Header
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FFF5EB] to-[#FFEFD5] min-h-screen font-['Poppins',sans-serif]">
      {/* <Header ref={menuRef} /> */}
      <main>
        <Breadcrumb />
        <HeroSection onStartRegistration={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })} />
        <BenefitsSection />
        <RegistrationForm />
        {verificationStatus && <VerificationStatus status={verificationStatus} />}
        <SupportShortcut />
        <TestimonialCarousel />
        <VideoGuide />
      </main>
    </div>
  );
};

export default PartnerRegistrationPage;
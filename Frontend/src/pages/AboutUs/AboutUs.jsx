
import HeroSection from '../../components/about/HeroSection';
import StorySection from '../../components/about/StorySection';
import ValuesSection from '../../components/about/ValuesSection';
import TeamSection from '../../components/about/TeamSection';
import TestimonialsSection from '../../components/about/TestimonialsSection';
import AppDownload from '../../components/AppDownload';

const AboutPage = () => (
  <div className="bg-[#ffffff] text-[#333333] font-['Poppins',sans-serif]">
    <HeroSection />
    <StorySection />
    <ValuesSection />
    <TeamSection />
    <TestimonialsSection />
    
   <AppDownload/>
  </div>
);

export default AboutPage;
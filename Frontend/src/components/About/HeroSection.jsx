import Button from '../common/Button';

const HeroSection = () => (
  <section className="bg-[#FFF5EB] py-10">
    <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
          Empowering Every Movement, One Truck at a Time
        </h1>
        <p className="text-base text-[#666666] mb-5">
          At BYTO, we simplify logistics for businesses and individuals—making transport accessible, affordable, and human.
        </p>
        <Button><a href="#team" className="text-white no-underline">Meet the Team</a></Button>
      </div>
      <div className="flex-1 mt-5 md:mt-0">
        <img
          src="/assets/images/about-hero.png"
          alt="Hero Illustration"
          className="w-full max-w-[600px] mx-auto"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
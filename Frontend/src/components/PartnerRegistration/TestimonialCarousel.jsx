const TestimonialCarousel = () => (
    <section className="py-12 px-6 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">What Our Partners Say</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md">
            <h3 className="text-xl font-bold text-[#333333] mb-2">Great Platform</h3>
            <p className="text-[#666666] mb-2">John Doe, Driver</p>
            <p className="text-[#666666]">
              "BYTO has helped me earn more and manage my time effectively."
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md">
            <h3 className="text-xl font-bold text-[#333333] mb-2">Reliable Support</h3>
            <p className="text-[#666666] mb-2">Jane Smith, Fleet Owner</p>
            <p className="text-[#666666]">
              "The support team is always there to assist me with any issues."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default TestimonialCarousel;
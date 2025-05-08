const StorySection = () => (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Story</h2>
        <p className="text-base text-[#666666] mb-5 max-w-[600px]">
          We started BYTO because we saw a gap in the logistics industry. Traditional moving services were complicated, expensive, and often impersonal. We believed there had to be a better way.
        </p>
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="bg-[#ff914d]/10 text-[#ff914d] px-5 py-2.5 rounded-lg">
            <span className="text-2xl font-bold">10,000+</span>
            <p className="text-sm">Deliveries</p>
          </div>
          <div className="bg-[#f5f5f5] px-5 py-2.5 rounded-lg">
            <span className="text-2xl font-bold">2024</span>
            <p className="text-sm">Founded</p>
          </div>
        </div>
        <div className="bg-[#f5f5f5] p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-2.5">Fcorvnine Ti-tfeline</h3>
          <p className="text-sm text-[#666666]">
            [Placeholder for timeline graphic: Milestones like "Testing", "Thrive". Replace with an image or SVG in production.]
          </p>
        </div>
      </div>
    </section>
  );
  
  export default StorySection;
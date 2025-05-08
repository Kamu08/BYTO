const ValuesSection = () => (
    <section className="bg-[#FFF5EB] py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <div className="text-3xl mb-2.5">🔍</div>
            <h3 className="text-lg font-bold mb-2.5">Transparency</h3>
            <p className="text-sm text-[#666666]">Live tracking and clear pricing always.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <div className="text-3xl mb-2.5">🚛</div>
            <h3 className="text-lg font-bold mb-2.5">Reliability</h3>
            <p className="text-sm text-[#666666]">On-time deliveries, every time.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <div className="text-3xl mb-2.5">💡</div>
            <h3 className="text-lg font-bold mb-2.5">Innovation</h3>
            <p className="text-sm text-[#666666]">Smart tools that scale with your needs.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <div className="text-3xl mb-2.5">❤️</div>
            <h3 className="text-lg font-bold mb-2.5">Customer First</h3>
            <p className="text-sm text-[#666666]">Every booking, every conversation—we care.</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default ValuesSection;
const TestimonialsSection = () => {
    const testimonials = [
      { name: 'Lisa Warren', review: 'BYTO made my office move incredibly smooth. Their team was efficient!', avatar: 'https://via.placeholder.com/50x50?text=Lisa' },
      { name: 'Mark Thompson', review: 'The tracking feature gave me peace of mind throughout the entire delivery process.', avatar: 'https://via.placeholder.com/50x50?text=Mark' },
      { name: 'Rachel Kim', review: 'Transparent pricing and excellent customer service. Will definitely use again!', avatar: 'https://via.placeholder.com/50x50?text=Rachel' },
    ];
  
    return (
      <section className="bg-[#E6F0FA] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="bg-white p-5 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                <div className="flex items-center mb-2.5">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-[50px] h-[50px] rounded-full mr-2.5" />
                  <div>
                    <h3 className="text-base font-bold">{testimonial.name}</h3>
                    <div className="text-[#ff914d]">★★★★★</div>
                  </div>
                </div>
                <p className="text-sm text-[#666666]">{testimonial.review}</p>
              </div>
            ))}
          </div>
          <div className="text-right mt-5">
            <a href="#" className="text-[#ff914d] no-underline hover:underline">Read more on our blog →</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
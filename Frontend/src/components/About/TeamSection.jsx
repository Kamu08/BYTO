const TeamSection = () => {
    const team = [
      { name: 'John Smith', role: 'CEO & Co-founder', quote: 'Techie by day, cyclist by night', avatar: 'https://via.placeholder.com/100x100?text=John' },
      { name: 'Sarah Johnson', role: 'Head of Operations', quote: 'Logistics wizard + coffee enthusiast', avatar: 'https://via.placeholder.com/100x100?text=Sarah' },
      { name: 'Mike Chen', role: 'Tech Lead', quote: 'Code ninja, gaming geek', avatar: 'https://via.placeholder.com/100x100?text=Mike' },
      { name: 'none oky', role: 'Customer Success', quote: 'People person, yoga lover', avatar: 'https://via.placeholder.com/100x100?text=Emma' },
    ];
  
    return (
      <section id="team" className="bg-[#E6F0FA] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {team.map(member => (
              <div key={member.name} className="text-center">
                <img src={member.avatar} alt={member.name} className="w-[100px] h-[100px] rounded-full mx-auto mb-2.5" />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-[#666666]">{member.role}</p>
                <p className="text-sm text-[#666666] italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default TeamSection;
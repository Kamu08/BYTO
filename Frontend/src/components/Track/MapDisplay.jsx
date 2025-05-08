import { Play } from 'lucide-react';

const MapDisplay = () => {
  return (
    <div className="px-5">
      <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden h-[600px] relative max-[1199px]:h-[500px] max-md:h-[400px]">
        <img
          src="/assets/images/map-placeholder.png"
          alt="Map Placeholder"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2.5 right-2.5 z-[10] flex flex-col gap-2.5">
          <button className="bg-white border border-[#ff914d] text-[#ff914d] w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer text-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#fff5eb]">
            +
          </button>
          <button className="bg-white border border-[#ff914d] text-[#ff914d] w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer text-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#fff5eb]">
            -
          </button>
          <button className="bg-white border border-[#ff914d] text-[#ff914d] w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#fff5eb]">
            <Play size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapDisplay;
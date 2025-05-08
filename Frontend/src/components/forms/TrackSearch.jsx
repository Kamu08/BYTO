import { Search } from 'lucide-react';
import Button from '../common/Button';

const TrackSearch = () => {
  const trackingId = 'BYTO-24041301';
  const recentTracks = [
    { id: 'BYTO-24041301', time: 'Apr 13, 2025 - 10:00 AM' },
    { id: 'BYTO-24040502', time: 'Apr 05, 2025 - 11:30 AM' },
    { id: 'BYTO-24033003', time: 'Mar 30, 2025 - 09:15 AM' },
  ];
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-8 max-md:text-2xl">Track Your Shipment</h1>
      <div className="flex justify-center max-w-[600px] mx-auto relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff914d]"
          size={20}
        />
        <input
          type="text"
          className="w-full h-12 rounded-lg border border-[#e0e0e0] pl-11 pr-5 text-base outline-none placeholder:text-[#999999] focus:border-[#ff914d]"
          placeholder="Enter Tracking ID"
          value={trackingId}
          readOnly
        />
      </div>
      <Button className="mt-5">Track Now</Button>
      <div className="mt-2.5 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-2.5 text-left max-w-[600px] mx-auto">
        {recentTracks.map((track) => (
          <div
            key={track.id}
            className="p-2 border-b border-[#e0e0e0] last:border-b-0 cursor-pointer hover:bg-[#f5f5f5]"
          >
            <div className="text-sm text-[#333333]">{track.id}</div>
            <div className="text-xs text-[#999999]">{track.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackSearch;

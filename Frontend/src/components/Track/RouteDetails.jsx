import { ChevronDown } from 'lucide-react';

const RouteDetails = () => {
  const routeDetails = {
    distance: '12.3 mi',
    travelTime: '35 min',
    fuelCost: '$8.50',
    driverInfo: 'John D. (Vehicle ID: VAN-1234)',
    routeNotes: 'Urban delivery route, moderate traffic expected',
  };
  return (
    <div className="px-5 mt-5">
      <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl">Route Details</h2>
          <ChevronDown className="text-[#ff914d] cursor-pointer" size={24} />
        </div>
        <div className="border-t border-[#e0e0e0] pt-5">
          <div className="flex gap-[30px] mb-5">
            <div className="flex-1">
              <div className="text-2xl font-bold mb-[5px]">
                {routeDetails.distance}
              </div>
              <div className="text-sm text-[#999999]">Distance</div>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold mb-[5px]">
                {routeDetails.travelTime}
              </div>
              <div className="text-sm text-[#999999]">Travel Time</div>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold mb-[5px]">
                {routeDetails.fuelCost}
              </div>
              <div className="text-sm text-[#999999]">Est. Fuel Cost</div>
            </div>
          </div>
          <div className="mb-[15px]">
            <div className="text-xs text-[#999999] mb-[5px]">Driver Info</div>
            <div className="text-sm text-[#333333]">
              {routeDetails.driverInfo}
            </div>
          </div>
          <div>
            <div className="text-xs text-[#999999] mb-[5px]">Route Notes</div>
            <div className="text-sm text-[#333333]">
              {routeDetails.routeNotes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;

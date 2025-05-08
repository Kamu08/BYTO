import { Copy } from 'lucide-react';
import Button from '../common/Button';

const TrackingDetails = () => {
  const trackingDetails = [
    { status: 'Booked', time: 'Apr 13, 2025, 09:30 AM', complete: true },
    { status: 'Picked Up', time: 'Apr 13, 2025, 10:00 AM', complete: true },
    { status: 'In Transit', time: 'Current Status', active: true },
    {
      status: 'Delivered',
      time: 'Estimated: Apr 13, 2025, 3:00 PM',
      pending: true,
    },
  ];
  const shipmentDetails = {
    trackingId: 'BYTO-24041301',
    vehicleType: 'Delivery Van',
    pickupLocation: '123 Warehouse Ave, Los Angeles, CA',
    deliveryLocation: '456 Main St, Apt 3B, Los Angeles, CA',
  };
  return (
    <div className="px-5 mt-5">
      <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-5 flex gap-[30px] max-md:flex-col">
        <div className="flex-[0.6_1_0%] max-md:flex-1">
          <h2 className="text-xl">Tracking Progress</h2>
          <div className="flex flex-col gap-[30px] relative mt-5">
            <div className="absolute left-[15px] top-[25px] bottom-[25px] w-[2px] bg-[#e0e0e0] z-[1]"></div>
            <div className="absolute left-[15px] top-[25px] w-[2px] bg-[#ff914d] z-[2] h-[33%] max-md:left-[10px]"></div>
            {trackingDetails.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-[15px] relative z-[3] ${step.complete ? 'step-complete' : step.active ? 'step-active' : 'step-pending'}`}
              >
                <div
                  className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-sm max-[1199px]:w-[25px] max-[1199px]:h-[25px] max-[1199px]:text-xs max-md:w-[20px] max-md:h-[20px] max-md:text-[10px] ${step.complete ? 'bg-[#28a745]' : step.active ? 'bg-[#ff914d] animate-[pulse_2s_infinite]' : 'bg-[#e0e0e0]'}`}
                >
                  {step.complete ? '✓' : step.active ? '●' : '○'}
                </div>
                <div className="flex-1">
                  <div
                    className={`font-medium text-sm ${step.pending ? 'text-[#999999]' : 'text-[#333333]'}`}
                  >
                    {step.status}
                  </div>
                  <div className="text-xs text-[#666666]">{step.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border-2 border-[#ff914d] rounded-lg p-[15px] mt-[30px] flex items-center justify-center">
            <span className="text-lg font-bold">
              ETA: Apr 13, 2025, 3:00 PM
            </span>
          </div>
        </div>
        <div className="flex-[0.4_1_0%] max-md:flex-1">
          <h2 className="text-xl">Shipment Details</h2>
          <div className="mb-[15px]">
            <div className="text-xs text-[#999999] mb-[5px]">Tracking ID</div>
            <div className="text-sm text-[#333333] flex items-center gap-2.5">
              {shipmentDetails.trackingId}
              <Copy className="text-[#ff914d] cursor-pointer" size={16} />
            </div>
          </div>
          <div className="mb-[15px]">
            <div className="text-xs text-[#999999] mb-[5px]">Vehicle Type</div>
            <div className="text-sm text-[#333333]">
              {shipmentDetails.vehicleType}
            </div>
          </div>
          <div className="mb-[15px]">
            <div className="text-xs text-[#999999] mb-[5px]">
              Pickup Location
            </div>
            <div className="text-sm text-[#333333]">
              {shipmentDetails.pickupLocation}
            </div>
          </div>
          <div className="mb-[15px]">
            <div className="text-xs text-[#999999] mb-[5px]">
              Delivery Location
            </div>
            <div className="text-sm text-[#333333]">
              {shipmentDetails.deliveryLocation}
            </div>
          </div>
          <div className="mt-5">
            <Button variant="secondary" className="mr-2.5">
              Share Tracking
            </Button>
            <Button variant="secondary">Save Tracking</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingDetails;

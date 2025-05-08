import Button from '../common/Button';

const HistoryTable = () => {
  const shipments = [
    { date: 'Apr 24, 2025', trackingId: 'BYT-74592-XL9', vehicleType: 'Truck (Large)', status: 'Delivered', statusColor: '#28a745' },
    { date: 'Apr 22, 2025', trackingId: 'BYT-68743-PQ2', vehicleType: 'Van (Medium)', status: 'In Transit', statusColor: '#ff914d' },
    { date: 'Apr 20, 2025', trackingId: 'BYT-54327-MM4', vehicleType: 'Bike (Small)', status: 'Delivered', statusColor: '#28a745' },
    { date: 'Apr 19, 2025', trackingId: 'BYT-98231-KL7', vehicleType: 'Truck (Medium)', status: 'Delayed', statusColor: '#dc3545' },
    { date: 'Apr 18, 2025', trackingId: 'BYT-67129-TU5', vehicleType: 'Van (Large)', status: 'Delivered', statusColor: '#28a745' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="bg-[#f5f5f5] px-5 py-2.5 flex font-medium text-sm">
        <div className="w-[20%] flex items-center">
          Date
          <svg className="ml-1 w-3 h-3 text-[#ff914d]" viewBox="0 0 8 8">
            <path d="M4 0 L6 2 L2 2 Z M4 8 L6 6 L2 6 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="w-[25%]">Tracking ID</div>
        <div className="w-[25%]">Vehicle Type</div>
        <div className="w-[15%]">Status</div>
        <div className="w-[15%]">Action</div>
      </div>
      {shipments.map((shipment, index) => (
        <div
          key={shipment.trackingId}
          className={`px-5 py-2.5 flex text-sm border-t border-[#e0e0e0] ${index % 2 === 1 ? 'bg-[#fbfaf4]' : ''}`}
        >
          <div className="w-[20%]">{shipment.date}</div>
          <div className="w-[25%]">{shipment.trackingId}</div>
          <div className="w-[25%]">{shipment.vehicleType}</div>
          <div className="w-[15%]">
            <span
              className="inline-block px-2.5 py-1 rounded-full text-xs text-white"
              style={{ backgroundColor: shipment.statusColor }}
            >
              {shipment.status}
            </span>
          </div>
          <div className="w-[15%] flex gap-2.5">
            <a href="#" className="text-[#ff914d] no-underline">View Details</a>
            <Button variant="secondary" className="text-xs py-1">Download Report</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryTable;
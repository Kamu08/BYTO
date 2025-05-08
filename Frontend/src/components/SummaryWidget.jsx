const SummaryWidget = () => (
  <div className="bg-white rounded-xl border border-[#e0e0e0] p-5 mb-5">
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex-1">
        <span className="text-base font-medium">Total Shipments: </span>
        <span className="text-base font-bold text-[#ff914d]">24</span>
      </div>
      <div className="flex-1">
        <span className="text-base font-medium">Delivered: </span>
        <span className="text-base font-bold text-[#28a745]">18</span>
      </div>
      <div className="flex-1">
        <span className="text-base font-medium">In Transit: </span>
        <span className="text-base font-bold text-[#ff914d]">4</span>
      </div>
      <div className="flex-1">
        <span className="text-base font-medium">Delayed: </span>
        <span className="text-base font-bold text-[#dc3545]">2</span>
      </div>
    </div>
    <div className="mt-2.5">
      <span className="text-base font-medium">Average Delivery Time: </span>
      <span className="text-base font-bold">2.3 days</span>
    </div>
  </div>
);

export default SummaryWidget;
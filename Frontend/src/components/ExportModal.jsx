const ExportModal = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className="bg-white rounded-xl p-5 w-full max-w-[600px] shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
      <h2 className="text-xl font-bold text-center mb-5">Export Shipment History</h2>
      <div className="mb-5">
        <label className="block text-base font-medium mb-1">Date Range</label>
        <div className="flex gap-2.5">
          <input
            type="text"
            className="w-full h-8 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none"
            value="Apr 18, 2025"
            readOnly
          />
          <input
            type="text"
            className="w-full h-8 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none"
            value="Apr 24, 2025"
            readOnly
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-base font-medium mb-1">Export Columns</label>
        <div className="grid grid-cols-2 gap-2.5">
          {['Date', 'Tracking ID', 'Vehicle Type', 'Status', 'Origin Address', 'Destination Address'].map(column => (
            <label key={column} className="flex items-center gap-2.5">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-[#ff914d] text-[#ff914d] focus:ring-[#ff914d]"
                checked
                disabled
              />
              <span className="text-sm">{column}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-base font-medium mb-1">Format</label>
        <label className="flex items-center gap-2.5 mb-2.5">
          <input
            type="radio"
            name="format"
            className="w-5 h-5 text-[#ff914d] focus:ring-[#ff914d]"
            checked
            disabled
          />
          <span className="text-sm">PDF (includes formatted table)</span>
        </label>
        <label className="flex items-center gap-2.5">
          <input
            type="radio"
            name="format"
            className="w-5 h-5 text-[#ff914d] focus:ring-[#ff914d]"
            disabled
          />
          <span className="text-sm">CSV (raw data)</span>
        </label>
      </div>
      <div className="flex justify-end gap-2.5">
        <button
          className="px-5 py-2.5 rounded-lg border border-[#e0e0e0] text-[#666666] text-base"
          onClick={onClose}
        >
          Cancel
        </button>
        <button className="px-5 py-2.5 rounded-lg bg-[#ff914d] text-white text-base">
          Export
        </button>
      </div>
    </div>
  </div>
);

export default ExportModal;
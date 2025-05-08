import React, {  useState } from 'react';
import Breadcrumb from '../../components/layout/Breadcrumb';
import SummaryWidget from '../../components/SummaryWidget';
import ExportModal from '../../components/ExportModal';
import FilterBar from '../../components/History/FilterBar';
import HistoryTable from '../../components/History/HistoryTable';
import Button from '../../components/common/Button';
const HistoryPage = () => {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="bg-[#ffffff] text-[#333333] font-['Poppins',sans-serif]">
      <Breadcrumb />
      <div className="max-w-[1200px] mx-auto px-5 py-5">
        <div className="bg-[#fffaf5] rounded-xl p-5">
          <h1 className="text-3xl font-bold mb-5 md:text-4xl">Shipment History</h1>
          <FilterBar />
          <SummaryWidget />
          <div className="flex justify-end mt-5 gap-2.5">
            <Button onClick={() => setIsExportModalOpen(true)}>Download PDF</Button>
            <Button variant="secondary">Download CSV</Button>
          </div>
          <HistoryTable />
          <div className="flex justify-center mt-5 gap-2.5">
            <button className="w-10 h-10 rounded-lg border border-[#ff914d] text-[#ff914d] flex items-center justify-center">←</button>
            <button className="w-10 h-10 rounded-lg bg-[#ff914d] text-white">1</button>
            <button className="w-10 h-10 rounded-lg border border-[#e0e0e0] text-[#333333]">2</button>
            <button className="w-10 h-10 rounded-lg border border-[#e0e0e0] text-[#333333]">3</button>
            <button className="w-10 h-10 rounded-lg border border-[#ff914d] text-[#ff914d]">→</button>
          </div>
          <div className="flex justify-center mt-5">
            <Button variant="secondary">Need Help?</Button>
          </div>
        </div>
      </div>
      <ExportModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} />
      
    </div>
  );
};

export default HistoryPage;
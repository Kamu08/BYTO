import { Search, ChevronDown } from 'lucide-react';
import Button from '../common/Button';

const FilterBar = () => (
  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-5 mb-5">
    <div className="flex flex-col md:flex-row gap-5 items-start">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1">Date Range</label>
        <div className="flex gap-2.5">
          <input
            type="text"
            placeholder="From"
            className="w-full md:w-[150px] h-8 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d]"
            value="Apr 18, 2025"
            readOnly
          />
          <input
            type="text"
            placeholder="To"
            className="w-full md:w-[150px] h-8 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d]"
            value="Apr 24, 2025"
            readOnly
          />
        </div>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1">Status</label>
        <div className="relative">
          <select
            className="w-full md:w-[150px] h-8 rounded-lg border border-[#ff914d] px-2.5 text-sm outline-none appearance-none"
            disabled
          >
            <option>All</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#333333]" size={16} />
        </div>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1">Tracking ID</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Tracking ID"
            className="w-full md:w-[220px] h-8 rounded-lg border border-[#e0e0e0] pl-8 pr-2.5 text-sm outline-none focus:border-[#ff914d]"
            readOnly
          />
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#ff914d]" size={16} />
        </div>
      </div>
      <div className="flex gap-2.5 mt-5 md:mt-0 md:items-end">
        <Button>Filter</Button>
        <Button variant="secondary">Clear Filters</Button>
      </div>
    </div>
    <div className="flex flex-wrap gap-2.5 mt-5">
      <div className="bg-[#ff914d]/20 text-[#ff914d] text-xs px-2.5 py-1 rounded-full flex items-center">
        Delivered <span className="ml-1">×</span>
      </div>
      <div className="bg-[#ff914d]/20 text-[#ff914d] text-xs px-2.5 py-1 rounded-full flex items-center">
        Last 7 Days <span className="ml-1">×</span>
      </div>
    </div>
  </div>
);

export default FilterBar;